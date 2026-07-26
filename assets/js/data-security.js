/* =========================================================
   SENARYO: Güvenlik Kontrolü — Güvenlik görevlisi & Yolcu
   ========================================================= */

CONTENT.security = {
  /* ------------------------------- A1 ------------------------------- */
  a1: {
    dialogue: {
      title: "Kemerinizi çıkarın",
      summary: "İlk kez güvenlikten geçen yolcu. Bol bol emir kipi ve kısa talimatlar.",
      lines: [
        { role: "officer",   en: "Next, please. Put your bag on the belt.", tr: "Sıradaki, lütfen. Çantanızı banda koyun." },
        { role: "passenger", en: "Here? OK.", tr: "Buraya mı? Tamam." },
        { role: "officer",   en: "Take out your laptop, please.", tr: "Dizüstü bilgisayarınızı çıkarın lütfen." },
        { role: "passenger", en: "It is in my backpack. One moment.", tr: "Sırt çantamda. Bir saniye." },
        { role: "officer",   en: "Put it in this tray. Do you have any liquids?", tr: "Bunu bu kaba koyun. Sıvı var mı?" },
        { role: "passenger", en: "Yes, a small bottle of water.", tr: "Evet, küçük bir şişe su." },
        { role: "officer",   en: "Sorry, you can't take water. Please drink it or throw it away.", tr: "Üzgünüm, su alamazsınız. İçin ya da çöpe atın.", note: "100 ml üzeri sıvılar güvenlikten geçmez. Boş şişeyi geçirip içeride doldurabilirsin." },
        { role: "passenger", en: "OK, no problem.", tr: "Tamam, sorun değil." },
        { role: "officer",   en: "Now take off your belt and your jacket.", tr: "Şimdi kemerinizi ve montunuzu çıkarın." },
        { role: "passenger", en: "My shoes too?", tr: "Ayakkabılarımı da mı?" },
        { role: "officer",   en: "No, that's fine. Empty your pockets, please.", tr: "Hayır, gerek yok. Ceplerinizi boşaltın lütfen." },
        { role: "passenger", en: "I have my phone and some coins.", tr: "Telefonum ve biraz bozuk param var." },
        { role: "officer",   en: "In the tray. Now walk through, please. Arms up.", tr: "Kaba koyun. Şimdi geçin lütfen. Kollar yukarı." },
        { role: "officer",   en: "Thank you. You can take your things.", tr: "Teşekkürler. Eşyalarınızı alabilirsiniz." },
        { role: "passenger", en: "Thank you! Have a good day.", tr: "Teşekkürler! İyi günler." },
      ],
    },
    reading: {
      title: "The Tray",
      text: [
        "I am at security. There is a long line, but it is not slow. People are quick here.",
        "I have a grey tray. In the tray there is my phone, my belt, my watch and some coins. My laptop is in another tray.",
        "A woman in a blue shirt says: 'Arms up, please.' I put my arms up. It takes three seconds.",
        "Now I have all my things again. But where is my belt? Oh no — it is still in the tray! I run back. The woman smiles and gives it to me.",
      ],
      glossary: [
        { en: "line", tr: "sıra (US); UK'de 'queue'" },
        { en: "tray", tr: "kap, tepsi" },
        { en: "coins", tr: "bozuk para" },
        { en: "arms up", tr: "kollar yukarı" },
        { en: "run back", tr: "geri koşmak" },
        { en: "smile", tr: "gülümsemek" },
      ],
      quiz: [
        { q: "What is in the writer's tray?", options: ["A phone, a belt, a watch and coins", "Only a laptop", "Water and food"], answer: 0 },
        { q: "What does the woman in the blue shirt say?", options: ["'Take off your shoes'", "'Arms up, please'", "'Where is your ticket?'"], answer: 1 },
        { q: "What does the writer forget?", options: ["The laptop", "The phone", "The belt"], answer: 2 },
      ],
    },
    grammar: [
      {
        title: "Emir kipi (imperative) — talimatlar",
        explain: "Güvenlikte duyacağın cümlelerin neredeyse hepsi bu yapıda: özne yok, fiil en başta.",
        examples: [
          { en: "Put your bag on the belt.", tr: "Çantanızı banda koyun." },
          { en: "Empty your pockets.", tr: "Ceplerinizi boşaltın." },
          { en: "Don't touch the tray.", tr: "Kaba dokunmayın." },
        ],
        tip: "Olumsuz için başa 'Don't' gelir. Sonuna 'please' eklemek cümleyi kibarlaştırır.",
      },
      {
        title: "Ayrılabilen fiiller: take off / take out / put in",
        explain: "Fiil + edat birleşerek yeni anlam kazanır. Nesne kısa ise araya da girebilir.",
        examples: [
          { en: "Take off your belt.", tr: "Kemerinizi çıkarın." },
          { en: "Take out your laptop.", tr: "Dizüstünüzü çıkarın." },
          { en: "Put it in the tray.", tr: "Onu kaba koyun." },
        ],
        tip: "Zamir kullanırsan araya girmek ZORUNLU: 'Take it off' ✔ / 'Take off it' ✘.",
      },
      {
        title: "can / can't — izin ve yasak",
        explain: "Bir şeyin mümkün ya da izinli olup olmadığını anlatır. Fiil daima yalın kalır.",
        examples: [
          { en: "You can take your things now.", tr: "Şimdi eşyalarınızı alabilirsiniz." },
          { en: "You can't take water.", tr: "Su alamazsınız." },
          { en: "Can I keep my shoes on?", tr: "Ayakkabılarımı çıkarmasam olur mu?" },
        ],
        tip: "'can't' /kɑːnt/ diye uzun okunur (UK). Kısa okursan 'cant' başka bir kelime olur.",
      },
      {
        title: "there is / there are — var",
        explain: "Bir yerde bir şeyin varlığını anlatır. Tekil için 'is', çoğul için 'are'.",
        examples: [
          { en: "There is a long line.", tr: "Uzun bir sıra var." },
          { en: "There are three trays here.", tr: "Burada üç kap var." },
          { en: "Is there a bin for liquids?", tr: "Sıvılar için bir çöp kutusu var mı?" },
        ],
        tip: "Türkçedeki 'var' tek kelimeyken İngilizce'de sayıya göre değişir. Karıştırırsan anlam bozulmaz ama hemen belli olur.",
      },
    ],
    pronunciation: [
      { word: "liquid", ipa: "/ˈlɪk.wɪd/", tip: "LİK-wid. 'qu' → 'kw'. 'likid' değil." },
      { word: "tray", ipa: "/treɪ/", tip: "'trey'. Tek hece, sonu diftong." },
      { word: "belt", ipa: "/belt/", tip: "'belt'. Sonundaki 'lt' birlikte, araya sesli girmeden." },
      { word: "pocket", ipa: "/ˈpɒk.ɪt/", tip: "POK-it. İkinci hece zayıf; 'poket' değil." },
      { word: "metal", ipa: "/ˈmet.əl/", tip: "ME-tıl. Vurgu başta; Türkçedeki 'metal' gibi sonda değil." },
      { word: "jacket", ipa: "/ˈdʒæk.ɪt/", tip: "CA-kit. Baştaki 'j' → 'c' sesi." },
    ],
  },

  /* ------------------------------- A2 ------------------------------- */
  a2: {
    dialogue: {
      title: "Çantada makas var",
      summary: "Yolcunun çantasından yasaklı bir eşya çıkıyor. Zorunluluk ve sahiplik yapıları.",
      lines: [
        { role: "officer",   en: "Excuse me, whose bag is this? The black one.", tr: "Affedersiniz, bu çanta kimin? Siyah olan." },
        { role: "passenger", en: "It's mine. Is there a problem?", tr: "Benim. Bir sorun mu var?" },
        { role: "officer",   en: "I have to open it. There's something metal inside.", tr: "Açmam gerekiyor. İçinde metal bir şey var." },
        { role: "passenger", en: "Of course, go ahead. I don't know what it is.", tr: "Elbette, buyurun. Ne olduğunu bilmiyorum." },
        { role: "officer",   en: "Here it is — a pair of scissors. You can't take these in your hand luggage.", tr: "İşte burada — bir makas. Bunu el bagajında taşıyamazsınız." },
        { role: "passenger", en: "Oh! I forgot about them. They were in my make-up bag.", tr: "Ah! Onları unutmuşum. Makyaj çantamdaydı." },
        { role: "officer",   en: "It happens ten times a day. I'm afraid I have to take them.", tr: "Günde on kez oluyor. Maalesef onları almam gerekiyor." },
        { role: "passenger", en: "Do I have to pay a fine?", tr: "Ceza ödemem gerekiyor mu?" },
        { role: "officer",   en: "No, you don't have to pay anything. We just keep the item.", tr: "Hayır, hiçbir şey ödemeniz gerekmiyor. Sadece eşyayı alıkoyuyoruz." },
        { role: "passenger", en: "That's a relief. Can I put them in my checked bag?", tr: "Bu rahatlatıcı. Onları verdiğim bavula koyabilir miyim?" },
        { role: "officer",   en: "Your bag is already on the plane, so no. Sorry about that.", tr: "Bavulunuz zaten uçakta, o yüzden hayır. Bunun için üzgünüm." },
        { role: "passenger", en: "It's my fault. Is everything else OK?", tr: "Benim hatam. Geri kalan her şey uygun mu?" },
        { role: "officer",   en: "Everything else is fine. Next time, check the rules before you pack.", tr: "Geri kalan her şey uygun. Gelecek sefer, bavulu hazırlamadan önce kuralları kontrol edin." },
        { role: "passenger", en: "I will. Thanks for being so nice about it.", tr: "Ederim. Bu konuda bu kadar anlayışlı olduğunuz için teşekkürler." },
      ],
    },
    reading: {
      title: "The Strangest Things People Pack",
      text: [
        "Airport security officers find thousands of unusual objects every week. Most of them are simple mistakes: a forgotten bottle of shampoo, a small knife from a picnic, a lighter in a coat pocket.",
        "But some finds are much stranger. In 2019, an officer at a European airport found a live chicken in a suitcase. The passenger said it was a present for his grandmother. The chicken did not fly that day.",
        "Other real examples include a chainsaw, sixty-eight kilos of cheese, a suit of armour and a small boat engine. One traveller tried to carry a full jar of honey through security because he 'didn't want to waste it'.",
        "The rules are actually quite simple. Liquids must be under 100 ml, sharp objects go in your checked bag, and if you are not sure about something, put it in the big bag. It is always easier than arguing at the machine.",
      ],
      glossary: [
        { en: "unusual", tr: "olağandışı, sıra dışı" },
        { en: "lighter", tr: "çakmak" },
        { en: "find (isim)", tr: "buluntu" },
        { en: "chainsaw", tr: "motorlu testere" },
        { en: "waste", tr: "boşa harcamak" },
        { en: "sharp", tr: "keskin" },
      ],
      quiz: [
        { q: "What was found in a suitcase in 2019?", options: ["A boat engine", "A live chicken", "A suit of armour"], answer: 1 },
        { q: "Why did one traveller carry a jar of honey?", options: ["It was a present", "He didn't want to waste it", "He was hungry"], answer: 1 },
        { q: "What does the text say about liquids?", options: ["They are never allowed", "They must be under 100 ml", "They must be in a coat pocket"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "must / mustn't / don't have to",
        explain: "Üçü çok karıştırılır. 'mustn't' yasak demektir, 'don't have to' ise 'gerek yok'.",
        examples: [
          { en: "Liquids must be under 100 ml.", tr: "Sıvılar 100 ml'nin altında olmalı." },
          { en: "You mustn't carry scissors in hand luggage.", tr: "El bagajında makas taşımanız yasaktır." },
          { en: "You don't have to pay a fine.", tr: "Ceza ödemeniz gerekmiyor." },
        ],
        tip: "Yasak mı, seçim mi? Yasaksa mustn't. Serbestse don't have to. Bu ikisini karıştırmak anlamı tersine çevirir.",
      },
      {
        title: "Sahiplik: whose / mine / yours",
        explain: "'Whose' kime ait olduğunu sorar. Cevapta iyelik zamiri kullanılır ve isim tekrar edilmez.",
        examples: [
          { en: "Whose bag is this?", tr: "Bu çanta kimin?" },
          { en: "It's mine.", tr: "Benim." },
          { en: "Is this yours or hers?", tr: "Bu sizin mi onun mu?" },
        ],
        tip: "mine, yours, his, hers, ours, theirs — hiçbiri kesme işareti almaz. 'It's my' yanlıştır, 'It's mine' doğru.",
      },
      {
        title: "Past Simple ile özür ve açıklama",
        explain: "Olan bir şeyi açıklarken geçmiş zaman kullanılır. Düzensiz fiiller burada çok geçer.",
        examples: [
          { en: "I forgot about them.", tr: "Onları unutmuşum." },
          { en: "They were in my make-up bag.", tr: "Makyaj çantamdaydılar." },
          { en: "I didn't know the rule.", tr: "Kuralı bilmiyordum." },
        ],
        tip: "forget → forgot, know → knew, put → put, take → took. Bu dördü havalimanında en çok gerekenler.",
      },
      {
        title: "already / still / anymore — zaman zarfları",
        explain: "Bir durumun devam edip etmediğini anlatır. Cümledeki yerleri sabittir.",
        examples: [
          { en: "Your bag is already on the plane.", tr: "Bavulunuz zaten uçakta." },
          { en: "It is still in the tray.", tr: "Hâlâ kabın içinde." },
          { en: "I don't need it anymore.", tr: "Artık ona ihtiyacım yok." },
        ],
        tip: "already ve still fiilin yanına, anymore cümlenin sonuna gider. 'anymore' olumsuz cümlelerde kullanılır.",
      },
    ],
    pronunciation: [
      { word: "scissors", ipa: "/ˈsɪz.əz/", tip: "Sİ-zız. Baştaki 'sc' → sadece 's'; sonu 'z' sesi." },
      { word: "bottle", ipa: "/ˈbɒt.əl/", tip: "BO-tıl. Ortadaki 'tt' İngiliz aksanında net 't', Amerikan'da 'd'ye kayar." },
      { word: "allowed", ipa: "/əˈlaʊd/", tip: "ı-LAUD. 'aloud' ile aynı okunur, anlamları farklı." },
      { word: "security", ipa: "/sɪˈkjʊə.rə.ti/", tip: "si-KYUU-rı-ti. Vurgu ikinci hecede — 'sekyuriti' değil." },
      { word: "remove", ipa: "/rɪˈmuːv/", tip: "ri-MUUV. İlk hece zayıf, ikinci hece uzun." },
      { word: "item", ipa: "/ˈaɪ.təm/", tip: "AY-tım. İlk hece 'ay' — 'item' diye okunmaz." },
    ],
  },

  /* ------------------------------- B1 ------------------------------- */
  b1: {
    dialogue: {
      title: "İlaç ve powerbank",
      summary: "Yolcunun reçeteli ilacı ve büyük bir powerbank'ı var. Kural sorma ve açıklama pratiği.",
      lines: [
        { role: "officer",   en: "Is this your bag, sir? The scanner has flagged something in the side pocket.", tr: "Bu çanta sizin mi beyefendi? Tarayıcı yan cepte bir şey işaretledi." },
        { role: "passenger", en: "Yes, it's mine. That'll be my power bank, I imagine.", tr: "Evet, benim. Sanırım powerbank'ım olsa gerek." },
        { role: "officer",   en: "Could you take it out for me? I need to check the capacity.", tr: "Onu çıkarabilir misiniz? Kapasitesini kontrol etmem gerekiyor." },
        { role: "passenger", en: "Here you go. It says 26,800 milliamp hours on the back.", tr: "Buyurun. Arkasında 26.800 miliamper saat yazıyor." },
        { role: "officer",   en: "That's borderline. Anything above 27,000 isn't allowed on board without airline approval.", tr: "Sınırda. 27.000'in üzerindeki hiçbir şey havayolu onayı olmadan uçağa alınmıyor.", note: "Powerbank'lar asla verilen bavula konmaz — sadece el bagajında taşınır." },
        { role: "passenger", en: "I had no idea there was a limit. So am I all right with this one?", tr: "Bir limit olduğunu bilmiyordum. Yani bununla sorun yok mu?" },
        { role: "officer",   en: "You're fine, but keep it in your hand luggage — it mustn't go in the hold.", tr: "Sorun yok ama el bagajınızda tutun — bagaj bölümüne gitmemeli." },
        { role: "passenger", en: "Understood. While I've got you — I'm carrying insulin and some needles.", tr: "Anlaşıldı. Siz varken sorayım — yanımda insülin ve iğneler var." },
        { role: "officer",   en: "Do you have a prescription or a letter from your doctor?", tr: "Reçeteniz ya da doktorunuzdan bir mektubunuz var mı?" },
        { role: "passenger", en: "I've got a printed prescription in English. I've been travelling with it for years.", tr: "İngilizce basılı bir reçetem var. Yıllardır onunla seyahat ediyorum." },
        { role: "officer",   en: "That's exactly what we need. Medical liquids are exempt from the 100 ml rule.", tr: "Tam da ihtiyacımız olan şey. Tıbbi sıvılar 100 ml kuralından muaftır." },
        { role: "passenger", en: "Would you mind if I asked them to be checked by hand? X-rays make me nervous.", tr: "El ile kontrol edilmelerini istesem sakıncası olur mu? Röntgen beni geriyor." },
        { role: "officer",   en: "Not at all — that's your right. Step over here and I'll do it now.", tr: "Hiç de değil — bu sizin hakkınız. Buraya geçin, hemen yapayım." },
        { role: "passenger", en: "Thanks for being so straightforward about it. It makes travelling much less stressful.", tr: "Bu konuda bu kadar açık olduğunuz için teşekkürler. Seyahati çok daha az stresli kılıyor." },
      ],
    },
    reading: {
      title: "The 100 ml Rule and Where It Came From",
      text: [
        "Anyone who has flown since 2006 has emptied their bottles into a bin at security. The rule feels arbitrary, but it was introduced almost overnight in response to a specific plot that involved liquid explosives disguised as soft drinks.",
        "The number itself was not chosen at random. Investigators concluded that a quantity below 100 millilitres was too small to cause structural damage to an aircraft, and that limiting each container — while requiring all of them to fit into a single transparent bag — made concealment considerably harder.",
        "The rule has always had exceptions, though relatively few travellers know about them. Baby milk, prescription medicines and special dietary liquids are all permitted in larger quantities, provided you declare them and, where relevant, can show documentation. Officers are used to these requests and will usually screen the items separately.",
        "The rule is now slowly disappearing. New CT scanners produce three-dimensional images detailed enough that liquids no longer need to be removed at all, and several major airports have already scrapped the restriction. Until the machines are everywhere, however, the safest assumption remains the old one: if it pours, it goes in the checked bag.",
      ],
      glossary: [
        { en: "arbitrary", tr: "keyfî, gelişigüzel" },
        { en: "in response to", tr: "-e karşılık olarak" },
        { en: "disguised as", tr: "-e benzetilmiş, kılığında" },
        { en: "concealment", tr: "gizleme, saklama" },
        { en: "exception", tr: "istisna" },
        { en: "scrap (a rule)", tr: "(kuralı) kaldırmak" },
      ],
      quiz: [
        { q: "Why was the 100 ml rule introduced?", options: ["To speed up queues", "Because of a plot using liquid explosives", "To sell more bottled water"], answer: 1 },
        { q: "Which items are exempt?", options: ["All drinks", "Baby milk and prescription medicines", "Nothing at all"], answer: 1 },
        { q: "Why is the rule disappearing?", options: ["New CT scanners can see liquids clearly", "Nobody follows it", "Airports ran out of bins"], answer: 0 },
      ],
    },
    grammar: [
      {
        title: "be allowed to / be permitted to — izin yapıları",
        explain: "Kurumsal izin anlatımı. 'can'in daha resmî ve kişisiz hâli.",
        examples: [
          { en: "Power banks aren't allowed in the hold.", tr: "Powerbank'lar bagaj bölümüne alınmaz." },
          { en: "Am I allowed to take this through?", tr: "Bunu içeri geçirmeme izin var mı?" },
          { en: "Medical liquids are permitted in larger quantities.", tr: "Tıbbi sıvılara daha büyük miktarlarda izin verilir." },
        ],
        tip: "Kural sorarken 'Am I allowed to...?' kalıbı 'Can I...?'den daha nettir — kişisel izin değil kural sorduğun anlaşılır.",
      },
      {
        title: "Edattan sonra -ing (gerund)",
        explain: "Bir edattan sonra fiil gelirse daima -ing hâlinde olur. İstisnası yok.",
        examples: [
          { en: "Thanks for being so straightforward.", tr: "Bu kadar açık olduğunuz için teşekkürler." },
          { en: "Sorry for keeping you waiting.", tr: "Sizi beklettiğim için üzgünüm." },
          { en: "I'm interested in knowing the rule.", tr: "Kuralı bilmekle ilgileniyorum." },
        ],
        tip: "for, in, about, of, without, after, before — hepsinden sonra -ing. 'for to be' diye bir yapı yoktur.",
      },
      {
        title: "Would you mind if I ... ? — izin isteme",
        explain: "En kibar izin kalıbı. Ardından past simple gelir ama anlam şimdiki zamandır.",
        examples: [
          { en: "Would you mind if I asked for a hand check?", tr: "El ile kontrol istesem sakıncası olur mu?" },
          { en: "Do you mind if I open this here?", tr: "Bunu burada açmamın sakıncası var mı?" },
          { en: "Would it be possible to screen it separately?", tr: "Ayrı olarak taratmak mümkün olur mu?" },
        ],
        tip: "'Would you mind if I asked' — 'asked' geçmiş görünür ama şimdiyi anlatır ve cümleyi yumuşatır.",
      },
      {
        title: "Present Perfect Continuous",
        explain: "Geçmişte başlayıp süregelen eylemler. Süre vurgusu vardır.",
        examples: [
          { en: "I've been travelling with it for years.", tr: "Yıllardır onunla seyahat ediyorum." },
          { en: "We've been waiting for twenty minutes.", tr: "Yirmi dakikadır bekliyoruz." },
          { en: "How long have you been standing here?", tr: "Ne kadar zamandır burada duruyorsunuz?" },
        ],
        tip: "Kalıp: have/has + been + V-ing. Türkçedeki '-dır/-dir' ekinin karşılığı budur: 'yıllardır'.",
      },
    ],
    pronunciation: [
      { word: "prohibited", ipa: "/prəˈhɪb.ɪ.tɪd/", tip: "prı-Hİ-bi-tid. Vurgu ikinci hecede." },
      { word: "prescription", ipa: "/prɪˈskrɪp.ʃən/", tip: "pri-SKRİP-şın. Baştaki 'pre' yutulur." },
      { word: "capacity", ipa: "/kəˈpæs.ə.ti/", tip: "kı-PA-sı-ti. Vurgu ikinci hecede." },
      { word: "exempt", ipa: "/ɪɡˈzempt/", tip: "ig-ZEMPT. 'x' burada 'gz' okunur, 'ks' değil." },
      { word: "procedure", ipa: "/prəˈsiː.dʒər/", tip: "prı-Sİİ-cır. Vurgu ortada, sonu 'cır'." },
      { word: "needle", ipa: "/ˈniː.dəl/", tip: "NİİD-ıl. İlk hece uzun, sonu hafif." },
    ],
  },

  /* ------------------------------- B2 ------------------------------- */
  b2: {
    dialogue: {
      title: "İkincil kontrol ve el araması",
      summary: "Yolcu ayrıntılı aramaya alınıyor. Prosedür sorgulama ve hak talebi.",
      lines: [
        { role: "officer",   en: "Excuse me, I'll need to carry out a further search. Would you follow me, please?", tr: "Affedersiniz, ek bir arama yapmam gerekecek. Beni takip eder misiniz?" },
        { role: "passenger", en: "Certainly. Could you tell me what triggered it, if that's something you can share?", tr: "Elbette. Paylaşabileceğiniz bir şeyse, neyin buna sebep olduğunu söyleyebilir misiniz?" },
        { role: "officer",   en: "The scanner detected a trace on your hands. It's very often a false positive — hand cream, for example.", tr: "Tarayıcı elinizde bir iz tespit etti. Çok sık yanlış alarm çıkar — örneğin el kremi." },
        { role: "passenger", en: "That would explain it. I applied some just before I joined the queue.", tr: "Bu açıklar. Sıraya girmeden hemen önce biraz sürmüştüm." },
        { role: "officer",   en: "Understood. Your bag is being swabbed now, and then I'll need to do a physical search.", tr: "Anlaşıldı. Çantanız şu anda örnek alınarak test ediliyor, sonra fiziksel arama yapmam gerekecek." },
        { role: "passenger", en: "Am I entitled to have that done in a private room rather than here?", tr: "Bunun burada değil özel bir odada yapılmasını talep etme hakkım var mı?" },
        { role: "officer",   en: "You are, and by an officer of the same gender. Would you prefer that?", tr: "Var, hem de aynı cinsiyetten bir görevli tarafından. Bunu tercih eder misiniz?" },
        { role: "passenger", en: "Here is fine, actually. I'd just rather know my options before I agree to anything.", tr: "Aslında burası uygun. Sadece bir şeye onay vermeden önce seçeneklerimi bilmek isterim." },
        { role: "officer",   en: "That's a perfectly reasonable position, and more people should take it.", tr: "Bu tamamen makul bir tutum ve daha çok insanın böyle davranması gerekir." },
        { role: "passenger", en: "One thing — my camera has film in it. If it's X-rayed again, the film will be ruined.", tr: "Bir şey daha — kameramda film var. Tekrar röntgene girerse film bozulacak." },
        { role: "officer",   en: "Then it should have been declared at the start. I'll have it inspected by hand instead.", tr: "O hâlde başta beyan edilmeliydi. Onun yerine el ile kontrol ettireceğim." },
        { role: "passenger", en: "My mistake entirely — I assumed one pass wouldn't matter. Thank you for accommodating it.", tr: "Tamamen benim hatam — bir geçişin fark etmeyeceğini varsaymıştım. Bunu karşıladığınız için teşekkürler." },
        { role: "officer",   en: "All clear. Your things are at the end of the belt. Sorry to have held you up.", tr: "Her şey temiz. Eşyalarınız bandın sonunda. Sizi beklettiğim için üzgünüm." },
        { role: "passenger", en: "You explained every step, which is more than I expected. No complaints here.", tr: "Her adımı açıkladınız, bu beklediğimden fazlası. Şikâyetim yok." },
      ],
    },
    reading: {
      title: "The Problem with Looking for Needles",
      text: [
        "Airport screening has a statistical difficulty at its heart, and it is not one that better technology alone can solve. The number of genuine threats passing through any given checkpoint is vanishingly small, while the number of passengers is enormous. Under those conditions, even an extremely accurate detection system will generate far more false alarms than real ones.",
        "The mathematics are unforgiving. Suppose a scanner is ninety-nine per cent accurate and one passenger in a million is carrying something prohibited. Screen a million people and the machine will correctly flag that one person — along with roughly ten thousand entirely innocent travellers. This is why secondary searches are routine rather than accusatory, and why officers rarely appear alarmed when conducting them.",
        "Understanding this changes how the experience feels. Being pulled aside carries no implication whatsoever about you; it is an inevitable consequence of screening large numbers of people for rare events. Traces of nitroglycerine, to take a common example, are found on the hands of people who have recently taken heart medication or handled fertiliser.",
        "It also explains why cooperation is so effective. Officers know that the overwhelming majority of alarms are false, and their objective is to clear you as quickly as the procedure allows. Arguing does not shorten a search; declaring the film in your camera, or the medication in your bag, very often does.",
      ],
      glossary: [
        { en: "vanishingly small", tr: "yok denecek kadar az" },
        { en: "false alarm", tr: "yanlış alarm" },
        { en: "unforgiving", tr: "affetmez, acımasız" },
        { en: "accusatory", tr: "suçlayıcı" },
        { en: "implication", tr: "ima, çıkarım" },
        { en: "inevitable", tr: "kaçınılmaz" },
        { en: "clear (someone)", tr: "birini temize çıkarmak, geçirmek" },
      ],
      quiz: [
        { q: "Why do screening systems produce many false alarms?", options: ["The machines are badly made", "Real threats are extremely rare", "Officers are careless"], answer: 1 },
        { q: "What does being pulled aside imply about you?", options: ["Nothing whatsoever", "That you look suspicious", "That your documents are wrong"], answer: 0 },
        { q: "What actually shortens a search?", options: ["Arguing firmly", "Staying silent", "Declaring items in advance"], answer: 2 },
      ],
    },
    grammar: [
      {
        title: "Passive: is being + V3",
        explain: "Şu anda başkası tarafından yapılan işlemler. Havalimanı dilinin standart yapısı.",
        examples: [
          { en: "Your bag is being swabbed now.", tr: "Çantanızdan şu anda örnek alınıyor." },
          { en: "The queue is being reorganised.", tr: "Sıra yeniden düzenleniyor." },
          { en: "Passengers are being called to gate 12.", tr: "Yolcular 12 numaralı kapıya çağırılıyor." },
        ],
        tip: "Anonsların neredeyse tamamı bu yapıda. Kulağın buna alışırsa havalimanı anonslarını çözersin.",
      },
      {
        title: "Ettirgen yapı: have / get something done",
        explain: "İşi başkasına yaptırmayı anlatır. Kimin yaptığı önemli değildir.",
        examples: [
          { en: "I'll have it inspected by hand.", tr: "Onu el ile kontrol ettireceğim." },
          { en: "I'd like to have my camera checked separately.", tr: "Kameramı ayrıca kontrol ettirmek istiyorum." },
          { en: "Where can I get this wrapped?", tr: "Bunu nerede sardırabilirim?" },
        ],
        tip: "Kalıp: have/get + nesne + V3. 'I'll have inspected it' yanlıştır — nesne ortaya gelir.",
      },
      {
        title: "should have + V3 — geçmişe dair eleştiri",
        explain: "Yapılması gerekip yapılmamış şeyler. Özür ve eleştiride çok kullanılır.",
        examples: [
          { en: "It should have been declared at the start.", tr: "Başta beyan edilmeliydi." },
          { en: "I should have checked the rules.", tr: "Kuralları kontrol etmeliydim." },
          { en: "They shouldn't have removed it without asking.", tr: "Sormadan çıkarmamalıydılar." },
        ],
        tip: "Kendi hatan için kullanmak (I should have...) bir tartışmayı anında yumuşatır ve seni işbirlikçi gösterir.",
      },
      {
        title: "Dolaylı soru ile bilgi isteme",
        explain: "Doğrudan soru sormak sert durabilir. Soruyu gömünce düz cümle sırası kullanılır.",
        examples: [
          { en: "Could you tell me what triggered it?", tr: "Buna neyin sebep olduğunu söyleyebilir misiniz?" },
          { en: "I'd like to know how long this will take.", tr: "Bunun ne kadar süreceğini bilmek istiyorum." },
          { en: "Do you know whether I need to remove my shoes?", tr: "Ayakkabılarımı çıkarmam gerekip gerekmediğini biliyor musunuz?" },
        ],
        tip: "Gömülü soruda yardımcı fiil devrilmez: 'how long will this take' ✘ → 'how long this will take' ✔.",
      },
    ],
    pronunciation: [
      { word: "swab", ipa: "/swɒb/", tip: "'swob'. 'a' burada 'o' gibi okunur." },
      { word: "screening", ipa: "/ˈskriː.nɪŋ/", tip: "SKRİİ-ning. Baştaki 'skr' kümesine sesli eklemeden." },
      { word: "trace", ipa: "/treɪs/", tip: "'treys'. Tek hece, sonu 's'." },
      { word: "alternative", ipa: "/ɒlˈtɜː.nə.tɪv/", tip: "ol-TÖÖ-nı-tiv. Vurgu ikinci hecede." },
      { word: "physically", ipa: "/ˈfɪz.ɪ.kəl.i/", tip: "Fİ-zik-li. Baştaki 'ph' → 'f'." },
      { word: "accommodating", ipa: "/əˈkɒm.ə.deɪ.tɪŋ/", tip: "ı-KO-mı-dey-ting. Vurgu ikinci hecede; çift 'c' ve çift 'm' yazımda." },
    ],
  },

  /* ------------------------------- C1 ------------------------------- */
  c1: {
    dialogue: {
      title: "Eşyaya el konması ve itiraz",
      summary: "Değerli bir eşya elkoymayla karşı karşıya. Kural yorumu üzerine nazik ama teknik bir tartışma.",
      lines: [
        { role: "officer",   en: "I'm going to have to retain this. It falls within the category of bladed articles.", tr: "Buna el koymam gerekecek. Kesici aletler kategorisine giriyor." },
        { role: "passenger", en: "May I see how it's being classified? It's a woodworking chisel with a blade under six centimetres.", tr: "Nasıl sınıflandırıldığını görebilir miyim? Kesici kısmı altı santimin altında bir ahşap oyma kalemi." },
        { role: "officer",   en: "Length isn't the sole criterion. Anything designed to cut may be withheld at the officer's discretion.", tr: "Uzunluk tek ölçüt değil. Kesmek için tasarlanmış her şey görevlinin takdirine bağlı olarak alıkonabilir." },
        { role: "passenger", en: "Granted, and I'm not questioning that discretion exists. What I'd query is whether it's being exercised consistently.", tr: "Kabul, takdir yetkisinin varlığını sorgulamıyorum. Sorgulayacağım şey, bunun tutarlı biçimde kullanılıp kullanılmadığı." },
        { role: "officer",   en: "Meaning?", tr: "Yani?" },
        { role: "passenger", en: "The same chisel came through this airport six weeks ago, declared, and was passed. Not once has it been withheld before.", tr: "Aynı oyma kalemi altı hafta önce beyan edilerek bu havalimanından geçti ve onaylandı. Daha önce bir kez bile alıkonmadı." },
        { role: "officer",   en: "Which tells us only that a colleague reached a different conclusion, not that either of us was wrong.", tr: "Bu bize yalnızca bir meslektaşımın farklı bir sonuca vardığını söyler, ikimizden birinin yanıldığını değil." },
        { role: "passenger", en: "A fair answer. Is there any route by which it could travel — posted, or transferred to hold baggage?", tr: "Haklı bir cevap. Seyahat edebileceği bir yol var mı — postayla ya da verilen bagaja aktarılarak?" },
        { role: "officer",   en: "Had you raised it before your bag was tagged, yes. At this stage the only option is the post office in departures.", tr: "Bavulunuz etiketlenmeden önce dile getirmiş olsaydınız, evet. Bu aşamada tek seçenek gidiş katındaki postane." },
        { role: "passenger", en: "Then that's what I'll do, rather than lose it. Could you note that it was surrendered voluntarily for posting?", tr: "O hâlde kaybetmektense bunu yapacağım. Postalanmak üzere gönüllü olarak teslim edildiğini not edebilir misiniz?" },
        { role: "officer",   en: "I can, and it's sensible of you to ask. Retained items and posted items are logged quite differently.", tr: "Edebilirim ve bunu istemeniz akıllıca. El konan eşyalar ile postalanan eşyalar oldukça farklı kaydedilir." },
        { role: "passenger", en: "That distinction is precisely what I was after. Thank you for engaging with it rather than closing it down.", tr: "Tam da peşinde olduğum ayrım bu. Bunu kapatmak yerine üzerine gittiğiniz için teşekkürler." },
        { role: "officer",   en: "You argued it properly, which is rarer than you'd think. Second door on the left for the post office.", tr: "Doğru biçimde savundunuz, bu sandığınızdan daha nadir. Postane için soldaki ikinci kapı." },
      ],
    },
    reading: {
      title: "Rules That Cannot Be Written Down",
      text: [
        "Any list of prohibited items faces an impossible task: it must be precise enough to be enforceable and general enough to cover objects nobody has yet thought of. The result is a hybrid — a schedule of named items, followed by a category so broad that it renders the list almost decorative.",
        "'Any object with a sharp point or edge capable of causing injury' is the sort of phrase on which everything ultimately turns. Read narrowly, it excludes almost nothing; read broadly, it covers a pencil. Officers are therefore obliged to interpret rather than merely apply, and interpretation, being human, varies between individuals, airports and days of the week.",
        "Travellers frequently mistake this variation for incompetence, and occasionally say so out loud. It is nothing of the kind. A system that permitted no discretion would have to prohibit everything conceivably dangerous, which would mean confiscating knitting needles, umbrellas and glass bottles — a rule so absurd that it would collapse within a week. Discretion is what allows the list to remain workable.",
        "The practical consequence is that arguing about the wording is nearly always futile, whereas arguing about the process sometimes is not. An officer cannot be talked out of a judgement about whether something is sharp. They can, however, be asked whether the item may be posted, transferred to checked baggage, or surrendered voluntarily rather than seized — and those questions, unlike the first, have answers that do not depend on anyone's opinion.",
      ],
      glossary: [
        { en: "enforceable", tr: "uygulanabilir, yaptırımı olan" },
        { en: "renders", tr: "kılar, hâle getirir" },
        { en: "turn on (something)", tr: "bir şeye bağlı olmak" },
        { en: "read narrowly", tr: "dar yorumlamak" },
        { en: "nothing of the kind", tr: "hiç de öyle değil" },
        { en: "futile", tr: "boşuna, nafile" },
        { en: "seize", tr: "el koymak, zorla almak" },
      ],
      quiz: [
        { q: "Why do prohibited-item lists include a very broad category?", options: ["To cover objects nobody has thought of", "To confuse travellers", "To make the list shorter"], answer: 0 },
        { q: "What would a system with no discretion have to do?", options: ["Allow everything", "Prohibit everything conceivably dangerous", "Close the airport"], answer: 1 },
        { q: "What kind of argument is sometimes effective?", options: ["About the wording", "About the officer's judgement", "About the process"], answer: 2 },
      ],
    },
    grammar: [
      {
        title: "Devrik yapı ile vurgulu inkâr",
        explain: "Olumsuz zarf cümle başına gelince yardımcı fiil öne çıkar. Bir iddiayı sertleşmeden güçlendirir.",
        examples: [
          { en: "Not once has it been withheld before.", tr: "Daha önce bir kez bile alıkonmadı." },
          { en: "Never have I been asked to remove it.", tr: "Onu çıkarmam hiç istenmedi." },
          { en: "Only after checking did they release it.", tr: "Ancak kontrol ettikten sonra serbest bıraktılar." },
        ],
        tip: "Bu yapıyı bir tartışmada tek bir kez, en güçlü verinin başında kullan.",
      },
      {
        title: "Concessive açılış: Granted / Admittedly / True",
        explain: "Karşı tarafa hak vererek başlamak, ardından gelen itirazın ağırlığını artırır.",
        examples: [
          { en: "Granted, and I'm not questioning that discretion exists.", tr: "Kabul, takdir yetkisinin varlığını sorgulamıyorum." },
          { en: "Admittedly the rule is vague, but the process isn't.", tr: "Kuralın muğlak olduğu doğru ama süreç değil." },
          { en: "True enough — that doesn't resolve my problem, though.", tr: "Yeterince doğru — yine de sorunumu çözmüyor." },
        ],
        tip: "Formül: [Taviz] + [ama] + [asıl nokta]. Karşı tarafı savunmaya geçmek zorunda bırakmaz.",
      },
      {
        title: "Cleft ile talebi öne alma",
        explain: "'What I'd query is...' gibi yapılar hem düşünme süresi kazandırır hem talebi netleştirir.",
        examples: [
          { en: "What I'd query is whether it's being exercised consistently.", tr: "Sorgulayacağım şey, tutarlı biçimde uygulanıp uygulanmadığı." },
          { en: "That distinction is precisely what I was after.", tr: "Tam da peşinde olduğum ayrım bu." },
          { en: "It's the process, not the judgement, that I'm asking about.", tr: "Sorduğum şey karar değil, süreç." },
        ],
        tip: "'It's X, not Y, that...' kalıbı bir yanlış anlaşılmayı tek cümlede düzeltir.",
      },
      {
        title: "Participle clause — sıkıştırılmış yan cümle",
        explain: "Yan cümleyi özne ve yardımcı fiil olmadan kurar. Metni yoğunlaştırır.",
        examples: [
          { en: "Interpretation, being human, varies between individuals.", tr: "Yorum, insana özgü olduğu için kişiden kişiye değişir." },
          { en: "Declared in advance, the item would have been transferred.", tr: "Önceden beyan edilseydi eşya aktarılmış olurdu." },
          { en: "Having checked the rules, I packed it in the hold bag.", tr: "Kuralları kontrol ettikten sonra onu verilen bavula koydum." },
        ],
        tip: "Having + V3 = önce olan eylem. Being + sıfat = sebep. İkisi C1 yazısının belkemiğidir.",
      },
    ],
    pronunciation: [
      { word: "confiscate", ipa: "/ˈkɒn.fɪ.skeɪt/", tip: "KON-fis-keyt. Vurgu en başta." },
      { word: "discretion", ipa: "/dɪˈskreʃ.ən/", tip: "dis-KREŞ-ın. 'discreet' ile karıştırma." },
      { word: "exemption", ipa: "/ɪɡˈzemp.ʃən/", tip: "ig-ZEMP-şın. 'x' → 'gz'." },
      { word: "arbitrary", ipa: "/ˈɑː.bɪ.trər.i/", tip: "AA-bit-rı-ri. Vurgu en başta, gerisi hızlı." },
      { word: "prerogative", ipa: "/prɪˈrɒɡ.ə.tɪv/", tip: "pri-RO-gı-tiv. Vurgu ikinci hecede." },
      { word: "surrendered", ipa: "/səˈren.dəd/", tip: "sı-REN-dıd. Vurgu ortada." },
    ],
  },

  /* ------------------------------- C2 ------------------------------- */
  c2: {
    dialogue: {
      title: "Ölçülülük ve resmî şikâyet",
      summary: "Yolcu, aramanın yürütülme biçimine dair ölçülülük temelli bir itirazı resmî registerda dile getiriyor.",
      lines: [
        { role: "officer",   en: "You've asked to speak to a duty manager. I'm she. I gather there's a complaint about how the search was conducted.", tr: "Nöbetçi müdürle görüşmek istemişsiniz. Benim. Anladığım kadarıyla aramanın yürütülme biçimine dair bir şikâyet var." },
        { role: "passenger", en: "There is, though I'd want to frame it carefully. My objection isn't to the search having taken place but to its manner.", tr: "Var, gerçi bunu dikkatle çerçevelemek isterim. İtirazım aramanın yapılmış olmasına değil, biçimine." },
        { role: "officer",   en: "Go on. It's more useful to me if you're specific.", tr: "Devam edin. Somut olursanız benim için daha yararlı olur." },
        { role: "passenger", en: "My bag was emptied onto an open table in full view of a queue, and medical items were held up and discussed audibly. Whatever the security rationale, it's hard to see it as proportionate.", tr: "Çantam bir kuyruğun tam görüş alanında açık bir masaya boşaltıldı ve tıbbi eşyalar havaya kaldırılıp duyulacak şekilde tartışıldı. Güvenlik gerekçesi ne olursa olsun, bunu ölçülü görmek zor." },
        { role: "officer",   en: "That's a serious point, and not one I'd attempt to defend as stated. Privacy provisions exist precisely for medical items.", tr: "Bu ciddi bir husus ve anlatıldığı şekliyle savunmaya çalışacağım bir şey değil. Mahremiyet düzenlemeleri tam da tıbbi eşyalar için mevcut." },
        { role: "passenger", en: "Then I would ask that the incident be logged as a privacy matter rather than a service one, since the two are escalated quite differently.", tr: "O hâlde olayın hizmet meselesi değil mahremiyet meselesi olarak kaydedilmesini talep ediyorum, zira ikisi çok farklı biçimde üst makama taşınıyor." },
        { role: "officer",   en: "It will be. Were it recorded as service feedback, it would sit in a monthly summary and effectively vanish.", tr: "Öyle olacak. Hizmet geri bildirimi olarak kaydedilecek olsa aylık bir özette kalır ve fiilen kaybolur." },
        { role: "passenger", en: "Which is why I raised it. I've no interest in the officer being disciplined — the failure looks systemic rather than personal.", tr: "Bu yüzden dile getirdim. Görevlinin cezalandırılmasıyla ilgilenmiyorum — kusur kişisel değil sistemik görünüyor." },
        { role: "officer",   en: "It is, and you're the third person this month to identify it. That, frankly, is what makes your complaint worth having.", tr: "Öyle ve bu ayki üçüncü kişisiniz bunu tespit eden. Dürüst olmak gerekirse şikâyetinizi değerli kılan da bu." },
        { role: "passenger", en: "Then we understand each other. Would it be possible to have the reference number before I fly?", tr: "O hâlde birbirimizi anlıyoruz. Uçmadan önce referans numarasını almak mümkün olur mu?" },
        { role: "officer",   en: "I'll print it now. And for what it's worth — few complaints arrive this well constructed, which is a shame for everyone.", tr: "Şimdi yazdırayım. Ne değeri varsa — pek az şikâyet bu kadar iyi kurgulanmış geliyor ki bu herkes için üzücü." },
        { role: "passenger", en: "Anger is easier than precision. It's just considerably less effective.", tr: "Öfke, kesinlikten kolaydır. Sadece çok daha az etkilidir." },
      ],
    },
    reading: {
      title: "Proportionality, and Who Decides It",
      text: [
        "Security regimes are almost always assessed against the wrong benchmark. The question routinely asked is whether a measure could conceivably prevent harm, to which the answer is nearly always yes; the question worth asking is whether the reduction in risk it achieves is commensurate with what it costs — in money, in delay, and in the dignity of the several billion people subjected to it annually.",
        "Proportionality, as a principle, is unusual in that it is simultaneously a matter of law and a matter of taste. Courts in numerous jurisdictions have held that intrusive searches must be no more extensive than the circumstances warrant, yet what counts as warranted is not something a court can specify in advance for every case. The determination therefore migrates downwards, coming to rest with whichever officer happens to be standing in front of you — a person operating under time pressure, with incomplete information, and with career consequences that are heavily asymmetric.",
        "That asymmetry deserves emphasis, because it explains behaviour that otherwise seems irrational. An officer who conducts an unnecessary search faces, at worst, a complaint. An officer who declines a search that later proves to have been warranted faces something considerably graver. Faced with those incentives, over-caution is not a failing of character; it is the predictable equilibrium of the system, and no amount of training will shift it while the incentives remain as they are.",
        "None of this renders complaint pointless — quite the reverse. Complaints are the only mechanism by which the cost side of the equation becomes visible at all, since delay and indignity, unlike a missed threat, generate no headlines and appear in no statistics unless somebody records them. A complaint that is specific, unemotional and correctly categorised does something no amount of resentment achieves: it enters the data.",
      ],
      glossary: [
        { en: "benchmark", tr: "ölçüt, kıyas noktası" },
        { en: "commensurate with", tr: "-ile orantılı" },
        { en: "intrusive", tr: "müdahaleci, mahremiyete giren" },
        { en: "warrant (fiil)", tr: "gerektirmek, haklı kılmak" },
        { en: "migrate downwards", tr: "aşağıya kaymak (yetki)" },
        { en: "asymmetric", tr: "asimetrik, dengesiz" },
        { en: "equilibrium", tr: "denge (noktası)" },
        { en: "resentment", tr: "kırgınlık, hınç" },
      ],
      quiz: [
        { q: "What question does the text say is worth asking?", options: ["Could a measure prevent harm?", "Is the risk reduction commensurate with the cost?", "Who designed the measure?"], answer: 1 },
        { q: "Why is over-caution described as predictable?", options: ["Officers are poorly trained", "The career consequences are heavily asymmetric", "The rules require it explicitly"], answer: 1 },
        { q: "Why does the text value complaints?", options: ["They punish individual officers", "They make the cost side visible in the data", "They speed up queues"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Mandative subjunctive — talebin resmî kipi",
        explain: "'ask / request / insist / recommend that' sonrası fiil çekimlenmez; 'be' olduğu gibi kalır.",
        examples: [
          { en: "I would ask that the incident be logged as a privacy matter.", tr: "Olayın mahremiyet meselesi olarak kaydedilmesini talep ediyorum." },
          { en: "They recommended that he declare it in advance.", tr: "Bunu önceden beyan etmesini önerdiler." },
          { en: "It is imperative that the record remain accessible.", tr: "Kaydın erişilebilir kalması zorunludur." },
        ],
        tip: "Bu tek gramer detayı, sözlü bir şikâyeti yazılı bir başvuru ağırlığına taşır.",
      },
      {
        title: "Çerçeveleme: 'My objection isn't to X but to Y'",
        explain: "İtirazın kapsamını daraltarak karşı tarafın savunma zeminini elinden alır.",
        examples: [
          { en: "My objection isn't to the search having taken place but to its manner.", tr: "İtirazım aramanın yapılmış olmasına değil, biçimine." },
          { en: "The failure looks systemic rather than personal.", tr: "Kusur kişisel değil sistemik görünüyor." },
          { en: "I've no interest in blame, only in the record.", tr: "Suçlamayla ilgilenmiyorum, yalnızca kayıtla." },
        ],
        tip: "Kişiyi hedeften çıkarmak, muhatabını savunma yapmak yerine yardım etmeye geçirir.",
      },
      {
        title: "Perfect gerund: 'X having taken place'",
        explain: "Önce olmuş bir eylemi isim gibi kullanır. Yoğun ve resmî bir yapı.",
        examples: [
          { en: "My objection isn't to the search having taken place.", tr: "İtirazım aramanın yapılmış olmasına değil." },
          { en: "Having been informed, I raised it immediately.", tr: "Bilgilendirildikten sonra derhâl dile getirdim." },
          { en: "He denied having been told about the rule.", tr: "Kural hakkında bilgilendirildiğini reddetti." },
        ],
        tip: "having + V3 = önce olmuş. Pasifi: having been + V3. Resmî yazının en tipik sıkıştırma aracı.",
      },
      {
        title: "Register geçişi — ağırdan hafife inmek",
        explain: "C2'nin işareti, yoğun bir paragraftan sonra kısa ve düz bir cümleye inebilmektir.",
        examples: [
          { en: "Anger is easier than precision. It's just considerably less effective.", tr: "Öfke, kesinlikten kolaydır. Sadece çok daha az etkilidir." },
          { en: "Then we understand each other.", tr: "O hâlde birbirimizi anlıyoruz." },
          { en: "That, frankly, is what makes it worth having.", tr: "Dürüst olmak gerekirse onu değerli kılan da bu." },
        ],
        tip: "Uzun cümle → kısa cümle ritmi, ana dili konuşanların en belirgin işaretidir. Her paragrafta bir kez uygula.",
      },
    ],
    pronunciation: [
      { word: "proportionality", ipa: "/prəˌpɔː.ʃəˈnæl.ə.ti/", tip: "Ana vurgu 'NA' hecesinde: prı-por-şı-NA-lı-ti." },
      { word: "commensurate", ipa: "/kəˈmen.ʃər.ət/", tip: "kı-MEN-şı-rıt. Vurgu ikinci hecede." },
      { word: "ostensibly", ipa: "/ɒsˈten.sə.bli/", tip: "os-TEN-sıb-li. Vurgu ikinci hecede." },
      { word: "aforementioned", ipa: "/əˌfɔːˈmen.ʃənd/", tip: "ı-for-MEN-şınd. Ana vurgu 'MEN' hecesinde." },
      { word: "egregious", ipa: "/ɪˈɡriː.dʒəs/", tip: "i-GRİİ-cıs. Sonu 'cıs' — 'egrejyus' değil." },
      { word: "equilibrium", ipa: "/ˌek.wɪˈlɪb.ri.əm/", tip: "ek-wi-LİB-ri-ım. Ana vurgu 'LİB' hecesinde." },
    ],
  },
};
