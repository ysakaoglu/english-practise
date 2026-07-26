/* =========================================================
   SpeakUp — İçerik veritabanı
   Yeni senaryo eklemek için: SCENARIOS'a yeni bir obje ekle
   ve CONTENT içine aynı id ile 6 seviyeyi doldur.
   ========================================================= */

const LEVELS = [
  { id: "a1", name: "A1", label: "Başlangıç",     desc: "İlk kelimeler, kısa cümleler" },
  { id: "a2", name: "A2", label: "Temel",         desc: "Günlük konuşma kalıpları" },
  { id: "b1", name: "B1", label: "Orta",          desc: "Kendini rahat ifade etme" },
  { id: "b2", name: "B2", label: "Orta-İleri",    desc: "Detaylı açıklama ve tartışma" },
  { id: "c1", name: "C1", label: "İleri",         desc: "Akıcı, nüanslı dil" },
  { id: "c2", name: "C2", label: "Usta",          desc: "Ana dile yakın hâkimiyet" },
];

const SCENARIOS = [
  {
    id: "passport",
    emoji: "🛂",
    title: "Pasaport Kontrol",
    subtitle: "Havalimanı · Memur & Yolcu",
    ready: true,
  },
  { id: "checkin",  emoji: "🧳", title: "Check-in Bankosu", subtitle: "Yakında", ready: false },
  { id: "security", emoji: "🔍", title: "Güvenlik Kontrolü", subtitle: "Yakında", ready: false },
  { id: "customs",  emoji: "📦", title: "Gümrük", subtitle: "Yakında", ready: false },
];

/* =========================================================
   CONTENT[scenarioId][levelId] = { dialogue, reading, grammar, pronunciation }
   role: "officer" (memur) | "passenger" (yolcu)
   ========================================================= */

const CONTENT = {
  passport: {
    /* ------------------------------- A1 ------------------------------- */
    a1: {
      dialogue: {
        title: "Pasaport, lütfen",
        summary: "İlk kez yurt dışına çıkan bir turist, pasaport kontrolünden geçiyor. Kısa ve net cümleler.",
        lines: [
          { role: "officer",   en: "Good evening. Passport, please.", tr: "İyi akşamlar. Pasaport, lütfen." },
          { role: "passenger", en: "Good evening. Here you are.", tr: "İyi akşamlar. Buyurun." },
          { role: "officer",   en: "Where are you from?", tr: "Nerelisiniz?" },
          { role: "passenger", en: "I am from Turkey. From Istanbul.", tr: "Türkiye'denim. İstanbul'dan." },
          { role: "officer",   en: "Why are you here?", tr: "Neden buradasınız?" },
          { role: "passenger", en: "I am a tourist. I am on holiday.", tr: "Turistim. Tatildeyim.", note: "İngilizce'de 'holiday' (UK) = 'vacation' (US)." },
          { role: "officer",   en: "How many days?", tr: "Kaç gün?" },
          { role: "passenger", en: "Five days.", tr: "Beş gün." },
          { role: "officer",   en: "Where do you stay?", tr: "Nerede kalıyorsunuz?" },
          { role: "passenger", en: "At the Park Hotel. Here is my booking.", tr: "Park Otel'de. Rezervasyonum burada." },
          { role: "officer",   en: "Do you have a return ticket?", tr: "Dönüş biletiniz var mı?" },
          { role: "passenger", en: "Yes, I do. It is on my phone.", tr: "Evet, var. Telefonumda." },
          { role: "officer",   en: "OK. Welcome. Enjoy your holiday.", tr: "Tamam. Hoş geldiniz. İyi tatiller." },
          { role: "passenger", en: "Thank you very much. Have a nice day.", tr: "Çok teşekkür ederim. İyi günler." },
        ],
      },
      reading: {
        title: "My First Flight",
        text: [
          "My name is Deniz. I am twenty-two years old. I am from Izmir, Turkey. This is my first flight.",
          "I am at the airport now. I have a small bag and a passport. I am a little nervous, but I am happy.",
          "The officer is friendly. She asks three questions. I answer in English. It is easy!",
          "Now I am in London. The weather is cold, but the city is beautiful.",
        ],
        glossary: [
          { en: "flight", tr: "uçuş" },
          { en: "nervous", tr: "gergin, heyecanlı" },
          { en: "officer", tr: "memur" },
          { en: "friendly", tr: "cana yakın" },
          { en: "answer", tr: "cevap vermek" },
          { en: "weather", tr: "hava (durumu)" },
        ],
        quiz: [
          { q: "Where is Deniz from?", options: ["London", "Izmir", "Ankara"], answer: 1 },
          { q: "How does Deniz feel at the airport?", options: ["Angry", "Bored", "A little nervous"], answer: 2 },
          { q: "How many questions does the officer ask?", options: ["Three", "Five", "Ten"], answer: 0 },
        ],
      },
      grammar: [
        {
          title: "am / is / are — 'to be' fiili",
          explain: "İngilizce'de 'olmak' fiili özneye göre değişir. Türkçe'deki '-im, -sin, -dir' ekleri gibi düşün.",
          examples: [
            { en: "I am a tourist.", tr: "Ben turistim." },
            { en: "She is an officer.", tr: "O bir memurdur." },
            { en: "We are from Turkey.", tr: "Biz Türkiye'denizdir." },
          ],
          tip: "I → am, he/she/it → is, you/we/they → are. Bunu ezberle, gerisi kolay.",
        },
        {
          title: "Wh- soruları: Where / Why / How many",
          explain: "Soru kelimesi en başa gelir, sonra yardımcı fiil, sonra özne. Sıralama bozulmaz.",
          examples: [
            { en: "Where are you from?", tr: "Nerelisiniz?" },
            { en: "Why are you here?", tr: "Neden buradasınız?" },
            { en: "How many days?", tr: "Kaç gün?" },
          ],
          tip: "Formül: Wh- + am/is/are + özne? Pasaport kontrolünde soruların %90'ı bu kalıpta.",
        },
        {
          title: "have / has — sahiplik",
          explain: "Bir şeye sahip olmayı anlatır. Soru ve olumsuzda 'do/does' kullanılır.",
          examples: [
            { en: "I have a return ticket.", tr: "Dönüş biletim var." },
            { en: "Do you have a hotel booking?", tr: "Otel rezervasyonunuz var mı?" },
            { en: "I do not have a visa.", tr: "Vizem yok." },
          ],
          tip: "Kısa cevap ver: 'Yes, I do.' / 'No, I don't.' Tam cümle kurmak zorunda değilsin.",
        },
        {
          title: "Here you are / Here is ...",
          explain: "Bir şey uzatırken kullanılan hazır kalıplar. Ezberle, düşünme.",
          examples: [
            { en: "Here you are.", tr: "Buyurun." },
            { en: "Here is my passport.", tr: "İşte pasaportum." },
            { en: "Here are my documents.", tr: "İşte belgelerim." },
          ],
          tip: "Tek şey → 'Here is'. Birden fazla → 'Here are'.",
        },
      ],
      pronunciation: [
        { word: "passport", ipa: "/ˈpæs.pɔːrt/", tip: "Vurgu ilk hecede: PASS-port. 'pas-POR' deme." },
        { word: "tourist", ipa: "/ˈtʊə.rɪst/", tip: "TUR-ist. Sondaki 't' yutulmaz, hafifçe duyulur." },
        { word: "thank you", ipa: "/ˈθæŋk juː/", tip: "'th' için dilinin ucunu dişlerinin arasına koy. 'tenk yu' değil." },
        { word: "welcome", ipa: "/ˈwel.kəm/", tip: "İkinci hece zayıflar: WEL-kım. 'wel-KAM' değil." },
        { word: "holiday", ipa: "/ˈhɒl.ə.deɪ/", tip: "Üç hece ve ilk hece vurgulu: HOL-i-dey." },
        { word: "here", ipa: "/hɪər/", tip: "'hiir' gibi uzat. 'hır' kısa olursa 'hair' (saç) gibi duyulur." },
      ],
    },

    /* ------------------------------- A2 ------------------------------- */
    a2: {
      dialogue: {
        title: "Rezervasyonum var",
        summary: "Yolcu, arkadaşını ziyarete gidiyor. Geçmiş zaman ve gelecek planları devreye giriyor.",
        lines: [
          { role: "officer",   en: "Good morning. May I see your passport and boarding pass?", tr: "Günaydın. Pasaportunuzu ve biniş kartınızı görebilir miyim?" },
          { role: "passenger", en: "Of course. Here they are.", tr: "Tabii ki. Buyurun." },
          { role: "officer",   en: "What is the purpose of your visit?", tr: "Ziyaretinizin amacı nedir?" },
          { role: "passenger", en: "I am going to visit a friend. She lives in Manchester.", tr: "Bir arkadaşımı ziyaret edeceğim. Manchester'da yaşıyor." },
          { role: "officer",   en: "How long are you going to stay?", tr: "Ne kadar kalacaksınız?" },
          { role: "passenger", en: "About ten days. I am going to leave on the 22nd.", tr: "Yaklaşık on gün. 22'sinde ayrılacağım." },
          { role: "officer",   en: "Have you been to the UK before?", tr: "Daha önce İngiltere'ye geldiniz mi?" },
          { role: "passenger", en: "Yes, I came here two years ago. I stayed for a week.", tr: "Evet, iki yıl önce geldim. Bir hafta kalmıştım." },
          { role: "officer",   en: "Are you travelling alone?", tr: "Yalnız mı seyahat ediyorsunuz?" },
          { role: "passenger", en: "Yes, I am. My friend is going to pick me up at the airport.", tr: "Evet, yalnızım. Arkadaşım beni havalimanından alacak." },
          { role: "officer",   en: "Do you have her address?", tr: "Onun adresi sizde var mı?" },
          { role: "passenger", en: "Yes, I wrote it down. It is 14 Green Road, Manchester.", tr: "Evet, yazdım. 14 Green Road, Manchester." },
          { role: "officer",   en: "How much money do you have with you?", tr: "Yanınızda ne kadar paranız var?" },
          { role: "passenger", en: "I have four hundred pounds in cash and a credit card.", tr: "Nakit dört yüz pound ve bir kredi kartım var." },
          { role: "officer",   en: "That's fine. Enjoy your stay.", tr: "Uygun. İyi tatiller." },
          { role: "passenger", en: "Thank you. Have a good day!", tr: "Teşekkürler. İyi günler!" },
        ],
      },
      reading: {
        title: "A Long Queue",
        text: [
          "Last summer, I flew to Rome with my sister. We arrived at eleven o'clock at night, and we were very tired.",
          "The queue at passport control was really long. We waited for almost an hour. My sister sat on her suitcase and complained about everything.",
          "When it was our turn, the officer asked us three simple questions: Why are you here? Where are you staying? When are you leaving? We answered in ten seconds.",
          "After that, we took a taxi to the hotel. The driver was funny and he told us about the best pizza place in the city. The next morning, we went there for breakfast. It was worth the long queue!",
        ],
        glossary: [
          { en: "queue", tr: "kuyruk, sıra" },
          { en: "arrive", tr: "varmak" },
          { en: "complain", tr: "şikâyet etmek" },
          { en: "it was our turn", tr: "sıra bize geldi" },
          { en: "leave", tr: "ayrılmak" },
          { en: "worth it", tr: "buna değer" },
        ],
        quiz: [
          { q: "How long did they wait at passport control?", options: ["Ten minutes", "Almost an hour", "Three hours"], answer: 1 },
          { q: "What did the sister do while waiting?", options: ["She slept", "She read a book", "She complained"], answer: 2 },
          { q: "Who told them about a pizza place?", options: ["The officer", "The taxi driver", "The hotel receptionist"], answer: 1 },
        ],
      },
      grammar: [
        {
          title: "Past Simple — geçmiş zaman",
          explain: "Bitmiş, tarihi belli olaylar için kullanılır. Düzenli fiillere -ed eklenir; düzensizler ezberlenir.",
          examples: [
            { en: "I visited London last year.", tr: "Geçen yıl Londra'yı ziyaret ettim." },
            { en: "We waited for an hour.", tr: "Bir saat bekledik." },
            { en: "She came here in 2022.", tr: "O, 2022'de buraya geldi." },
          ],
          tip: "Soru ve olumsuzda fiil yalın hâle döner: 'Did you come?' — 'came' değil 'come'.",
        },
        {
          title: "be going to — planlanmış gelecek",
          explain: "Önceden karar verilmiş planlar için kullanılır. Pasaport memuru tam olarak bunu duymak ister.",
          examples: [
            { en: "I am going to stay for ten days.", tr: "On gün kalacağım." },
            { en: "She is going to pick me up.", tr: "O beni alacak." },
            { en: "We are not going to work here.", tr: "Burada çalışmayacağız." },
          ],
          tip: "Plan varsa 'going to', anlık karar varsa 'will'. Sınırda hep 'going to' kullan — plan sahibi gibi görünürsün.",
        },
        {
          title: "How long / How much / How many",
          explain: "Süre, sayılamayan miktar ve sayılabilen adet sorularının ayrımı.",
          examples: [
            { en: "How long are you staying?", tr: "Ne kadar kalıyorsunuz?" },
            { en: "How much money do you have?", tr: "Ne kadar paranız var?" },
            { en: "How many bags do you have?", tr: "Kaç çantanız var?" },
          ],
          tip: "money, water, time → much. bags, days, people → many.",
        },
        {
          title: "for / since / ago — zaman ifadeleri",
          explain: "Süre ve başlangıç noktası anlatırken karıştırılan üç kelime.",
          examples: [
            { en: "I stayed for a week.", tr: "Bir hafta boyunca kaldım." },
            { en: "I came here two years ago.", tr: "Buraya iki yıl önce geldim." },
            { en: "I have lived there since 2020.", tr: "2020'den beri orada yaşıyorum." },
          ],
          tip: "for + süre (a week), since + başlangıç (2020), ago + geçmiş zaman cümlesi.",
        },
      ],
      pronunciation: [
        { word: "purpose", ipa: "/ˈpɜː.pəs/", tip: "PUR-pıs. İkinci hece neredeyse yutulur." },
        { word: "visit", ipa: "/ˈvɪz.ɪt/", tip: "'v' için üst dişini alt dudağına değdir. 'w' değil!" },
        { word: "arrived", ipa: "/əˈraɪvd/", tip: "-ed burada 'd' okunur, 'id' değil: a-RAYVD." },
        { word: "waited", ipa: "/ˈweɪ.tɪd/", tip: "Fiil 't' veya 'd' ile bitiyorsa -ed 'ıd' okunur: WEY-tıd." },
        { word: "queue", ipa: "/kjuː/", tip: "Sadece 'kyu' — beş harf, tek ses. İngilizce'nin şakası." },
        { word: "address", ipa: "/əˈdres/", tip: "Fiil ve isimde vurgu ikinci hecede (UK): ıd-RES." },
      ],
    },

    /* ------------------------------- B1 ------------------------------- */
    b1: {
      dialogue: {
        title: "Aktarmalı uçuş ve konferans",
        summary: "Yolcunun aktarması var ve bir konferansa katılacak. Memur biraz daha detay istiyor.",
        lines: [
          { role: "officer",   en: "Good afternoon. Could I have your passport, please?", tr: "İyi günler. Pasaportunuzu alabilir miyim?" },
          { role: "passenger", en: "Certainly. Here it is.", tr: "Elbette. Buyurun." },
          { role: "officer",   en: "I see you've travelled quite a lot this year. What brings you here this time?", tr: "Bu yıl epey seyahat etmişsiniz. Bu sefer sizi buraya ne getiriyor?" },
          { role: "passenger", en: "I'm attending a three-day design conference in the city centre.", tr: "Şehir merkezinde üç günlük bir tasarım konferansına katılıyorum." },
          { role: "officer",   en: "Is your company paying for the trip?", tr: "Seyahatin masrafını şirketiniz mi karşılıyor?" },
          { role: "passenger", en: "Yes, they are. I've brought the invitation letter if you'd like to see it.", tr: "Evet, onlar karşılıyor. İsterseniz davet mektubunu getirdim." },
          { role: "officer",   en: "That won't be necessary. Will you be doing any paid work while you're here?", tr: "Gerek yok. Buradayken ücretli bir iş yapacak mısınız?" },
          { role: "passenger", en: "No, I won't. I'm only going to listen to talks and meet a few colleagues.", tr: "Hayır. Sadece sunumları dinleyip birkaç meslektaşımla görüşeceğim." },
          { role: "officer",   en: "Where are you staying, and have you already checked in?", tr: "Nerede kalıyorsunuz ve giriş yaptınız mı?" },
          { role: "passenger", en: "At the Riverside Hotel. I haven't checked in yet — my flight was delayed by two hours.", tr: "Riverside Otel'de. Henüz giriş yapmadım — uçuşum iki saat rötar yaptı." },
          { role: "officer",   en: "I'm sorry to hear that. Do you have a connecting flight afterwards?", tr: "Üzüldüm. Sonrasında aktarmalı bir uçuşunuz var mı?" },
          { role: "passenger", en: "I do. I'm flying back on Sunday via Amsterdam.", tr: "Var. Pazar günü Amsterdam üzerinden dönüyorum." },
          { role: "officer",   en: "All right. Everything seems to be in order. Have a productive conference.", tr: "Pekâlâ. Her şey yolunda görünüyor. Verimli bir konferans dilerim." },
          { role: "passenger", en: "Thank you, I appreciate it.", tr: "Teşekkür ederim, minnettarım." },
        ],
      },
      reading: {
        title: "The Question Behind the Question",
        text: [
          "Border officers around the world ask surprisingly similar questions, and there is a reason for that. Every question has a hidden purpose.",
          "When an officer asks how long you are staying, they are not making small talk. They want to check whether your answer matches your return ticket. If you say 'two weeks' but your ticket is for three months, they will ask more questions.",
          "'Where are you staying?' works in the same way. A confident, specific answer — a hotel name, an address, a friend's neighbourhood — suggests that you have planned your trip. A vague answer suggests that you haven't.",
          "The good news is that you don't need perfect grammar. Officers are trained to listen for consistency, not for beautiful English. Short, honest, consistent answers will get you through faster than long, complicated ones.",
        ],
        glossary: [
          { en: "border officer", tr: "sınır görevlisi" },
          { en: "hidden purpose", tr: "gizli amaç" },
          { en: "small talk", tr: "havadan sudan sohbet" },
          { en: "match", tr: "uyuşmak, örtüşmek" },
          { en: "vague", tr: "belirsiz, muğlak" },
          { en: "consistency", tr: "tutarlılık" },
        ],
        quiz: [
          { q: "Why do officers ask how long you are staying?", options: ["To be polite", "To check it matches your ticket", "To practise English"], answer: 1 },
          { q: "What does a vague answer suggest?", options: ["That you haven't planned your trip", "That you are tired", "That you speak good English"], answer: 0 },
          { q: "What are officers mainly listening for?", options: ["Perfect grammar", "A big vocabulary", "Consistency"], answer: 2 },
        ],
      },
      grammar: [
        {
          title: "Present Perfect vs Past Simple",
          explain: "Present perfect: zamanı belirtilmemiş, şu ana etkisi olan deneyimler. Past simple: zamanı belli, kapanmış olaylar.",
          examples: [
            { en: "I have been to London twice.", tr: "Londra'ya iki kez gittim. (ne zaman önemli değil)" },
            { en: "I went to London in 2023.", tr: "2023'te Londra'ya gittim. (zaman belli)" },
            { en: "I haven't checked in yet.", tr: "Henüz giriş yapmadım." },
          ],
          tip: "Cümlede 'yesterday, last year, in 2023, ago' varsa → past simple. 'ever, never, just, yet, already' varsa → present perfect.",
        },
        {
          title: "will vs be going to vs Present Continuous",
          explain: "Üçü de geleceği anlatır ama kesinlik ve planlanmışlık derecesi farklıdır.",
          examples: [
            { en: "I'm flying back on Sunday.", tr: "Pazar günü dönüyorum. (bilet alınmış, kesin program)" },
            { en: "I'm going to look for a job.", tr: "İş arayacağım. (niyet var, detay yok)" },
            { en: "I think it will rain.", tr: "Sanırım yağmur yağacak. (tahmin)" },
          ],
          tip: "Bilet/rezervasyon varsa Present Continuous kullan — en doğal ve en inandırıcı olanı budur.",
        },
        {
          title: "must / have to / don't have to",
          explain: "Zorunluluk ve zorunluluğun olmaması. 'mustn't' ile 'don't have to' aynı şey DEĞİL.",
          examples: [
            { en: "You must show your passport.", tr: "Pasaportunuzu göstermek zorundasınız." },
            { en: "I have to be there by nine.", tr: "Dokuza kadar orada olmam gerekiyor." },
            { en: "You don't have to fill in this form.", tr: "Bu formu doldurmak zorunda değilsiniz." },
            { en: "You mustn't take photos here.", tr: "Burada fotoğraf çekmeniz yasak." },
          ],
          tip: "mustn't = yasak. don't have to = gerek yok, istersen yap.",
        },
        {
          title: "Kibar sorular: Could / Would you mind",
          explain: "Doğrudan emir yerine kibar kalıplar kullanmak, sınırda tonu yumuşatır.",
          examples: [
            { en: "Could I have your passport, please?", tr: "Pasaportunuzu alabilir miyim?" },
            { en: "Would you mind repeating that?", tr: "Tekrar eder misiniz?" },
            { en: "Could you speak a bit more slowly, please?", tr: "Biraz daha yavaş konuşabilir misiniz?" },
          ],
          tip: "Anlamadıysan panikleme. 'Sorry, could you repeat that?' demek tamamen normaldir ve hiç sorun yaratmaz.",
        },
      ],
      pronunciation: [
        { word: "conference", ipa: "/ˈkɒn.fər.əns/", tip: "İlk hece vurgulu, ortadaki hece erir: KON-frıns." },
        { word: "delayed", ipa: "/dɪˈleɪd/", tip: "di-LEYD. İlk hece zayıf, vurgu ikinci hecede." },
        { word: "colleague", ipa: "/ˈkɒl.iːɡ/", tip: "KOL-iig. Sondaki 'ue' hiç okunmaz." },
        { word: "necessary", ipa: "/ˈnes.ə.ser.i/", tip: "NE-sı-se-ri. Vurgu en başta; ortası hızlıca geçilir." },
        { word: "appreciate", ipa: "/əˈpriː.ʃi.eɪt/", tip: "ı-PRİİ-şi-eyt. 'ci' burada 'ş' sesi verir." },
        { word: "schedule", ipa: "/ˈʃed.juːl/ (UK) · /ˈskedʒ.uːl/ (US)", tip: "İngiliz 'şed-yul', Amerikan 'ske-cul' der. İkisi de doğru." },
      ],
    },

    /* ------------------------------- B2 ------------------------------- */
    b2: {
      dialogue: {
        title: "Uzun kalış, ikinci soru turu",
        summary: "Yolcu üç ay kalacak. Memur maddi durum, sigorta ve niyet konusunda derine iniyor.",
        lines: [
          { role: "officer",   en: "Your documents, please. Thank you. You've been selected for a few additional questions — it's routine.", tr: "Belgeleriniz lütfen. Teşekkürler. Birkaç ek soru için seçildiniz — rutin bir işlem." },
          { role: "passenger", en: "No problem at all. I'm happy to answer anything.", tr: "Hiç sorun değil. Her şeyi memnuniyetle cevaplarım." },
          { role: "officer",   en: "You're planning to stay for three months. Could you explain why such a long visit?", tr: "Üç ay kalmayı planlıyorsunuz. Neden bu kadar uzun bir ziyaret, açıklayabilir misiniz?" },
          { role: "passenger", en: "I've been accepted onto a twelve-week language course, and the visa I was granted allows it.", tr: "On iki haftalık bir dil kursuna kabul edildim ve bana verilen vize buna izin veriyor." },
          { role: "officer",   en: "How is the course being funded?", tr: "Kursun finansmanı nasıl sağlanıyor?" },
          { role: "passenger", en: "It's been paid in full by my parents. I can show you the receipt and my bank statements if that helps.", tr: "Tamamı ailem tarafından ödendi. Yardımcı olacaksa makbuzu ve banka hesap dökümlerimi gösterebilirim." },
          { role: "officer",   en: "Please do. And if you were offered a job here, what would you do?", tr: "Lütfen gösterin. Peki size burada bir iş teklif edilse ne yapardınız?" },
          { role: "passenger", en: "I'd have to turn it down. My visa doesn't permit employment, and I'm not willing to risk it.", tr: "Reddetmek zorunda kalırdım. Vizem çalışmaya izin vermiyor ve bunu riske atmaya niyetim yok." },
          { role: "officer",   en: "Do you have travel insurance covering the whole period?", tr: "Tüm dönemi kapsayan seyahat sigortanız var mı?" },
          { role: "passenger", en: "Yes. The policy runs until the fifth of October, which is a week after my return flight.", tr: "Evet. Poliçe 5 Ekim'e kadar geçerli, yani dönüş uçuşumdan bir hafta sonrasına kadar." },
          { role: "officer",   en: "And what are your ties back home? Anything that guarantees your return?", tr: "Ülkenizle bağlarınız neler? Dönüşünüzü garanti eden bir şey var mı?" },
          { role: "passenger", en: "I'm in my final year at university, and my thesis is due in November. I can't afford to miss it.", tr: "Üniversitede son sınıftayım ve tezimin teslimi kasımda. Bunu kaçırmayı göze alamam." },
          { role: "officer",   en: "That's clear enough. I'm going to stamp you in for three months. Don't overstay.", tr: "Bu kadarı yeterince açık. Size üç aylık giriş damgası vuruyorum. Süreyi aşmayın." },
          { role: "passenger", en: "Understood. Thank you for being so straightforward.", tr: "Anlaşıldı. Bu kadar açık olduğunuz için teşekkürler." },
        ],
      },
      reading: {
        title: "What Officers Are Actually Assessing",
        text: [
          "Immigration decisions are made surprisingly quickly. Studies suggest that most border interviews last under ninety seconds, yet the officer is processing an enormous amount of information during that time.",
          "Three things are being weighed up: whether your story is internally consistent, whether your documents support it, and whether you have strong reasons to go home again. The last of these is often called 'ties' — a job, a course, a family, a mortgage. Anything that would be expensive for you to abandon.",
          "Interestingly, nervousness itself is rarely treated as a warning sign. Officers know that almost everyone is tired, and plenty of travellers are anxious even when they have nothing to hide. What raises suspicion is a story that changes — a visit that was 'for tourism' becoming 'for a job interview' halfway through the conversation.",
          "If you are asked to step aside for further questioning, it does not mean you have been refused entry. In most cases, it simply means a detail needs clarifying. The best approach is to stay calm, answer only what has been asked, and avoid volunteering unnecessary information that could open up new lines of questioning.",
        ],
        glossary: [
          { en: "weigh up", tr: "tartmak, değerlendirmek" },
          { en: "internally consistent", tr: "kendi içinde tutarlı" },
          { en: "ties", tr: "bağlar (ülkeye bağlayan unsurlar)" },
          { en: "abandon", tr: "terk etmek, bırakmak" },
          { en: "raise suspicion", tr: "şüphe uyandırmak" },
          { en: "volunteer information", tr: "sorulmadan bilgi vermek" },
        ],
        quiz: [
          { q: "According to the text, how long do most border interviews last?", options: ["Under 90 seconds", "About 5 minutes", "Around 20 minutes"], answer: 0 },
          { q: "What does 'ties' refer to?", options: ["Formal clothing", "Reasons to return home", "Airline connections"], answer: 1 },
          { q: "What genuinely raises suspicion?", options: ["Looking nervous", "Being tired", "A story that changes"], answer: 2 },
        ],
      },
      grammar: [
        {
          title: "Passive Voice — edilgen çatı",
          explain: "Eylemi kimin yaptığı önemsizse ya da bilinmiyorsa kullanılır. Resmî ve kurumsal dilin belkemiği.",
          examples: [
            { en: "You've been selected for additional questions.", tr: "Ek sorular için seçildiniz." },
            { en: "The course was paid for by my parents.", tr: "Kursun ücreti ailem tarafından ödendi." },
            { en: "Decisions are made very quickly.", tr: "Kararlar çok hızlı verilir." },
          ],
          tip: "Formül: be + V3. Zaman 'be' fiilinde taşınır: is made / was made / has been made / will be made.",
        },
        {
          title: "2. Tip Koşul Cümlesi (Second Conditional)",
          explain: "Gerçek olmayan, varsayımsal durumlar. Memurlar niyetini ölçmek için tam olarak bunu sorar.",
          examples: [
            { en: "If you were offered a job, what would you do?", tr: "Size bir iş teklif edilse ne yapardınız?" },
            { en: "If I lost my passport, I would call the consulate.", tr: "Pasaportumu kaybetsem konsolosluğu ararım." },
            { en: "I'd turn it down if that happened.", tr: "Öyle bir şey olsa reddederdim." },
          ],
          tip: "Kalıp: If + past simple, ... would + V1. Konuşurken 'I would' yerine 'I'd' de — çok daha doğal.",
        },
        {
          title: "Dolaylı sorular (Indirect Questions)",
          explain: "Soru bir yan cümleye gömüldüğünde devrik yapı bozulur, düz cümle sırası kullanılır.",
          examples: [
            { en: "Could you explain why the visit is so long?", tr: "Ziyaretin neden bu kadar uzun olduğunu açıklayabilir misiniz?" },
            { en: "I'd like to know where you are staying.", tr: "Nerede kaldığınızı bilmek istiyorum." },
            { en: "Do you know if he has a return ticket?", tr: "Dönüş bileti var mı biliyor musunuz?" },
          ],
          tip: "Yanlış: 'Could you tell me where is the gate?' Doğru: 'Could you tell me where the gate is?'",
        },
        {
          title: "Relative Clauses — ilgi cümlecikleri",
          explain: "İki cümleyi birleştirip bir ismi tanımlar. Akıcılığı bir anda yukarı çeker.",
          examples: [
            { en: "The policy runs until October, which is after my return flight.", tr: "Poliçe ekime kadar geçerli, ki bu dönüş uçuşumdan sonrası." },
            { en: "The friend who is picking me up lives nearby.", tr: "Beni alacak olan arkadaşım yakınlarda oturuyor." },
            { en: "This is the letter that my company sent.", tr: "Bu, şirketimin gönderdiği mektup." },
          ],
          tip: "Virgüllü 'which' tüm cümleye yorum katar; virgülsüz 'that/which' ismi daraltır.",
        },
      ],
      pronunciation: [
        { word: "additional", ipa: "/əˈdɪʃ.ən.əl/", tip: "ı-DİŞ-ı-nıl. Vurgu ikinci hecede, 'ti' → 'ş'." },
        { word: "insurance", ipa: "/ɪnˈʃɔː.rəns/", tip: "in-ŞOO-rıns. Baştaki 'in' hafif, vurgu ortada." },
        { word: "employment", ipa: "/ɪmˈplɔɪ.mənt/", tip: "im-PLOY-mınt. Son hece neredeyse yutulur." },
        { word: "thesis", ipa: "/ˈθiː.sɪs/", tip: "THİİ-sis. 'th' peltek, 'tezis' değil." },
        { word: "straightforward", ipa: "/ˌstreɪtˈfɔː.wəd/", tip: "Ana vurgu 'FOR' hecesinde: streyt-FOR-wıd." },
        { word: "routine", ipa: "/ruːˈtiːn/", tip: "ru-TİİN. Vurgu ikinci hecede — 'RU-tin' değil." },
      ],
    },

    /* ------------------------------- C1 ------------------------------- */
    c1: {
      dialogue: {
        title: "İkinci kontrol odası",
        summary: "Freelance çalışan bir yolcu ikincil kontrole alınıyor. Nazik ama yüksek riskli bir müzakere.",
        lines: [
          { role: "officer",   en: "Take a seat. I've asked you through because a couple of things in your file don't quite add up.", tr: "Oturun lütfen. Sizi buraya aldım çünkü dosyanızdaki birkaç şey tam olarak örtüşmüyor." },
          { role: "passenger", en: "Of course. I'd rather clear things up now than have it hanging over me.", tr: "Tabii. Bunun üzerimde asılı kalmasındansa şimdi açıklığa kavuşturmayı tercih ederim." },
          { role: "officer",   en: "You've entered the country four times in the past year, each time for around three weeks. Some would say that starts to look like residence.", tr: "Geçen yıl içinde ülkeye dört kez, her seferinde yaklaşık üç hafta için giriş yapmışsınız. Kimileri bunun ikamete benzemeye başladığını söyleyebilir." },
          { role: "passenger", en: "I can see how it might look that way, but the pattern is coincidental rather than deliberate. Three of those trips were family visits.", tr: "Öyle görünebileceğini anlıyorum ama bu düzen kasıtlı olmaktan çok tesadüfi. O seyahatlerin üçü aile ziyaretiydi." },
          { role: "officer",   en: "You describe yourself as a freelance consultant. Where, precisely, is the work carried out?", tr: "Kendinizi serbest danışman olarak tanımlıyorsunuz. Peki bu iş tam olarak nerede yapılıyor?" },
          { role: "passenger", en: "Entirely remotely, for clients based in Turkey, and I'm paid into a Turkish account. Not once have I taken on a local client.", tr: "Tamamen uzaktan, Türkiye merkezli müşteriler için ve ödemem Türk hesabıma yapılıyor. Bir kez olsun yerel müşteri almadım." },
          { role: "officer",   en: "That's the distinction that matters. Had you worked for a company here, we'd be having a very different conversation.", tr: "Önemli olan ayrım tam da bu. Buradaki bir şirket için çalışmış olsaydınız çok farklı bir konuşma yapıyor olurduk." },
          { role: "passenger", en: "Understood — which is precisely why I keep my invoices separate. I have them here, should you wish to look.", tr: "Anlıyorum — zaten faturalarımı ayrı tutmamın sebebi tam olarak bu. İsterseniz bakmanız için yanımda." },
          { role: "officer",   en: "I'll take a quick look. What I'd caution you about is the cumulative total: you're approaching the limit for visitors.", tr: "Kısaca bakacağım. Sizi uyaracağım nokta toplam süre: ziyaretçiler için olan sınıra yaklaşıyorsunuz." },
          { role: "passenger", en: "That's noted, and I appreciate the heads-up. I'd intended to space out my next visits in any case.", tr: "Not aldım ve uyarınız için minnettarım. Zaten sonraki ziyaretlerimi aralıklandırmayı düşünüyordum." },
          { role: "officer",   en: "Sensible. I'm satisfied on this occasion, but do keep documentation to hand next time.", tr: "Makul. Bu seferlik ikna oldum ama gelecek sefer belgeleri elinizin altında bulundurun." },
          { role: "passenger", en: "I will. Thank you for hearing me out rather than assuming the worst.", tr: "Bulunduracağım. En kötüsünü varsaymak yerine beni dinlediğiniz için teşekkürler." },
        ],
      },
      reading: {
        title: "The Grammar of Suspicion",
        text: [
          "There is a peculiar linguistic asymmetry at a border. The officer may ask anything; the traveller may only answer. Within that imbalance, the words a traveller chooses carry disproportionate weight.",
          "Linguists who study institutional discourse have noted that hedging — phrases such as 'sort of', 'I think', 'more or less' — tends to be interpreted very differently depending on who is speaking. In ordinary conversation, hedging signals politeness and open-mindedness. At passport control, it can be read as evasion. A traveller who says 'I'll probably stay a couple of weeks, more or less' has said something perfectly reasonable, yet has managed to sound uncertain about their own plans.",
          "The reverse is equally true. Over-precision can be just as damaging. A rehearsed-sounding answer, delivered too fluently and with too much unrequested detail, tends to prompt further questions rather than fewer. Officers are, after all, trained to notice the difference between someone recalling a plan and someone reciting one.",
          "What emerges is an unusual communicative ideal: be specific about facts, but relaxed in delivery. Say 'twelve days, back on the 22nd' rather than 'about two weeks, I think'. Then stop talking. Silence, in this particular setting, is rarely held against you.",
        ],
        glossary: [
          { en: "asymmetry", tr: "asimetri, dengesizlik" },
          { en: "disproportionate", tr: "orantısız" },
          { en: "hedging", tr: "temkinli/kaçamak ifade kullanma" },
          { en: "evasion", tr: "kaçamak, geçiştirme" },
          { en: "rehearsed", tr: "ezberlenmiş, prova edilmiş" },
          { en: "held against you", tr: "aleyhinize kullanılmak" },
        ],
        quiz: [
          { q: "How is hedging usually read at passport control?", options: ["As politeness", "As evasion", "As fluency"], answer: 1 },
          { q: "What problem does over-precision create?", options: ["It sounds rehearsed", "It sounds rude", "It sounds unclear"], answer: 0 },
          { q: "What does the text recommend?", options: ["Talk as much as possible", "Be vague but friendly", "Be specific, then stop talking"], answer: 2 },
        ],
      },
      grammar: [
        {
          title: "Inversion — vurgulu devrik yapı",
          explain: "Olumsuz veya sınırlayıcı bir ifade cümle başına geldiğinde yardımcı fiil özneden önce gelir. Dili bir anda üst seviyeye taşır.",
          examples: [
            { en: "Not once have I taken on a local client.", tr: "Bir kez olsun yerel müşteri almadım." },
            { en: "Rarely does an interview last more than two minutes.", tr: "Bir görüşme nadiren iki dakikadan fazla sürer." },
            { en: "Only after checking did they let him through.", tr: "Ancak kontrol ettikten sonra geçmesine izin verdiler." },
          ],
          tip: "Never / Rarely / Not once / Only then + yardımcı fiil + özne. Yazılı ve resmî dilde çok etkilidir.",
        },
        {
          title: "Third Conditional & Mixed Conditional",
          explain: "Geçmişte olmamış şeylerin varsayımı. 'If' düşürülüp devrik yapılabilir — ileri seviye işareti.",
          examples: [
            { en: "Had you worked for a company here, we'd be having a different conversation.", tr: "Buradaki bir şirket için çalışmış olsaydınız farklı bir konuşma yapıyor olurduk." },
            { en: "If I had booked earlier, I wouldn't be sitting here now.", tr: "Daha erken rezervasyon yapsaydım şimdi burada oturuyor olmazdım." },
            { en: "She would have been refused if the letter hadn't arrived.", tr: "Mektup gelmeseydi reddedilecekti." },
          ],
          tip: "'If I had...' → 'Had I...'. 'If' atılır, 'had' başa gelir. Karma koşulda geçmiş sebep, bugünkü sonuç.",
        },
        {
          title: "Cleft Sentences — vurgulama yapıları",
          explain: "Cümlenin bir parçasını öne çıkarmak için 'It is... that' veya 'What... is' kalıpları kullanılır.",
          examples: [
            { en: "That's the distinction that matters.", tr: "Önemli olan ayrım budur." },
            { en: "What I'd caution you about is the cumulative total.", tr: "Sizi uyaracağım şey toplam süredir." },
            { en: "It was the invoices that convinced her.", tr: "Onu ikna eden şey faturalardı." },
          ],
          tip: "Bir şeyi savunurken 'What I'm saying is...' ile başlamak hem zaman kazandırır hem güçlü durur.",
        },
        {
          title: "Hedging & mitigation — tonu yumuşatma",
          explain: "Karşı çıkarken çatışmaya girmeden zemin kazandıran kalıplar.",
          examples: [
            { en: "I can see how it might look that way, but...", tr: "Öyle görünebileceğini anlıyorum, ama..." },
            { en: "I'd rather clear things up now.", tr: "Şimdi açıklığa kavuşturmayı tercih ederim." },
            { en: "That may well be true, though in my case...", tr: "Bu pekâlâ doğru olabilir, gerçi benim durumumda..." },
          ],
          tip: "Önce karşı tarafın bakışını onayla, sonra 'but' ile kendi verini koy. İtiraz değil, düzeltme gibi duyulur.",
        },
      ],
      pronunciation: [
        { word: "coincidental", ipa: "/kəʊˌɪn.sɪˈden.təl/", tip: "Ana vurgu 'DEN' hecesinde: ko-in-si-DEN-tıl." },
        { word: "precisely", ipa: "/prɪˈsaɪs.li/", tip: "pri-SAYS-li. İlk hece neredeyse duyulmaz." },
        { word: "cumulative", ipa: "/ˈkjuː.mjə.lə.tɪv/", tip: "KYU-myu-lı-tiv. Vurgu en başta, ortası hızlı." },
        { word: "documentation", ipa: "/ˌdɒk.jə.menˈteɪ.ʃən/", tip: "Uzun kelimelerde ana vurgu sondan 3. hecede: -TEY-şın." },
        { word: "asymmetry", ipa: "/eɪˈsɪm.ə.tri/", tip: "ey-SİM-ıt-ri. Vurgu 'sim' hecesinde." },
        { word: "consultant", ipa: "/kənˈsʌl.tənt/", tip: "kın-SAL-tınt. İlk ve son hece zayıf (schwa)." },
      ],
    },

    /* ------------------------------- C2 ------------------------------- */
    c2: {
      dialogue: {
        title: "İkamet statüsü ve niyet",
        summary: "Uzun süredir gidip gelen bir yolcuyla, hukuki nüansların konuşulduğu üst düzey bir görüşme.",
        lines: [
          { role: "officer",   en: "Before we go any further, I should make clear that this is an examination, not an interrogation. You're free to ask for the questions to be clarified at any point.", tr: "Devam etmeden önce şunu netleştireyim: bu bir inceleme, sorgu değil. İstediğiniz anda soruların açıklanmasını isteyebilirsiniz." },
          { role: "passenger", en: "Noted, and appreciated. I'd sooner be candid than have any of this misconstrued later on.", tr: "Not ettim, teşekkür ederim. Bunların sonradan yanlış yorumlanmasındansa açık sözlü olmayı yeğlerim." },
          { role: "officer",   en: "Your travel history suggests a life substantially organised around this country, notwithstanding your visitor status. How would you characterise your position?", tr: "Seyahat geçmişiniz, ziyaretçi statünüze rağmen büyük ölçüde bu ülke etrafında kurulmuş bir hayata işaret ediyor. Konumunuzu nasıl tanımlarsınız?" },
          { role: "passenger", en: "As transitional, and knowingly so. My centre of interests remains in Turkey — tax residence, property, dependants — but a substantial part of my professional network happens to be here.", tr: "Geçişsel olarak tanımlarım ve bunun bilincindeyim. Menfaat merkezim Türkiye'de kalmaya devam ediyor — vergi mükellefiyeti, mülk, bakmakla yükümlü olduklarım — ancak mesleki ağımın önemli bir kısmı burada bulunuyor." },
          { role: "officer",   en: "You'll appreciate that intention is notoriously difficult to evidence. What would you point to as objectively verifiable?", tr: "Niyetin kanıtlanmasının ne kadar zor olduğunu takdir edersiniz. Nesnel olarak doğrulanabilir ne gösterebilirsiniz?" },
          { role: "passenger", en: "Documents that would be irrational to hold were I intending to settle: an ongoing lease in Istanbul, quarterly filings with the Turkish tax office, and a directorship I'd forfeit by relocating.", tr: "Yerleşmeye niyetli olsaydım elimde tutmam mantıksız olacak belgeler: İstanbul'da devam eden bir kira sözleşmesi, Türk vergi dairesine üç aylık beyanlar ve taşınmam hâlinde kaybedeceğim bir yöneticilik." },
          { role: "officer",   en: "That's a more substantive answer than most. I'll be frank: what concerns me is not any single visit but the aggregate picture.", tr: "Bu çoğundan daha doyurucu bir cevap. Açık olayım: beni endişelendiren tek bir ziyaret değil, bütünsel tablo." },
          { role: "passenger", en: "Which is a legitimate concern, and one I'd be foolish to dismiss. Were the aggregate to become problematic, I'd expect to be told so plainly rather than discover it at the border.", tr: "Bu meşru bir endişe ve göz ardı etmem aptallık olur. Toplam tablo sorunlu hâle gelecek olsa, bunu sınırda öğrenmektense açıkça söylenmesini beklerim." },
          { role: "officer",   en: "Consider yourself told, then — informally. Nothing on your record precludes entry today, but I'd encourage you to take advice on your status before your next trip.", tr: "O hâlde söylenmiş sayın — gayriresmî olarak. Kayıtlarınızda bugünkü girişe engel bir şey yok ama bir sonraki seyahatten önce statünüz konusunda danışmanlık almanızı tavsiye ederim." },
          { role: "passenger", en: "I'll do precisely that. Thank you for handling this so even-handedly.", tr: "Aynen öyle yapacağım. Bu meseleyi bu kadar tarafsız ele aldığınız için teşekkür ederim." },
        ],
      },
      reading: {
        title: "Discretion at the Border",
        text: [
          "Few travellers appreciate quite how much discretion a border officer exercises. Immigration rules are, on paper, a matter of criteria and thresholds; in practice, they devolve into a series of judgement calls made under time pressure by an individual who will never see you again.",
          "This has an uncomfortable consequence. Two travellers presenting materially identical circumstances may be treated differently, not because either officer has acted improperly, but because the rules themselves are written to accommodate ambiguity. Terms such as 'genuine visitor' and 'intention to leave' are deliberately unquantified. What one officer regards as a reassuring pattern of family visits, another may regard as de facto residence assembled in instalments.",
          "It would be a mistake, however, to conclude that the traveller is powerless. Discretion cuts both ways: an officer who is minded to admit you will look for reasons to do so, and the traveller's task is simply to furnish them. Documents that would be perverse to hold were you intending to overstay — a lease, a tax registration, a dependent relative, an obligation with a date attached — do more work than any amount of earnest assurance.",
          "Perhaps the most counter-intuitive advice is this: do not argue the law. An officer who has been challenged on a point of interpretation is under considerable institutional pressure not to be seen to concede it. Supply facts, decline politely to speculate, and let the discretion that is already built into the system work quietly in your favour.",
        ],
        glossary: [
          { en: "discretion", tr: "takdir yetkisi" },
          { en: "threshold", tr: "eşik, sınır değer" },
          { en: "judgement call", tr: "kişisel takdire dayalı karar" },
          { en: "de facto", tr: "fiilen, gerçekte" },
          { en: "furnish", tr: "sağlamak, temin etmek" },
          { en: "perverse", tr: "mantığa aykırı, ters" },
          { en: "concede", tr: "kabul etmek, geri adım atmak" },
        ],
        quiz: [
          { q: "Why can identical cases be treated differently?", options: ["Officers act improperly", "The rules deliberately accommodate ambiguity", "Computers decide randomly"], answer: 1 },
          { q: "What does the text say does the most work?", options: ["Earnest assurances", "Legal arguments", "Documents that would be perverse to hold"], answer: 2 },
          { q: "Why should you avoid arguing the law?", options: ["It is illegal", "The officer is pressured not to concede", "It takes too long"], answer: 1 },
        ],
      },
      grammar: [
        {
          title: "Formal inversion & 'Were' subjunctive",
          explain: "Resmî ve hukuki dilde 'if' düşürülüp yapı devrilir. Yazılı üslubun en belirgin işaretlerinden biri.",
          examples: [
            { en: "Were I intending to settle, this would be irrational.", tr: "Yerleşmeye niyetli olsaydım bu mantıksız olurdu." },
            { en: "Were the aggregate to become problematic, I'd expect to be told.", tr: "Toplam tablo sorunlu hâle gelecek olsa, bana söylenmesini beklerdim." },
            { en: "Should you wish to appeal, the form is online.", tr: "İtiraz etmek isterseniz, form çevrimiçi." },
          ],
          tip: "If I were → Were I. If you should → Should you. If I had → Had I. Üçü de aynı mantık.",
        },
        {
          title: "Nominalisation — fiilleri isimleştirme",
          explain: "Akademik ve kurumsal İngilizcenin yoğunluk kaynağı: eylemler isme dönüşür, cümle sıkışır.",
          examples: [
            { en: "The rules devolve into a series of judgement calls.", tr: "Kurallar bir dizi takdire dayalı karara dönüşür." },
            { en: "Intention is notoriously difficult to evidence.", tr: "Niyet, kanıtlanması meşhur şekilde zor bir şeydir." },
            { en: "His refusal to comment was itself informative.", tr: "Yorum yapmayı reddetmesi başlı başına bilgi vericiydi." },
          ],
          tip: "'He decided quickly' → 'His rapid decision'. Yoğunluk kazandırır ama abartırsan metin taş gibi olur; dengeyi koru.",
        },
        {
          title: "Concessive bağlaçlar: notwithstanding / albeit / whereas",
          explain: "Karşıtlık ve tavizi tek kelimeyle taşıyan üst düzey bağlaçlar.",
          examples: [
            { en: "Notwithstanding your visitor status, the pattern suggests otherwise.", tr: "Ziyaretçi statünüze rağmen tablo aksini gösteriyor." },
            { en: "He agreed, albeit reluctantly.", tr: "Kabul etti, gerçi isteksizce." },
            { en: "One officer saw reassurance, whereas another saw residence.", tr: "Bir memur güven verici bulurken diğeri ikamet gördü." },
          ],
          tip: "albeit'ten sonra özne+fiil gelmez: 'albeit reluctantly' ✔ / 'albeit he was reluctant' ✘.",
        },
        {
          title: "Register shifting — üslup geçişleri",
          explain: "C2 seviyesi, resmî ile samimi arasında bilinçli geçiş yapabilmektir. Aynı fikri iki tonda söyleyebilmek.",
          examples: [
            { en: "I'll be frank: what concerns me is the aggregate picture.", tr: "Açık olayım: beni endişelendiren bütünsel tablo." },
            { en: "Consider yourself told, then — informally.", tr: "O hâlde söylenmiş sayın — gayriresmî olarak." },
            { en: "I'd sooner be candid than have this misconstrued.", tr: "Bunun yanlış anlaşılmasındansa açık sözlü olmayı yeğlerim." },
          ],
          tip: "Ağır bir cümleden sonra kısa ve düz bir cümle kur. Bu ritim değişimi, ana dili konuşanların en belirgin özelliğidir.",
        },
      ],
      pronunciation: [
        { word: "notwithstanding", ipa: "/ˌnɒt.wɪθˈstæn.dɪŋ/", tip: "Ana vurgu 'STAN' hecesinde. Tek nefeste söylemeyi çalış." },
        { word: "aggregate", ipa: "/ˈæɡ.rɪ.ɡət/ (isim) · /ˈæɡ.rɪ.ɡeɪt/ (fiil)", tip: "İsimken son hece zayıf, fiilken 'geyt' diye açılır." },
        { word: "discretion", ipa: "/dɪˈskreʃ.ən/", tip: "dis-KREŞ-ın. 'discreet' ile karıştırma, vurgu ve anlam farklı." },
        { word: "misconstrued", ipa: "/ˌmɪs.kənˈstruːd/", tip: "mis-kın-STRUUD. Son hecede uzun 'u'." },
        { word: "irrevocably", ipa: "/ɪˈrev.ə.kə.bli/", tip: "i-REV-ı-kıb-li. Vurgu 'rev' hecesinde — yaygın bir hata noktası." },
        { word: "quintessentially", ipa: "/ˌkwɪn.tɪˈsen.ʃəl.i/", tip: "kwin-ti-SEN-şı-li. Beş hece, ana vurgu ortada." },
      ],
    },
  },
};
