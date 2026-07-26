/* =========================================================
   SENARYO: Gümrük — Gümrük memuru & Yolcu
   ========================================================= */

CONTENT.customs = {
  /* ------------------------------- A1 ------------------------------- */
  a1: {
    dialogue: {
      title: "Beyan edecek bir şey var mı?",
      summary: "Yeşil hattan geçen yolcu durduruluyor. En temel gümrük soruları.",
      lines: [
        { role: "officer",   en: "Excuse me. Do you have anything to declare?", tr: "Affedersiniz. Beyan edecek bir şeyiniz var mı?" },
        { role: "passenger", en: "No, nothing.", tr: "Hayır, hiçbir şey." },
        { role: "officer",   en: "Is this your bag?", tr: "Bu çanta sizin mi?" },
        { role: "passenger", en: "Yes, it is mine.", tr: "Evet, benim." },
        { role: "officer",   en: "Can you open it, please?", tr: "Açabilir misiniz, lütfen?" },
        { role: "passenger", en: "Of course. There are only clothes and books.", tr: "Elbette. Sadece kıyafet ve kitap var." },
        { role: "officer",   en: "What is in this box?", tr: "Bu kutuda ne var?" },
        { role: "passenger", en: "It is a gift for my sister. It is a small lamp.", tr: "Kız kardeşime hediye. Küçük bir lamba." },
        { role: "officer",   en: "How much was it?", tr: "Ne kadardı?" },
        { role: "passenger", en: "About thirty euros.", tr: "Yaklaşık otuz euro." },
        { role: "officer",   en: "That is fine. Do you have any food?", tr: "Bu uygun. Yiyecek var mı?" },
        { role: "passenger", en: "I have some chocolate. Is that a problem?", tr: "Biraz çikolatam var. Sorun mu?" },
        { role: "officer",   en: "No, chocolate is OK. Meat and cheese are not.", tr: "Hayır, çikolata sorun değil. Et ve peynir değil.", note: "Birçok ülkeye et, süt ürünü ve taze meyve sokmak yasaktır." },
        { role: "passenger", en: "I understand. Thank you.", tr: "Anlıyorum. Teşekkürler." },
        { role: "officer",   en: "You can close your bag. Welcome, and have a good trip.", tr: "Çantanızı kapatabilirsiniz. Hoş geldiniz, iyi yolculuklar." },
      ],
    },
    reading: {
      title: "Green, Red and Blue",
      text: [
        "After you take your bag, you walk to the customs area. There are two doors: a green one and a red one.",
        "The green door is for people with nothing to declare. The red door is for people with something to declare — a lot of money, expensive gifts, or special food.",
        "In some airports there is also a blue door. This one is only for flights inside the European Union.",
        "Most people walk through the green door in ten seconds. But sometimes an officer says: 'Excuse me, one moment please.' It is not a problem. Just open your bag and answer the questions.",
      ],
      glossary: [
        { en: "customs", tr: "gümrük" },
        { en: "declare", tr: "beyan etmek" },
        { en: "expensive", tr: "pahalı" },
        { en: "special", tr: "özel" },
        { en: "inside", tr: "içinde" },
        { en: "answer", tr: "cevaplamak" },
      ],
      quiz: [
        { q: "Who uses the green door?", options: ["People with nothing to declare", "People with a lot of money", "Only families"], answer: 0 },
        { q: "What is the blue door for?", options: ["Expensive gifts", "Flights inside the European Union", "People with pets"], answer: 1 },
        { q: "What should you do if an officer stops you?", options: ["Run away", "Open your bag and answer", "Show your ticket only"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "anything / something / nothing",
        explain: "Sorularda 'anything', olumlu cümlede 'something', olumsuz anlam için 'nothing' kullanılır.",
        examples: [
          { en: "Do you have anything to declare?", tr: "Beyan edecek bir şeyiniz var mı?" },
          { en: "I have something for my sister.", tr: "Kız kardeşim için bir şeyim var." },
          { en: "I have nothing to declare.", tr: "Beyan edecek hiçbir şeyim yok." },
        ],
        tip: "'nothing' kendisi olumsuzdur — yanına 'not' eklemezsin. 'I don't have nothing' yanlıştır.",
      },
      {
        title: "this / that / these / those",
        explain: "Yakın–uzak ve tekil–çoğul ayrımı. Gümrükte sürekli bir şey işaret edilir.",
        examples: [
          { en: "What is in this box?", tr: "Bu kutuda ne var?" },
          { en: "Is that your suitcase?", tr: "Şu sizin bavulunuz mu?" },
          { en: "These are gifts, those are my clothes.", tr: "Bunlar hediye, şunlar kıyafetlerim." },
        ],
        tip: "this/these → yakın. that/those → uzak. Çoğulu unutma: 'this books' değil 'these books'.",
      },
      {
        title: "How much / How many ile fiyat sorma",
        explain: "Fiyat sorarken 'How much', adet sorarken 'How many' kullanılır.",
        examples: [
          { en: "How much was it?", tr: "Ne kadardı?" },
          { en: "How much does this cost?", tr: "Bu ne kadar tutuyor?" },
          { en: "How many bottles do you have?", tr: "Kaç şişeniz var?" },
        ],
        tip: "Cevapta 'about' kullan: 'about thirty euros' = 'yaklaşık otuz euro'. Kesin sayı bilmene gerek yok.",
      },
      {
        title: "some / any — belirsiz miktar",
        explain: "Olumlu cümlede 'some', soru ve olumsuzda 'any'.",
        examples: [
          { en: "I have some chocolate.", tr: "Biraz çikolatam var." },
          { en: "Do you have any food?", tr: "Yiyecek var mı?" },
          { en: "I don't have any cigarettes.", tr: "Hiç sigaram yok." },
        ],
        tip: "Bir şey teklif ederken soruda da 'some' kullanılır: 'Would you like some tea?'",
      },
    ],
    pronunciation: [
      { word: "customs", ipa: "/ˈkʌs.təmz/", tip: "KAS-tımz. İlk hece 'kas', sonu 'z' sesi." },
      { word: "declare", ipa: "/dɪˈkleər/", tip: "di-KLEER. Vurgu ikinci hecede, sonu uzar." },
      { word: "cigarette", ipa: "/ˌsɪɡ.ərˈet/", tip: "si-gı-RET. Vurgu en sonda — 'SİGaret' değil." },
      { word: "nothing", ipa: "/ˈnʌθ.ɪŋ/", tip: "NA-thing. 'o' burada 'a' okunur; 'th' peltek." },
      { word: "gift", ipa: "/ɡɪft/", tip: "'gift'. Tek hece, 'g' sert." },
      { word: "clothes", ipa: "/kləʊðz/", tip: "'klovz'. Ortadaki 'th' neredeyse yutulur — 'klo-thes' değil." },
    ],
  },

  /* ------------------------------- A2 ------------------------------- */
  a2: {
    dialogue: {
      title: "Duty-free limiti",
      summary: "Yolcu hediyelerle ve duty-free alışverişiyle dönüyor. Miktar ve değer konuşması.",
      lines: [
        { role: "officer",   en: "Good evening. Where have you arrived from?", tr: "İyi akşamlar. Nereden geldiniz?" },
        { role: "passenger", en: "From Dubai. I was there for a week.", tr: "Dubai'den. Bir hafta oradaydım." },
        { role: "officer",   en: "Did you buy anything while you were there?", tr: "Oradayken bir şey satın aldınız mı?" },
        { role: "passenger", en: "Yes, I bought a few gifts and some perfume at the duty-free shop.", tr: "Evet, birkaç hediye ve duty-free'den biraz parfüm aldım." },
        { role: "officer",   en: "How much did you spend in total?", tr: "Toplamda ne kadar harcadınız?" },
        { role: "passenger", en: "About two hundred and fifty euros, I think.", tr: "Sanırım yaklaşık iki yüz elli euro." },
        { role: "officer",   en: "Do you have the receipts with you?", tr: "Fişler yanınızda mı?" },
        { role: "passenger", en: "Some of them. The perfume receipt is in the bag.", tr: "Bir kısmı. Parfümün fişi çantada." },
        { role: "officer",   en: "The limit for gifts is four hundred and thirty euros, so you are under it.", tr: "Hediyeler için limit dört yüz otuz euro, yani altındasınız." },
        { role: "passenger", en: "That's good news. What about cigarettes? I bought two hundred.", tr: "Bu iyi haber. Sigara ne olacak? İki yüz tane aldım." },
        { role: "officer",   en: "Two hundred is exactly the limit. One carton, no more.", tr: "İki yüz tam olarak limit. Bir karton, fazlası değil." },
        { role: "passenger", en: "I didn't know that. Next time I will buy fewer.", tr: "Bunu bilmiyordum. Gelecek sefer daha az alacağım." },
        { role: "officer",   en: "And are you carrying any meat, cheese or fresh fruit?", tr: "Yanınızda et, peynir ya da taze meyve var mı?" },
        { role: "passenger", en: "No, none of those. Only dates and some tea.", tr: "Hayır, onlardan hiçbiri. Sadece hurma ve biraz çay." },
        { role: "officer",   en: "Dates and tea are fine. You can go through. Welcome home.", tr: "Hurma ve çay uygun. Geçebilirsiniz. Hoş geldiniz." },
        { role: "passenger", en: "Thank you very much!", tr: "Çok teşekkür ederim!" },
      ],
    },
    reading: {
      title: "The Suitcase Full of Cheese",
      text: [
        "My grandmother lives in a small village in Turkey, and every summer I visit her. Every summer, she also tries to fill my suitcase with food.",
        "Two years ago, I flew back to Germany with three kilos of village cheese, a bag of dried peppers and two jars of honey. I knew about the rules, but I didn't want to say no to my grandmother.",
        "At customs, the officer opened my bag and looked inside for a long time. Then he looked at me and said one word: 'Grandmother?' I nodded. He smiled, but he still took the cheese away.",
        "I called my grandmother from the airport and told her the story. She was not sad about the cheese. She was angry with the officer! Now she sends me dried food only — and honestly, the peppers travel much better.",
      ],
      glossary: [
        { en: "village", tr: "köy" },
        { en: "fill", tr: "doldurmak" },
        { en: "dried", tr: "kurutulmuş" },
        { en: "jar", tr: "kavanoz" },
        { en: "nod", tr: "başını sallamak (onaylayarak)" },
        { en: "take away", tr: "alıp götürmek" },
      ],
      quiz: [
        { q: "What did the grandmother put in the suitcase?", options: ["Cheese, peppers and honey", "Only tea", "Clothes and books"], answer: 0 },
        { q: "What did the officer do?", options: ["Let everything through", "Took the cheese away", "Asked for money"], answer: 1 },
        { q: "How did the grandmother feel?", options: ["Sad about the cheese", "Angry with the officer", "Happy about the rules"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "a few / a little / a lot of",
        explain: "Sayılabilenlerle 'a few', sayılamayanlarla 'a little'. 'A lot of' ikisiyle de çalışır.",
        examples: [
          { en: "I bought a few gifts.", tr: "Birkaç hediye aldım." },
          { en: "I have a little money left.", tr: "Biraz param kaldı." },
          { en: "There were a lot of people at customs.", tr: "Gümrükte çok insan vardı." },
        ],
        tip: "'a few' = birkaç (yeterli), 'few' = pek az (yetersiz). Küçük kelime, büyük anlam farkı.",
      },
      {
        title: "fewer / less — daha az",
        explain: "Sayılabilenlerle 'fewer', sayılamayanlarla 'less' kullanılır.",
        examples: [
          { en: "Next time I will buy fewer cigarettes.", tr: "Gelecek sefer daha az sigara alacağım." },
          { en: "I spent less money than last year.", tr: "Geçen yıldan daha az para harcadım." },
          { en: "Fewer people travel in winter.", tr: "Kışın daha az insan seyahat ediyor." },
        ],
        tip: "Günlük konuşmada ana dili konuşanlar da 'less' der ama sınavda 'fewer' beklenir.",
      },
      {
        title: "Past Simple ile alışveriş anlatma",
        explain: "Yaptığın alışverişi anlatırken geçmiş zaman gerekir. Düzensiz fiiller sık geçer.",
        examples: [
          { en: "I bought two hundred cigarettes.", tr: "İki yüz sigara aldım." },
          { en: "How much did you spend?", tr: "Ne kadar harcadınız?" },
          { en: "I didn't know about the rule.", tr: "Kural hakkında bilgim yoktu." },
        ],
        tip: "buy → bought, spend → spent, bring → brought, pay → paid. Gümrükte gereken dörtlü bunlar.",
      },
      {
        title: "none of / any of — hiçbiri",
        explain: "Bir grubun tamamının dışlandığını anlatır. 'none' tek başına da kullanılır.",
        examples: [
          { en: "None of those, no.", tr: "Onlardan hiçbiri, hayır." },
          { en: "I don't have any of the receipts.", tr: "Fişlerin hiçbiri yanımda değil." },
          { en: "None of my bags are missing.", tr: "Bavullarımın hiçbiri kayıp değil." },
        ],
        tip: "'none' olumsuz cümlede kullanılmaz: 'I don't have none' yanlış, 'I have none' doğru.",
      },
    ],
    pronunciation: [
      { word: "receipt", ipa: "/rɪˈsiːt/", tip: "ri-SİİT. Ortadaki 'p' hiç okunmaz." },
      { word: "allowance", ipa: "/əˈlaʊ.əns/", tip: "ı-LAU-ıns. Vurgu ikinci hecede." },
      { word: "value", ipa: "/ˈvæl.juː/", tip: "VAL-yu. Baştaki 'v' üst diş alt dudakta." },
      { word: "duty", ipa: "/ˈdʒuː.ti/ (UK) · /ˈduː.ti/ (US)", tip: "İngiliz 'CUU-ti', Amerikan 'DUU-ti' der." },
      { word: "tobacco", ipa: "/təˈbæk.əʊ/", tip: "tı-BA-kov. Vurgu ortada; ilk hece yutulur." },
      { word: "souvenir", ipa: "/ˌsuː.vənˈɪər/", tip: "suu-vı-NİİR. Vurgu en sonda." },
    ],
  },

  /* ------------------------------- B1 ------------------------------- */
  b1: {
    dialogue: {
      title: "Limiti aşan hediye",
      summary: "Yolcunun aldığı saat limiti aşıyor. Vergi hesabı ve dürüst beyan.",
      lines: [
        { role: "officer",   en: "Could you step over here, please? I'd like to ask you a few questions about your purchases.", tr: "Buraya geçebilir misiniz? Alışverişlerinizle ilgili birkaç soru sormak istiyorum." },
        { role: "passenger", en: "Of course. I've actually got something I should probably declare.", tr: "Elbette. Aslında beyan etmem gereken bir şey var." },
        { role: "officer",   en: "I appreciate you saying so. What is it?", tr: "Bunu söylemenizi takdir ediyorum. Nedir?" },
        { role: "passenger", en: "A watch. I bought it in Zurich for nine hundred francs — it's a present for my father.", tr: "Bir saat. Zürih'te dokuz yüz franka aldım — babama hediye." },
        { role: "officer",   en: "That's well over the duty-free allowance, so duty and VAT will be payable on the full amount.", tr: "Duty-free limitinin oldukça üzerinde, dolayısıyla tam tutar üzerinden vergi ve KDV ödenecek." },
        { role: "passenger", en: "I assumed that would be the case. Roughly how much are we talking about?", tr: "Böyle olacağını tahmin ediyordum. Yaklaşık ne kadardan bahsediyoruz?" },
        { role: "officer",   en: "It depends on the exchange rate, but you should expect somewhere around two hundred euros.", tr: "Kur oranına bağlı ama yaklaşık iki yüz euro civarında beklemelisiniz." },
        { role: "passenger", en: "That's less than I feared. Can I pay by card, or does it have to be cash?", tr: "Korktuğumdan az. Kartla ödeyebilir miyim, yoksa nakit mi olmak zorunda?" },
        { role: "officer",   en: "Card is fine. Do you have the receipt? It makes the calculation much quicker.", tr: "Kart uygun. Fişiniz var mı? Hesaplamayı çok hızlandırır." },
        { role: "passenger", en: "Here it is. I've kept the box and the guarantee card as well.", tr: "İşte burada. Kutusunu ve garanti belgesini de sakladım." },
        { role: "officer",   en: "Excellent. If you hadn't declared it and we'd found it, you'd have paid a penalty on top of the duty.", tr: "Mükemmel. Beyan etmemiş olsaydınız ve biz bulsaydık, verginin üstüne bir de ceza ödeyecektiniz." },
        { role: "passenger", en: "That's exactly why I said something. It didn't seem worth the risk for a present.", tr: "Tam da bu yüzden söyledim. Bir hediye için riske değmezdi." },
        { role: "officer",   en: "A sensible view. I'll print the receipt, and you'll need to keep it if you ever take the watch abroad again.", tr: "Makul bir bakış. Makbuzu yazdıracağım ve saati bir daha yurt dışına götürürseniz saklamanız gerekecek." },
        { role: "passenger", en: "Good to know. Thanks for making it painless.", tr: "Bilmek iyi oldu. Sıkıntısız hâle getirdiğiniz için teşekkürler." },
      ],
    },
    reading: {
      title: "Why the Green Channel Is a Test",
      text: [
        "Walking through the green channel is not simply a shortcut; it is a legal statement. By choosing it, you are formally declaring that you are carrying nothing that requires declaration. That is why the consequences of being wrong are much heavier than most travellers assume.",
        "If an officer finds an undeclared watch in the red channel, you pay the duty owed and go on your way. If the same watch is found in the green channel, you have made a false declaration, and the penalty regime is entirely different: duty plus a fine, and in serious cases the item itself can be seized.",
        "This asymmetry explains a piece of advice that sounds strange at first. If you are genuinely unsure whether something needs declaring, declare it. The red channel is not an admission of guilt — it is a question. Officers spend a large part of their day telling people that what they are carrying is perfectly fine.",
        "There is a second reason to keep receipts, and it has nothing to do with tax. If you take an expensive item abroad and bring it home again, the receipt proves that you did not buy it on the trip. Without one, a two-year-old camera can look remarkably like a new purchase.",
      ],
      glossary: [
        { en: "green channel", tr: "yeşil hat (beyan gerektirmeyen)" },
        { en: "shortcut", tr: "kısa yol" },
        { en: "undeclared", tr: "beyan edilmemiş" },
        { en: "false declaration", tr: "yanlış beyan" },
        { en: "penalty regime", tr: "ceza rejimi" },
        { en: "admission of guilt", tr: "suç ikrarı" },
      ],
      quiz: [
        { q: "What does walking through the green channel mean legally?", options: ["Nothing at all", "A formal declaration that you carry nothing to declare", "A request for inspection"], answer: 1 },
        { q: "What is worse: an undeclared item in red or in green?", options: ["In green — it is a false declaration", "In red — the duty is higher", "They are identical"], answer: 0 },
        { q: "Why keep a receipt for an expensive item you already own?", options: ["To claim insurance", "To prove you didn't buy it on the trip", "To resell it"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "3. Tip Koşul Cümlesi (Third Conditional)",
        explain: "Geçmişte olmamış bir şeyin sonucunu anlatır. Gümrükte uyarı cümlelerinin klasik yapısı.",
        examples: [
          { en: "If you hadn't declared it, you'd have paid a penalty.", tr: "Beyan etmemiş olsaydınız ceza ödeyecektiniz." },
          { en: "If I had known the limit, I wouldn't have bought it.", tr: "Limiti bilseydim onu almazdım." },
          { en: "They wouldn't have stopped me if I'd had the receipt.", tr: "Fiş elimde olsaydı beni durdurmazlardı." },
        ],
        tip: "Kalıp: If + had + V3, ... would have + V3. Konuşurken 'I'd have' diye kısalt — 'ayd ıv' gibi çıkar.",
      },
      {
        title: "should / shouldn't have + V3",
        explain: "Yapılması gerekip yapılmamış ya da yapılmaması gerekip yapılmış şeyler.",
        examples: [
          { en: "I've got something I should declare.", tr: "Beyan etmem gereken bir şey var." },
          { en: "I should have kept the receipt.", tr: "Fişi saklamalıydım." },
          { en: "You shouldn't have used the green channel.", tr: "Yeşil hattı kullanmamalıydınız." },
        ],
        tip: "Kendi hatanı 'I should have...' ile kabul etmek, gümrükte tonu anında yumuşatır.",
      },
      {
        title: "will be payable / is required — resmî pasif",
        explain: "Kurumsal bildirimler kişisiz kurulur. 'Sen ödeyeceksin' değil, 'ödenecek'.",
        examples: [
          { en: "Duty will be payable on the full amount.", tr: "Tam tutar üzerinden vergi ödenecek." },
          { en: "A declaration is required for cash over 10,000 euros.", tr: "10.000 euro üzeri nakit için beyan gereklidir." },
          { en: "The item may be seized.", tr: "Eşyaya el konabilir." },
        ],
        tip: "Bu yapıyı tanımak önemli: seni suçlamıyor, kuralı bildiriyor. Panik yapma sebebi değil.",
      },
      {
        title: "Yaklaşık ifadeler: roughly / around / somewhere in the region of",
        explain: "Kesin sayı bilmediğinde kullanılır. Bilmemek sorun değil, uydurmak sorundur.",
        examples: [
          { en: "Roughly how much are we talking about?", tr: "Yaklaşık ne kadardan bahsediyoruz?" },
          { en: "Somewhere around two hundred euros.", tr: "İki yüz euro civarında bir yerde." },
          { en: "It was about nine hundred, give or take.", tr: "Aşağı yukarı dokuz yüzdü." },
        ],
        tip: "'give or take' = 'aşağı yukarı'. Cümlenin sonuna eklenir ve çok doğal duyulur.",
      },
    ],
    pronunciation: [
      { word: "declaration", ipa: "/ˌdek.ləˈreɪ.ʃən/", tip: "dek-lı-REY-şın. Vurgu sondan ikinci hecede." },
      { word: "exceed", ipa: "/ɪkˈsiːd/", tip: "ik-SİİD. 'x' → 'ks', ikinci hece uzun." },
      { word: "restricted", ipa: "/rɪˈstrɪk.tɪd/", tip: "ri-STRİK-tid. Vurgu ortada." },
      { word: "quantity", ipa: "/ˈkwɒn.tə.ti/", tip: "KWON-tı-ti. 'qu' → 'kw'." },
      { word: "penalty", ipa: "/ˈpen.əl.ti/", tip: "PE-nıl-ti. Vurgu en başta." },
      { word: "purchase", ipa: "/ˈpɜː.tʃəs/", tip: "PÖÖ-çıs. Sonu 'çeys' değil, zayıf 'çıs'." },
    ],
  },

  /* ------------------------------- B2 ------------------------------- */
  b2: {
    dialogue: {
      title: "Ticari miktar şüphesi",
      summary: "Yolcunun taşıdığı numuneler ticari mal sanılıyor. Geçici ithalat ve nakit beyanı konuşuluyor.",
      lines: [
        { role: "officer",   en: "You've got fourteen identical handbags in this case. You'll understand why that's been flagged.", tr: "Bu bavulda on dört adet birbirinin aynısı çanta var. Bunun neden işaretlendiğini anlarsınız." },
        { role: "passenger", en: "Absolutely, and I'd have flagged it myself. They're samples for a trade fair, not goods for sale.", tr: "Kesinlikle, ben de işaretlerdim. Bunlar bir ticaret fuarı için numune, satılacak mal değil." },
        { role: "officer",   en: "Samples are treated differently, but the burden of proof sits with you. What documentation are you carrying?", tr: "Numuneler farklı değerlendirilir ama ispat yükü sizde. Yanınızda hangi belgeler var?" },
        { role: "passenger", en: "An exhibitor letter from the fair organisers and a temporary import declaration I filed online last week.", tr: "Fuar organizatörlerinden bir katılımcı mektubu ve geçen hafta online doldurduğum geçici ithalat beyanı." },
        { role: "officer",   en: "That's more than most people bring. Are the bags being taken back out of the country afterwards?", tr: "Bu çoğu kişinin getirdiğinden fazla. Çantalar sonrasında ülkeden geri çıkarılacak mı?" },
        { role: "passenger", en: "All fourteen, yes. If any were sold here, they'd have to be declared and duty paid — I'm aware of that.", tr: "On dördü de, evet. Burada satılan olursa beyan edilip vergisinin ödenmesi gerekir — bunun bilincindeyim." },
        { role: "officer",   en: "Good. And how much cash are you carrying? I'm obliged to ask.", tr: "İyi. Ne kadar nakit taşıyorsunuz? Sormak zorundayım." },
        { role: "passenger", en: "Around three thousand euros, which is below the declaration threshold as I understand it.", tr: "Yaklaşık üç bin euro, anladığım kadarıyla beyan eşiğinin altında." },
        { role: "officer",   en: "It is — the threshold is ten thousand. Was any of it given to you by someone else to carry?", tr: "Öyle — eşik on bin. Bunun herhangi bir kısmı taşımanız için başkası tarafından mı verildi?" },
        { role: "passenger", en: "None of it. It's my own money, drawn from my business account before I left.", tr: "Hiçbiri. Kendi param, ayrılmadan önce şirket hesabımdan çektim." },
        { role: "officer",   en: "Understood. I'm going to photograph the exhibitor letter and log the samples against your passport.", tr: "Anlaşıldı. Katılımcı mektubunu fotoğraflayıp numuneleri pasaportunuza kaydedeceğim." },
        { role: "passenger", en: "That suits me — it means there's a record if I'm stopped on the way out.", tr: "Bana uygun — çıkışta durdurulursam bir kayıt olmuş olur." },
        { role: "officer",   en: "Precisely the point. Had you arrived without paperwork, this would have taken two hours rather than ten minutes.", tr: "Tam olarak mesele bu. Belgesiz gelmiş olsaydınız bu on dakika değil iki saat sürerdi." },
        { role: "passenger", en: "I've learned that the hard way once. Never again.", tr: "Bunu bir kez zor yoldan öğrendim. Bir daha asla." },
      ],
    },
    reading: {
      title: "The Line Between a Gift and a Business",
      text: [
        "Customs law rests on a distinction that sounds simple and turns out to be anything but: the difference between goods for personal use and goods intended for sale. Duty-free allowances exist for the former; the latter attracts duty regardless of quantity, and the traveller who blurs the two is asking for trouble.",
        "The problem is that intention cannot be inspected. An officer confronted with fourteen identical handbags cannot open a passenger's mind, so a set of proxies has developed: quantity, uniformity, packaging, and whether the items still carry retail tags. None of these is conclusive on its own, and all of them can be explained — but they must actually be explained, and preferably with paper.",
        "Temporary import procedures exist for exactly this situation. Trade samples, professional equipment, musical instruments and exhibition goods can all cross borders without duty on the understanding that they will leave again, and formal schemes such as the ATA carnet were designed to make this straightforward. A carnet is essentially a passport for objects, stamped in and out like any traveller.",
        "What catches people out is not the law but the sequencing. Almost every concession in customs depends on being claimed before inspection rather than after. Declare the samples on arrival and they are samples; wait until an officer finds them and you are explaining, retrospectively, why fourteen handbags were never meant to be sold. The facts may be identical. Your position is not.",
      ],
      glossary: [
        { en: "rest on", tr: "-e dayanmak" },
        { en: "anything but", tr: "hiç de öyle değil" },
        { en: "blur", tr: "bulanıklaştırmak, sınırı silmek" },
        { en: "proxy", tr: "vekil gösterge, dolaylı ölçüt" },
        { en: "conclusive", tr: "kesin, belirleyici" },
        { en: "concession", tr: "muafiyet, taviz" },
        { en: "retrospectively", tr: "geriye dönük olarak" },
      ],
      quiz: [
        { q: "What distinction does customs law rest on?", options: ["Cheap versus expensive goods", "Personal use versus goods for sale", "New versus used items"], answer: 1 },
        { q: "Why do officers rely on proxies like quantity and packaging?", options: ["Intention cannot be inspected", "The law requires exactly those tests", "They are faster than asking"], answer: 0 },
        { q: "What does the text say catches people out?", options: ["The law itself", "High duty rates", "The sequencing — claiming concessions too late"], answer: 2 },
      ],
    },
    grammar: [
      {
        title: "Passive + modal: are treated / must be declared",
        explain: "Prosedür anlatımının standart yapısı. Eylemi kimin yaptığı belirtilmez.",
        examples: [
          { en: "Samples are treated differently.", tr: "Numuneler farklı değerlendirilir." },
          { en: "Cash over 10,000 euros must be declared.", tr: "10.000 euro üzeri nakit beyan edilmelidir." },
          { en: "The goods may be inspected at any time.", tr: "Mallar her an denetlenebilir." },
        ],
        tip: "Kendini savunurken de kullan: 'The samples were declared online last week.' Kişisel değil, olgusal durur.",
      },
      {
        title: "would have to / they'd have to — varsayımsal zorunluluk",
        explain: "Olası bir durumda doğacak zorunluluğu anlatır. Kural bilgini gösterir.",
        examples: [
          { en: "If any were sold here, they'd have to be declared.", tr: "Burada satılan olursa beyan edilmesi gerekir." },
          { en: "I would have to pay duty on the full amount.", tr: "Tam tutar üzerinden vergi ödemem gerekirdi." },
          { en: "You wouldn't have to declare it under the threshold.", tr: "Eşiğin altında beyan etmeniz gerekmezdi." },
        ],
        tip: "Kuralı kendin dile getirmek en güçlü hamledir: kural biliyor ve uyuyor olduğun anlaşılır.",
      },
      {
        title: "as I understand it / as far as I know — hedging",
        explain: "Emin olmadığın bilgiyi dürüstçe işaretler. Yanlış olursa yalan söylemiş olmazsın.",
        examples: [
          { en: "It's below the threshold, as I understand it.", tr: "Anladığım kadarıyla eşiğin altında." },
          { en: "As far as I know, tea is permitted.", tr: "Bildiğim kadarıyla çaya izin var." },
          { en: "I may be wrong, but I believe it's exempt.", tr: "Yanılıyor olabilirim ama muaf olduğuna inanıyorum." },
        ],
        tip: "Gümrükte 'kesin' konuşmak risklidir. Bu kalıplar hem dürüst hem güvenli bir orta yol açar.",
      },
      {
        title: "Devrik 3. tip koşul: Had you ...",
        explain: "'If' düşürülüp 'had' başa alınır. Resmî ve etkileyici bir yapıdır.",
        examples: [
          { en: "Had you arrived without paperwork, this would have taken two hours.", tr: "Belgesiz gelmiş olsaydınız bu iki saat sürerdi." },
          { en: "Had I known, I'd have filed the declaration earlier.", tr: "Bilseydim beyanı daha önce doldururdum." },
          { en: "Had it been sold, duty would have been payable.", tr: "Satılmış olsaydı vergi ödenmesi gerekirdi." },
        ],
        tip: "Yazılı bir açıklama ya da itiraz dilekçesinde bu yapı seviyeni tek cümlede yukarı taşır.",
      },
    ],
    pronunciation: [
      { word: "threshold", ipa: "/ˈθreʃ.həʊld/", tip: "THREŞ-hovld. Baştaki 'thr' kümesi peltek 'th' ile başlar." },
      { word: "commercial", ipa: "/kəˈmɜː.ʃəl/", tip: "kı-MÖÖ-şıl. Vurgu ikinci hecede." },
      { word: "temporarily", ipa: "/ˈtem.pər.ər.əl.i/", tip: "TEM-pı-rı-rı-li (UK). Vurgu en başta." },
      { word: "equipment", ipa: "/ɪˈkwɪp.mənt/", tip: "i-KWİP-mınt. Sayılamaz — 'equipments' yok." },
      { word: "currency", ipa: "/ˈkʌr.ən.si/", tip: "KA-rın-si. İlk hece 'ka'." },
      { word: "uniformity", ipa: "/ˌjuː.nɪˈfɔː.mə.ti/", tip: "yuu-ni-FOR-mı-ti. Ana vurgu 'FOR' hecesinde." },
    ],
  },

  /* ------------------------------- C1 ------------------------------- */
  c1: {
    dialogue: {
      title: "El koyma, ceza ve hafifletici sebep",
      summary: "Beyan edilmemiş bir eşya bulunuyor. Yolcu suçu kabul edip cezayı hafifletmeye çalışıyor.",
      lines: [
        { role: "officer",   en: "I've found an unboxed camera lens in your hand luggage that doesn't appear on any declaration.", tr: "El bagajınızda hiçbir beyanda görünmeyen, kutusuz bir kamera lensi buldum." },
        { role: "passenger", en: "It doesn't, and I'm not going to pretend otherwise. I bought it abroad and I failed to declare it.", tr: "Görünmüyor ve aksini iddia etmeyeceğim. Yurt dışında satın aldım ve beyan etmeyi ihmal ettim." },
        { role: "officer",   en: "That's a candid start, which helps. Was the omission deliberate?", tr: "Bu açık sözlü bir başlangıç, işe yarar. İhmal kasıtlı mıydı?" },
        { role: "passenger", en: "Careless rather than deliberate. I'd convinced myself that used equipment fell outside the allowance, which was wishful thinking rather than research.", tr: "Kasıtlı değil, dikkatsizce. Kullanılmış ekipmanın limit dışında kaldığına kendimi ikna etmiştim; bu araştırma değil, arzulu düşünceydi." },
        { role: "officer",   en: "The distinction matters procedurally. Deliberate concealment engages a penalty regime; a careless omission can often be settled with duty and a reduced charge.", tr: "Bu ayrım prosedürel olarak önemli. Kasıtlı gizleme bir ceza rejimini devreye sokar; dikkatsiz bir ihmal genellikle vergi ve indirimli bir ücretle kapatılabilir." },
        { role: "passenger", en: "Then I'd like to be assessed on that basis, and I'm happy to pay whatever is properly owed today.", tr: "O hâlde bu esasa göre değerlendirilmek isterim ve bugün usulüne uygun olarak borçlu olduğum her şeyi ödemekten memnuniyet duyarım." },
        { role: "officer",   en: "Do you have any evidence of the purchase price? Without it we'd have to value it ourselves, rarely to the traveller's advantage.", tr: "Alış fiyatına dair bir kanıtınız var mı? Olmadan değeri kendimiz takdir etmek zorunda kalırız, bu nadiren yolcunun lehine olur." },
        { role: "passenger", en: "I have the card statement on my phone — eight hundred and forty euros, dated the eleventh.", tr: "Telefonumda kart ekstrem var — sekiz yüz kırk euro, on birinci tarihli." },
        { role: "officer",   en: "That's contemporaneous evidence, which is exactly what we prefer. Not once, incidentally, has anyone shown me a bank statement so quickly.", tr: "Bu, olayla eşzamanlı bir kanıt ve tam olarak tercih ettiğimiz şey. Bu arada, bana bir banka ekstresini bu kadar hızlı gösteren olmadı." },
        { role: "passenger", en: "I've had eleven hours to think about it, to be honest. Would the lens itself be at risk of seizure?", tr: "Dürüst olmak gerekirse bunu düşünmek için on bir saatim vardı. Lensin kendisi el konma riski taşır mı?" },
        { role: "officer",   en: "Seizure is reserved for concealment or repeat offences. Nothing here suggests either, so I'd expect duty, VAT and a modest fine.", tr: "El koyma, gizleme ya da mükerrer ihlaller için saklıdır. Burada ikisini de düşündüren bir şey yok, dolayısıyla vergi, KDV ve mütevazı bir ceza beklerim." },
        { role: "passenger", en: "That seems proportionate, and I'd rather settle it here than have it hanging over me. Where do I pay?", tr: "Bu ölçülü görünüyor ve bunun üzerimde asılı kalmasındansa burada kapatmayı tercih ederim. Nereye ödeyeceğim?" },
        { role: "officer",   en: "The desk behind me. Had you argued with me for twenty minutes, you'd have paid the same amount and enjoyed it less.", tr: "Arkamdaki banko. Benimle yirmi dakika tartışmış olsaydınız aynı tutarı öder, ama daha az keyif alırdınız." },
        { role: "passenger", en: "That, I suspect, is the whole lesson.", tr: "Sanıyorum bütün ders bu." },
      ],
    },
    reading: {
      title: "Honesty as a Strategy",
      text: [
        "There is a curious feature of customs enforcement that rewards a behaviour most travellers instinctively avoid. Admitting fault, promptly and without qualification, very often produces a materially better outcome than defending a position that the evidence does not support.",
        "The reason is structural rather than sentimental. Enforcement regimes in most jurisdictions distinguish sharply between deliberate evasion and negligent omission, and the difference in consequence is enormous: the former can involve seizure, substantial multiples of the duty owed, and a record that follows the traveller for years, while the latter is frequently resolved with the duty itself and a modest administrative charge. Crucially, the classification is not fixed at the moment the item is found. It is influenced, sometimes decisively, by what happens in the following two minutes.",
        "A traveller who denies knowledge of an item, then concedes it, then offers a third account has done more than waste the officer's time. Each shift in the story is evidence bearing on intention, and intention is precisely the element the officer must determine. Conversely, an immediate and accurate admission, accompanied by documentation, is close to conclusive proof that nothing was being hidden — because nobody conceals an item and then produces the receipt for it unprompted.",
        "None of which is an argument for confessing to things you have not done, and it should not be mistaken for one. The point is narrower: where you are actually in the wrong, the cost of pretending otherwise is almost always higher than the cost of the original mistake. What is being assessed is rarely just an object. It is a person's account of that object, and how far that account holds up under the mildest pressure.",
      ],
      glossary: [
        { en: "without qualification", tr: "çekincesiz, koşulsuz" },
        { en: "materially better", tr: "esaslı biçimde daha iyi" },
        { en: "evasion", tr: "kaçırma, kaçakçılık" },
        { en: "negligent omission", tr: "ihmalkâr atlama" },
        { en: "multiples of", tr: "-in katları" },
        { en: "bearing on", tr: "-ile ilgili, -e etki eden" },
        { en: "hold up (under pressure)", tr: "(baskı altında) tutarlı kalmak" },
      ],
      quiz: [
        { q: "Why does admitting fault often produce a better outcome?", options: ["Officers feel sympathy", "The classification of the offence is still open", "The duty rate is lower"], answer: 1 },
        { q: "What does each shift in a traveller's story provide?", options: ["Evidence bearing on intention", "Grounds for an appeal", "A reason to reduce the fine"], answer: 0 },
        { q: "What is the text's narrow point?", options: ["Always confess to everything", "Where you are actually in the wrong, pretending costs more", "Never speak to officers"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Kabul + sınırlama: 'X rather than Y'",
        explain: "Suçu kabul ederken ağırlığını hafifletmenin en zarif yolu: iki nitelemeyi karşılaştırmak.",
        examples: [
          { en: "Careless rather than deliberate.", tr: "Kasıtlı değil, dikkatsizce." },
          { en: "It was wishful thinking rather than research.", tr: "Araştırma değil, arzulu düşünceydi." },
          { en: "The reason is structural rather than sentimental.", tr: "Sebep duygusal değil, yapısal." },
        ],
        tip: "Tek cümlede hem sorumluluğu alır hem kastı reddedersin. Hukuken ve insanen en güçlü hamle.",
      },
      {
        title: "would rather / 'd sooner + than",
        explain: "İki seçenek arasında tercih belirtir. Her iki fiil de yalın kalır.",
        examples: [
          { en: "I'd rather settle it here than have it hanging over me.", tr: "Üzerimde asılı kalmasındansa burada kapatmayı tercih ederim." },
          { en: "I'd sooner pay the duty than risk seizure.", tr: "El konma riskine girmektense vergiyi ödemeyi yeğlerim." },
          { en: "She'd rather not comment at this stage.", tr: "Bu aşamada yorum yapmamayı tercih ediyor." },
        ],
        tip: "'than'den sonra da 'to' gelmez: 'than have', 'than risk'. Türkçedeki '-mektense' karşılığıdır.",
      },
      {
        title: "Devrik yapı: Not once / Nothing here suggests",
        explain: "Olumsuz vurguyu öne çekerek iddiayı güçlendirir; sertleşmeden ağırlık kazandırır.",
        examples: [
          { en: "Not once has anyone shown me a statement so quickly.", tr: "Bana bir ekstreyi bu kadar hızlı gösteren bir kez olmadı." },
          { en: "Nothing here suggests deliberate concealment.", tr: "Burada kasıtlı gizlemeyi düşündüren bir şey yok." },
          { en: "At no stage was the item hidden.", tr: "Hiçbir aşamada eşya saklanmadı." },
        ],
        tip: "Kendini savunurken 'Nothing suggests...' kalıbı, 'I didn't...' demekten daha nesnel duyulur.",
      },
      {
        title: "Resmî değerlendirme dili: assess / settle / engage",
        explain: "Prosedür fiilleri. Doğru fiili kullanmak, konuyu bildiğini tek kelimede gösterir.",
        examples: [
          { en: "I'd like to be assessed on that basis.", tr: "Bu esasa göre değerlendirilmek isterim." },
          { en: "A careless omission can be settled with duty and a reduced charge.", tr: "Dikkatsiz bir ihmal, vergi ve indirimli bir ücretle kapatılabilir." },
          { en: "Deliberate concealment engages a penalty regime.", tr: "Kasıtlı gizleme bir ceza rejimini devreye sokar." },
        ],
        tip: "assess = değerlendirmek, settle = kapatmak/çözmek, engage = (kuralı) devreye sokmak. Üçü de resmî registerin çekirdeği.",
      },
    ],
    pronunciation: [
      { word: "seizure", ipa: "/ˈsiː.ʒər/", tip: "SİİJ-ır. Ortadaki 'z' Fransızca 'j' gibi." },
      { word: "inadvertently", ipa: "/ˌɪn.ədˈvɜː.tənt.li/", tip: "Ana vurgu 'VÖÖ' hecesinde: i-nıd-VÖÖ-tınt-li." },
      { word: "mitigate", ipa: "/ˈmɪt.ɪ.ɡeɪt/", tip: "Mİ-ti-geyt. Vurgu en başta." },
      { word: "concealment", ipa: "/kənˈsiːl.mənt/", tip: "kın-SİİL-mınt. Vurgu ortada." },
      { word: "contemporaneous", ipa: "/kənˌtem.pəˈreɪ.ni.əs/", tip: "Ana vurgu 'REY' hecesinde. Yavaş yavaş böl: kın-tem-pı-REY-ni-ıs." },
      { word: "proportionate", ipa: "/prəˈpɔː.ʃən.ət/", tip: "prı-POR-şı-nıt. Son hece zayıf." },
    ],
  },

  /* ------------------------------- C2 ------------------------------- */
  c2: {
    dialogue: {
      title: "Resmî temsil ve itiraz hakkı",
      summary: "El koyma kararına karşı, hukuki registerda yürütülen ölçülü bir itiraz.",
      lines: [
        { role: "officer",   en: "The decision has been taken to detain the item pending valuation. You'll be issued a notice, and there's an appeal route set out on the reverse.", tr: "Eşyanın değerleme yapılana kadar alıkonması yönünde karar verildi. Size bir tebligat düzenlenecek ve arka yüzünde bir itiraz yolu belirtilmiş." },
        { role: "passenger", en: "I understand, and I don't dispute your authority to detain. What I'd want on the record is that the valuation basis is contested from the outset.", tr: "Anlıyorum ve alıkoyma yetkinizi tartışmıyorum. Kayda geçmesini istediğim şey, değerleme esasının en baştan itibaren itiraza konu olduğu." },
        { role: "officer",   en: "Noted. On what grounds?", tr: "Not edildi. Hangi gerekçeyle?" },
        { role: "passenger", en: "The item was acquired second-hand from a private seller. Retail valuation would substantially overstate it, and the statement I've provided is the better evidence of value actually paid.", tr: "Eşya özel bir satıcıdan ikinci el olarak edinildi. Perakende değerleme onu esaslı biçimde olduğundan yüksek gösterir; sunduğum ekstre ise fiilen ödenen değerin daha iyi kanıtıdır." },
        { role: "officer",   en: "That's a legitimate argument, though not one I can determine here. It would fall to the review officer.", tr: "Bu meşru bir argüman, gerçi burada benim karara bağlayabileceğim bir şey değil. İnceleme görevlisine düşer." },
        { role: "passenger", en: "Which is precisely why I'd ask that the point be recorded verbatim rather than summarised. Summaries have a way of losing the argument they summarise.", tr: "Tam da bu yüzden bu hususun özetlenmek yerine aynen kaydedilmesini talep ediyorum. Özetler, özetledikleri argümanı kaybetme eğilimindedir." },
        { role: "officer",   en: "I can attach your written statement to the file unaltered. Were it summarised, you'd be relying on my paraphrase, and you're entitled not to.", tr: "Yazılı beyanınızı dosyaya değiştirilmeden ekleyebilirim. Özetlenecek olsa benim yorumuma bağlı kalırdınız ve buna mecbur olmama hakkınız var." },
        { role: "passenger", en: "That's more than I expected, frankly. Might I also have confirmation of the storage arrangements? A lens held in an unheated room for six weeks may not be the lens returned.", tr: "Dürüst olmak gerekirse beklediğimden fazlası. Depolama koşullarına dair bir teyit de alabilir miyim? Altı hafta ısıtılmayan bir odada tutulan bir lens, geri verilen lensle aynı olmayabilir." },
        { role: "officer",   en: "A fair concern, and one raised too rarely. Detained goods are held in controlled conditions, and the notice records the item's condition on receipt.", tr: "Haklı bir kaygı ve fazlasıyla nadiren dile getirilen bir kaygı. Alıkonan mallar kontrollü koşullarda tutulur ve tebligat, eşyanın teslim alındığındaki durumunu kaydeder." },
        { role: "passenger", en: "Then I'd ask that the condition note be as specific as the officer can make it, since a generic 'good condition' protects neither of us.", tr: "O hâlde durum notunun görevlinin yapabileceği kadar ayrıntılı olmasını talep ederim, zira genel bir 'iyi durumda' ifadesi ikimizi de korumaz." },
        { role: "officer",   en: "I'll photograph it from four angles and note the serial number. Should the appeal succeed, that record protects your claim as much as our position.", tr: "Dört açıdan fotoğraflayıp seri numarasını not edeceğim. İtiraz başarılı olacak olsa, o kayıt bizim konumumuz kadar sizin talebinizi de korur." },
        { role: "passenger", en: "Then we've built the same file for opposite reasons, which is probably how it ought to work. Thank you for the rigour.", tr: "O hâlde ikimiz zıt sebeplerle aynı dosyayı kurmuş olduk ki muhtemelen böyle işlemesi gerekiyor. Bu titizlik için teşekkürler." },
      ],
    },
    reading: {
      title: "Seizure, Detention, and the Difference Nobody Explains",
      text: [
        "Two words are used almost interchangeably in ordinary speech and mean entirely different things in customs practice. An item that has been detained remains, in principle, yours: it is held while a question is resolved, and if the question resolves in your favour it comes back. An item that has been seized has been taken on the basis that a legal condition for forfeiture is met, and recovering it requires you to displace that basis rather than merely to answer a query.",
        "The distinction has practical teeth. Detention is time-limited in many jurisdictions and generates an obligation to make a decision; seizure starts a clock of a different kind, typically a short window within which the traveller must contest the action or lose the goods by default. A traveller who assumes the two words are synonyms may therefore allow an appeal period to expire while waiting for a letter that is never coming.",
        "Compounding the difficulty, the notice handed over at the airport is often the only document a traveller will receive, and it is written to satisfy a statutory requirement rather than to be understood at the end of a fourteen-hour flight. Its most consequential sentence is rarely its most prominent one. The deadline, the address for correspondence and the precise legal basis relied upon may each appear once, in identical type, on the reverse.",
        "The rational response is unglamorous and effective: read the notice before leaving the airport, ask the officer to point to the deadline and the legal basis, and photograph both sides while you are still standing in front of the person who issued it. Almost every serious problem in this area arises not from an unfair decision but from an unread paragraph — and questions that are trivially easy to answer at the desk become, three weeks later, correspondence with a department that has never met you.",
      ],
      glossary: [
        { en: "interchangeably", tr: "birbirinin yerine, ayrım gözetmeden" },
        { en: "forfeiture", tr: "müsadere, mülkiyetin kaybı" },
        { en: "displace (a basis)", tr: "(bir gerekçeyi) çürütmek" },
        { en: "practical teeth", tr: "fiilî yaptırım gücü" },
        { en: "by default", tr: "kendiliğinden, aksi yapılmazsa" },
        { en: "compounding", tr: "durumu daha da güçleştiren" },
        { en: "consequential", tr: "sonuç doğuran, önem taşıyan" },
        { en: "unglamorous", tr: "cazip olmayan, sıradan" },
      ],
      quiz: [
        { q: "What is the key feature of a detained item?", options: ["It is legally forfeited", "It remains yours while a question is resolved", "It is destroyed"], answer: 1 },
        { q: "What risk does confusing the two terms create?", options: ["Paying duty twice", "Letting an appeal period expire", "Being refused entry"], answer: 1 },
        { q: "What does the text recommend doing at the airport?", options: ["Refuse to sign anything", "Read the notice and photograph both sides", "Wait for a letter"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Mandative subjunctive ile resmî talep",
        explain: "'ask / request / require that' sonrası fiil çekimsiz kalır. Sözlü talebi yazılı başvuru ağırlığına taşır.",
        examples: [
          { en: "I'd ask that the point be recorded verbatim.", tr: "Bu hususun aynen kaydedilmesini talep ediyorum." },
          { en: "I'd ask that the condition note be as specific as possible.", tr: "Durum notunun mümkün olduğunca ayrıntılı olmasını talep ederim." },
          { en: "It is required that the notice be issued in writing.", tr: "Tebligatın yazılı olarak düzenlenmesi gerekmektedir." },
        ],
        tip: "'be' asla 'is' olmaz. Bu tek harf, cümlenin registerini tamamen değiştirir.",
      },
      {
        title: "Were it / Should the ... — resmî devrik koşul",
        explain: "'if' düşürülüp yapı devrilir. Hukuki ve kurumsal yazının imzası.",
        examples: [
          { en: "Were it summarised, you'd be relying on my paraphrase.", tr: "Özetlenecek olsa benim yorumuma bağlı kalırdınız." },
          { en: "Should the appeal succeed, that record protects your claim.", tr: "İtiraz başarılı olacak olsa o kayıt talebinizi korur." },
          { en: "Had the item been seized, a different deadline would apply.", tr: "Eşyaya el konmuş olsaydı farklı bir süre uygulanırdı." },
        ],
        tip: "Were it / Should you / Had it — üçü de aynı mantık: 'if' atılır, yardımcı fiil başa geçer.",
      },
      {
        title: "Yetkiyi tanı, esası tart",
        explain: "En etkili C2 hamlesi: karşı tarafın yetkisini tartışmadan kararın dayanağını tartışmak.",
        examples: [
          { en: "I don't dispute your authority to detain.", tr: "Alıkoyma yetkinizi tartışmıyorum." },
          { en: "What I'd want on the record is that the basis is contested.", tr: "Kayda geçmesini istediğim şey, esasın itiraza konu olduğu." },
          { en: "That's a legitimate argument, though not one I can determine here.", tr: "Bu meşru bir argüman, gerçi burada karara bağlayabileceğim bir şey değil." },
        ],
        tip: "Yetkiye saldırırsan muhatabın savunmaya geçer. Esasa gidersen aynı kişi sana dosya kurmakta yardım eder.",
      },
      {
        title: "Nominalisation + kayıt dili",
        explain: "Eylemler isme dönüşünce cümle kurumsal bir ağırlık kazanır; 'on the record' ifadeleri de bu registerin parçası.",
        examples: [
          { en: "The decision has been taken to detain the item pending valuation.", tr: "Eşyanın değerleme yapılana kadar alıkonmasına karar verilmiştir." },
          { en: "Retail valuation would substantially overstate it.", tr: "Perakende değerleme onu esaslı biçimde olduğundan yüksek gösterir." },
          { en: "Summaries have a way of losing the argument they summarise.", tr: "Özetler, özetledikleri argümanı kaybetme eğilimindedir." },
        ],
        tip: "'pending' = beklemede/-e kadar. 'pending valuation', 'pending review' — tek kelimeyle koşul kurar.",
      },
    ],
    pronunciation: [
      { word: "statutory", ipa: "/ˈstætʃ.ə.tər.i/", tip: "STA-çı-tı-ri. Vurgu en başta, 'tu' → 'çı'." },
      { word: "jurisdiction", ipa: "/ˌdʒʊə.rɪsˈdɪk.ʃən/", tip: "Ana vurgu 'DİK' hecesinde: cuu-ris-DİK-şın." },
      { word: "forfeiture", ipa: "/ˈfɔː.fɪ.tʃər/", tip: "FOR-fi-çır. Sonu 'çır'; 'forfaytür' değil." },
      { word: "verbatim", ipa: "/vɜːˈbeɪ.tɪm/", tip: "vöö-BEY-tim. Vurgu ortada." },
      { word: "adjudication", ipa: "/əˌdʒuː.dɪˈkeɪ.ʃən/", tip: "Ana vurgu 'KEY' hecesinde: ı-cuu-di-KEY-şın." },
      { word: "indemnity", ipa: "/ɪnˈdem.nə.ti/", tip: "in-DEM-nı-ti. Vurgu ikinci hecede." },
    ],
  },
};
