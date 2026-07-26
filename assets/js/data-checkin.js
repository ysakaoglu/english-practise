/* =========================================================
   SENARYO: Check-in Bankosu — Görevli & Yolcu
   ========================================================= */

CONTENT.checkin = {
  /* ------------------------------- A1 ------------------------------- */
  a1: {
    dialogue: {
      title: "Bir bavul, bir koltuk",
      summary: "Yolcu tek bavulla check-in yapıyor. Kısa cümleler, sayılar ve saatler.",
      lines: [
        { role: "officer",   en: "Good morning. Where are you flying today?", tr: "Günaydın. Bugün nereye uçuyorsunuz?" },
        { role: "passenger", en: "To Berlin.", tr: "Berlin'e." },
        { role: "officer",   en: "Can I see your passport, please?", tr: "Pasaportunuzu görebilir miyim?" },
        { role: "passenger", en: "Yes, here you are.", tr: "Evet, buyurun." },
        { role: "officer",   en: "Do you have any bags?", tr: "Bagajınız var mı?" },
        { role: "passenger", en: "One bag. And this small backpack.", tr: "Bir bavul. Ve bu küçük sırt çantası." },
        { role: "officer",   en: "Please put the bag here.", tr: "Bavulu buraya koyun lütfen." },
        { role: "passenger", en: "OK. Is it too heavy?", tr: "Tamam. Çok mu ağır?" },
        { role: "officer",   en: "No, it is eighteen kilos. That is fine.", tr: "Hayır, on sekiz kilo. Bu uygun.", note: "Bagaj limiti çoğu ekonomi biletinde 20–23 kg'dır." },
        { role: "officer",   en: "Do you want a window seat or an aisle seat?", tr: "Cam kenarı mı koridor kenarı mı istersiniz?" },
        { role: "passenger", en: "I would like a window seat, please.", tr: "Cam kenarı istiyorum, lütfen." },
        { role: "officer",   en: "Here is your boarding pass. Seat 14A.", tr: "Biniş kartınız burada. Koltuk 14A." },
        { role: "officer",   en: "Gate 12. Boarding is at ten thirty.", tr: "Kapı 12. Biniş saat on buçukta." },
        { role: "passenger", en: "Thank you very much. Have a nice day!", tr: "Çok teşekkür ederim. İyi günler!" },
      ],
    },
    reading: {
      title: "At the Check-in Desk",
      text: [
        "It is seven o'clock in the morning. The airport is busy. There are many people with big bags.",
        "I am at desk number four. The woman behind the desk is very kind. She looks at my passport and she smiles.",
        "My bag is nineteen kilos. It is not too heavy. She puts a yellow tag on it, and the bag goes away on a black belt.",
        "Now I have my boarding pass. Gate 12, seat 14A, boarding at ten thirty. I have two hours. I want a coffee!",
      ],
      glossary: [
        { en: "desk", tr: "banko, masa" },
        { en: "busy", tr: "kalabalık, yoğun" },
        { en: "behind", tr: "arkasında" },
        { en: "kind", tr: "kibar, iyi kalpli" },
        { en: "tag", tr: "etiket" },
        { en: "belt", tr: "bant (bagaj bandı)" },
      ],
      quiz: [
        { q: "What time is it in the story?", options: ["Seven in the morning", "Ten thirty", "Two o'clock"], answer: 0 },
        { q: "How heavy is the bag?", options: ["Nineteen kilos", "Twelve kilos", "Fourteen kilos"], answer: 0 },
        { q: "What does the writer want now?", options: ["A seat", "A coffee", "A taxi"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "a / an / any — belirsiz miktarlar",
        explain: "Tek bir şey için 'a/an', sorularda ve olumsuzlarda 'any' kullanılır.",
        examples: [
          { en: "I have a bag and an umbrella.", tr: "Bir bavulum ve bir şemsiyem var." },
          { en: "Do you have any bags?", tr: "Bagajınız var mı?" },
          { en: "I don't have any liquids.", tr: "Hiç sıvı yok yanımda." },
        ],
        tip: "Sesli harfle başlayan kelimelerden önce 'an': an apple, an aisle seat, an hour.",
      },
      {
        title: "Can I ... ? — izin ve rica",
        explain: "Bir şey istemenin en kolay yolu. 'Can' sonrası fiil daima yalın hâlde kalır.",
        examples: [
          { en: "Can I see your passport?", tr: "Pasaportunuzu görebilir miyim?" },
          { en: "Can I have a window seat?", tr: "Cam kenarı koltuk alabilir miyim?" },
          { en: "Can you help me, please?", tr: "Bana yardım edebilir misiniz?" },
        ],
        tip: "'Can I have ...' cümlesinin sonuna 'please' ekle — İngilizce'de bunu atlamak kaba durur.",
      },
      {
        title: "I would like ... — kibarca istemek",
        explain: "'I want' biraz sert duyulur. Bankoda 'I would like' (kısaca 'I'd like') kullan.",
        examples: [
          { en: "I would like a window seat.", tr: "Cam kenarı koltuk istiyorum." },
          { en: "I'd like to sit with my friend.", tr: "Arkadaşımla oturmak istiyorum." },
          { en: "Would you like a receipt?", tr: "Fiş ister misiniz?" },
        ],
        tip: "İki kalıp: I'd like + isim (a seat) veya I'd like + to + fiil (to sit).",
      },
      {
        title: "Saat söyleme",
        explain: "Havalimanında en çok duyacağın şey saatlerdir. İki yol var: basit okuma ve 'past/to' yöntemi.",
        examples: [
          { en: "Boarding is at ten thirty.", tr: "Biniş on buçukta." },
          { en: "The flight leaves at a quarter past six.", tr: "Uçuş altıyı çeyrek geçe kalkıyor." },
          { en: "We land at ten to nine.", tr: "Dokuza on kala iniyoruz." },
        ],
        tip: "Saatten önce daima 'at': at ten thirty. 'in ten thirty' diye bir şey yok.",
      },
    ],
    pronunciation: [
      { word: "aisle", ipa: "/aɪl/", tip: "Sadece 'ayl'. Baştaki 's' hiç okunmaz — 'eysıl' değil!" },
      { word: "luggage", ipa: "/ˈlʌɡ.ɪdʒ/", tip: "LAG-ic. Sonu 'c' gibi biter, 'geyc' değil." },
      { word: "boarding", ipa: "/ˈbɔː.dɪŋ/", tip: "BOR-ding. 'r' İngiliz aksanında yutulur, sesli uzar." },
      { word: "gate", ipa: "/ɡeɪt/", tip: "'geyt'. Sonundaki 't' net söylenir." },
      { word: "window", ipa: "/ˈwɪn.dəʊ/", tip: "WİN-dov. Sonu 'o' değil, hafif 'ov' diftongu." },
      { word: "kilo", ipa: "/ˈkiː.ləʊ/", tip: "KİİL-ov. İlk hece uzun; Türkçedeki 'kilo' gibi kısa değil." },
    ],
  },

  /* ------------------------------- A2 ------------------------------- */
  a2: {
    dialogue: {
      title: "Fazla bagaj ücreti",
      summary: "Yolcunun bavulu limiti aşıyor. Karşılaştırma yapıları ve zorunluluk ifadeleri devrede.",
      lines: [
        { role: "officer",   en: "Good afternoon. Passport and booking reference, please.", tr: "İyi günler. Pasaport ve rezervasyon kodu lütfen." },
        { role: "passenger", en: "Here you are. I checked in online yesterday.", tr: "Buyurun. Dün internetten giriş yaptım." },
        { role: "officer",   en: "Thank you. How many bags are you checking in?", tr: "Kaç bavul vereceksiniz?" },
        { role: "passenger", en: "Two. This one is heavier than the other one.", tr: "İki. Bu diğerinden daha ağır." },
        { role: "officer",   en: "Let's see. This one is twenty-six kilos. Your limit is twenty-three.", tr: "Bakalım. Bu yirmi altı kilo. Limitiniz yirmi üç." },
        { role: "passenger", en: "Oh no. Do I have to pay?", tr: "Olamaz. Ödemem gerekiyor mu?" },
        { role: "officer",   en: "Yes, you have to pay for three extra kilos. It is fifteen euros per kilo.", tr: "Evet, üç fazla kilo için ödemeniz gerekiyor. Kilosu on beş euro." },
        { role: "passenger", en: "That's expensive! Can I move some things to my other bag?", tr: "Bu pahalı! Bazı şeyleri diğer bavuluma aktarabilir miyim?" },
        { role: "officer",   en: "Of course. The other bag is only eighteen kilos, so you have five kilos free.", tr: "Elbette. Diğer bavul sadece on sekiz kilo, yani beş kilo boşluğunuz var." },
        { role: "passenger", en: "Great. I moved my shoes and a jacket. Can you weigh it again?", tr: "Harika. Ayakkabılarımı ve bir montu aktardım. Tekrar tartabilir misiniz?" },
        { role: "officer",   en: "Twenty-two and twenty-two. Perfect — no charge.", tr: "Yirmi iki ve yirmi iki. Mükemmel — ücret yok." },
        { role: "passenger", en: "Thank you so much! You saved me forty-five euros.", tr: "Çok teşekkür ederim! Bana kırk beş euro kazandırdınız." },
        { role: "officer",   en: "Happy to help. Your bags go to Rome, and boarding starts at four.", tr: "Yardımcı olduğuma sevindim. Bavullarınız Roma'ya gidiyor, biniş dörtte başlıyor." },
        { role: "passenger", en: "Which gate is it?", tr: "Hangi kapı?" },
        { role: "officer",   en: "Gate B7. Please check the screens — gates sometimes change.", tr: "B7 kapısı. Ekranları kontrol edin — kapılar bazen değişir." },
        { role: "passenger", en: "I will. Thanks again!", tr: "Ederim. Tekrar teşekkürler!" },
      ],
    },
    reading: {
      title: "The Trick with the Heavy Coat",
      text: [
        "Last March, I travelled to Milan with two friends. We bought cheap tickets, so our baggage allowance was very small — only fifteen kilos each.",
        "At the check-in desk, my bag was two kilos over the limit. The man told me the price: twelve euros for every extra kilo. I didn't want to pay twenty-four euros for two kilos!",
        "So I did something silly. I opened my bag, took out my heaviest coat, two books and a pair of boots, and I put them all on. I looked like a bear. My friends laughed at me for ten minutes.",
        "But it worked. My bag was fourteen kilos, and I paid nothing. On the plane I was very, very hot — but I still had my twenty-four euros for pizza in Milan.",
      ],
      glossary: [
        { en: "baggage allowance", tr: "bagaj hakkı" },
        { en: "over the limit", tr: "limitin üzerinde" },
        { en: "extra", tr: "fazla, ekstra" },
        { en: "silly", tr: "saçma, aptalca" },
        { en: "a pair of boots", tr: "bir çift bot" },
        { en: "laugh at", tr: "birine gülmek" },
      ],
      quiz: [
        { q: "How big was their baggage allowance?", options: ["Fifteen kilos", "Twenty-three kilos", "Two kilos"], answer: 0 },
        { q: "What did the writer do with the coat and boots?", options: ["Left them at home", "Put them all on", "Gave them to a friend"], answer: 1 },
        { q: "How did the writer feel on the plane?", options: ["Cold", "Bored", "Very hot"], answer: 2 },
      ],
    },
    grammar: [
      {
        title: "Karşılaştırma: -er than / more ... than",
        explain: "Kısa sıfatlara -er eklenir; iki heceden uzun sıfatların önüne 'more' gelir.",
        examples: [
          { en: "This bag is heavier than that one.", tr: "Bu bavul şundan daha ağır." },
          { en: "Online check-in is cheaper.", tr: "İnternetten giriş daha ucuz." },
          { en: "This seat is more comfortable.", tr: "Bu koltuk daha rahat." },
        ],
        tip: "heavy → heavier (y düşer, i olur). big → bigger (son harf çiftlenir). good → better (düzensiz).",
      },
      {
        title: "have to — zorunluluk",
        explain: "Kural yüzünden yapılması gereken şeyler. Olumsuzu 'don't have to' = gerek yok.",
        examples: [
          { en: "You have to pay for extra kilos.", tr: "Fazla kilo için ödemeniz gerekiyor." },
          { en: "Do I have to check in this bag?", tr: "Bu bavulu vermem gerekiyor mu?" },
          { en: "You don't have to print your ticket.", tr: "Biletinizi yazdırmanız gerekmiyor." },
        ],
        tip: "Soru sorarken 'do/does' kullan: 'Do I have to pay?' — 'Have I to pay?' yanlıştır.",
      },
      {
        title: "much / many / a lot of",
        explain: "Sayılabilenlerle 'many', sayılamayanlarla 'much'. 'A lot of' ikisiyle de çalışır.",
        examples: [
          { en: "How many bags do you have?", tr: "Kaç bavulunuz var?" },
          { en: "How much does it cost?", tr: "Ne kadar tutuyor?" },
          { en: "There are a lot of people at the desk.", tr: "Bankoda çok insan var." },
        ],
        tip: "money, luggage, information, time → hepsi sayılamaz. 'luggages' diye bir kelime yok!",
      },
      {
        title: "Yer edatları: at / on / in",
        explain: "Havalimanı cümlelerinde en sık karıştırılan üç edat.",
        examples: [
          { en: "I am at the check-in desk.", tr: "Check-in bankosundayım." },
          { en: "My laptop is in my backpack.", tr: "Dizüstüm sırt çantamda." },
          { en: "We are on the plane.", tr: "Uçaktayız." },
        ],
        tip: "Nokta gibi yerler → at (at gate B7). İçi olan yerler → in. Yüzeyler ve araçlar → on.",
      },
    ],
    pronunciation: [
      { word: "weigh", ipa: "/weɪ/", tip: "Sadece 'wey' — 'gh' tamamen sessiz. 'way' ile aynı okunur." },
      { word: "receipt", ipa: "/rɪˈsiːt/", tip: "ri-SİİT. Ortadaki 'p' okunmaz." },
      { word: "excess", ipa: "/ɪkˈses/", tip: "ik-SES. 'excess baggage' derken vurgu 'EK-ses'e kayar." },
      { word: "allowance", ipa: "/əˈlaʊ.əns/", tip: "ı-LAU-ıns. Vurgu ikinci hecede, 'ow' → 'au'." },
      { word: "charge", ipa: "/tʃɑːdʒ/", tip: "'çaac'. Baş 'ç', son 'c' — 'çarg' değil." },
      { word: "overweight", ipa: "/ˌəʊ.vəˈweɪt/", tip: "Ana vurgu sonda: ov-vı-WEYT." },
    ],
  },

  /* ------------------------------- B1 ------------------------------- */
  b1: {
    dialogue: {
      title: "Kırılabilir eşya ve aktarma",
      summary: "Yolcunun kırılabilir bir eşyası var ve aktarmalı uçuşta bagajının nereye gideceğini soruyor.",
      lines: [
        { role: "officer",   en: "Good evening. Are you travelling all the way to Osaka?", tr: "İyi akşamlar. Osaka'ya kadar mı gidiyorsunuz?" },
        { role: "passenger", en: "That's right, with a connection in Doha. I've already checked in online.", tr: "Doğru, Doha aktarmalı. İnternetten giriş yaptım zaten." },
        { role: "officer",   en: "Perfect, I just need to tag your bags. Will you be checking both of these in?", tr: "Harika, sadece bavullarınızı etiketlemem gerekiyor. İkisini de verecek misiniz?" },
        { role: "passenger", en: "Yes, but one of them contains a guitar. Could you mark it as fragile?", tr: "Evet ama birinin içinde gitar var. Kırılabilir olarak işaretleyebilir misiniz?" },
        { role: "officer",   en: "Certainly. Is it in a hard case? Soft cases aren't covered if something breaks.", tr: "Elbette. Sert kutuda mı? Bir şey kırılırsa yumuşak kılıflar kapsam dışında." },
        { role: "passenger", en: "It's a hard case, thankfully. I'd rather not risk it on a twelve-hour trip.", tr: "İyi ki sert kutuda. On iki saatlik yolculukta risk almak istemem." },
        { role: "officer",   en: "Sensible. Your bags will be tagged all the way through to Osaka, so you don't need to collect them in Doha.", tr: "Makul. Bavullarınız Osaka'ya kadar etiketlenecek, yani Doha'da almanız gerekmiyor." },
        { role: "passenger", en: "That's a relief. How long is my connection, by the way?", tr: "Bu rahatlatıcı. Bu arada aktarma sürem ne kadar?" },
        { role: "officer",   en: "Two hours and ten minutes. It's tight but manageable — the gates are in the same terminal.", tr: "İki saat on dakika. Sıkışık ama idare edilebilir — kapılar aynı terminalde." },
        { role: "passenger", en: "Good. Would you mind giving me an aisle seat on the long leg? I haven't slept much.", tr: "İyi. Uzun etapta bana koridor koltuğu verebilir misiniz? Pek uyumadım." },
        { role: "officer",   en: "I've put you in 32C, which is near the back but has extra legroom.", tr: "Sizi 32C'ye yerleştirdim, arkaya yakın ama fazladan bacak mesafesi var." },
        { role: "passenger", en: "That works for me. And what happens if my first flight is delayed?", tr: "Bana uygun. Peki ilk uçuşum rötar yaparsa ne olur?" },
        { role: "officer",   en: "Since both flights are on the same ticket, you'd be rebooked automatically at no cost.", tr: "İki uçuş da aynı bilette olduğu için ücretsiz olarak otomatik yeniden rezerve edilirdiniz." },
        { role: "passenger", en: "Thanks for explaining. That's exactly what I wanted to know.", tr: "Açıkladığınız için teşekkürler. Tam da bilmek istediğim şeydi." },
      ],
    },
    reading: {
      title: "Where Your Suitcase Actually Goes",
      text: [
        "Every year, airlines handle more than four billion bags, and the overwhelming majority arrive exactly where they should. The system that makes this possible is surprisingly simple: a paper tag with a ten-digit number.",
        "When your bag is tagged at check-in, that number is linked to your booking, your flight and your final destination. Scanners along the conveyor belts read the tag dozens of times before the bag reaches the aircraft. If a bag takes a wrong turn, the system usually notices within minutes.",
        "Problems tend to appear at connections. If your layover is short and your first flight arrives late, there may simply not be enough time to move your bag from one aircraft to another — even though you managed to run to the gate yourself. This is why airlines publish a 'minimum connection time' for every airport.",
        "There is one detail that catches travellers out repeatedly. If you have booked two separate tickets rather than one connected itinerary, your bag will not be transferred automatically. You will have to collect it, leave the secure area, and check in again from the beginning.",
      ],
      glossary: [
        { en: "overwhelming majority", tr: "büyük çoğunluk" },
        { en: "conveyor belt", tr: "taşıma bandı" },
        { en: "take a wrong turn", tr: "yanlış yöne sapmak" },
        { en: "layover", tr: "aktarma bekleme süresi" },
        { en: "itinerary", tr: "seyahat planı, güzergâh" },
        { en: "catch someone out", tr: "birini hazırlıksız yakalamak" },
      ],
      quiz: [
        { q: "What links your bag to your flight?", options: ["Your name written on it", "A ten-digit number on the tag", "The colour of the tag"], answer: 1 },
        { q: "Why do bags get left behind at connections?", options: ["There isn't enough time to move them", "Passengers forget them", "Scanners are switched off"], answer: 0 },
        { q: "What happens with two separate tickets?", options: ["The bag is transferred faster", "You must collect and re-check the bag", "The airline pays for the transfer"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Would you mind ... ? — en kibar rica",
        explain: "Bir şey isterken en yumuşak kalıp. Ardından daima fiilin -ing hâli gelir.",
        examples: [
          { en: "Would you mind giving me an aisle seat?", tr: "Bana koridor koltuğu verebilir misiniz?" },
          { en: "Would you mind waiting a moment?", tr: "Bir dakika bekler misiniz?" },
          { en: "Do you mind if I sit here?", tr: "Buraya oturmamın sakıncası var mı?" },
        ],
        tip: "Dikkat: 'Would you mind ...?' sorusuna olumlu cevap 'Not at all' veya 'Of course not' — 'Yes' demek 'hayır, istemiyorum' anlamına gelir!",
      },
      {
        title: "I'd rather ... — tercih belirtme",
        explain: "'Tercih ederim' demenin kısa yolu. Sonrasında fiil yalın gelir, 'to' almaz.",
        examples: [
          { en: "I'd rather not risk it.", tr: "Riske atmamayı tercih ederim." },
          { en: "I'd rather sit by the window.", tr: "Cam kenarında oturmayı tercih ederim." },
          { en: "I'd rather pay than leave the bag.", tr: "Bavulu bırakmaktansa ödemeyi tercih ederim." },
        ],
        tip: "'I'd rather to sit' yanlıştır. 'to' asla gelmez — 'I'd rather sit'.",
      },
      {
        title: "too / enough — yeterlilik ve fazlalık",
        explain: "'too' olumsuz bir fazlalık, 'enough' yeterlilik anlatır. Yerleri farklıdır.",
        examples: [
          { en: "This bag is too heavy.", tr: "Bu bavul çok ağır (fazla ağır)." },
          { en: "The case isn't strong enough.", tr: "Kutu yeterince sağlam değil." },
          { en: "There isn't enough time to transfer the bag.", tr: "Bavulu aktarmak için yeterli zaman yok." },
        ],
        tip: "too + sıfat (too heavy), ama sıfat + enough (heavy enough). İsimden önce ise enough + isim (enough time).",
      },
      {
        title: "Present Perfect: already / just / yet",
        explain: "Şu ana bağlı, tarihi belirtilmemiş eylemler. Bu üç zarf hemen hemen her zaman present perfect ile gelir.",
        examples: [
          { en: "I've already checked in online.", tr: "İnternetten giriş yaptım zaten." },
          { en: "I've just arrived at the airport.", tr: "Havalimanına henüz vardım." },
          { en: "They haven't called our flight yet.", tr: "Uçuşumuzu henüz anons etmediler." },
        ],
        tip: "already ve just yardımcı fiille fiil arasına, yet ise cümlenin sonuna gider.",
      },
    ],
    pronunciation: [
      { word: "fragile", ipa: "/ˈfrædʒ.aɪl/ (UK) · /ˈfrædʒ.əl/ (US)", tip: "İngiliz 'FRA-cayl', Amerikan 'FRA-cıl' der." },
      { word: "itinerary", ipa: "/aɪˈtɪn.ə.rər.i/", tip: "ay-TİN-rı-ri. Vurgu ikinci hecede; en çok yanlış okunan kelimelerden." },
      { word: "priority", ipa: "/praɪˈɒr.ə.ti/", tip: "pray-OR-ı-ti. İlk hece 'pri' değil 'pray'." },
      { word: "transfer", ipa: "/ˈtræns.fɜː/ (isim) · /trænsˈfɜː/ (fiil)", tip: "İsimken vurgu başta, fiilken sonda. Anlam aynı, ritim farklı." },
      { word: "conveyor", ipa: "/kənˈveɪ.ər/", tip: "kın-VEY-ır. Vurgu ortada, ilk hece yutulur." },
      { word: "legroom", ipa: "/ˈleɡ.ruːm/", tip: "LEG-ruum. Birleşik kelime, vurgu ilk parçada." },
    ],
  },

  /* ------------------------------- B2 ------------------------------- */
  b2: {
    dialogue: {
      title: "Uçuş overbook edildi",
      summary: "Uçuş fazla satılmış. Görevli gönüllü arıyor; yolcu koşullarını pazarlıyor.",
      lines: [
        { role: "officer",   en: "I'm afraid I have to be upfront with you: this flight has been overbooked.", tr: "Size açık olmak zorundayım: bu uçuş fazla satılmış." },
        { role: "passenger", en: "I see. Does that mean I might not get on?", tr: "Anlıyorum. Bu uçağa binemeyebileceğim anlamına mı geliyor?" },
        { role: "officer",   en: "Not necessarily. We're looking for volunteers to take a later flight, and we're offering compensation.", tr: "Şart değil. Daha sonraki uçuşa geçecek gönüllüler arıyoruz ve tazminat teklif ediyoruz." },
        { role: "passenger", en: "What exactly is being offered? I'd need to know before I commit to anything.", tr: "Tam olarak ne teklif ediliyor? Bir şeye bağlanmadan önce bilmem gerekir." },
        { role: "officer",   en: "Four hundred euros in vouchers and a confirmed seat on the eight o'clock flight this evening.", tr: "Dört yüz euro değerinde kupon ve bu akşam sekiz uçuşunda garantili koltuk." },
        { role: "passenger", en: "Vouchers aren't much use to me, honestly. Could that be paid in cash instead?", tr: "Kuponlar bana pek işe yaramaz, dürüst olmak gerekirse. Bunun yerine nakit ödenebilir mi?" },
        { role: "officer",   en: "Cash compensation can be arranged, but it would be a lower amount — three hundred.", tr: "Nakit tazminat ayarlanabilir ama daha düşük bir tutar olur — üç yüz." },
        { role: "passenger", en: "And if I'm delayed by eight hours, wouldn't I be entitled to a meal as well?", tr: "Peki sekiz saat gecikirsem, bir de yemek hakkım olmaz mıydı?" },
        { role: "officer",   en: "You would, yes. I can add lounge access and a meal voucher on top of that.", tr: "Olurdu, evet. Bunun üstüne lounge erişimi ve yemek kuponu ekleyebilirim." },
        { role: "passenger", en: "In that case I'll volunteer — provided the later flight is guaranteed, not standby.", tr: "O hâlde gönüllü olurum — yeter ki sonraki uçuş garantili olsun, yedek listede değil." },
        { role: "officer",   en: "It's confirmed. I'm issuing your new boarding pass now, along with the paperwork.", tr: "Onaylı. Yeni biniş kartınızı ve evrakları şimdi düzenliyorum." },
        { role: "passenger", en: "Could I have the compensation agreement in writing before I leave the desk?", tr: "Bankodan ayrılmadan önce tazminat anlaşmasını yazılı alabilir miyim?" },
        { role: "officer",   en: "Absolutely — you should never accept an offer like this without documentation.", tr: "Kesinlikle — böyle bir teklifi asla belge olmadan kabul etmemelisiniz." },
        { role: "passenger", en: "Thank you for handling it so transparently. That's made the decision much easier.", tr: "Bu kadar şeffaf ele aldığınız için teşekkürler. Kararı çok kolaylaştırdı." },
      ],
    },
    reading: {
      title: "Why Airlines Sell Seats They Don't Have",
      text: [
        "Overbooking sounds like incompetence, but it is in fact a carefully calculated policy. On a typical flight, a predictable percentage of passengers simply fail to turn up — they miss connections, change plans, or oversleep. If airlines sold exactly as many tickets as they had seats, aircraft would routinely depart with empty rows that had already been paid for but could not be resold.",
        "So seats are deliberately oversold, and the number is determined by historical no-show data for that particular route, day and season. Most of the time the gamble pays off and nobody notices. Occasionally everybody turns up, and the airline has a problem it must buy its way out of.",
        "This is where passengers gain unexpected leverage. An airline that cannot seat everyone is legally obliged to compensate those who are denied boarding, and the amounts involved are often substantial. Crucially, the compensation for volunteering is negotiable, whereas the compensation for being denied involuntarily is fixed by regulation.",
        "The practical lesson is worth remembering. If you are asked to volunteer and your schedule is genuinely flexible, the first offer is rarely the best one available. Ask what the alternative flight is, whether it is confirmed rather than standby, and whether meals and accommodation are included. Then ask for it all in writing.",
      ],
      glossary: [
        { en: "incompetence", tr: "yetersizlik, beceriksizlik" },
        { en: "fail to turn up", tr: "gelmemek, ortaya çıkmamak" },
        { en: "no-show", tr: "rezervasyonuna gelmeyen yolcu" },
        { en: "the gamble pays off", tr: "kumar tutar, risk işe yarar" },
        { en: "leverage", tr: "pazarlık gücü" },
        { en: "be obliged to", tr: "yükümlü olmak" },
        { en: "negotiable", tr: "pazarlığa açık" },
      ],
      quiz: [
        { q: "Why do airlines oversell seats?", options: ["To punish late passengers", "Because some passengers never turn up", "Because seats are cheap"], answer: 1 },
        { q: "What is fixed by regulation?", options: ["Compensation for volunteering", "Compensation for involuntary denied boarding", "The price of the ticket"], answer: 1 },
        { q: "What does the text advise about the first offer?", options: ["Accept it immediately", "It is rarely the best available", "Always refuse it"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Modal + passive: can be / would be / should be",
        explain: "Kurumsal İngilizcede işlemler kişisiz anlatılır. Modal + be + V3 kalıbı bu yüzden her yerde.",
        examples: [
          { en: "Cash compensation can be arranged.", tr: "Nakit tazminat ayarlanabilir." },
          { en: "Your bag must be checked in at the desk.", tr: "Bavulunuz bankoda teslim edilmelidir." },
          { en: "You should have been informed earlier.", tr: "Size daha önce bilgi verilmiş olmalıydı." },
        ],
        tip: "Şikâyet ederken 'should have been + V3' çok güçlüdür: kimseyi suçlamadan hatayı ortaya koyar.",
      },
      {
        title: "provided (that) / as long as — koşul koyma",
        explain: "Pazarlıkta şart öne sürmenin en net yolu. 'if' ile aynı işi yapar ama daha kesin durur.",
        examples: [
          { en: "I'll volunteer, provided the flight is confirmed.", tr: "Uçuş onaylı olması koşuluyla gönüllü olurum." },
          { en: "As long as I arrive tonight, that's fine.", tr: "Bu gece varacaksam sorun yok." },
          { en: "I'll accept it unless there's a better option.", tr: "Daha iyi bir seçenek olmadıkça kabul edeceğim." },
        ],
        tip: "unless = if not. 'Unless it rains' = 'If it doesn't rain'. İkisini üst üste kullanma.",
      },
      {
        title: "Kibar itiraz: olumsuz soru + wouldn't / shouldn't",
        explain: "Karşı tarafı köşeye sıkıştırmadan hak talep etmenin en etkili yolu olumsuz soru kurmaktır.",
        examples: [
          { en: "Wouldn't I be entitled to a meal as well?", tr: "Bir de yemek hakkım olmaz mıydı?" },
          { en: "Shouldn't that be covered by the airline?", tr: "Bunun havayolu tarafından karşılanması gerekmez mi?" },
          { en: "Isn't there an earlier flight available?", tr: "Daha erken bir uçuş yok mu?" },
        ],
        tip: "Bu yapı 'bunu biliyorum ama seni suçlamıyorum' mesajı verir — çatışmayı azaltır, sonuç getirir.",
      },
      {
        title: "whereas / while — karşıtlık kurma",
        explain: "İki durumu yan yana koyup farkı vurgular. Yazılı dilde ve tartışmada çok işe yarar.",
        examples: [
          { en: "Volunteer compensation is negotiable, whereas involuntary compensation is fixed.", tr: "Gönüllü tazminatı pazarlığa açıkken zorunlu tazminat sabittir." },
          { en: "While I understand the situation, I can't miss my meeting.", tr: "Durumu anlıyorum ama toplantımı kaçıramam." },
          { en: "The first flight was on time, whereas the second was cancelled.", tr: "İlk uçuş zamanındaydı, ikincisi ise iptal edildi." },
        ],
        tip: "'While' hem 'iken' hem 'rağmen' anlamı taşır; karşıtlık için cümle başında kullanmak en nettir.",
      },
    ],
    pronunciation: [
      { word: "overbooked", ipa: "/ˌəʊ.vəˈbʊkt/", tip: "Ana vurgu 'BUKT' hecesinde. Sonu tek nefeste 'kt'." },
      { word: "compensation", ipa: "/ˌkɒm.penˈseɪ.ʃən/", tip: "Vurgu sondan ikinci hecede: kom-pen-SEY-şın." },
      { word: "voluntarily", ipa: "/ˌvɒl.ənˈter.əl.i/", tip: "Beş hece. Yavaş başla: vo-lın-TE-rı-li." },
      { word: "entitled", ipa: "/ɪnˈtaɪ.təld/", tip: "in-TAY-tıld. Ortadaki hece 'tay' diye açılır." },
      { word: "guarantee", ipa: "/ˌɡær.ənˈtiː/", tip: "Vurgu en sonda: ga-rın-Tİİİ. 'GA-ranti' değil." },
      { word: "transparently", ipa: "/trænsˈpær.ənt.li/", tip: "trans-PA-rınt-li. Vurgu ikinci hecede." },
    ],
  },

  /* ------------------------------- C1 ------------------------------- */
  c1: {
    dialogue: {
      title: "Biniş reddi ve tazminat müzakeresi",
      summary: "Yolcu iradesi dışında uçuşa alınmıyor. Nazik ama kararlı bir hak müzakeresi.",
      lines: [
        { role: "officer",   en: "I'm going to have to give you some unwelcome news. We've been unable to seat you on this service.", tr: "Size istenmeyen bir haber vermek zorundayım. Sizi bu sefere yerleştiremedik." },
        { role: "passenger", en: "Let me make sure I understand. Am I being denied boarding involuntarily?", tr: "Doğru anladığımdan emin olayım. İrademe aykırı olarak binişim mi reddediliyor?" },
        { role: "officer",   en: "In practical terms, yes, although we'd obviously prefer to resolve it amicably.", tr: "Pratikte evet, gerçi bunu dostane biçimde çözmeyi tercih ederiz elbette." },
        { role: "passenger", en: "Then I'd like the classification recorded accurately, since the entitlements differ considerably.", tr: "O hâlde sınıflandırmanın doğru kaydedilmesini isterim, çünkü haklar hayli farklı." },
        { role: "officer",   en: "Noted, and that's a fair point. What I can offer immediately is a rerouting via Frankfurt, arriving at eleven.", tr: "Not aldım, haklı bir tespit. Hemen sunabileceğim şey Frankfurt üzerinden yönlendirme, on birde varış." },
        { role: "passenger", en: "That's a six-hour delay on a three-hour flight. Under no circumstances can I accept that as equivalent.", tr: "Üç saatlik bir uçuşta altı saatlik gecikme demek. Bunu hiçbir koşulda eşdeğer olarak kabul edemem." },
        { role: "officer",   en: "I appreciate the frustration. Had a seat become available, you'd have been my first call.", tr: "Bu can sıkıntısını anlıyorum. Bir koltuk boşalmış olsaydı ilk arayacağım kişi siz olurdunuz." },
        { role: "passenger", en: "What I'd like to establish is whether a competitor's flight can be considered, given the delay involved.", tr: "Netleştirmek istediğim şey, söz konusu gecikme göz önüne alındığında başka bir havayolunun uçuşunun değerlendirilip değerlendirilemeyeceği." },
        { role: "officer",   en: "That's discretionary rather than automatic, but it isn't out of the question. Let me check availability.", tr: "Bu otomatik değil, takdire bağlı ama imkânsız da değil. Müsaitliğe bakayım." },
        { role: "passenger", en: "I'd be grateful. And to be clear, I'm not disputing your handling of this — only the outcome.", tr: "Minnettar olurum. Açık olmak gerekirse, bu işi ele alışınızı sorgulamıyorum — yalnızca sonucu." },
        { role: "officer",   en: "Understood, and it's noted as such. There's a seat at four, arriving barely an hour late.", tr: "Anlaşıldı ve öyle kaydedildi. Dörtte bir koltuk var, ancak bir saat gecikmeli varış." },
        { role: "passenger", en: "That I can work with. May I have written confirmation of the compensation due alongside the new booking?", tr: "Bununla çalışabilirim. Yeni rezervasyonla birlikte hak edilen tazminatın yazılı teyidini alabilir miyim?" },
        { role: "officer",   en: "It'll be printed with your boarding pass. For what it's worth, you've handled this far better than most.", tr: "Biniş kartınızla birlikte yazdırılacak. Ne değeri varsa, bu işi çoğu kişiden çok daha iyi idare ettiniz." },
        { role: "passenger", en: "Shouting rarely produces seats. Thank you for finding one.", tr: "Bağırmak nadiren koltuk yaratır. Bir tane bulduğunuz için teşekkürler." },
      ],
    },
    reading: {
      title: "The Economics of an Apology",
      text: [
        "Airlines are among the few businesses that routinely quantify the price of an inconvenience. When a flight is disrupted, a figure is attached to each affected passenger almost immediately, and that figure is not arbitrary — it is the outcome of a calculation involving regulation, reputational exposure and the marginal cost of the alternative.",
        "What makes this interesting for the traveller is that only part of the sum is genuinely fixed. Statutory compensation is non-negotiable and applies regardless of goodwill; discretionary elements — lounge access, an upgrade on the rebooked flight, a hotel a category above the standard one — sit entirely within the gift of the individual agent standing in front of you. Rarely is this distinction explained.",
        "It follows that the traveller's approach matters far more than it should. An agent with discretionary authority is nonetheless a person who has spent nine hours absorbing other people's anger. Aggression may extract the statutory minimum, but it almost never unlocks anything beyond it, and it frequently ensures that borderline decisions go the other way.",
        "None of which is an argument for passivity. The most effective posture is precise rather than pleasant: know which entitlements are yours by right, ask for them plainly, distinguish them from the favours you are requesting, and put nothing at risk by pretending the two are the same thing.",
      ],
      glossary: [
        { en: "quantify", tr: "sayısallaştırmak, tutara dökmek" },
        { en: "reputational exposure", tr: "itibar riski" },
        { en: "statutory", tr: "yasal, kanunla belirlenmiş" },
        { en: "within the gift of", tr: "birinin takdirinde olan" },
        { en: "it follows that", tr: "bundan şu çıkar ki" },
        { en: "borderline", tr: "sınırda, kararsız kalınan" },
        { en: "posture", tr: "duruş, tutum" },
      ],
      quiz: [
        { q: "What is non-negotiable according to the text?", options: ["Lounge access", "Statutory compensation", "Hotel category"], answer: 1 },
        { q: "What does aggression usually achieve?", options: ["The statutory minimum and nothing more", "A free upgrade", "Faster rebooking"], answer: 0 },
        { q: "What posture does the text recommend?", options: ["Passive and quiet", "Precise rather than pleasant", "Loud and persistent"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Olumsuz ifadeyle devrik yapı (inversion)",
        explain: "Cümle olumsuz veya sınırlayıcı bir ifadeyle başlarsa yardımcı fiil özneden önce gelir. Kararlılık katar.",
        examples: [
          { en: "Under no circumstances can I accept that.", tr: "Hiçbir koşulda bunu kabul edemem." },
          { en: "Rarely is this distinction explained.", tr: "Bu ayrım nadiren açıklanır." },
          { en: "At no point was I informed of the change.", tr: "Hiçbir aşamada değişiklikten haberdar edilmedim." },
        ],
        tip: "Bu yapı sesini yükseltmeden ağırlık taşır. Bir görüşmede bir kez kullan — ikincisi teatral durur.",
      },
      {
        title: "Cleft: What I'd like is ... / That I can ...",
        explain: "Cümlenin bir parçasını öne çekerek vurgular. Talep dile getirirken zaman kazandırır.",
        examples: [
          { en: "What I'd like to establish is whether a competitor's flight can be considered.", tr: "Netleştirmek istediğim, başka bir havayolunun uçuşunun değerlendirilebilir olup olmadığı." },
          { en: "That I can work with.", tr: "Bununla çalışabilirim." },
          { en: "It's the delay, not the rerouting, that concerns me.", tr: "Beni endişelendiren yönlendirme değil, gecikme." },
        ],
        tip: "'What I'm asking for is...' ile başlamak, kafan karışıkken bile cümleyi toparlamanı sağlar.",
      },
      {
        title: "Third conditional & devrik 'Had'",
        explain: "Geçmişte gerçekleşmemiş varsayımlar. Resmî dilde 'if' düşürülüp 'had' başa alınır.",
        examples: [
          { en: "Had a seat become available, you'd have been my first call.", tr: "Bir koltuk boşalmış olsaydı ilk arayacağım kişi siz olurdunuz." },
          { en: "If I had known, I would have booked another airline.", tr: "Bilseydim başka bir havayolunda yer ayırtırdım." },
          { en: "Had they informed us earlier, none of this would have happened.", tr: "Bizi daha önce bilgilendirmiş olsalardı bunların hiçbiri olmazdı." },
        ],
        tip: "Devrik yapıda 'Had you not...' olumsuzu da mümkündür: 'Had you not called, I'd still be waiting.'",
      },
      {
        title: "Çatışmasız muhalefet: kabul et, sonra sınırla",
        explain: "Karşı tarafın konumunu tanıyıp ardından kendi sınırını koymak, C1 seviyesinin en kullanışlı becerisidir.",
        examples: [
          { en: "I appreciate the frustration, but the outcome is still unacceptable.", tr: "Bu can sıkıntısını anlıyorum ama sonuç yine de kabul edilemez." },
          { en: "I'm not disputing your handling of this — only the outcome.", tr: "Bu işi ele alışınızı sorgulamıyorum — yalnızca sonucu." },
          { en: "That may well be policy; it doesn't resolve my problem.", tr: "Bu pekâlâ prosedür olabilir; benim sorunumu çözmüyor." },
        ],
        tip: "Formül: [Onay cümlesi] + [ama/yalnızca] + [net talep]. Kişiyi değil sonucu hedef alırsın.",
      },
    ],
    pronunciation: [
      { word: "circumstances", ipa: "/ˈsɜː.kəm.stæn.sɪz/", tip: "Vurgu en başta: SÖR-kım-stan-siz." },
      { word: "entitlement", ipa: "/ɪnˈtaɪ.təl.mənt/", tip: "in-TAY-tıl-mınt. Dört hece, vurgu ikincide." },
      { word: "discretionary", ipa: "/dɪˈskreʃ.ən.ər.i/", tip: "dis-KREŞ-ı-nı-ri. Vurgu 'kreş' hecesinde." },
      { word: "supervisor", ipa: "/ˈsuː.pə.vaɪ.zər/", tip: "SUU-pı-vay-zır. Vurgu en başta — 'süpervayzır' değil." },
      { word: "irregularity", ipa: "/ɪˌreɡ.jəˈlær.ə.ti/", tip: "Ana vurgu 'LA' hecesinde: i-reg-yu-LA-rı-ti." },
      { word: "amicably", ipa: "/ˈæm.ɪ.kə.bli/", tip: "A-mi-kıb-li. Vurgu ilk hecede, ortası hızlı geçilir." },
    ],
  },

  /* ------------------------------- C2 ------------------------------- */
  c2: {
    dialogue: {
      title: "Taşıma sözleşmesi ve resmî talep",
      summary: "Yolcu, yetersiz bir teklifi düşmanlığa düşmeden reddediyor ve talebini hukuki dille kayda geçiriyor.",
      lines: [
        { role: "officer",   en: "I've been authorised to offer two hundred euros as a gesture of goodwill, which I'd encourage you to consider.", tr: "İyi niyet göstergesi olarak iki yüz euro teklif etmeye yetkilendirildim; değerlendirmenizi öneririm." },
        { role: "passenger", en: "I'd want to be careful about the framing. A gesture of goodwill is not the same thing as compensation owed.", tr: "Bu ifadenin çerçevesi konusunda dikkatli olmak isterim. İyi niyet göstergesi, hak edilen tazminatla aynı şey değil." },
        { role: "officer",   en: "A fair distinction, and not one I'd contest. Formally, the two are recorded separately.", tr: "Haklı bir ayrım ve tartışacağım bir husus değil. Resmî olarak ikisi ayrı ayrı kaydedilir." },
        { role: "passenger", en: "Then I would ask that any sum offered today be recorded as an ex gratia payment made without prejudice to my statutory claim.", tr: "O hâlde bugün teklif edilen herhangi bir tutarın, yasal talebime halel getirmeksizin ex gratia ödeme olarak kaydedilmesini talep ediyorum." },
        { role: "officer",   en: "That can be reflected in the file. I should say, however, that acceptance sometimes complicates a later claim.", tr: "Bu dosyaya yansıtılabilir. Ancak belirtmeliyim ki kabul etmek bazen sonraki bir talebi zorlaştırır." },
        { role: "passenger", en: "Precisely why the wording matters, and precisely why I'd sooner decline than sign something ambiguous.", tr: "İfadenin önemi tam da bundan, ve muğlak bir şeyi imzalamaktansa reddetmeyi yeğlememin sebebi tam da bu." },
        { role: "officer",   en: "Understood. Should you prefer to pursue the statutory route, the claim goes to our customer relations department rather than to me.", tr: "Anlaşıldı. Yasal yolu izlemeyi tercih ederseniz talep bana değil müşteri ilişkileri birimimize gider." },
        { role: "passenger", en: "That's the route I'll take. What would help enormously is a printed record of today's disruption and its stated cause.", tr: "İzleyeceğim yol bu. Son derece yardımcı olacak şey, bugünkü aksaklığın ve bildirilen sebebinin yazılı kaydı." },
        { role: "officer",   en: "The cause is logged as a crewing shortfall, which — I'll be candid — is not a defence available to us under the regulation.", tr: "Sebep, ekip eksikliği olarak kaydedildi ki — açık olayım — bu, yönetmelik kapsamında bize tanınan bir savunma değil." },
        { role: "passenger", en: "I'm grateful for the candour. Few people in your position would have volunteered that.", tr: "Bu açık sözlülük için minnettarım. Sizin konumunuzdaki pek az kişi bunu kendiliğinden söylerdi." },
        { role: "officer",   en: "There's little to be gained by obscuring what the file already says. Your rebooking is confirmed for the morning, with hotel and transfers covered.", tr: "Dosyanın hâlihazırda söylediğini gizlemekten kazanılacak pek bir şey yok. Yeni rezervasyonunuz sabah için onaylı, otel ve transferler karşılanıyor." },
        { role: "passenger", en: "Then we've each done what we're meant to do. Thank you — genuinely.", tr: "O hâlde ikimiz de yapması gerekeni yaptık. Teşekkür ederim — gerçekten." },
      ],
    },
    reading: {
      title: "Contracts Nobody Reads",
      text: [
        "Every ticket purchased constitutes acceptance of a document known as the contract of carriage, a text running to tens of thousands of words that virtually no passenger has read and which is, nonetheless, binding in its entirety. Buried within it are the clauses that determine what happens when the arrangement fails: the airline's liability for delay, the circumstances in which a fare becomes non-refundable, and the extent to which a carrier may substitute one aircraft, route or even airline for another.",
        "The asymmetry here is not merely informational. Airlines litigate these documents routinely and have shaped their language over decades; the passenger encounters them once, under duress, at a desk, while an aircraft is boarding. Consumer protection legislation exists precisely because that imbalance was judged intolerable, and it operates by overriding contractual terms rather than by making anyone read them.",
        "This produces an outcome that is genuinely counter-intuitive. In much of the world, the strongest entitlements a delayed passenger holds are not to be found in the contract at all, and may be flatly contradicted by it. A clause purporting to cap liability at the ticket price is, in those jurisdictions, simply void — yet it remains printed, and is still cited.",
        "The practical implication is narrow but useful. When an airline quotes its own conditions of carriage back at you, it has told you something about its contract and nothing whatsoever about your rights. The question worth asking is not what the airline's terms permit, but which regulation governs the flight — and that is determined by where you departed from and who you flew with, not by anything either party agreed.",
      ],
      glossary: [
        { en: "contract of carriage", tr: "taşıma sözleşmesi" },
        { en: "binding in its entirety", tr: "tümüyle bağlayıcı" },
        { en: "liability", tr: "sorumluluk, mesuliyet" },
        { en: "under duress", tr: "baskı altında" },
        { en: "override", tr: "geçersiz kılmak, üstün gelmek" },
        { en: "purport to", tr: "iddia etmek, öyle görünmek" },
        { en: "void", tr: "hükümsüz, geçersiz" },
      ],
      quiz: [
        { q: "What is the contract of carriage?", options: ["A boarding document", "The terms accepted when buying a ticket", "A compensation form"], answer: 1 },
        { q: "How does consumer legislation work, according to the text?", options: ["By making passengers read the terms", "By overriding contractual terms", "By shortening the contract"], answer: 1 },
        { q: "What determines which regulation governs a flight?", options: ["The airline's own terms", "Departure point and carrier", "The ticket price"], answer: 1 },
      ],
    },
    grammar: [
      {
        title: "Mandative subjunctive — resmî talep kipi",
        explain: "'ask / request / insist / demand that' sonrasında fiil yalın hâlde kalır; üçüncü tekil şahısta -s almaz.",
        examples: [
          { en: "I would ask that the sum be recorded as ex gratia.", tr: "Tutarın ex gratia olarak kaydedilmesini talep ediyorum." },
          { en: "They insisted that he provide written confirmation.", tr: "Yazılı teyit sunması konusunda ısrar ettiler." },
          { en: "It is essential that the file remain open.", tr: "Dosyanın açık kalması esastır." },
        ],
        tip: "'be', 'remain', 'provide' — hepsi çekimsiz. Bu tek detay, bir cümleyi anında hukuki registera taşır.",
      },
      {
        title: "Nominalisation & yoğunlaştırma",
        explain: "Eylemler isme dönüşünce cümle sıkışır ve kurumsal bir ağırlık kazanır.",
        examples: [
          { en: "Acceptance sometimes complicates a later claim.", tr: "Kabul etmek bazen sonraki bir talebi zorlaştırır." },
          { en: "The framing matters more than the amount.", tr: "İfadenin çerçevesi tutardan daha önemli." },
          { en: "Their refusal to document the cause was telling.", tr: "Sebebi belgelemeyi reddetmeleri manidardı." },
        ],
        tip: "Yoğunluk güç verir ama fazlası duvara dönüşür. Ağır bir cümleden sonra kısa bir cümle kur.",
      },
      {
        title: "Resmî devrik: Should you ... / Were it not for ...",
        explain: "Koşul cümlelerinin 'if'siz hâli. Yazılı başvuru ve resmî konuşmanın imzası.",
        examples: [
          { en: "Should you prefer the statutory route, the claim goes elsewhere.", tr: "Yasal yolu tercih ederseniz talep başka bir yere gider." },
          { en: "Were it not for the crewing shortfall, the flight would have operated.", tr: "Ekip eksikliği olmasaydı uçuş gerçekleşecekti." },
          { en: "Had the cause been weather, no compensation would be due.", tr: "Sebep hava olsaydı hiçbir tazminat doğmazdı." },
        ],
        tip: "Should you → if you should. Were it not for → but for. Üçü de kayıt dilinde 'if'ten üstündür.",
      },
      {
        title: "Nüanslı taviz: not one I'd contest / little to be gained",
        explain: "Geri adım atarken zayıf görünmeden, hatta itibar kazanarak taviz vermenin kalıpları.",
        examples: [
          { en: "A fair distinction, and not one I'd contest.", tr: "Haklı bir ayrım ve tartışacağım bir husus değil." },
          { en: "There's little to be gained by obscuring the facts.", tr: "Olguları gizlemekten kazanılacak pek bir şey yok." },
          { en: "I'd sooner decline than sign something ambiguous.", tr: "Muğlak bir şeyi imzalamaktansa reddetmeyi yeğlerim." },
        ],
        tip: "C2'nin ölçüsü şu: haksız olduğun noktayı, haklı olduğun noktayı zayıflatmadan teslim edebilmek.",
      },
    ],
    pronunciation: [
      { word: "carriage", ipa: "/ˈkær.ɪdʒ/", tip: "KA-ric. İki hece; 'kariyec' değil." },
      { word: "liability", ipa: "/ˌlaɪ.əˈbɪl.ə.ti/", tip: "Beş hece, ana vurgu 'BİL': lay-ı-BİL-ı-ti." },
      { word: "ex gratia", ipa: "/ˌeks ˈɡreɪ.ʃə/", tip: "eks GREY-şı. Latince kökenli; 'gratia' → 'greyşı'." },
      { word: "reimbursement", ipa: "/ˌriː.ɪmˈbɜːs.mənt/", tip: "rii-im-BÖÖS-mınt. Vurgu üçüncü hecede." },
      { word: "precedent", ipa: "/ˈpres.ɪ.dənt/", tip: "PRE-si-dınt. 'president' ile karıştırma — vurgu ve ilk sesli farklı." },
      { word: "candour", ipa: "/ˈkæn.dər/", tip: "KAN-dır. Amerikan yazımı 'candor', okunuş aynı." },
    ],
  },
};
