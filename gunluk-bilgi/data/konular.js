// Konu şeması:
// { id, kategori, baslik, altbaslik, sure (dk), gorseller: [İngilizce Wikipedia başlıkları — ilki kapak],
//   wiki: Türkçe Wikipedia arama terimi, giris, bolumler: [{ baslik, metin }], bilgiler: [kısa maddeler], biliyorMuydun }
// Görseller çalışma anında Wikipedia/Wikimedia Commons'tan çekilir.
window.KONULAR = [
  // ───────────────────────── TARİH ─────────────────────────
  {
    id: "birinci-dunya-savasi", kategori: "tarih", sure: 6,
    baslik: "Birinci Dünya Savaşı", altbaslik: "Dört imparatorluğu yıkan Büyük Savaş (1914–1918)",
    gorseller: ["World_War_I", "Gallipoli_campaign", "Christmas_truce"], wiki: "Birinci Dünya Savaşı",
    giris: "Bir suikastla başlayan, siperlerde kilitlenen ve sonunda Avrupa'nın, Orta Doğu'nun haritasını baştan çizen savaş. Modern dünyanın neredeyse tüm sınırları bu dört yılın gölgesinde şekillendi.",
    bolumler: [
      { baslik: "Kıvılcım: Saraybosna, 28 Haziran 1914", metin: "Avusturya-Macaristan veliahtı Arşidük Franz Ferdinand, Bosnalı Sırp milliyetçi Gavrilo Princip tarafından vuruldu. Tek başına bölgesel bir kriz olabilecek bu olay, Avrupa'yı birbirine bağlayan ittifaklar yüzünden haftalar içinde kıta çapında bir savaşa dönüştü. Bir yanda İtilaf Devletleri (Britanya, Fransa, Rusya; sonra İtalya ve ABD), diğer yanda İttifak Devletleri (Almanya, Avusturya-Macaristan, Osmanlı İmparatorluğu ve Bulgaristan) vardı." },
      { baslik: "Siper savaşı ve yeni silahlar", metin: "Batı Cephesi'nde iki taraf da İsviçre'den Manş Denizi'ne uzanan siper hatlarına gömüldü. Makineli tüfek ve topçu, ileri atılan piyadeyi biçiyordu: 1916'daki Somme Muharebesi'nin yalnızca ilk gününde İngiliz ordusu yaklaşık 57 bin kayıp verdi. Çıkmazı kırmak için zehirli gaz, tank, uçak ve denizaltı gibi silahlar ilk kez bu ölçekte kullanıldı. Savaş, sanayi gücünün ve cephe gerisinin de savaştığı ilk 'topyekûn savaş' oldu." },
      { baslik: "Osmanlı cepheleri", metin: "Osmanlı İmparatorluğu Kasım 1914'te savaşa girdi ve aynı anda pek çok cephede çarpıştı: Kafkasya'da Sarıkamış felaketi, Irak'ta Kut'ül-Amare zaferi, Filistin ve Suriye'de geri çekilişler... 1915'teki Çanakkale Muharebeleri ise İtilaf donanmasının Boğaz'ı geçme planını boşa çıkardı; genç bir yarbay olan Mustafa Kemal burada öne çıktı. Savaş, Osmanlı için 30 Ekim 1918'de imzalanan Mondros Mütarekesi ile fiilen sona erdi." },
      { baslik: "Sonuç: Yeni bir dünya", metin: "11 Kasım 1918'de Compiègne'de imzalanan ateşkesle silahlar sustu. Yaklaşık 9 milyon asker, toplamda ise sivillerle birlikte 15–20 milyon insan hayatını kaybetti. Alman, Avusturya-Macaristan, Rus ve Osmanlı imparatorlukları çöktü; yerlerinde yeni ulus devletler doğdu. 1919 Versay Antlaşması'nın Almanya'ya yüklediği ağır şartlar ise yirmi yıl sonra gelecek İkinci Dünya Savaşı'nın tohumlarını ekti." }
    ],
    bilgiler: ["Savaşa 30'dan fazla ülke katıldı.", "Tank ilk kez 15 Eylül 1916'da Somme'da kullanıldı.", "Savaşın sonunda yayılan 1918 gribi, savaştan daha fazla can aldı."],
    biliyorMuydun: "1914 Noel'inde Batı Cephesi'nin bazı bölgelerinde İngiliz ve Alman askerleri kendiliğinden ateşkes yaptı; siperlerden çıkıp şarkı söylediler, hediye değiştiler, hatta futbol oynadıkları anlatılır."
  },
  {
    id: "hacli-seferleri", kategori: "tarih", sure: 6,
    baslik: "Haçlı Seferleri", altbaslik: "İki yüz yıl süren kutsal savaşlar (1096–1291)",
    gorseller: ["Crusades", "Saladin", "Krak_des_Chevaliers"], wiki: "Haçlı Seferleri",
    giris: "Avrupa'dan Doğu Akdeniz'e uzanan, din, toprak, ticaret ve şöhret hırsının iç içe geçtiği bir dizi sefer. Hem İslam dünyasını hem Bizans'ı hem de Avrupa'nın kendisini derinden değiştirdi.",
    bolumler: [
      { baslik: "Clermont'daki çağrı", metin: "1071 Malazgirt Zaferi'nden sonra Türkler Anadolu'ya hızla yayıldı. Bizans İmparatoru I. Aleksios Komnenos Batı'dan paralı asker istedi. Papa II. Urbanus 1095'te Clermont'ta yaptığı konuşmayla bu isteği çok daha büyük bir şeye dönüştürdü: Kudüs'ü 'kurtarmak' için silahlanan herkese günahlarının affı vaat edildi. Kalabalık 'Deus vult!' (Tanrı bunu istiyor) diye karşılık verdi." },
      { baslik: "Kudüs'ün düşüşü ve Haçlı devletleri", metin: "İlk dalga olan düzensiz 'Halkın Haçlı Seferi', 1096'da Anadolu Selçuklu Sultanı I. Kılıç Arslan tarafından dağıtıldı. Ama arkasından gelen şövalye orduları İznik'i, Antakya'yı ve 1099'da Kudüs'ü aldı; şehirde büyük bir katliam yaşandı. Kıyı şeridinde Kudüs Krallığı, Antakya Prinkepsliği, Trablus ve Urfa kontluklarından oluşan Haçlı devletleri kuruldu." },
      { baslik: "Selahaddin ve Aslan Yürekli Richard", metin: "Müslüman dünyası zamanla toparlandı. Zengi ve Nureddin'in başlattığı karşı hamleyi Selahaddin Eyyubi tamamladı: 1187'deki Hıttin Muharebesi'nin ardından Kudüs'ü geri aldı ve şehirdeki Hristiyanlara can güvencesi verdi. Ardından gelen Üçüncü Haçlı Seferi'nde İngiltere Kralı Aslan Yürekli Richard ile Selahaddin arasındaki mücadele efsaneleşti; ancak Kudüs Müslümanlarda kaldı." },
      { baslik: "Yolunu şaşıran seferler ve miras", metin: "1204'teki Dördüncü Haçlı Seferi Kudüs'e hiç ulaşamadı; Venedik'in yönlendirmesiyle Hristiyan İstanbul'u yağmaladı ve Bizans'ı geri dönülmez biçimde zayıflattı. 1291'de Akka'nın Memlüklere düşmesiyle Doğu'daki son Haçlı kalesi de kayboldu. Seferler Venedik ve Ceneviz'i zenginleştirdi, Avrupa'ya şeker, baharat ve yeni bilgiler taşıdı; ama iki dünya arasında yüzyıllar sürecek bir güvensizlik de bıraktı." }
    ],
    bilgiler: ["Genellikle 9 büyük Haçlı Seferi sayılır.", "Tapınak Şövalyeleri ve Hastaneciler gibi askerî tarikatlar bu dönemde doğdu.", "Suriye'deki Krak des Chevaliers, Orta Çağ'ın en iyi korunmuş kalelerinden biridir."],
    biliyorMuydun: "Selahaddin, Aslan Yürekli Richard hastalandığında ona taze meyve ve dağlardan buz gönderdiği, atı öldüğünde de yeni bir at yolladığı rivayet edilir."
  },
  {
    id: "istanbulun-fethi", kategori: "tarih", sure: 5,
    baslik: "İstanbul'un Fethi", altbaslik: "Bir çağı kapatan 53 gün (1453)",
    gorseller: ["Fall_of_Constantinople", "Rumelihisarı", "Hagia_Sophia"], wiki: "İstanbul'un Fethi",
    giris: "Bin yılı aşkın süre Doğu Roma'nın başkenti olan Konstantinopolis, 29 Mayıs 1453'te 21 yaşındaki II. Mehmed'in ordusuna düştü. Pek çok tarihçi bu tarihi Orta Çağ'ın sonu olarak kabul eder.",
    bolumler: [
      { baslik: "Hazırlık: Boğazkesen", metin: "II. Mehmed tahta çıkar çıkmaz hazırlığa girişti. 1452'de, Boğaz'ın en dar noktasında yalnızca birkaç ayda Rumeli Hisarı'nı (Boğazkesen) inşa ettirdi; böylece Karadeniz'den şehre gelecek yardım kesildi. Macar asıllı dökümcü Urban'a, o güne kadar görülmemiş büyüklükte toplar döktürdü. Bu toplar, yüzyıllardır hiçbir orduya geçit vermeyen Theodosius Surları'nı dövecekti." },
      { baslik: "Gemiler karadan yürüyor", metin: "Bizanslılar Haliç'in girişini kalın bir zincirle kapatmıştı. Osmanlı donanması zinciri aşamayınca II. Mehmed alışılmadık bir çözüm buldu: 22 Nisan 1453 gecesi, yağlanmış kızaklar üzerinde onlarca gemi Galata'nın arkasındaki tepelerden karadan yürütülerek Haliç'e indirildi. Sabah uyanan savunucular düşman gemilerini kendi limanlarının içinde gördü ve surların Haliç tarafını da korumak zorunda kaldı." },
      { baslik: "Son hücum ve sonrası", metin: "Haftalar süren bombardımanın ardından 29 Mayıs şafağında genel saldırı başladı. Son Bizans İmparatoru XI. Konstantinos Palaiologos surlarda savaşarak öldü. II. Mehmed 'Fatih' unvanını aldı, şehri imparatorluğun başkenti yaptı ve farklı dinlerden halkı yeniden yerleştirerek İstanbul'u bir kez daha dünyanın en kalabalık şehirlerinden birine dönüştürdü. Ayasofya camiye çevrildi." }
    ],
    bilgiler: ["Kuşatma 6 Nisan'dan 29 Mayıs 1453'e, 53 gün sürdü.", "Rumeli Hisarı yaklaşık 4,5 ayda tamamlandı.", "Fetih, Avrupa'ya kaçan Bizanslı âlimler sayesinde Rönesans'ı da besledi."],
    biliyorMuydun: "Urban önce toplarını Bizans İmparatoru'na satmayı denemişti; ancak imparator istenen ücreti ödeyemeyince II. Mehmed'in hizmetine girdi."
  },
  {
    id: "keops-piramidi", kategori: "tarih", sure: 5,
    baslik: "Büyük Piramit", altbaslik: "3.800 yıl boyunca dünyanın en yüksek yapısı",
    gorseller: ["Great_Pyramid_of_Giza", "Great_Sphinx_of_Giza", "Giza_pyramid_complex"], wiki: "Keops Piramidi",
    giris: "Gize'deki Büyük Piramit, MÖ 2560 civarında Firavun Keops (Hufu) için inşa edildi. Antik Dünyanın Yedi Harikası'ndan bugün ayakta kalan tek yapıdır.",
    bolumler: [
      { baslik: "Akıl almaz bir ölçek", metin: "Piramit inşa edildiğinde yaklaşık 146 metre yüksekliğindeydi ve ortalama iki tonu aşan 2,3 milyon taş bloktan oluşuyordu. Tabanının kenarları arasındaki fark birkaç santimetreyi geçmez ve yapı neredeyse kusursuz biçimde ana yönlere hizalanmıştır. 14. yüzyılda İngiltere'deki Lincoln Katedrali tamamlanana kadar insan eliyle yapılmış en yüksek yapı unvanını korudu." },
      { baslik: "Kim inşa etti?", metin: "Popüler inanışın aksine piramidi köleler değil, ücretli ve organize işçi ekipleri yaptı. Arkeologlar Gize'de fırınları, ekmek ve bira üretim alanlarıyla dolu bir işçi kasabası buldu. 2013'te Kızıldeniz kıyısındaki Wadi el-Jarf'ta bulunan papirüsler — bilinen en eski yazılı papirüsler — Merer adlı bir müfettişin, kireçtaşı blokları Nil üzerinden teknelerle Gize'ye taşıyan ekibinin günlüğünü içeriyordu." },
      { baslik: "İçerideki sırlar", metin: "Piramidin içinde Kral Odası, Kraliçe Odası ve 8,6 metre yüksekliğindeki Büyük Galeri bulunur. 2017'de kozmik ışın parçacıklarıyla (müonlarla) yapılan taramalar, Büyük Galeri'nin üzerinde henüz kimsenin girmediği büyük bir boşluk olduğunu ortaya koydu. Yapının nasıl yükseltildiği — rampalar, kaldıraçlar veya ikisinin birleşimi — hâlâ tartışılıyor." }
    ],
    bilgiler: ["Dış yüzeyi bir zamanlar parlak beyaz Tura kireçtaşıyla kaplıydı.", "Keops'tan geriye kalan tek tam heykel yalnızca 7,5 cm boyundaki fildişi bir figürdür.", "Kleopatra, piramitlerin yapılışına zaman olarak Ay'a inişten daha uzaktı."],
    biliyorMuydun: "Piramit o kadar eskidir ki antik Mısırlılar için bile 'antik' sayılıyordu; Romalı turistler de onu ziyaret edip duvarlarına yazı kazıyordu."
  },

  // ───────────────────────── COĞRAFYA ─────────────────────────
  {
    id: "amazon", kategori: "cografya", sure: 5,
    baslik: "Amazon Yağmur Ormanları", altbaslik: "Gezegenin yeşil kalbi",
    gorseller: ["Amazon_rainforest", "Amazon_River", "Jaguar"], wiki: "Amazon yağmur ormanı",
    giris: "Dokuz ülkeye yayılan yaklaşık 5,5 milyon km²'lik Amazon, dünyanın en büyük tropikal yağmur ormanıdır ve karadaki türlerin önemli bir kısmına ev sahipliği yapar.",
    bolumler: [
      { baslik: "Biyoçeşitliliğin zirvesi", metin: "Amazon'da tahminen 390 milyar ağaç ve 16 binden fazla ağaç türü bulunur. Tek bir hektarında, tüm Avrupa'daki ağaç türlerinden fazlası olabilir. Jaguarlar, pembe nehir yunusları, dev su samurları, anakondalar ve henüz bilimin tanımlamadığı binlerce böcek türü bu ormanda yaşar." },
      { baslik: "Uçan nehirler", metin: "Orman yalnızca yağmuru almaz, kendisi yağmur üretir. Ağaçlar köklerinden çektikleri suyu yapraklarından buhar olarak atmosfere verir. Bu nem kütleleri — 'uçan nehirler' — rüzgârla güneye taşınarak Brezilya, Arjantin ve Paraguay'daki tarım alanlarına yağış olarak düşer. Amazon Nehri de denizlere ulaşan tüm tatlı suyun yaklaşık beşte birini taşır." },
      { baslik: "Sahra'dan gelen gübre", metin: "Amazon toprakları şaşırtıcı biçimde besince fakirdir; yoğun yağmurlar mineralleri yıkayıp götürür. Eksik kalan fosforun bir kısmı Atlantik'in öbür yakasından gelir: NASA uydularının ölçümlerine göre her yıl Sahra'dan kalkan milyonlarca ton toz okyanusu aşarak ormana düşer. Özellikle Çad'daki eski bir göl yatağı olan Bodélé Çukuru bu tozun ana kaynaklarındandır." },
      { baslik: "Tehdit altındaki denge", metin: "Hayvancılık, soya tarımı, madencilik ve yasa dışı kesim nedeniyle orman son 50 yılda büyük kayıplar verdi. Bilim insanları, ormanın belirli bir eşiği aştıktan sonra kendi yağmurunu üretemeyip kurak bir savana dönüşebileceği bir 'devrilme noktası'ndan endişe ediyor." }
    ],
    bilgiler: ["Ormanın yaklaşık %60'ı Brezilya sınırları içindedir.", "Amazon havzasında 400'den fazla yerli halk yaşar.", "Amazon Nehri'nin üzerinde, ağzına kadar hiçbir köprü yoktur."],
    biliyorMuydun: "Amazon'da her yıl ortalama yeni türler keşfedilir; 2014–2015 arasında yalnızca iki yılda 381 yeni bitki ve hayvan türü tanımlandı."
  },
  {
    id: "kapadokya", kategori: "cografya", sure: 5,
    baslik: "Kapadokya", altbaslik: "Volkanların ve rüzgârın yonttuğu ülke",
    gorseller: ["Cappadocia", "Derinkuyu_underground_city", "Göreme"], wiki: "Kapadokya",
    giris: "Peri bacaları, kayaya oyulmuş kiliseler ve yerin altında katlarca derine inen şehirler... Kapadokya, jeoloji ile insan emeğinin birlikte şekillendirdiği eşsiz bir manzaradır.",
    bolumler: [
      { baslik: "Ateşten doğan topraklar", metin: "Milyonlarca yıl önce Erciyes, Hasandağı ve Göllüdağ volkanlarının püskürttüğü kül ve lavlar bölgeyi kalın katmanlarla örttü. Kül sıkışarak tüf denen yumuşak bir kayaca dönüştü. Ardından yağmur, kar, rüzgâr ve sıcaklık farkları bu yumuşak katmanı aşındırmaya başladı." },
      { baslik: "Peri bacalarının sırrı", metin: "Tüfün üzerinde yer yer daha sert bazalt veya andezit kapaklar bulunur. Bu sert 'şapkalar' altlarındaki tüfü yağmurdan korurken çevredeki yumuşak kaya aşınır gider. Sonuç: tepesinde taş şapkası olan, koni biçimli kuleler. Şapka sonunda düştüğünde baca da hızla aşınır; yani bugün gördüğümüz peri bacaları sürekli değişen bir sürecin anlık görüntüsüdür." },
      { baslik: "Yeraltı şehirleri", metin: "Tüf, el aletleriyle kolayca oyulabildiği için bölge halkı binlerce yıl boyunca kayaya evler, ahırlar, kiliseler ve yeraltı şehirleri kazdı. Derinkuyu yeraltı şehri 80 metreyi aşan derinliğe iner; havalandırma bacaları, su kuyuları, şarap mahzenleri ve dev taş kapılarla binlerce kişiyi uzun süre barındırabiliyordu. 1963'te bir evin duvarı yıkılırken tesadüfen keşfedildi." },
      { baslik: "Kaya kiliseleri", metin: "Bizans döneminde bölge önemli bir Hristiyan merkezi oldu. Göreme'deki kaya kiliselerinin duvarları 10.–12. yüzyıllardan kalma canlı fresklerle kaplıdır. Göreme Milli Parkı ve Kapadokya Kayalık Alanları 1985'te UNESCO Dünya Mirası Listesi'ne girdi." }
    ],
    bilgiler: ["Bölgede 200'den fazla yeraltı yerleşimi olduğu düşünülüyor.", "Adının Pers dilindeki 'Katpatuka'dan geldiği ve 'güzel atlar ülkesi' anlamına geldiği söylenir.", "Sabahları yüzlerce sıcak hava balonu bölge semalarında süzülür."],
    biliyorMuydun: "Tüf kaya doğal bir yalıtkandır; bu yüzden kayaya oyulmuş odalar yazın serin, kışın ılık kalır. Bölgede bugün hâlâ limon ve patates bu mağaralarda saklanır."
  },
  {
    id: "sahra", kategori: "cografya", sure: 5,
    baslik: "Sahra Çölü", altbaslik: "Bir zamanlar yeşil olan çöl",
    gorseller: ["Sahara", "Tassili_n'Ajjer", "Erg_Chebbi"], wiki: "Büyük Sahra",
    giris: "Yaklaşık 9 milyon km² ile neredeyse ABD büyüklüğündeki Sahra, dünyanın en büyük sıcak çölüdür. Ama on bin yıl önce burada göller, timsahlar ve su aygırları vardı.",
    bolumler: [
      { baslik: "Sanıldığı kadar kumlu değil", metin: "Sahra deyince akla dev kum tepeleri gelir; oysa çölün yalnızca yaklaşık dörtte biri kum denizlerinden (erg) oluşur. Geri kalanı çakıllı düzlükler, kayalık platolar (hamada), tuz yatakları ve 3.000 metreyi aşan dağlardır. Gündüz sıcaklık 50°C'ye yaklaşabilirken, kuru hava ısıyı tutamadığı için geceleri donma noktasına inebilir." },
      { baslik: "Yeşil Sahra", metin: "Yaklaşık 11.000 ile 5.000 yıl önce, 'Afrika Nemli Dönemi' denilen evrede Sahra savanlar, göller ve nehirlerle kaplıydı. Bugün Cezayir'deki Tassili n'Ajjer platosunda bulunan binlerce kaya resmi zürafaları, sığır sürülerini, yüzen insanları ve su aygırlarını gösterir. Çöl ortasında bulunan balık kılçıkları ve zıpkın uçları da bu kayıp dünyanın kanıtlarıdır." },
      { baslik: "Neden çölleşti?", metin: "Dünya'nın ekseni yaklaşık 20–26 bin yıllık bir döngüyle yalpalar (presesyon). Bu yalpalama, Kuzey Afrika'ya düşen yaz güneşinin miktarını değiştirir ve muson yağmurlarını kuzeye çeker ya da güneye iter. Yaklaşık 5.000 yıl önce musonlar geri çekildi; bitki örtüsünün azalmasıyla toprak daha fazla güneş yansıttı ve kuraklık kendi kendini besleyerek hızlandı. Bu değişim, insanları Nil vadisine göç etmeye itmiş ve Mısır uygarlığının doğuşuna katkı sağlamış olabilir." }
    ],
    bilgiler: ["Sahra on bir ülkeye yayılır.", "Çölün en yüksek noktası Çad'daki Emi Koussi volkanıdır (yaklaşık 3.415 m).", "Bazı kum tepeleri 180 metreyi aşar."],
    biliyorMuydun: "Sahra'da nadiren de olsa kar yağar; Cezayir'deki Ain Sefra kasabası son yıllarda birkaç kez kızıl kum tepelerinin beyaza büründüğü günler yaşadı."
  },
  {
    id: "mariana-cukuru", kategori: "cografya", sure: 5,
    baslik: "Mariana Çukuru", altbaslik: "Yeryüzünün en derin noktası",
    gorseller: ["Mariana_Trench", "Bathyscaphe_Trieste", "Challenger_Deep"], wiki: "Mariana Çukuru",
    giris: "Batı Pasifik'teki Mariana Çukuru'nun en derin noktası Challenger Derini, deniz seviyesinin yaklaşık 10.900 metre altındadır. Everest Dağı'nı buraya koysanız, zirvesinin üzerinde hâlâ 2 kilometreden fazla su kalırdı.",
    bolumler: [
      { baslik: "Levhaların çarpıştığı yer", metin: "Çukur, Pasifik Levhası'nın daha genç Mariana Levhası'nın altına daldığı bir dalma-batma zonudur. Yaklaşık 2.500 km uzunluğunda hilal biçimli bir yarık olarak uzanır. Aynı süreç bölgede volkanik adalar ve sık depremler de oluşturur." },
      { baslik: "Ezici basınç", metin: "Dipte basınç deniz seviyesindekinin yaklaşık 1.000 katıdır; bu, başparmağınızın üzerinde bir otomobilin ağırlığını taşımak gibidir. Güneş ışığı oraya hiç ulaşmaz, su sıcaklığı 1–4°C arasındadır. Yine de dipte yaşam vardır: amfipod denilen karidesimsi kabuklular, tek hücreli dev ksenofioforlar ve bakteri toplulukları burada yaşar." },
      { baslik: "Dibe inenler", metin: "23 Ocak 1960'ta Jacques Piccard ve Don Walsh, Trieste adlı batiskafla Challenger Derini'ne indi; dipte yalnızca yaklaşık 20 dakika kaldılar ve kalkan çamur yüzünden pek bir şey göremediler. 52 yıl sonra, 2012'de film yönetmeni James Cameron kendi tasarladığı Deepsea Challenger ile tek başına dibe indi. 2019'dan itibaren ise Victor Vescovo'nun denizaltısı sayesinde dibe inen insan sayısı arttı." }
    ],
    bilgiler: ["Mariana Çukuru 2009'dan beri ABD'nin deniz koruma alanıdır.", "Salyangoz balıkları 8.000 metreyi aşan derinliklerde görüntülendi.", "Dibe ulaşmak bir taşın yaklaşık bir saatini alır."],
    biliyorMuydun: "Dünyanın en derin noktasında bile insan izi var: Bilim insanları Challenger Derini'nin dibinde bir plastik poşet ve amfipodların midesinde mikroplastikler buldu."
  },

  // ───────────────────────── BİYOLOJİ ─────────────────────────
  {
    id: "dna", kategori: "biyoloji", sure: 6,
    baslik: "DNA: Yaşamın Kodu", altbaslik: "Dört harfle yazılmış bir talimat kitabı",
    gorseller: ["DNA", "Photo_51", "Rosalind_Franklin"], wiki: "DNA",
    giris: "Her hücrenizin çekirdeğinde, açıldığında yaklaşık 2 metre uzunluğa ulaşan bir molekül var. Bu molekül, sizi siz yapan talimatları dört harflik bir alfabeyle saklıyor.",
    bolumler: [
      { baslik: "Çift sarmalın keşfi", metin: "1953'te James Watson ve Francis Crick DNA'nın çift sarmal yapısını açıkladı. Bu keşfin en kritik kanıtlarından biri, Rosalind Franklin ve öğrencisi Raymond Gosling'in X-ışını kırınımıyla elde ettiği 'Fotoğraf 51' idi. Franklin'in verileri, onun bilgisi dışında Watson'a gösterilmişti. Franklin 1958'de 37 yaşında öldü; 1962 Nobel Ödülü ise Watson, Crick ve Maurice Wilkins'e verildi." },
      { baslik: "Dört harfli alfabe", metin: "DNA dört bazdan oluşur: Adenin (A), Timin (T), Guanin (G) ve Sitozin (C). A her zaman T ile, G her zaman C ile eşleşir; bu yüzden sarmalın bir kolu diğerinin kalıbıdır ve hücre bölünürken DNA kendini kopyalayabilir. Üç harften oluşan her 'kelime' (kodon) bir amino asidi işaret eder; amino asitler de proteinleri, yani hücrenin makinelerini oluşturur." },
      { baslik: "İnsan genomu", metin: "İnsan genomu yaklaşık 3,1 milyar baz çiftinden oluşur ama bunun yalnızca %1–2'si protein kodlayan yaklaşık 20 bin gendir. Geri kalan kısmın bir bölümü genleri açıp kapatan düzenleyici bölgelerdir. İki insan DNA'larının %99,9'unu paylaşır; tüm insan çeşitliliği o küçük %0,1'lik farkta saklıdır." },
      { baslik: "Kodu düzenlemek: CRISPR", metin: "Bakterilerin virüslere karşı geliştirdiği bir savunma sistemi olan CRISPR-Cas9, bilim insanlarının DNA'yı neredeyse bir metin editörü gibi kesip düzenlemesini sağladı. Jennifer Doudna ve Emmanuelle Charpentier bu buluşla 2020 Nobel Kimya Ödülü'nü aldı. Orak hücre anemisi için ilk CRISPR tedavisi 2023'te onaylandı." }
    ],
    bilgiler: ["Vücudunuzdaki tüm DNA uç uca eklense Güneş'e defalarca gidip gelebilir.", "Genlerinizin büyük kısmını muz gibi bitkilerle bile paylaşırsınız.", "DNA, uygun koşullarda yüz binlerce yıl dayanabilir."],
    biliyorMuydun: "DNA veri depolamak için de kullanılabilir: Teorik olarak tek bir gram DNA, yüzlerce milyon gigabaytlık bilgiyi saklayabilir."
  },
  {
    id: "dogal-secilim", kategori: "biyoloji", sure: 5,
    baslik: "Doğal Seçilim", altbaslik: "Darwin'in yaşamı açıklayan fikri",
    gorseller: ["Charles_Darwin", "Darwin's_finches", "Peppered_moth"], wiki: "Doğal seçilim",
    giris: "Basit üç gözleme dayanan bir fikir, yeryüzündeki canlıların inanılmaz çeşitliliğini açıklıyor. Charles Darwin bu fikre, beş yıl süren bir deniz yolculuğundan sonra ulaştı.",
    bolumler: [
      { baslik: "Beagle yolculuğu", metin: "1831'de 22 yaşındaki Darwin, HMS Beagle gemisiyle dünyayı dolaşan bir yolculuğa doğabilimci olarak katıldı. Galápagos Adaları'nda her adada biraz farklı gagalara sahip ispinozlar ve kaplumbağalar gördü. Yıllar sonra bu farkların, ortak atalardan gelen türlerin farklı ortamlara uyum sağlamasıyla oluştuğunu düşünecekti." },
      { baslik: "Mekanizma", metin: "Doğal seçilimin mantığı şöyledir: (1) Bir türün bireyleri arasında farklılıklar vardır. (2) Bu farklılıkların bir kısmı kalıtsaldır. (3) Hayatta kalabilecek olandan çok daha fazla yavru doğar. Sonuç olarak, ortamına daha uygun özelliklere sahip bireyler daha çok yaşar, daha çok ürer ve bu özellikler nesiller boyunca yaygınlaşır. Darwin bu fikri yıllarca geliştirdi ve 1859'da 'Türlerin Kökeni' kitabıyla yayımladı; Alfred Russel Wallace da bağımsız olarak aynı sonuca ulaşmıştı." },
      { baslik: "Gözümüzün önündeki evrim", metin: "Sanayi Devrimi'nde İngiltere'de ağaç gövdeleri isle karardığında, açık renkli huş güvelerinin yerini kısa sürede koyu renkliler aldı; çünkü kuşlar açık renkli güveleri daha kolay görüyordu. Hava temizlenince oran tersine döndü. Bugün antibiyotiğe dirençli bakterilerin yayılması da aynı mekanizmanın, çok daha tehlikeli bir örneğidir." }
    ],
    bilgiler: ["Darwin 'Türlerin Kökeni'ni yayımlamadan önce yaklaşık 20 yıl bekledi.", "İlk baskının 1.250 kopyası satışa çıktığı gün tükendi.", "Galápagos ispinozlarının gagaları kurak yıllarda tek nesilde ölçülebilir şekilde değişti."],
    biliyorMuydun: "Darwin evlenip evlenmemeye karar vermek için bir artı-eksi listesi yazmıştı; 'eksi' tarafında 'kulüpte zekice sohbetten mahrum kalmak' da vardı. Sonunda evlendi ve on çocuğu oldu."
  },
  {
    id: "fotosentez", kategori: "biyoloji", sure: 5,
    baslik: "Fotosentez", altbaslik: "Işığı yaşama dönüştüren kimya",
    gorseller: ["Photosynthesis", "Chloroplast", "Cyanobacteria"], wiki: "Fotosentez",
    giris: "Soluduğunuz oksijenin ve yediğiniz her lokmanın kaynağı aynı süreç: bitkilerin, alglerin ve bazı bakterilerin güneş ışığını kimyasal enerjiye çevirmesi.",
    bolumler: [
      { baslik: "Basit bir denklem, karmaşık bir makine", metin: "Özetle: Karbondioksit + su + ışık → şeker + oksijen. Ama bu basit denklemin arkasında onlarca adımlık bir moleküler makine çalışır. Yaprak hücrelerindeki kloroplastlar, ışığı soğuran klorofil pigmentleriyle doludur. Klorofil kırmızı ve mavi ışığı soğurup yeşili yansıttığı için bitkiler bize yeşil görünür." },
      { baslik: "İki aşama", metin: "Işığa bağlı tepkimelerde ışık enerjisi suyu parçalar; oksijen bir yan ürün olarak açığa çıkar ve enerji ATP ve NADPH moleküllerinde depolanır. Ardından Calvin döngüsünde bu enerji kullanılarak havadaki karbondioksit şekere dönüştürülür. Bu işi yapan RuBisCO enzimi, büyük ihtimalle Dünya'daki en bol bulunan proteindir; ama aynı zamanda oldukça yavaş ve sık hata yapan bir enzimdir." },
      { baslik: "Gezegeni değiştiren olay", metin: "Yaklaşık 2,4 milyar yıl önce siyanobakterilerin fotosentezle ürettiği oksijen atmosferde birikmeye başladı. 'Büyük Oksidasyon Olayı' denen bu süreç, o güne kadarki pek çok canlı için zehirliydi ama karmaşık, oksijen soluyan yaşamın yolunu açtı. Bugün bile oksijenin yaklaşık yarısını ormanlar değil, okyanuslardaki mikroskobik fitoplanktonlar üretir." }
    ],
    bilgiler: ["Bitki hücrelerindeki kloroplastlar, bir zamanlar serbest yaşayan bakterilerin torunlarıdır.", "Fotosentez Dünya'ya düşen güneş enerjisinin yalnızca küçük bir yüzdesini kullanır.", "Bazı deniz salyangozları yedikleri alglerin kloroplastlarını çalıp kendileri fotosentez yapar."],
    biliyorMuydun: "Bir ağacın kütlesinin büyük kısmı topraktan değil, havadan gelir: Odun büyük ölçüde fotosentezle yakalanan karbondioksitten yapılır."
  },
  {
    id: "ahtapot", kategori: "biyoloji", sure: 5,
    baslik: "Ahtapotların Zekâsı", altbaslik: "Üç kalpli, mavi kanlı dâhiler",
    gorseller: ["Octopus", "Octopus_vulgaris", "Mimic_octopus"], wiki: "Ahtapot",
    giris: "Ahtapotlar bize en uzak hayvanlardan biri olmasına rağmen zekâları bakımından en yakınlarımızdan biri. Onları incelemek, bir 'uzaylı zihni' incelemeye en yakın deneyim olabilir.",
    bolumler: [
      { baslik: "Tuhaf bir beden", metin: "Ahtapotun üç kalbi vardır: İkisi kanı solungaçlara, biri vücudun geri kalanına pompalar. Kanları, oksijeni taşıyan bakır bazlı hemosiyanin nedeniyle mavidir. İskeletleri olmadığından, gagalarından büyük her delikten geçebilirler." },
      { baslik: "Kollarda düşünen bir zihin", metin: "Yaygın ahtapotun yaklaşık 500 milyon nöronu vardır — bir köpeğinkine yakın. Ancak bu nöronların yaklaşık üçte ikisi beyinde değil, kollardadır. Her kol bir ölçüde kendi kararlarını verebilir; kesilmiş bir kol bile bir süre yiyecek yakalamaya çalışır. Ahtapotlar kavanoz kapağı açabilir, labirent çözebilir ve bireysel insanları tanıyabilir." },
      { baslik: "Ustalık seviyesinde kamuflaj", metin: "Derilerindeki binlerce kromatofor sayesinde saniyeler içinde renk ve desen değiştirebilir, deri dokularını kabartarak kaya ya da yosun taklidi yapabilirler. İşin tuhafı, çoğu ahtapot renk körüdür; bilim insanları ışığı derileriyle de algılayabildiklerini düşünüyor. Taklitçi ahtapot ise deniz yılanı, aslan balığı ve dil balığı gibi tehlikeli hayvanları taklit eder." }
    ],
    bilgiler: ["Damarlı ahtapot, hindistan cevizi kabuklarını taşıyıp sığınak olarak kullanır.", "Çoğu ahtapot yalnızca 1–2 yıl yaşar.", "Dişi ahtapot, yumurtaları çatlayana kadar beslenmeden onları korur ve genellikle sonra ölür."],
    biliyorMuydun: "2016'da Yeni Zelanda'daki bir akvaryumdan 'Inky' adlı ahtapot tankının kapağından sızıp yerde süründü ve bir drenaj borusundan okyanusa kaçtı."
  },

  // ───────────────────────── UZAY ─────────────────────────
  {
    id: "kara-delikler", kategori: "uzay", sure: 6,
    baslik: "Kara Delikler", altbaslik: "Işığın bile kaçamadığı yerler",
    gorseller: ["Black_hole", "Event_Horizon_Telescope", "Sagittarius_A*"], wiki: "Kara delik",
    giris: "Kütlesi o kadar yoğun bir alana sıkışmış ki, kaçış hızı ışık hızını aşan cisimler. Bir zamanlar yalnızca matematiksel bir tuhaflık sanılıyorlardı; bugün fotoğraflarını çekebiliyoruz.",
    bolumler: [
      { baslik: "Olay ufku", metin: "Kara deliğin etrafında 'olay ufku' denen görünmez bir sınır vardır. Bu sınırı geçen hiçbir şey — ışık dahil — geri dönemez. Karl Schwarzschild, Einstein'ın genel görelilik denklemlerinin bu tür bir çözümünü 1916'da, Birinci Dünya Savaşı cephesinde görev yaparken buldu. Einstein bile uzun süre bu cisimlerin gerçekte var olabileceğinden şüphe etti." },
      { baslik: "Nasıl oluşurlar?", metin: "Güneş'ten çok daha büyük kütleli yıldızlar yakıtlarını bitirdiğinde çekirdekleri kendi ağırlığı altında çöker ve bir kara delik doğabilir. Bunlara yıldız kütleli kara delikler denir. Galaksilerin merkezlerinde ise milyonlarca, hatta milyarlarca Güneş kütlesinde 'süper kütleli' kara delikler bulunur; Samanyolu'nun merkezindeki Sagittarius A* yaklaşık 4 milyon Güneş kütlesindedir." },
      { baslik: "İlk fotoğraflar", metin: "Dünyanın dört bir yanındaki radyo teleskoplarını birleştirerek Dünya büyüklüğünde sanal bir teleskop oluşturan Olay Ufku Teleskobu (EHT), 2019'da M87 galaksisinin merkezindeki kara deliğin ilk görüntüsünü yayımladı: parlak bir halkanın ortasında karanlık bir gölge. 2022'de ise kendi galaksimizin merkezindeki Sagittarius A*'nın görüntüsü geldi." },
      { baslik: "Zaman ve spagettileşme", metin: "Kara deliğe yaklaştıkça kütleçekimi zamanı yavaşlatır; uzaktan bakan biri, düşen bir cismin olay ufkunda neredeyse donup kaldığını görür. Küçük bir kara deliğe ayak önde düşen bir astronot, ayaklarına etkiyen çekimin başındakinden çok daha güçlü olması nedeniyle uzayıp incelir; fizikçiler buna ciddi ciddi 'spagettileşme' der." }
    ],
    bilgiler: ["2015'te LIGO, birleşen iki kara deliğin yarattığı kütleçekim dalgalarını ilk kez doğrudan algıladı.", "Stephen Hawking, kara deliklerin çok yavaş biçimde ışıma yaparak buharlaşabileceğini öne sürdü.", "Dünya bir kara deliğe dönüşseydi yaklaşık bir misket büyüklüğünde olurdu."],
    biliyorMuydun: "Güneş'in yerine aynı kütlede bir kara delik konsaydı Dünya'nın yörüngesi değişmezdi; yalnızca hava çok, çok karanlık ve soğuk olurdu."
  },
  {
    id: "apollo-11", kategori: "uzay", sure: 5,
    baslik: "Apollo 11: Ay'a İlk Adım", altbaslik: "20 Temmuz 1969",
    gorseller: ["Apollo_11", "Saturn_V", "Buzz_Aldrin"], wiki: "Apollo 11",
    giris: "Dünya nüfusunun önemli bir kısmının nefesini tutarak izlediği anda, bir insan ilk kez başka bir gök cisminin yüzeyine ayak bastı.",
    bolumler: [
      { baslik: "Bir yarışın finali", metin: "Soğuk Savaş'ın uzay yarışında Sovyetler ilk uyduyu (Sputnik, 1957) ve ilk insanı (Yuri Gagarin, 1961) uzaya göndermişti. Başkan John F. Kennedy 1961'de, on yıl bitmeden Ay'a insan indirme hedefini koydu. 16 Temmuz 1969'da, şimdiye kadar başarıyla uçmuş en güçlü roketlerden biri olan Saturn V, Neil Armstrong, Buzz Aldrin ve Michael Collins'i taşıyarak Florida'dan kalktı." },
      { baslik: "'Kartal indi'", metin: "Collins Columbia komuta modülünde Ay yörüngesinde kalırken Armstrong ve Aldrin, Eagle (Kartal) iniş aracıyla alçalmaya başladı. İniş sırasında bilgisayar '1202' ve '1201' alarmları verdi; görev kontrolü saniyeler içinde devam kararı verdi. Otomatik pilot onları kayalık bir alana götürürken Armstrong kontrolü eline aldı ve yakıt neredeyse tükenmişken Sükûnet Denizi'ne indi." },
      { baslik: "Küçük bir adım", metin: "Armstrong merdivenden inerken şu sözleri söyledi: 'Bu bir insan için küçük, insanlık için büyük bir adım.' İki astronot yüzeyde yaklaşık iki buçuk saat geçirdi; bayrak diktiler, deney aletleri kurdular ve yaklaşık 21,5 kg kaya ile toz topladılar. 24 Temmuz'da Pasifik Okyanusu'na güvenle indiler." }
    ],
    bilgiler: ["Apollo yönlendirme bilgisayarının belleği bugünkü bir telefonunkinin milyonda biri kadardı.", "Bıraktıkları lazer yansıtıcı, Dünya–Ay mesafesini ölçmek için bugün hâlâ kullanılıyor.", "1969–1972 arasında toplam 12 insan Ay'da yürüdü."],
    biliyorMuydun: "Astronotlar hayat sigortası yaptıramadığı için yüzlerce imzalı zarf bırakmıştı; başlarına bir şey gelirse aileleri bunları satabilecekti."
  },
  {
    id: "mars", kategori: "uzay", sure: 5,
    baslik: "Mars", altbaslik: "Kızıl gezegenin kayıp okyanusları",
    gorseller: ["Mars", "Olympus_Mons", "Perseverance_(rover)"], wiki: "Mars",
    giris: "Bugün soğuk, kuru ve tozlu bir çöl olan Mars, milyarlarca yıl önce nehirlerin aktığı, göllerin dolup taştığı bir dünyaydı. Peki o su nereye gitti?",
    bolumler: [
      { baslik: "Güneş Sistemi'nin rekortmeni", metin: "Mars, Güneş Sistemi'nin bilinen en yüksek volkanına ev sahipliği yapar: Olympus Mons, yaklaşık 22 km yüksekliği ile Everest'in iki buçuk katıdır. Valles Marineris kanyon sistemi ise yaklaşık 4.000 km uzunluğundadır; Dünya'da olsa ABD'yi baştan başa geçerdi. Gezegene kırmızı rengini yüzeydeki demir oksit, yani pas verir." },
      { baslik: "İnce bir atmosfer", metin: "Mars atmosferi büyük ölçüde karbondioksittir ve yüzey basıncı Dünya'nınkinin yalnızca yaklaşık %0,6'sıdır. Gezegenin küresel manyetik alanı milyarlarca yıl önce kaybolunca, Güneş rüzgârı atmosferi yavaş yavaş uzaya süpürdü. Su da bu süreçte ya uzaya kaçtı ya da kutup başlıklarına ve yüzey altındaki buz katmanlarına hapsoldu." },
      { baslik: "Perseverance ve eski bir delta", metin: "NASA'nın Perseverance gezgini 2021'de, bir zamanlar göl olan Jezero Krateri'ne indi. Burada antik bir nehir deltasının katmanlarını inceleyip, gelecekte Dünya'ya getirilmek üzere kaya örnekleri topluyor. Yanında götürdüğü küçük Ingenuity helikopteri, başka bir gezegende motorlu ve kontrollü uçuş yapan ilk araç oldu ve planlanan 5 uçuş yerine 72 uçuş gerçekleştirdi." }
    ],
    bilgiler: ["Bir Mars günü (sol) 24 saat 37 dakikadır.", "Mars'ın iki küçük uydusu var: Phobos ve Deimos.", "Mars'ta gün batımı mavi renktedir."],
    biliyorMuydun: "Mars'ta zaman zaman tüm gezegeni saran toz fırtınaları çıkar; 2018'deki böyle bir fırtına, 15 yıl çalışan Opportunity gezginini güneş ışığından mahrum bırakarak sessize gömdü."
  },
  {
    id: "james-webb", kategori: "uzay", sure: 5,
    baslik: "James Webb Uzay Teleskobu", altbaslik: "Zamanın başlangıcına bakan göz",
    gorseller: ["James_Webb_Space_Telescope", "Carina_Nebula", "Pillars_of_Creation"], wiki: "James Webb Uzay Teleskobu",
    giris: "25 Aralık 2021'de fırlatılan James Webb, insanlığın uzaya gönderdiği en büyük ve en güçlü teleskoptur. Gözleri, evrenin ilk galaksilerinin ışığına çevrili.",
    bolumler: [
      { baslik: "Altın aynalar", metin: "Webb'in birincil aynası 6,5 metre çapındadır ve 18 altıgen berilyum segmentten oluşur. Her segment, kızılötesi ışığı en iyi yansıtan ince bir altın tabakasıyla kaplıdır. Ayna roketin içine sığmadığı için katlanarak fırlatıldı ve uzayda yüzlerce hareketli parçanın kusursuz çalışmasıyla açıldı." },
      { baslik: "Neden kızılötesi?", metin: "Evren genişledikçe çok uzak galaksilerden gelen ışık 'kırmızıya kayar' ve kızılötesine geçer. Ayrıca kızılötesi ışık toz bulutlarının içinden geçebildiği için doğmakta olan yıldızları görmeyi sağlar. Ancak kızılötesi aynı zamanda ısıdır; bu nedenle teleskobun çok soğuk olması gerekir. Tenis kortu büyüklüğündeki beş katmanlı güneş kalkanı, sıcak tarafla soğuk taraf arasında yüzlerce derece fark yaratır." },
      { baslik: "L2'de nöbet", metin: "Webb, Dünya'nın etrafında değil, Dünya'dan yaklaşık 1,5 milyon km uzaktaki ikinci Lagrange noktası (L2) civarında yörüngededir. Buradan Güneş, Dünya ve Ay hep aynı tarafta kalır ve kalkan hepsini birden engelleyebilir. Temmuz 2022'de yayımlanan ilk görüntülerden bu yana, Büyük Patlama'dan birkaç yüz milyon yıl sonra oluşmuş galaksileri gözlemledi ve ötegezegen atmosferlerinde karbondioksit gibi molekülleri tespit etti." }
    ],
    bilgiler: ["Projenin maliyeti yaklaşık 10 milyar doları buldu.", "Fırlatma o kadar hassas gerçekleşti ki tasarruf edilen yakıt görev ömrünü uzattı.", "Webb, Hubble'ın halefi olarak görülür ama ondan çok daha uzaktadır ve tamir edilemez."],
    biliyorMuydun: "Webb'in aynasını kaplayan altının toplam ağırlığı yalnızca yaklaşık 48 gramdır — bir golf topu kadar."
  },

  // ───────────────────────── FİZİK ─────────────────────────
  {
    id: "gorelilik", kategori: "fizik", sure: 6,
    baslik: "Görelilik Teorisi", altbaslik: "Einstein zamanı ve uzayı nasıl büktü?",
    gorseller: ["Albert_Einstein", "Gravitational_lens", "Solar_eclipse_of_May_29,_1919"], wiki: "Görelilik teorisi",
    giris: "1905'te bir patent ofisinde çalışan 26 yaşındaki Albert Einstein, zaman ve uzay hakkındaki sezgilerimizin yanlış olduğunu gösterdi. On yıl sonra da kütleçekimini yeniden tanımladı.",
    bolumler: [
      { baslik: "Özel görelilik (1905)", metin: "Einstein iki ilkeden yola çıktı: Fizik yasaları her eylemsiz gözlemci için aynıdır ve ışığın boşluktaki hızı (yaklaşık 300 bin km/s) herkes için sabittir. Bunun şaşırtıcı sonuçları vardır: Hızla hareket eden bir saatin daha yavaş işlediği (zaman genişlemesi) ve hareket yönünde boyların kısaldığı görülür. Aynı yıl ünlü E = mc² denklemini de türetti: Kütle ile enerji aynı şeyin iki yüzüdür." },
      { baslik: "Genel görelilik (1915)", metin: "Newton'a göre kütleçekimi, cisimler arasında anında etki eden bir kuvvetti. Einstein'a göre ise kütle ve enerji uzay-zamanı büker; cisimler de bu bükülmüş geometride mümkün olan en düz yolu izler. Fizikçi John Wheeler bunu şöyle özetler: 'Madde uzay-zamana nasıl bükülmesi gerektiğini, uzay-zaman da maddeye nasıl hareket etmesi gerektiğini söyler.'" },
      { baslik: "Kanıtlar", metin: "1919'daki güneş tutulmasında Arthur Eddington'ın ekibi, Güneş'in yakınından geçen yıldız ışığının Einstein'ın öngördüğü kadar büküldüğünü ölçtü ve Einstein bir anda dünya çapında ünlendi. Teori, Merkür'ün yörüngesindeki açıklanamayan kaymayı da açıkladı. 2015'te kütleçekim dalgalarının algılanması ise teorinin en son büyük zaferi oldu." },
      { baslik: "Cebinizdeki görelilik", metin: "GPS uydularındaki saatler hem hızları (özel görelilik) hem de Dünya'nın çekiminden uzak olmaları (genel görelilik) nedeniyle yerdeki saatlerden farklı işler. Net etki günde yaklaşık 38 mikrosaniyedir. Bu düzeltme yapılmasaydı GPS konumları her gün kilometrelerce kayardı." }
    ],
    bilgiler: ["Einstein Nobel'i göreliliğe değil, fotoelektrik etkiyi açıklamasına aldı (1921).", "Başınız ayaklarınızdan çok az daha hızlı yaşlanır.", "Einstein 1905'e 'mucize yılı' denmesine yol açan dört çığır açıcı makale yayımladı."],
    biliyorMuydun: "Einstein'ın beyni, ölümünden sonra otopsiyi yapan patolog Thomas Harvey tarafından izinsizce alındı ve on yıllarca kavanozlarda saklandı."
  },
  {
    id: "kuantum-dolaniklik", kategori: "fizik", sure: 5,
    baslik: "Kuantum Dolanıklık", altbaslik: "Einstein'ın 'uzaktan ürkütücü etki'si",
    gorseller: ["Quantum_entanglement", "John_Stewart_Bell"], wiki: "Kuantum dolanıklık",
    giris: "İki parçacık bir kez dolanık hâle geldiğinde, aralarında ne kadar mesafe olursa olsun tek bir sistem gibi davranırlar. Einstein bundan rahatsızdı; deneyler ise onun yanıldığını gösterdi.",
    bolumler: [
      { baslik: "EPR paradoksu", metin: "1935'te Einstein, Podolsky ve Rosen (EPR) kuantum mekaniğinin eksik olduğunu göstermek için bir düşünce deneyi yayımladı. Kuantum mekaniğine göre dolanık iki parçacıktan birini ölçtüğünüzde, diğerinin durumu anında belirleniyordu. Einstein'a göre bu ya 'uzaktan ürkütücü bir etki'ydi ya da parçacıklar baştan beri bizim bilmediğimiz 'gizli değişkenler' taşıyordu." },
      { baslik: "Bell'in testi", metin: "Yaklaşık 30 yıl boyunca bu soru felsefi bir tartışma olarak kaldı. 1964'te İrlandalı fizikçi John Bell, iki görüşün deneyle ayırt edilebileceğini gösterdi: Gizli değişkenler doğruysa ölçüm sonuçları arasındaki ilişki belirli bir sınırı aşamazdı. John Clauser, Alain Aspect ve Anton Zeilinger'in deneyleri bu sınırın aşıldığını, yani kuantum mekaniğinin haklı olduğunu gösterdi; üçü 2022 Nobel Fizik Ödülü'nü paylaştı." },
      { baslik: "Işıktan hızlı mesaj yok", metin: "Dolanıklık ışıktan hızlı iletişim sağlamaz: Her bir ölçümün sonucu rastgeledir ve iki taraf ancak sonuçlarını klasik yolla karşılaştırdığında ilişkiyi görebilir. Ama bu tuhaf bağ çok işe yarar: Kuantum kriptografisinde gizli dinlemeyi fark etmek, kuantum bilgisayarlarda hesap yapmak ve 'kuantum ışınlama' ile bir parçacığın durumunu başka bir parçacığa aktarmak için kullanılır." }
    ],
    bilgiler: ["Çin'in Micius uydusu 2017'de dolanık fotonları 1.200 km'den uzak yer istasyonlarına dağıttı.", "Schrödinger 'dolanıklık' terimini 1935'te ortaya attı.", "Kuantum bilgisayarlarının gücü büyük ölçüde dolanık kübitlerden gelir."],
    biliyorMuydun: "Bazı Bell deneylerinde, ölçüm ayarlarını seçmek için uzak kuasarlardan milyarlarca yıl önce yola çıkmış ışık kullanıldı — 'gizli bir düzenek' ihtimalini evrenin derinliklerine itmek için."
  },
  {
    id: "entropi", kategori: "fizik", sure: 5,
    baslik: "Entropi ve Zamanın Oku", altbaslik: "Neden geçmişi hatırlar ama geleceği hatırlamayız?",
    gorseller: ["Ludwig_Boltzmann", "Maxwell's_demon"], wiki: "Entropi",
    giris: "Kırılan bir bardak kendiliğinden birleşmez, soğuyan kahve kendiliğinden ısınmaz. Bunun nedeni, fiziğin belki de en derin yasalarından biri olan termodinamiğin ikinci yasasıdır.",
    bolumler: [
      { baslik: "Düzensizliğin ölçüsü", metin: "Entropi kabaca bir sistemin 'düzensizliğini' ya da daha doğrusu, aynı görünümü verebilecek mikroskobik düzenleme sayısını ölçer. Bir odadaki hava moleküllerinin hepsinin bir köşede toplandığı düzenlemeler çok azdır; odaya yayıldığı düzenlemeler ise neredeyse sonsuzdur. Bu yüzden sistemler kendiliğinden düşük entropiden yüksek entropiye gider: İstatistik, düzensizlikten yanadır." },
      { baslik: "Boltzmann'ın mezar taşı", metin: "Avusturyalı fizikçi Ludwig Boltzmann entropiyi atomlarla ilişkilendiren formülü buldu: S = k log W. Atomların varlığı o dönemde hâlâ tartışmalıydı ve Boltzmann fikirleri yüzünden sert eleştirilere maruz kaldı. 1906'da hayatını kaybetti; denklemi bugün Viyana'daki mezar taşında yazılıdır." },
      { baslik: "Zamanın oku", metin: "Fiziğin temel denklemlerinin çoğu zamanda ileri ya da geri gitmek arasında ayrım yapmaz. Ama entropi yapar: Geçmiş, entropinin daha düşük olduğu yöndür. Bu, evrenin Büyük Patlama'da son derece düşük entropili, özel bir durumda başladığı anlamına gelir. Yaşam da entropi yasasını çiğnemez; Güneş'ten gelen düşük entropili enerjiyi kullanıp çevresine daha yüksek entropili ısı yayarak kendi içinde düzen kurar." }
    ],
    bilgiler: ["'Entropi' kelimesini 1865'te Rudolf Clausius türetti.", "Teorik olarak evren sonunda 'ısıl ölüm' denen dengeye ulaşabilir.", "Bilgi teorisinde de Shannon entropisi diye bir kavram vardır."],
    biliyorMuydun: "Maxwell'in cini adlı düşünce deneyi, ikinci yasayı çiğneyebilecek zeki bir varlığı hayal eder. Paradoks ancak bilginin silinmesinin de enerji gerektirdiği anlaşılınca çözüldü."
  },
  {
    id: "newton", kategori: "fizik", sure: 5,
    baslik: "Isaac Newton ve Evrensel Çekim", altbaslik: "Elmadan gezegenlere tek bir yasa",
    gorseller: ["Isaac_Newton", "Philosophiæ_Naturalis_Principia_Mathematica", "Woolsthorpe_Manor"], wiki: "Isaac Newton",
    giris: "Ağaçtan düşen elmayı ve Dünya'nın etrafında dönen Ay'ı aynı kuvvetin yönettiğini anlamak, insanlık tarihinin en büyük düşünsel sıçramalarından biriydi.",
    bolumler: [
      { baslik: "Veba yılları", metin: "1665–1666'da büyük veba salgını nedeniyle Cambridge Üniversitesi kapanınca genç Newton, Woolsthorpe'taki aile çiftliğine döndü. Bu 'mucize yıllar'da kalkülüsün temellerini attı, prizma deneyleriyle beyaz ışığın renklerin karışımı olduğunu gösterdi ve kütleçekim üzerine düşünmeye başladı. Elma hikâyesinin, kafasına düşmese de, gerçekten bir elmayı izlemesinden ilham aldığı Newton'un kendi anlatımına dayanır." },
      { baslik: "Principia (1687)", metin: "Newton fikirlerini yıllar sonra, gökbilimci Edmond Halley'nin ısrarı ve maddi desteğiyle 'Doğa Felsefesinin Matematiksel İlkeleri' (Principia) adlı eserde yayımladı. Kitapta üç hareket yasasını ve evrensel kütleçekim yasasını ortaya koydu: İki cisim arasındaki çekim, kütlelerinin çarpımıyla doğru, aralarındaki uzaklığın karesiyle ters orantılıdır. Bu yasalarla gezegenlerin yörüngelerini, gelgitleri ve kuyruklu yıldızların hareketini açıkladı." },
      { baslik: "Bilim insanından fazlası", metin: "Newton yalnızca bir fizikçi değildi: Yansıtmalı teleskobu geliştirdi, simya ve kutsal metin yorumuna yıllarını verdi, Kraliyet Darphanesi'nin başında kalpazanları bizzat takip etti. Kalkülüsü kimin önce bulduğu konusunda Leibniz ile yaşadığı acı kavga, İngiliz ve kıta Avrupası matematikçilerini yıllarca birbirine düşürdü." }
    ],
    bilgiler: ["Newton'un çekim yasası Neptün'ün keşfine yol açtı (1846).", "Ay'a gidiş rotaları hâlâ büyük ölçüde Newton fiziğiyle hesaplanır.", "Newton, 'Eğer daha uzağı görebildiysem, devlerin omuzlarında durduğum içindir' diye yazmıştı."],
    biliyorMuydun: "Woolsthorpe'taki o meşhur elma ağacının bir kısmı hâlâ ayakta ve ondan alınan çelikler dünyanın dört bir yanındaki üniversitelere dikildi."
  },

  // ───────────────────────── SANAT ─────────────────────────
  {
    id: "mona-lisa", kategori: "sanat", sure: 5,
    baslik: "Mona Lisa", altbaslik: "Dünyanın en ünlü gülümsemesi",
    gorseller: ["Mona_Lisa", "Leonardo_da_Vinci", "Louvre"], wiki: "Mona Lisa",
    giris: "77 × 53 cm'lik kavak ağacı bir panel üzerindeki bu portre, her yıl milyonlarca insanı Louvre'a çekiyor. Ama 1911'den önce sanat çevreleri dışında pek tanınmıyordu.",
    bolumler: [
      { baslik: "Lisa kimdi?", metin: "Tablonun modeli büyük ihtimalle Floransalı ipek tüccarı Francesco del Giocondo'nun eşi Lisa Gherardini'dir; bu yüzden İtalyanca'da 'La Gioconda' olarak da bilinir. Leonardo da Vinci portreye yaklaşık 1503'te başladı ama hiçbir zaman teslim etmedi; tabloyu yanında Fransa'ya götürdü ve ölümüne kadar üzerinde çalışmaya devam etti." },
      { baslik: "Sfumato: Dumanlı geçişler", metin: "Leonardo, sfumato ('dumanlı') denen tekniği ustalıkla kullandı: Renkler ve gölgeler keskin çizgiler olmadan, son derece ince ve şeffaf boya katmanlarıyla birbirine karışır. Özellikle dudak ve göz kenarlarındaki bu belirsizlik, gülümsemenin baktığınız yere göre değişiyormuş gibi görünmesine yol açar: Doğrudan ağza bakınca gülümseme kaybolur, gözlere bakınca belirginleşir." },
      { baslik: "Hırsızlık onu ünlü yaptı", metin: "21 Ağustos 1911'de Louvre'da çalışmış İtalyan işçi Vincenzo Peruggia, tabloyu paltosunun altına saklayıp müzeden çıkardı. Gazeteler haftalarca haberi manşetten verdi; hatta Pablo Picasso bile sorgulandı. Tablo iki yıl sonra Peruggia onu Floransa'da satmaya çalışınca bulundu. Bu skandal, Mona Lisa'yı bir anda dünyanın en tanınan tablosuna dönüştürdü." }
    ],
    bilgiler: ["Tablo bugün kurşun geçirmez ve iklim kontrollü bir camın arkasında sergilenir.", "Mona Lisa'nın kaşları ve kirpikleri yoktur; zamanla silinmiş olabilirler.", "Tablo Fransız devletine aittir ve sigortalanamayacak kadar değerli kabul edilir."],
    biliyorMuydun: "Napolyon bir süre Mona Lisa'yı yatak odasının duvarına astırmıştı."
  },
  {
    id: "mimar-sinan", kategori: "sanat", sure: 5,
    baslik: "Mimar Sinan", altbaslik: "Kubbelerin ustası",
    gorseller: ["Mimar_Sinan", "Selimiye_Mosque", "Süleymaniye_Mosque"], wiki: "Mimar Sinan",
    giris: "Yaklaşık elli yıl boyunca Osmanlı'nın baş mimarı olan Sinan, camilerden köprülere, hamamlardan su kemerlerine yüzlerce yapı tasarladı. İstanbul'un siluetini bugünkü hâline o getirdi.",
    bolumler: [
      { baslik: "Yeniçerilikten baş mimarlığa", metin: "Sinan 1490'larda Kayseri'nin Ağırnas köyünde doğdu ve devşirme olarak İstanbul'a getirildi. Yeniçeri olarak Belgrad, Mohaç ve İran seferlerine katıldı; ordu için köprüler ve gemiler inşa ederek mühendislik becerisini kanıtladı. 1539'da yaklaşık 50 yaşındayken Mimarbaşı oldu ve ölümüne kadar bu görevi sürdürdü." },
      { baslik: "Çıraklık, kalfalık, ustalık", metin: "Sinan'ın kendi eserlerini değerlendirirken söylediği rivayet edilen söz meşhurdur: İstanbul'daki Şehzade Camii çıraklık, Süleymaniye kalfalık, Edirne'deki Selimiye ise ustalık eseridir. Selimiye'yi 80'li yaşlarındayken tamamladı (1575). Yaklaşık 31 metre çapındaki kubbesi, sekiz büyük ayak üzerinde yükselir ve içeride neredeyse kesintisiz, tek parça bir mekân hissi yaratır." },
      { baslik: "Mühendis bir sanatçı", metin: "Sinan'ın yapıları yüzyıllardır İstanbul'un depremlerine dayanıyor. Akustik, havalandırma ve ışık konusunda da yenilikçiydi. Süleymaniye'de binlerce kandilin isi, hava akımlarıyla tek bir odada toplanıyor ve buradan elde edilen is mürekkep yapımında kullanılıyordu. Selimiye Camii ve Külliyesi 2011'de UNESCO Dünya Mirası Listesi'ne girdi." }
    ],
    bilgiler: ["Sinan'a 300'den fazla yapı atfedilir.", "Büyükçekmece'deki Kanuni Sultan Süleyman Köprüsü de onun eseridir.", "Sinan, Süleymaniye Külliyesi'nin köşesinde, kendi tasarladığı sade bir türbede yatar."],
    biliyorMuydun: "Merkür gezegenindeki bir kratere Sinan'ın adı verilmiştir."
  },
  {
    id: "yildizli-gece", kategori: "sanat", sure: 5,
    baslik: "Yıldızlı Gece", altbaslik: "Van Gogh'un hastane penceresinden gökyüzü",
    gorseller: ["The_Starry_Night", "Vincent_van_Gogh", "Café_Terrace_at_Night"], wiki: "Yıldızlı Gece",
    giris: "Girdap gibi dönen bir gökyüzü, alevi andıran bir servi ağacı ve uykudaki bir köy. Vincent van Gogh bu tabloyu, hayatının en zor dönemlerinden birinde yaptı.",
    bolumler: [
      { baslik: "Saint-Rémy, Haziran 1889", metin: "Arles'da kulağını kestiği krizin ardından Van Gogh, kendi isteğiyle Saint-Rémy-de-Provence'taki Saint-Paul-de-Mausole akıl hastanesine yattı. Yatak odasının parmaklıklı penceresinden şafak öncesi manzarayı defalarca resmetti. Ancak 'Yıldızlı Gece'deki köy pencereden görünmüyordu; Van Gogh onu hafızasından ve hayal gücünden ekledi, kilise kulesi ise memleketi Hollanda'dakileri andırır." },
      { baslik: "Hareket eden bir gökyüzü", metin: "Kalın, kıvrımlı fırça darbeleri gökyüzünü canlı bir sıvı gibi gösterir. Ufka yakın parlak 'yıldızın', o sabah gökyüzünde gerçekten parlayan Venüs olduğu düşünülür. Bazı bilim insanları, tablodaki girdapların parlaklık dağılımının gerçek türbülans akışlarındaki matematiksel örüntülere şaşırtıcı biçimde benzediğini öne sürdü." },
      { baslik: "Başarısız saydığı bir başyapıt", metin: "Van Gogh tablodan pek memnun değildi; kardeşi Theo'ya yazdığı mektupta onu bir 'başarısızlık' olarak anar. Yaklaşık on yıllık sanat hayatında 2.000'e yakın eser üretmesine rağmen yaşarken çok az tablo sattı. 1890'da 37 yaşında öldü. 'Yıldızlı Gece' 1941'den beri New York'taki Modern Sanat Müzesi'nde (MoMA) sergileniyor." }
    ],
    bilgiler: ["Van Gogh resme 27 yaşında başladı.", "Theo'ya 600'den fazla mektup yazdı; bu mektuplar sanat tarihinin en değerli belgeleri arasındadır.", "Servi ağacı, Akdeniz kültüründe ölüm ve sonsuzlukla ilişkilendirilir."],
    biliyorMuydun: "Van Gogh hastanede yalnızca bir yılda 150'den fazla tablo yaptı — neredeyse iki-üç günde bir tablo."
  },
  {
    id: "sistine-sapeli", kategori: "sanat", sure: 5,
    baslik: "Sistine Şapeli Tavanı", altbaslik: "Michelangelo'nun istemeye istemeye yaptığı başyapıt",
    gorseller: ["Sistine_Chapel_ceiling", "The_Creation_of_Adam", "Michelangelo"], wiki: "Sistine Şapeli tavanı",
    giris: "Kendini her şeyden önce bir heykeltıraş olarak gören Michelangelo, dört yıl boyunca 20 metre yükseklikte bir iskelede çalışarak Batı sanatının en ünlü tavanını boyadı.",
    bolumler: [
      { baslik: "Papa'nın ısrarı", metin: "1508'de Papa II. Julius, Vatikan'daki Sistine Şapeli'nin yıldız desenli tavanını yeniden boyatmak istedi. Michelangelo o güne kadar pek fresk yapmamıştı ve bu işi rakiplerinin onu başarısızlığa sürüklemek için hazırladığı bir tuzak olarak gördü. Yine de kabul etti ve ilk planlanan on iki havari yerine, Yaratılış'tan Nuh'a uzanan dev bir anlatı tasarladı." },
      { baslik: "Islak sıva üzerinde dört yıl", metin: "Fresk tekniğinde boya, kurumadan önce taze sıvaya uygulanır; bu yüzden ressam her gün yalnızca o gün bitirebileceği kadar alanı sıvatır ve hata yapma şansı yoktur. Michelangelo yaklaşık 500 metrekarelik yüzeyi 1508–1512 arasında, büyük ölçüde kendisi boyadı. Popüler inanışın aksine sırtüstü yatarak değil, ayakta, başı geriye bükülü çalıştı; bir şiirinde boynunun ve sırtının bu yüzden nasıl büküldüğünü acı bir mizahla anlatır." },
      { baslik: "Adem'in Yaratılışı", metin: "Tavandaki dokuz ana sahneden en ünlüsü, Tanrı'nın parmağının Adem'inkine dokunmak üzere olduğu 'Adem'in Yaratılışı'dır. Bazı araştırmacılar, Tanrı'yı ve melekleri çevreleyen kırmızı pelerinin bir insan beyninin şeklini andırdığını öne sürmüştür. 1980–1994 arasındaki restorasyon, yüzyıllık is ve kirin altından şaşırtıcı derecede parlak renkleri ortaya çıkardı." }
    ],
    bilgiler: ["Michelangelo tavanda 300'den fazla figür resmetti.", "Sunak duvarındaki 'Son Yargı'yı 20 yıldan fazla süre sonra, 1536–1541 arasında yaptı.", "Yeni papa, Sistine Şapeli'nde toplanan kardinaller tarafından seçilir."],
    biliyorMuydun: "Son Yargı'daki çıplak figürler o kadar tartışma yarattı ki Michelangelo'nun ölümünden sonra bir başka ressam onlara peçe ve kumaş eklemekle görevlendirildi; bu yüzden 'Pantolon Yapıcı' lakabını aldı."
  },

  // ───────────────────────── FELSEFE ─────────────────────────
  {
    id: "sokrates", kategori: "felsefe", sure: 5,
    baslik: "Sokrates", altbaslik: "Hiçbir şey yazmayan en etkili filozof",
    gorseller: ["Socrates", "The_Death_of_Socrates"], wiki: "Sokrates",
    giris: "MÖ 5. yüzyıl Atina'sında sokaklarda insanları sorularla sıkıştıran bir adam, Batı felsefesinin yönünü değiştirdi. Tek satır yazmadı; onu öğrencilerinin kaleminden tanıyoruz.",
    bolumler: [
      { baslik: "Atina'nın atsineği", metin: "Sokrates (MÖ yaklaşık 470–399) bir taş ustası ile bir ebenin oğluydu. Agora'da politikacılarla, şairlerle, zanaatkârlarla konuşur; onlara 'Adalet nedir?', 'Cesaret nedir?' gibi sorular sorardı. Kendini, uyuşuk bir atı sokarak uyanık tutan bir atsineğine benzetiyordu: Görevi, Atina'yı rahatsız edip düşünmeye zorlamaktı." },
      { baslik: "Sokratik yöntem", metin: "Sokrates bir tanımı kabul eder gibi görünür, sonra ardı ardına sorduğu sorularla bu tanımın çelişkilere yol açtığını gösterirdi. Amaç karşısındakini küçük düşürmek değil, bildiğini sandığı şeyi gerçekte bilmediğini fark ettirmekti. Delfi kâhini onu en bilge insan ilan ettiğinde, Sokrates bunu şöyle yorumladı: Belki de tek farkı, bilmediğini bildiğiydi." },
      { baslik: "Baldıran zehri", metin: "MÖ 399'da Sokrates, 'gençleri baştan çıkarmak' ve 'şehrin tanrılarına inanmamak' suçlamalarıyla yargılandı. Platon'un 'Savunma'sına göre, mahkemede özür dilemek yerine felsefe yapmayı sürdürdü ve 'Sorgulanmamış bir hayat yaşanmaya değmez' dedi. Ölüm cezasına çarptırıldı; arkadaşlarının kaçırma teklifini yasalara saygı gerekçesiyle reddetti ve baldıran zehrini içerek öldü." }
    ],
    bilgiler: ["Sokrates'i büyük ölçüde Platon, Ksenofon ve Aristofanes'in yazılarından tanırız.", "Aristofanes 'Bulutlar' komedisinde onunla alay etmişti.", "Jacques-Louis David'in 1787 tarihli 'Sokrates'in Ölümü' tablosu bu sahneyi ölümsüzleştirdi."],
    biliyorMuydun: "Sokrates'in çirkinliğiyle ünlü olduğu söylenir: Basık burunlu, patlak gözlüydü ve çoğu zaman yalınayak dolaşırdı."
  },
  {
    id: "magara-alegorisi", kategori: "felsefe", sure: 5,
    baslik: "Platon'un Mağarası", altbaslik: "Gördüklerimiz yalnızca gölgeler mi?",
    gorseller: ["Allegory_of_the_cave", "Plato", "The_School_of_Athens"], wiki: "Mağara alegorisi",
    giris: "Platon'un 'Devlet' kitabındaki kısa bir hikâye, iki bin yılı aşkın süredir gerçeklik, bilgi ve eğitim üzerine düşünenlere ilham veriyor.",
    bolumler: [
      { baslik: "Hikâye", metin: "Bir mağarada, doğdukları günden beri zincirlenmiş, yalnızca karşıdaki duvarı görebilen insanlar düşünün. Arkalarında bir ateş yanar ve ateşle onlar arasında insanlar çeşitli nesneler taşır. Mahkûmların tüm dünyası duvara düşen bu gölgelerden ibarettir; gölgelere isim verir, hangisinin sonra geleceğini tahmin etmekte yarışırlar ve onları gerçek sanırlar." },
      { baslik: "Işığa çıkış", metin: "Mahkûmlardan biri serbest bırakılıp ateşe dönmeye zorlanır; gözleri acır ve gölgeleri daha gerçek bulur. Mağaradan dışarı sürüklendiğinde güneş onu kör eder. Yavaş yavaş önce gölgeleri, sonra yansımaları, sonra nesnelerin kendisini ve en sonunda güneşi görebilir. Platon için güneş, 'İyi İdeası'nı, yani her şeyi anlaşılır kılan en yüksek gerçeği temsil eder." },
      { baslik: "Geri dönüş", metin: "Özgürleşen kişi diğerlerine gerçeği anlatmak için mağaraya döner. Ama karanlığa alışamadığı için gölgeleri tahmin etmekte beceriksizdir; diğerleri onunla alay eder, yukarı çıkmanın gözleri bozduğuna karar verir ve onu serbest bırakmaya çalışan herkesi öldürmek isterler. Bu, Atina'nın Sokrates'e yaptıklarına açık bir göndermedir." }
    ],
    bilgiler: ["Alegori, Devlet kitabının VII. bölümünün başında yer alır.", "Platon, Atina'da Batı'nın ilk yükseköğretim kurumlarından sayılan Akademi'yi kurdu.", "'The Matrix' gibi filmler mağara alegorisinin modern yorumları olarak okunur."],
    biliyorMuydun: "'Platon' aslında bir lakap olabilir; Yunanca 'geniş' anlamına gelir ve geniş omuzlarına ya da alnına atıf yaptığı rivayet edilir."
  },
  {
    id: "stoacilik", kategori: "felsefe", sure: 5,
    baslik: "Stoacılık", altbaslik: "Kontrol edemediğin şeyi bırak",
    gorseller: ["Marcus_Aurelius", "Epictetus", "Seneca_the_Younger"], wiki: "Stoacılık",
    giris: "Bir köle, bir senatör ve bir imparator aynı felsefeye bağlıydı. Stoacılık 2.300 yıl sonra bile, kaygıyla başa çıkmak isteyenler için pratik bir rehber olarak okunuyor.",
    bolumler: [
      { baslik: "Boyalı Revak", metin: "Stoacılık MÖ 300 civarında Kıbrıslı Zenon tarafından Atina'da kuruldu. Zenon derslerini agoradaki 'Stoa Poikile' adlı boyalı revakta verdiği için akıma 'Stoa' adı verildi. Stoacılar için hayatın amacı erdemle, yani bilgelik, adalet, cesaret ve ölçülülükle doğaya ve akla uygun yaşamaktı." },
      { baslik: "Kontrol ikiliği", metin: "Bir zamanlar köle olan Epiktetos, Stoacılığın merkezindeki fikri en açık şekilde ortaya koydu: Bazı şeyler bizim elimizdedir — yargılarımız, niyetlerimiz, tepkilerimiz — bazıları değildir: bedenimiz, malımız, ünümüz, başkalarının davranışları. Huzursuzluğun kaynağı, elimizde olmayan şeyleri kontrol etmeye çalışmaktır. 'Bizi rahatsız eden olaylar değil, olaylar hakkındaki yargılarımızdır.'" },
      { baslik: "İmparatorun günlüğü", metin: "Roma İmparatoru Marcus Aurelius, savaş seferleri sırasında çadırında yalnızca kendisi için notlar aldı. Yayımlanmak için yazılmayan bu notlar bugün 'Kendime Düşünceler' adıyla okunuyor. Seneca ise mektuplarında zamanın değerini, ölüm korkusunu ve öfkeyi işledi. Stoacı fikirler, 20. yüzyılda geliştirilen bilişsel davranışçı terapiye (BDT) de ilham verdi." }
    ],
    bilgiler: ["Stoacılar 'olabilecek en kötüyü önceden düşünme' (premeditatio malorum) egzersizi yapardı.", "'Memento mori' (Öleceğini hatırla) Stoacılıkla sık ilişkilendirilir.", "Stoacı olmak 'duygusuz olmak' demek değildir; amaç duygulara yön veren yargıları düzeltmektir."],
    biliyorMuydun: "Epiktetos'un bacağının, efendisi tarafından kasten kırıldığı anlatılır. Rivayete göre sakince 'Kıracaksın' demiş, kırılınca da 'Söylemiştim' diye eklemiştir."
  },
  {
    id: "farabi", kategori: "felsefe", sure: 5,
    baslik: "Fârâbî", altbaslik: "Aristoteles'ten sonra 'İkinci Öğretmen'",
    gorseller: ["Al-Farabi", "House_of_Wisdom"], wiki: "Fârâbî",
    giris: "10. yüzyılda yaşayan Fârâbî, antik Yunan felsefesini İslam dünyasına kazandıran en önemli düşünürlerden biridir. Mantıktan siyasete, müzikten metafiziğe uzanan eserler yazdı.",
    bolumler: [
      { baslik: "Bağdat'tan Şam'a", metin: "Ebû Nasr el-Fârâbî yaklaşık 870'te Orta Asya'da, Farab bölgesinde doğdu. Abbasi döneminin bilim ve kültür merkezi Bağdat'ta mantık ve felsefe eğitimi aldı; Aristoteles'in eserlerini derinlemesine inceledi. Hayatının son yıllarını Halep'te Hamdânî hükümdarı Seyfüddevle'nin sarayında geçirdi ve 950 civarında Şam'da öldü." },
      { baslik: "Erdemli Şehir", metin: "Fârâbî'nin en tanınmış eseri 'el-Medînetü'l-fâzıla' (Erdemli Şehir), Platon'un Devlet'inden ilham alır. Ona göre insan tek başına mutluluğa ulaşamaz; bunun için bir topluma ihtiyaç duyar. Erdemli şehirde her birey yeteneğine uygun bir görev üstlenir ve yönetici, bilgeliği ile hem filozof hem de toplumun rehberidir. Fârâbî cahil, yozlaşmış ve sapkın şehirleri de ayrıntılı biçimde sınıflandırır." },
      { baslik: "Müzik ve bilim", metin: "Fârâbî aynı zamanda yetkin bir müzik kuramcısıydı. 'Kitâbü'l-Mûsîka'l-Kebîr' (Büyük Müzik Kitabı) ses aralıkları, makamlar ve çalgılar üzerine Orta Çağ'ın en kapsamlı eserlerinden biridir. Bilimleri sınıflandırdığı 'İhsâü'l-Ulûm' adlı eseri de Latinceye çevrilerek Avrupa'da okundu." }
    ],
    bilgiler: ["'Muallim-i Sânî' yani 'İkinci Öğretmen' unvanıyla anılır; ilki Aristoteles'tir.", "Latin dünyasında 'Alpharabius' olarak tanındı.", "Kazakistan'daki en büyük üniversitelerden birine onun adı verilmiştir."],
    biliyorMuydun: "İbn Sînâ, Aristoteles'in 'Metafizik'ini kırk kez okuyup anlamadığını, ancak Fârâbî'nin bu esere yazdığı kısa bir şerhi okuyunca kavradığını anlatır."
  },

  // ───────────────────────── TEKNOLOJİ ─────────────────────────
  {
    id: "matbaa", kategori: "teknoloji", sure: 5,
    baslik: "Matbaa", altbaslik: "Bilginin kopyalanmasını sonsuza dek değiştiren makine",
    gorseller: ["Printing_press", "Johannes_Gutenberg", "Gutenberg_Bible"], wiki: "Matbaa",
    giris: "1440'larda Mainz'de bir kuyumcunun geliştirdiği sistem, kitap üretimini el yazmasından endüstriye taşıdı ve Reform'dan Bilimsel Devrim'e kadar pek çok dönüşümün zeminini hazırladı.",
    bolumler: [
      { baslik: "Gutenberg'in sistemi", metin: "Johannes Gutenberg'in buluşu tek bir icat değil, bir sistemdi: Kurşun, kalay ve antimon alaşımından seri olarak dökülebilen hareketli metal harfler; bu harfleri hızla üretmeye yarayan el kalıbı; metale yapışan yağ bazlı bir mürekkep ve şarap preslerinden uyarlanmış bir baskı makinesi. 1455 civarında basılan 42 satırlık Gutenberg İncili bu sistemin ilk büyük ürünüdür." },
      { baslik: "Ondan önce de vardı", metin: "Hareketli harf fikri ilk kez Doğu'da ortaya çıktı. Çinli zanaatkâr Bi Sheng 1040'larda pişmiş kilden harfler kullandı. Kore'de 1377'de metal harflerle basılan 'Jikji', bugün var olan en eski metal harfli kitaptır. Ancak binlerce karakterli yazı sistemleri, Latin alfabesinin yalnızca birkaç düzine harfine kıyasla seri üretimi çok daha zorlaştırıyordu." },
      { baslik: "Bir bilgi patlaması", metin: "1500 yılına gelindiğinde Avrupa'da milyonlarca kitap basılmıştı. Martin Luther'in fikirleri matbaa sayesinde haftalar içinde yayıldı; bilim insanları aynı tabloları, haritaları ve çizimleri binlerce kopyada paylaşabildi. Osmanlı'da ise İbrahim Müteferrika 1727'de matbaasını kurdu; 1729'da bastığı Vankulu Lügati, Türkçe basılan ilk kitap kabul edilir." }
    ],
    bilgiler: ["Gutenberg İncili'nden yaklaşık 180 kopya basıldığı, 49'unun bugüne ulaştığı tahmin edilir.", "1501'den önce basılan kitaplara 'inkunabula' (beşik dönemi) denir.", "Gutenberg buluşundan zengin olamadı; borçları yüzünden atölyesini kaybetti."],
    biliyorMuydun: "Bugün kullandığımız 'büyük harf' ve 'küçük harf' (İngilizce uppercase/lowercase) ifadeleri, dizgicilerin harfleri koydukları üst ve alt kasalardan gelir."
  },
  {
    id: "internet", kategori: "teknoloji", sure: 5,
    baslik: "İnternetin Doğuşu", altbaslik: "İki harflik bir mesajdan küresel ağa",
    gorseller: ["ARPANET", "Tim_Berners-Lee", "Submarine_communications_cable"], wiki: "İnternet",
    giris: "Bugün milyarlarca insanı birbirine bağlayan ağ, 1969'da çöken bir oturum açma denemesiyle başladı.",
    bolumler: [
      { baslik: "\"LO\"", metin: "29 Ekim 1969 akşamı UCLA'daki bir öğrenci, ARPANET üzerinden Stanford Araştırma Enstitüsü'ndeki bilgisayara 'LOGIN' yazmaya çalıştı. Yalnızca 'L' ve 'O' harfleri iletildi, sonra sistem çöktü. Böylece internetin atası üzerinden gönderilen ilk mesaj, istemeden de olsa 'LO' (bak/işte) oldu. ABD Savunma Bakanlığı'nın finanse ettiği ARPANET, bilgisayarları ve araştırmacıları birbirine bağlamak için tasarlanmıştı." },
      { baslik: "Ağların ağı: TCP/IP", metin: "Farklı ağların birbiriyle konuşabilmesi için ortak bir dil gerekiyordu. Vint Cerf ve Bob Kahn 1974'te TCP/IP protokollerinin temelini attı. Veriler küçük paketlere bölünüyor, her paket kendi yolunu bulup hedefte yeniden birleştiriliyordu. 1 Ocak 1983'te ARPANET resmen TCP/IP'ye geçti; bu tarih çoğu zaman internetin doğum günü sayılır." },
      { baslik: "Web ve Türkiye", metin: "İnternet ile Web aynı şey değildir. 1989'da CERN'de çalışan Tim Berners-Lee, bağlantılarla birbirine bağlanan belgelerden oluşan bir sistem önerdi: HTML, URL ve HTTP. İlk web sitesi 1991'de yayına girdi ve CERN 1993'te Web teknolojisini herkesin ücretsiz kullanımına açtı. Türkiye ise 12 Nisan 1993'te ODTÜ üzerinden internete bağlandı." }
    ],
    bilgiler: ["Kıtalar arası internet trafiğinin neredeyse tamamı uydulardan değil, okyanus dibindeki kablolardan geçer.", "İlk e-posta 1971'de Ray Tomlinson tarafından gönderildi; '@' işaretini de o seçti.", "İlk web sitesi bugün hâlâ info.cern.ch adresinde yayında."],
    biliyorMuydun: "Denizaltı internet kablolarının bazıları bir bahçe hortumundan daha kalın değildir ve köpekbalıklarının bu kabloları ısırdığı görüntülenmiştir."
  },
  {
    id: "enigma-turing", kategori: "teknoloji", sure: 6,
    baslik: "Enigma ve Alan Turing", altbaslik: "Kırılamaz sanılan şifre ve modern bilgisayarın doğuşu",
    gorseller: ["Enigma_machine", "Alan_Turing", "Bletchley_Park"], wiki: "Enigma makinesi",
    giris: "İkinci Dünya Savaşı'nda Almanlar, mesajlarını kırılamaz olduğuna inandıkları bir makineyle şifreliyordu. Bu şifreyi çözme çabası, bilgisayar biliminin doğuşunu da hızlandırdı.",
    bolumler: [
      { baslik: "Makine nasıl çalışıyordu?", metin: "Enigma bir daktiloya benziyordu. Her tuşa basıldığında elektrik akımı, dönen rotorlardan ve kablolarla yapılan bir bağlantı panosundan geçerek başka bir harfi yakıyordu. Rotorlar her tuşla döndüğü için aynı harf her seferinde farklı şifreleniyordu. Olası başlangıç ayarlarının sayısı yaklaşık 158 kentilyondu (158 ve ardından 18 sıfır) ve ayarlar her gün değişiyordu." },
      { baslik: "Önce Polonyalılar", metin: "Enigma'yı ilk kıranlar İngilizler değil, Polonyalı matematikçilerdi. Marian Rejewski 1932'de, permütasyon teorisi kullanarak makinenin iç yapısını matematiksel olarak yeniden oluşturdu. Polonya, savaş başlamadan hemen önce, 1939'da bilgilerini İngiliz ve Fransız istihbaratıyla paylaştı." },
      { baslik: "Bletchley Park ve Bombe", metin: "İngiltere'nin gizli şifre çözme merkezi Bletchley Park'ta Alan Turing ve ekibi, olası ayarları hızla eleyen elektromekanik 'Bombe' makinelerini tasarladı. Enigma'nın önemli bir zaafı vardı: Hiçbir harf kendisine şifrelenemiyordu. Bu ve 'Heil Hitler' ya da hava durumu raporları gibi tahmin edilebilir ifadeler, ayarları bulmanın anahtarı oldu. Bazı tarihçilere göre bu çalışma savaşı yaklaşık iki yıl kısalttı." },
      { baslik: "Turing'in mirası", metin: "Turing daha savaştan önce, 1936'da, her türlü hesaplamayı yapabilecek soyut bir makine tanımlamıştı: Turing makinesi, bugünkü tüm bilgisayarların kuramsal temelidir. 1950'de 'Makineler düşünebilir mi?' sorusunu sordu ve bugün Turing testi olarak bilinen ölçütü önerdi. Eşcinselliği nedeniyle 1952'de mahkûm edildi ve 1954'te 41 yaşında öldü. 2013'te ölümünden sonra kraliyet affı aldı; 2021'den beri İngiltere'nin 50 sterlinlik banknotunda yer alıyor." }
    ],
    bilgiler: ["Bletchley Park'ta çalışanların büyük çoğunluğu kadındı.", "Çalışanlar yaptıkları işi on yıllarca ailelerine bile anlatmadı.", "Bilgisayar biliminin en prestijli ödülü 'Turing Ödülü' onun adını taşır."],
    biliyorMuydun: "Bletchley Park personel alımında Daily Telegraph'taki zor bir bulmacayı 12 dakikanın altında çözenleri de değerlendirdi."
  },
  {
    id: "transistor", kategori: "teknoloji", sure: 5,
    baslik: "Transistör", altbaslik: "Tarihte en çok üretilen nesne",
    gorseller: ["Transistor", "ENIAC", "Integrated_circuit"], wiki: "Transistör",
    giris: "Telefonunuzun içinde milyarlarca tane var ve her biri bir virüsten daha küçük. Transistör, 20. yüzyılın belki de en önemli icadıdır.",
    bolumler: [
      { baslik: "Vakum tüplerinin sonu", metin: "İlk elektronik bilgisayarlar, elektrik akımını açıp kapatmak ve güçlendirmek için ampul büyüklüğündeki vakum tüplerini kullanıyordu. 1945'te tamamlanan ENIAC yaklaşık 17.500 tüp içeriyor, 27 ton ağırlığındaydı ve tüpler sık sık yanıyordu. Daha küçük, daha dayanıklı ve daha az enerji harcayan bir anahtara ihtiyaç vardı." },
      { baslik: "Bell Laboratuvarları, Aralık 1947", metin: "John Bardeen ve Walter Brattain, William Shockley'nin yönettiği bir grupta, germanyum kristali üzerine yerleştirilmiş altın kontaklarla çalışan ilk transistörü yaptı. Yarıiletken bir malzeme, küçük bir sinyalle büyük bir akımı kontrol edebiliyordu. Üçü 1956'da Nobel Fizik Ödülü'nü paylaştı. Bardeen daha sonra süperiletkenlik çalışmalarıyla ikinci bir Nobel daha aldı." },
      { baslik: "Moore Yasası", metin: "1958–59'da Jack Kilby ve Robert Noyce, birçok transistörü tek bir yarıiletken parça üzerinde birleştiren entegre devreyi geliştirdi. Intel'in kurucularından Gordon Moore 1965'te, bir çipteki transistör sayısının düzenli olarak ikiye katlandığını gözlemledi. Bu eğilim on yıllarca sürdü: 1971'deki ilk mikroişlemci Intel 4004 yaklaşık 2.300 transistör içerirken, günümüzün en büyük çiplerinde yüz milyarlarca transistör bulunuyor." }
    ],
    bilgiler: ["Modern transistörler nanometre ölçeğindedir; bir insan saçının genişliğine binlercesi sığar.", "Transistör adı 'transfer' ve 'resistor' (direnç) kelimelerinin birleşiminden gelir.", "Transistörlü radyolar 1950'lerde müziği cebe sığdırarak gençlik kültürünü değiştirdi."],
    biliyorMuydun: "Bugüne kadar üretilen transistör sayısının, Dünya'daki tüm kumsallardaki kum tanelerinin sayısını aştığı tahmin edilir."
  }
];
