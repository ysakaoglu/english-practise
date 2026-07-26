/* =========================================================
   SpeakUp — uygulama mantığı
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- durum ---------------- */
  const store = {
    get(k, def) {
      try { const v = localStorage.getItem("speakup:" + k); return v === null ? def : JSON.parse(v); }
      catch (e) { return def; }
    },
    set(k, v) {
      try { localStorage.setItem("speakup:" + k, JSON.stringify(v)); } catch (e) {}
    },
  };

  const state = {
    level:    store.get("level", "a1"),
    scenario: store.get("scenario", "passport"),
    tab:      "dialogue",
    showTR:   store.get("showTR", true),
    speed:    store.get("speed", 0.9),
    // Gramer ve Telaffuz sekmelerinde kapsam: sadece bu senaryo mu, seviyenin tamamı mı
    scope:    store.get("scope", "scenario"),
  };

  const SPEEDS = [0.7, 0.85, 1, 1.15];

  /* ---------------- kısayollar ---------------- */
  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.prototype.slice.call((r || document).querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const PANELS = { dialogue: $("#panel-dialogue"), reading: $("#panel-reading"), grammar: $("#panel-grammar"), pron: $("#panel-pron") };

  let toastTimer;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg;
    t.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-on"), 2200);
  }

  const data = () => (CONTENT[state.scenario] || {})[state.level] || null;

  // Aktif senaryo ve onun rol etiketleri (her senaryoda taraflar farklı isimlenir)
  const scenario = () => SCENARIOS.find((s) => s.id === state.scenario) || SCENARIOS[0];
  const DEFAULT_ROLES = {
    officer:   { label: "Görevli", emoji: "👤" },
    passenger: { label: "Yolcu",   emoji: "🧍" },
  };
  const role = (r) => (scenario().roles || DEFAULT_ROLES)[r] || DEFAULT_ROLES[r];

  /* ---------------------------------------------------------------
     Gramer ve telaffuz senaryoya değil SEVİYEYE aittir; senaryo
     yalnızca hangi konuların öne çıktığını belirler. Bu yüzden iki
     havuz üretiyoruz: seçili senaryo ve seviyenin tamamı.
     --------------------------------------------------------------- */
  function pool(key) {
    const all = [];
    SCENARIOS.forEach((s) => {
      const d = (CONTENT[s.id] || {})[state.level];
      if (!d || !d[key]) return;
      d[key].forEach((item) => all.push({ item: item, src: s }));
    });
    const mine = all.filter((x) => x.src.id === state.scenario);
    return {
      all: all,
      mine: mine,
      shown: state.scope === "level" ? all : mine,
    };
  }

  // Uzun metinleri cümlelere böl — tek uzun utterance bazı tarayıcılarda yarıda kesiliyor
  function toSentences(text) {
    // lookbehind kullanmıyoruz — eski Safari sürümlerinde dosyanın tamamını bozar
    const parts = String(text).match(/[^.!?]+[.!?]*/g) || [String(text)];
    return parts.map((s) => s.trim()).filter(Boolean);
  }

  /* =========================================================
     SES — Web Speech API
     ========================================================= */
  const speech = {
    supported: "speechSynthesis" in window,
    voices: [],
    vOfficer: null,
    vPassenger: null,
    queue: [],
    idx: -1,
    playing: false,

    loadVoices() {
      if (!this.supported) return;
      this.voices = window.speechSynthesis.getVoices() || [];
      const en = this.voices.filter((v) => /^en(-|_)/i.test(v.lang));
      if (!en.length) return;

      const pick = (re) => en.find((v) => re.test(v.name)) || null;
      const gb = en.filter((v) => /en(-|_)GB/i.test(v.lang));
      const us = en.filter((v) => /en(-|_)US/i.test(v.lang));
      const pool = (gb.length ? gb : us.length ? us : en);

      // İki farklı ses bulmaya çalış: memur ve yolcu ayrışsın
      this.vOfficer   = pick(/Daniel|Arthur|Google UK English Male|Male/i) || pool[0] || en[0];
      this.vPassenger = pick(/Samantha|Serena|Kate|Google UK English Female|Female/i) || pool[1] || pool[0] || en[0];
      if (this.vPassenger === this.vOfficer && pool.length > 1) {
        this.vPassenger = pool.find((v) => v !== this.vOfficer) || this.vOfficer;
      }
    },

    utter(text, role) {
      const u = new SpeechSynthesisUtterance(text);
      const v = role === "passenger" ? this.vPassenger : this.vOfficer;
      if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-GB"; }
      u.rate = state.speed;
      u.pitch = role === "passenger" ? 1.06 : 0.94;
      return u;
    },

    say(text, role) {
      if (!this.supported) { toast("Bu tarayıcı sesli okumayı desteklemiyor 😕"); return; }
      this.stop();
      setTimeout(() => { window.speechSynthesis.speak(this.utter(text, role)); }, 60);
    },

    // Diyaloğu baştan sona oynat
    playAll(lines, onStep, onDone) {
      if (!this.supported) { toast("Bu tarayıcı sesli okumayı desteklemiyor 😕"); return; }
      this.stop();
      this.queue = lines.slice();
      this.idx = -1;
      this.playing = true;
      const next = () => {
        if (!this.playing) return;
        this.idx++;
        if (this.idx >= this.queue.length) { this.playing = false; onDone && onDone(); return; }
        const line = this.queue[this.idx];
        onStep && onStep(this.idx);
        const u = this.utter(line.en, line.role);
        u.onend = () => setTimeout(next, 320);
        u.onerror = () => { this.playing = false; onDone && onDone(); };
        window.speechSynthesis.speak(u);
      };
      setTimeout(next, 80);
    },

    stop() {
      this.playing = false;
      this.idx = -1;
      if (this.supported) { try { window.speechSynthesis.cancel(); } catch (e) {} }
    },
  };

  if (speech.supported) {
    speech.loadVoices();
    window.speechSynthesis.onvoiceschanged = () => speech.loadVoices();
  }

  /* =========================================================
     SEVİYE & SENARYO SEÇİCİLER
     ========================================================= */
  function renderLevels() {
    $("#levelChips").innerHTML = LEVELS.map((l) => `
      <button class="chip${l.id === state.level ? " is-active" : ""}" data-level="${l.id}" role="tab"
              aria-selected="${l.id === state.level}">
        ${l.name}<small>${esc(l.label)}</small>
      </button>`).join("");

    const cur = LEVELS.find((l) => l.id === state.level);
    $("#levelHint").innerHTML = `<b>${cur.name} · ${esc(cur.label)}</b> — ${esc(cur.desc)}`;
  }

  function renderScenarios() {
    $("#scenarioCards").innerHTML = SCENARIOS.map((s) => `
      <button class="scard${s.id === state.scenario && s.ready ? " is-active" : ""}${s.ready ? "" : " is-locked"}"
              data-scenario="${s.id}" ${s.ready ? "" : 'data-locked="1"'}>
        <span class="scard__emoji">${s.emoji}</span>
        <span class="scard__title">${esc(s.title)}</span>
        <span class="scard__sub">${esc(s.subtitle)}</span>
      </button>`).join("");
  }

  /* =========================================================
     PANELLER
     ========================================================= */
  function renderDialogue() {
    const d = data();
    if (!d) return (PANELS.dialogue.innerHTML = emptyState());
    const dl = d.dialogue;

    PANELS.dialogue.innerHTML = `
      <div class="section-head">
        <h3>${esc(dl.title)}</h3>
        <span>${dl.lines.length} replik</span>
      </div>

      <div class="audiobar">
        <button class="btn btn--primary" id="playAll">▶︎ Diyaloğu dinle</button>
        <button class="btn btn--ghost btn--speed" id="speedBtn">${state.speed}×</button>
        <button class="btn btn--ghost" id="stopBtn" title="Durdur">■</button>
      </div>

      <div class="card">
        <p class="card__sub" style="margin-top:0">${esc(dl.summary)}</p>
      </div>

      <div class="card" id="lines">
        ${dl.lines.map((l, i) => `
          <button class="line line--${l.role}" data-i="${i}">
            <span class="line__av">${role(l.role).emoji}</span>
            <span class="line__body">
              <span class="line__who">${esc(role(l.role).label)}</span>
              <span class="line__en">${esc(l.en)}</span>
              ${state.showTR ? `<span class="line__tr">${esc(l.tr)}</span>` : ""}
              ${l.note ? `<span class="line__note">💡 ${esc(l.note)}</span>` : ""}
            </span>
            <span class="line__play">▶</span>
          </button>`).join("")}
      </div>

      <div class="card">
        <div class="card__head">
          <h4 class="card__title">🎯 Nasıl çalışılır?</h4>
        </div>
        <p class="card__sub" style="margin-top:0">
          Önce diyaloğu bir kez baştan sona dinle. Sonra her replik satırına dokunup tek tek tekrar et —
          sesli tekrar etmeden ilerleme. Son turda TR çeviriyi kapat (üstteki <b>TR</b> düğmesi) ve
          sadece İngilizceyi anlamaya çalış.
        </p>
      </div>`;
  }

  // quiz: her soru için ilk cevap saklanır, puan ona göre hesaplanır
  let quizAnswers = {};

  function wrapWords(text) {
    return esc(text).split(" ").map((w) => `<span class="w">${w}</span>`).join(" ");
  }

  function renderReading() {
    const d = data();
    if (!d) return (PANELS.reading.innerHTML = emptyState());
    const r = d.reading;

    PANELS.reading.innerHTML = `
      <div class="section-head">
        <h3>${esc(r.title)}</h3>
        <span>${r.text.join(" ").split(/\s+/).length} kelime</span>
      </div>

      <div class="audiobar">
        <button class="btn btn--primary" id="readAloud">▶︎ Metni dinle</button>
        <button class="btn btn--ghost btn--speed" id="speedBtn2">${state.speed}×</button>
        <button class="btn btn--ghost" id="stopBtn2" title="Durdur">■</button>
      </div>

      <div class="card">
        <div class="reading__text" id="readingText">
          ${r.text.map((p) => `<p>${wrapWords(p)}</p>`).join("")}
        </div>
        <p class="card__sub" style="margin-top:14px;font-size:12.5px">
          👆 Herhangi bir kelimeye dokun, telaffuzunu dinle.
        </p>
      </div>

      <div class="card">
        <div class="card__head"><h4 class="card__title">📌 Kelimeler <span class="badge">${r.glossary.length}</span></h4></div>
        <div class="gloss">
          ${r.glossary.map((g) => `
            <button class="gloss__item" data-say="${esc(g.en)}">
              <span class="gloss__en">${esc(g.en)}</span>
              <span class="gloss__arrow">→</span>
              <span class="gloss__tr">${esc(g.tr)}</span>
              <span class="gloss__spk">🔊</span>
            </button>`).join("")}
        </div>
      </div>

      <div class="card" id="quiz" data-total="${r.quiz.length}">
        <div class="card__head">
          <h4 class="card__title">✅ Anladın mı? <span class="badge" id="quizScore">0 / ${r.quiz.length}</span></h4>
        </div>
        ${r.quiz.map((q, qi) => `
          <div class="quiz__block" data-qi="${qi}">
            <p class="quiz__q"><i>${qi + 1}.</i> ${esc(q.q)}</p>
            <div class="quiz__opts">
              ${q.options.map((o, oi) => `
                <button class="quiz__opt" data-q="${qi}" data-o="${oi}" data-ans="${q.answer}">${esc(o)}</button>`).join("")}
            </div>
          </div>`).join("")}
      </div>`;

    quizAnswers = {};
  }

  // Kapsam anahtarı ve konu dizini — iki sekmede de aynı bileşen
  function scopeSwitch(mineCount, allCount, unit) {
    const lv = state.level.toUpperCase();
    return `
      <div class="scope" role="group" aria-label="Kapsam">
        <button class="scope__btn${state.scope === "scenario" ? " is-active" : ""}" data-scope="scenario">
          Bu senaryo <b>${mineCount}</b>
        </button>
        <button class="scope__btn${state.scope === "level" ? " is-active" : ""}" data-scope="level">
          ${lv} seviyesinin tamamı <b>${allCount}</b>
        </button>
      </div>
      <p class="scope__note">${state.scope === "level"
        ? `${lv} seviyesindeki <b>${allCount} ${unit}</b> bir arada. Her kartın üstünde hangi senaryodan geldiği yazıyor.`
        : `Şu an <b>${SCENARIOS.find((s) => s.id === state.scenario).title}</b> senaryosu için seçilen ${mineCount} ${unit}. Diğerleri kaybolmuyor — sağdaki düğmeyle hepsini gör.`}</p>`;
  }

  function tocList(items, label) {
    return `
      <div class="toc">
        <p class="toc__label">${label}</p>
        <div class="toc__chips">
          ${items.map((x, i) => `
            <button class="toc__chip" data-goto="topic-${i}">
              <span class="toc__num">${i + 1}</span>${state.scope === "level" ? x.src.emoji + " " : ""}${esc(x.item.title || x.item.word)}
            </button>`).join("")}
        </div>
      </div>`;
  }

  function renderGrammar() {
    const d = data();
    if (!d) return (PANELS.grammar.innerHTML = emptyState());

    const p = pool("grammar");
    const lv = LEVELS.find((l) => l.id === state.level);

    PANELS.grammar.innerHTML = `
      <div class="section-head">
        <h3>Gramer</h3>
        <span>${lv.name} · ${p.shown.length} konu</span>
      </div>

      <div class="audiobar">
        <span class="audiobar__hint">Örneğe dokun → dinle</span>
        <button class="btn btn--ghost btn--speed" id="speedBtn3">${state.speed}×</button>
        <button class="btn btn--ghost" id="stopBtn3" title="Durdur">■</button>
      </div>

      <div class="card guide">
        <p class="guide__lead">
          Gramer konuları <b>seviyeye</b> göre yazıldı — senaryo sadece hangilerinin öne çıkacağını belirler.
          Seviyen <b>${lv.name} · ${esc(lv.label)}</b>: ${esc(lv.desc)}.
        </p>
        ${scopeSwitch(p.mine.length, p.all.length, "konu")}
        ${tocList(p.shown, "Bu sekmede ne var?")}
      </div>

      <div class="grid-2">
      ${p.shown.map((x, i) => {
        const g = x.item;
        return `
        <div class="card" id="topic-${i}">
          <div class="card__head">
            ${state.scope === "level" ? `<span class="src">${x.src.emoji} ${esc(x.src.title)}</span>` : ""}
            <h4 class="card__title"><span class="card__num">${i + 1}</span><span class="card__label">${esc(g.title)}</span></h4>
          </div>
          <p class="gr__explain">${esc(g.explain)}</p>
          ${g.examples.map((ex) => `
            <button class="gr__ex" data-say="${esc(ex.en)}">
              <span class="gr__ex-body">
                <span class="gr__ex-en">${esc(ex.en)}</span>
                ${state.showTR ? `<span class="gr__ex-tr">${esc(ex.tr)}</span>` : ""}
              </span>
              <span class="gr__ex-spk">🔊</span>
            </button>`).join("")}
          <p class="gr__tip"><b>İpucu:</b> ${esc(g.tip)}</p>
        </div>`; }).join("")}
      </div>`;
  }

  function renderPron() {
    const d = data();
    if (!d) return (PANELS.pron.innerHTML = emptyState());

    const p = pool("pronunciation");
    const lv = LEVELS.find((l) => l.id === state.level);

    PANELS.pron.innerHTML = `
      <div class="section-head">
        <h3>Telaffuz</h3>
        <span>${lv.name} · ${p.shown.length} kelime</span>
      </div>

      <div class="audiobar">
        <button class="btn btn--primary" id="pronPlayAll">▶︎ Sırayla dinle</button>
        <button class="btn btn--ghost btn--speed" id="speedBtn4">${state.speed}×</button>
        <button class="btn btn--ghost" id="stopBtn4" title="Durdur">■</button>
      </div>

      <div class="card guide">
        <p class="guide__lead">
          Kelimeler <b>seviyeye</b> göre seçildi — senaryo sadece hangilerinin öne çıkacağını belirler.
          Karta dokun, dinle, <b>yüksek sesle tekrar et</b>. Zor gelirse hızı <b>0.7×</b>'e düşür.
        </p>
        ${scopeSwitch(p.mine.length, p.all.length, "kelime")}
        ${tocList(p.shown, "Bu sekmede ne var?")}
      </div>

      <div class="card">
        ${p.shown.map((x, i) => `
          <button class="pron" id="topic-${i}" data-say="${esc(x.item.word)}">
            <span class="pron__body">
              ${state.scope === "level" ? `<span class="src">${x.src.emoji} ${esc(x.src.title)}</span>` : ""}
              <span class="pron__word">${esc(x.item.word)}</span>
              <span class="pron__ipa">${esc(x.item.ipa)}</span>
              <span class="pron__tip">${esc(x.item.tip)}</span>
            </span>
            <span class="pron__btn">🔊</span>
          </button>`).join("")}
      </div>

      <div class="card">
        <div class="card__head"><h4 class="card__title">🇹🇷 Türklerin klasik tuzakları</h4></div>
        <p class="gr__explain" style="margin:0">
          • <b>th</b> sesi: dilin ucu dişlerin arasına — “thank” ≠ “tenk”.<br>
          • <b>w / v</b> ayrımı: “where” dudaklar büzülür, “very” üst diş alt dudağa değer.<br>
          • Kelime sonu <b>-ed</b>: t/d ile bitiyorsa “ıd”, sessizden sonra “t”, sesliden sonra “d”.<br>
          • Türkçede olmayan sesli uzatmalar: “ship” ≠ “sheep”, “full” ≠ “fool”.<br>
          • Ünsüz kümesi başına sesli ekleme: “student” → “sıtudent” değil, “stu-dent”.
        </p>
      </div>`;
  }

  function emptyState() {
    return `<div class="card"><div class="card__head"><h4 class="card__title">🚧 Hazırlanıyor</h4></div>
      <p class="card__sub" style="margin-top:0">Bu senaryo bu seviyede henüz yok. Başka bir seviye ya da senaryo seç.</p></div>`;
  }

  function renderAll() {
    renderLevels();
    renderScenarios();
    renderDialogue();
    renderReading();
    renderGrammar();
    renderPron();
  }

  /* =========================================================
     SEKME GEÇİŞİ
     ========================================================= */
  // çalma durdurulduğunda düğme yazılarını ve satır vurgusunu sıfırla
  function resetAudioUI() {
    $$(".line, .pron").forEach((l) => l.classList.remove("is-speaking"));
    const b1 = $("#playAll");     if (b1) b1.textContent = "▶︎ Diyaloğu dinle";
    const b2 = $("#readAloud");   if (b2) b2.textContent = "▶︎ Metni dinle";
    const b3 = $("#pronPlayAll"); if (b3) b3.textContent = "▶︎ Sırayla dinle";
  }

  function setTab(tab, scroll) {
    state.tab = tab;
    Object.keys(PANELS).forEach((k) => PANELS[k].classList.toggle("is-hidden", k !== tab));
    $$(".tabbar__btn").forEach((b) => b.classList.toggle("is-active", b.dataset.tab === tab));
    speech.stop();
    resetAudioUI();
    if (scroll !== false) window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // İçeriği yeniden çiz ama kullanıcının bulunduğu yeri koru
  function refresh() {
    const y = window.scrollY;
    renderAll();
    setTab(state.tab, false);
    window.scrollTo(0, y);
  }

  function cycleSpeed() {
    const i = SPEEDS.indexOf(state.speed);
    state.speed = SPEEDS[(i + 1) % SPEEDS.length];
    store.set("speed", state.speed);
    toast("Konuşma hızı: " + state.speed + "×");
    refresh();
  }

  /* =========================================================
     OLAYLAR (delegasyon)
     ========================================================= */
  document.addEventListener("click", function (e) {
    const t = e.target;

    // seviye
    const chip = t.closest(".chip");
    if (chip) {
      state.level = chip.dataset.level;
      store.set("level", state.level);
      speech.stop();
      renderAll(); setTab(state.tab);
      toast(state.level.toUpperCase() + " seviyesine geçtin 🚀");
      return;
    }

    // senaryo
    const sc = t.closest(".scard");
    if (sc) {
      if (sc.dataset.locked) { toast("Bu senaryo yakında geliyor ✨"); return; }
      state.scenario = sc.dataset.scenario;
      store.set("scenario", state.scenario);
      speech.stop();
      renderAll(); setTab(state.tab);
      return;
    }

    // sekmeler
    const tb = t.closest(".tabbar__btn");
    if (tb) { setTab(tb.dataset.tab); return; }

    // TR aç/kapa
    if (t.closest("#trToggle")) {
      state.showTR = !state.showTR;
      store.set("showTR", state.showTR);
      $("#trToggle").setAttribute("aria-pressed", String(state.showTR));
      refresh();
      toast(state.showTR ? "Türkçe çeviri açık" : "Sadece İngilizce — bol şans 😎");
      return;
    }

    // hız
    if (t.closest(".btn--speed")) { cycleSpeed(); return; }

    // durdur
    if (t.closest("#stopBtn") || t.closest("#stopBtn2") || t.closest("#stopBtn3") || t.closest("#stopBtn4")) {
      speech.stop();
      resetAudioUI();
      return;
    }

    // kapsam değiştir: bu senaryo ↔ seviyenin tamamı
    const sb = t.closest(".scope__btn");
    if (sb) {
      if (sb.dataset.scope === state.scope) return;
      state.scope = sb.dataset.scope;
      store.set("scope", state.scope);
      speech.stop();
      renderAll(); setTab(state.tab);
      toast(state.scope === "level"
        ? state.level.toUpperCase() + " seviyesinin tamamı gösteriliyor 📚"
        : "Sadece bu senaryonun konuları 🎯");
      return;
    }

    // konu dizininden ilgili karta atla
    const jump = t.closest(".toc__chip");
    if (jump) {
      const el = document.getElementById(jump.dataset.goto);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 132;
        // uzun listelerde "smooth" saniyeler sürüyor — dizinden atlarken anında git
        window.scrollTo({ top: Math.max(y, 0), behavior: "instant" });
        $$(".is-target").forEach((n) => n.classList.remove("is-target"));
        el.classList.add("is-target");
        setTimeout(() => el.classList.remove("is-target"), 1600);
      }
      return;
    }

    // telaffuz kelimelerini sırayla dinle
    if (t.closest("#pronPlayAll")) {
      const btn = $("#pronPlayAll");
      if (speech.playing) { speech.stop(); resetAudioUI(); return; }
      const items = pool("pronunciation").shown.map((x) => ({ en: x.item.word, role: "officer" }));
      if (!items.length) return;
      btn.textContent = "⏸ Çalıyor…";
      speech.playAll(items,
        (i) => {
          $$(".pron").forEach((n) => n.classList.remove("is-speaking"));
          const row = $$(".pron")[i];
          if (row) { row.classList.add("is-speaking"); row.scrollIntoView({ block: "center", behavior: "smooth" }); }
        },
        () => resetAudioUI()
      );
      return;
    }

    // diyaloğu baştan sona oynat
    if (t.closest("#playAll")) {
      const btn = $("#playAll");
      const d = data(); if (!d) return;
      if (speech.playing) {
        speech.stop();
        $$(".line").forEach((l) => l.classList.remove("is-speaking"));
        btn.textContent = "▶︎ Diyaloğu dinle";
        return;
      }
      btn.textContent = "⏸ Çalıyor…";
      speech.playAll(
        d.dialogue.lines,
        (i) => {
          const rows = $$(".line");
          rows.forEach((l) => l.classList.remove("is-speaking"));
          const row = rows[i];
          if (row) {
            row.classList.add("is-speaking");
            row.scrollIntoView({ block: "center", behavior: "smooth" });
          }
        },
        () => {
          $$(".line").forEach((l) => l.classList.remove("is-speaking"));
          btn.textContent = "▶︎ Diyaloğu dinle";
        }
      );
      return;
    }

    // metni sesli oku — cümle cümle kuyruğa alınır, uzun metinlerde kesilmez
    if (t.closest("#readAloud")) {
      const btn = $("#readAloud");
      const d = data(); if (!d) return;
      if (speech.playing) {
        speech.stop();
        btn.textContent = "▶︎ Metni dinle";
        return;
      }
      const items = toSentences(d.reading.text.join(" ")).map((s) => ({ en: s, role: "officer" }));
      btn.textContent = "⏸ Okunuyor…";
      speech.playAll(items, null, () => { btn.textContent = "▶︎ Metni dinle"; });
      toast("Metin okunuyor 🎧");
      return;
    }

    // tek replik
    const line = t.closest(".line");
    if (line) {
      const d = data(); if (!d) return;
      const l = d.dialogue.lines[+line.dataset.i];
      $$(".line").forEach((x) => x.classList.remove("is-speaking"));
      line.classList.add("is-speaking");
      speech.say(l.en, l.role);
      setTimeout(() => line.classList.remove("is-speaking"), 4200);
      return;
    }

    // "data-say" taşıyan her şey (kelime listesi, gramer örneği, telaffuz kartı)
    const sayer = t.closest("[data-say]");
    if (sayer) { speech.say(sayer.dataset.say, "officer"); return; }

    // okuma metninde tek kelime
    if (t.classList.contains("w")) {
      const w = t.textContent.replace(/[^A-Za-z'’-]/g, "");
      if (w) speech.say(w, "officer");
      return;
    }

    // quiz
    const opt = t.closest(".quiz__opt");
    if (opt) {
      const block = opt.closest(".quiz__block");
      const qi = block.dataset.qi;
      if (qi in quizAnswers) return;                 // cevaplanmış soru kilitli

      const right = +opt.dataset.ans;
      const correct = +opt.dataset.o === right;
      quizAnswers[qi] = correct;
      block.classList.add("is-answered");

      opt.classList.add(correct ? "is-right" : "is-wrong");
      if (!correct) {
        $$(".quiz__opt", block).forEach((o) => { if (+o.dataset.o === right) o.classList.add("is-right"); });
      }

      // puanı güncelle
      const quiz = $("#quiz");
      const total = +quiz.dataset.total;
      const keys = Object.keys(quizAnswers);
      const score = keys.filter((k) => quizAnswers[k]).length;
      const badge = $("#quizScore");
      badge.textContent = score + " / " + total;
      badge.classList.toggle("badge--pink", score < keys.length);

      if (keys.length === total) {
        toast(score === total ? "Hepsi doğru! 🏆" : score + "/" + total + " doğru — metni bir daha oku 📖");
      } else {
        toast(correct ? "Doğru! 🎉" : "Bu değil — doğrusu işaretlendi");
      }
      return;
    }
  });

  // sayfadan çıkarken/sekme gizlenince sesi kes
  document.addEventListener("visibilitychange", () => { if (document.hidden) speech.stop(); });
  window.addEventListener("pagehide", () => speech.stop());

  /* ---------------- başlat ---------------- */
  $("#trToggle").setAttribute("aria-pressed", String(state.showTR));
  renderAll();
  setTab("dialogue");
})();
