import { Slide } from '../types';

export const slides: Slide[] = [
  {
    id: 1,
    title: "Dış Ticaret Temel Kavramları",
    content: `
      <h1>Dış Ticaret Temel Kavramları</h1>
      <p>Dış ticaret, ülkeler arasında mal ve hizmet alışverişini ifade eder. Bu ticaret şekli, ülkelerin ekonomik büyümesinde önemli bir rol oynar.</p>
      <p><strong>Temel Kavramlar:</strong></p>
      <ul>
        <li>İhracat: Malların veya hizmetlerin bir ülkeden başka bir ülkeye satışı</li>
        <li>İthalat: Başka bir ülkeden mal veya hizmet alımı</li>
        <li>Ödemeler Dengesi: Uluslararası ticari işlemlerin kaydı</li>
        <li>Dış Ticaret Haddi: İhracat fiyat endeksinin ithalat fiyat endeksine oranı</li>
        <li>Serbest Bölgeler: Özel ticaret ve vergi avantajları sunan bölgeler</li>
      </ul>
      <p><strong>Dış Ticaretin Önemi:</strong></p>
      <ul>
        <li>Ulusal Ekonomiye Katkısı: Dış ticaret, ekonomik büyümeyi destekler.</li>
        <li>İşletmelerin Büyümesine Katkısı: Şirketlerin uluslararası pazarlarda yer almasını sağlar</li>
        <li>Ekonomik İlişkilerin Güçlenmesi: Ülkeler arası iş birliği ve ticari ilişkiler derinleşir.</li>
        <li>İstihdam ve Teknoloji Transferi: Daha fazla iş olanağı yaratır ve teknolojik yeniliklerin ülkeler arasında paylaşılmasını sağlar.</li>
        <li>Rekabet Gücü ve Yenilikçilik: İşletmelerin küresel rekabet gücünü artırır ve yeni ürün geliştirmeyi teşvik eder.</li>
      </ul>
      <p><strong>Dış Ticaret Politika Araçları:</strong></p>
      <ul>
        <li>Gümrük Tarifeleri ve Kotalar: Dış ticaretin düzenlenmesi için uygulanan vergiler ve miktar kısıtlamaları</li>
        <li>İhracat Teşvikleri ve Sübvansiyonlar: İhracatçılara sağlanan mali destekler</li>
        <li>Döviz Kuru Politikaları: Ulusal paranın değerini düzenleyerek dış ticareti yönlendiren politikalar</li>
      </ul>
    `
  },
  {
    "id": 2,
    "title": "İhracat ve İthalat Farkları",
    "content": `
      <h1>İhracat ve İthalat Arasındaki Farklar</h1>
      <p><strong>İhracat:</strong></p>
      <ul>
        <li>Bir ülkede üretilen malların başka bir ülkeye satılması</li>
        <li>Döviz girişi sağlar</li>
        <li>İhracat teşvikleri ve destekleri mevcuttur</li>
        <li>Devlet destekli kredi ve sigorta imkanları</li>
        <li>KDV istisnası ve vergi avantajları</li>
        <li>Dahilde İşleme Rejimi imkanları</li>
      </ul>
      <p><strong>İthalat:</strong></p>
      <ul>
        <li>Başka bir ülkeden mal veya hizmet alımı yapılması</li>
        <li>Döviz çıkışına neden olur</li>
        <li>Gümrük vergileri ve kısıtlamalar uygulanabilir</li>
        <li>İthalat lisansı gerekliliği</li>
        <li>Gözetim ve denetim uygulamaları</li>
        <li>Anti-damping ve korunma önlemleri</li>
      </ul>
      <p><strong>Vergilendirme ve Belgeler:</strong></p>
      <ul>
        <li>Gümrük vergileri ve ek mali yükümlülükler</li>
        <li>Belge gereksinimleri ve gümrük uygulamaları</li>
        <li>Standartlar ve teknik düzenlemeler</li>
        <li>Sağlık ve güvenlik sertifikaları</li>
      </ul>
    `
  },
  {
    "id": 3,
    "title": "GTIP (Harmonized System Code)",
    "content": `
      <h1>GTIP (Harmonized System Code)</h1>
      <p>GTIP, malları uluslararası ticarette tanımlamak için kullanılan standart bir kodlama sistemidir.</p>
  
      <h2>GTIP'in Önemi</h2>
      <ul>
        <li>Gümrük vergilerinin belirlenmesini sağlar</li>
        <li>Uluslararası ticaret istatistiklerinin tutulmasına yardımcı olur</li>
        <li>Ticari belgelerde standartlaşma sağlar</li>
        <li>İhracat teşviklerinin belirlenmesinde kullanılır</li>
        <li>Dış ticaret politikası önlemlerinin uygulanmasını sağlar</li>
        <li>Kaçakçılıkla Mücadele: GTIP, yasa dışı veya yanlış sınıflandırılmış malların tespiti için önemli bir araçtır</li>
        <li>Veri Analitiği ve Raporlama: GTIP kodları, global ticaret trendlerini analiz etmek ve dış ticaret stratejileri geliştirmek için kullanılır</li>
      </ul>
  
      <h2>GTIP Kod Yapısı</h2>
      <ul>
        <li><strong>Fasıl (2 haneli):</strong> Ana ürün gruplarını tanımlar</li>
        <li><strong>Pozisyon (4 haneli):</strong> Alt ürün gruplarını belirler</li>
        <li><strong>Alt Pozisyon (6 haneli):</strong> Uluslararası Harmonized System (HS) standardı çerçevesinde malları detaylandırır</li>
        <li><strong>Milli Alt Açılım (8-12 haneli):</strong> Ülkelerin ulusal düzenlemelerine göre ek bilgiler içerir</li>
      </ul>
  
      <h2>Doğru GTIP Kullanımı</h2>
      <ul>
        <li>Malların teknik özellikleri detaylı bir şekilde incelenir</li>
        <li>Gümrük Tarife Cetveli kullanılarak doğru sınıflandırma yapılır</li>
        <li>Sektörel ticaret rehberleri ve sektör birliği kaynaklarından yararlanılır</li>
        <li>Gerektiğinde uzman desteği alınır</li>
        <li>Bağlayıcı Tarife Bilgisi (BTB) başvurusu yapılabilir</li>
      </ul>
  
      <h2>Yanlış GTIP Kullanımının Sonuçları</h2>
      <ul>
        <li>Yanlış vergilendirme ve cezalar</li>
        <li>Malların gümrükte alıkonulması</li>
        <li>İhracat teşviklerinden yararlanamama</li>
        <li>Yasal yaptırımlar ve ticari kayıplar</li>
        <li><strong>Tedarik Zinciri Gecikmeleri:</strong> Yanlış GTIP, ithalat ve ihracat süreçlerinde beklenmedik gecikmelere neden olabilir</li>
        <li><strong>Ülkelerarası Uyum Sorunları:</strong> Uluslararası ticarette farklı GTIP yorumları nedeniyle yanlış beyanda bulunma riski taşır</li>
      </ul>
    `
  },
  {
    "id": 4,
    "title": "Dış Ticarette Önemli Belgeler",
    "content": `
      <h1>Dış Ticarette Önemli Belgeler</h1>
      <h2>1. Ticari Fatura</h2>
      <ul>
        <li>Satıcı ve alıcı bilgileri</li>
        <li>Malın tanımı, ağırlığı ve GTIP kodu</li>
        <li>Ödeme ve teslimat şartları</li>
        <li>Incoterms kuralları</li>
        <li>Banka ve ödeme bilgileri</li>
        <li>Ticari fatura, alıcının ithalat işlemleri sırasında gümrükte kullanılan yasal bir belgedir.</li>
      </ul>
      
      <h2>2. Menşe Şehadetnamesi</h2>
      <ul>
        <li>Malların üretildiği ülkeyi belgeler</li>
        <li>Gümrük vergisi muafiyeti sağlayabilir</li>
        <li>Özellikle Orta Doğu ve Kuzey Afrika için önemli</li>
        <li>Form A, EUR.1, EUR-MED gibi türleri vardır</li>
        <li>Serbest ticaret anlaşmalarından yararlanmak için doğru doldurulmalıdır.</li>
        <li>Farklı ülkelerin menşe belgelerine dair özel talepleri olabilir.</li>
      </ul>
      
      <h2>3. EUR.1 Dolaşım Belgesi</h2>
      <ul>
        <li>AB ülkelerine ihracatta kullanılır</li>
        <li>Gümrük vergisi muafiyeti sağlar</li>
        <li>Resmi onay gerektirir</li>
        <li>Menşe kurallarına uygunluk gerekir</li>
        <li>Türkiye’nin AB ile yaptığı Serbest Ticaret Anlaşması (STA) kapsamındaki ülkelerde de geçerlidir.</li>
      </ul>
      
      <h2>4. Diğer Önemli Belgeler</h2>
      <ul>
        <li><strong>ATR Dolaşım Belgesi:</strong> AB ile yapılan ticarette kullanılır ve malların serbest dolaşımda olduğunu gösterir. İhraç edilen ürünlerin tamamen Türkiye'de üretilmiş olması şartı aranmaz.</li>
        <li><strong>Konşimento (Deniz taşımacılığı):</strong> Yükün gemide taşınmasını belgeleyen bu doküman aynı zamanda bir mülkiyet belgesi olarak kabul edilir.</li>
        <li><strong>CMR (Karayolu taşımacılığı):</strong> Taşımacının yükün hasarsız ve tam teslim edilmesini garanti ettiğini belgeleyen uluslararası bir taşımacılık sözleşmesidir.</li>
        <li><strong>AWB (Havayolu taşımacılığı):</strong> Gönderinin varış noktasına kadar taşınması için havayolu şirketi ile yapılan anlaşmayı temsil eder. Aynı zamanda bir nakliye makbuzudur.</li>
        <li><strong>Sağlık ve Bitki Sağlığı Sertifikaları:</strong> Gıda, hayvansal ürünler ve tarım ürünlerinin ithalat ve ihracatında zorunlu bir belgedir. Farklı ülkelerin sağlık standartlarına uygunluğu belgelemek için hazırlanır.</li>
        <li><strong>Sigorta Poliçesi:</strong> Taşınan malların sigortalanmasını garanti altına alır. Hasar, kayıp veya gecikme durumlarında mali koruma sağlar.</li>
        <li><strong>Teknik Belgeler ve Sertifikalar:</strong> Özellikle makine ve elektronik ürünlerin ihracatında, ürünlerin belirli standartlara uygunluğunu belgeleyen teknik dosyalar veya sertifikalar gerekebilir. Örneğin, RoHS, ISO veya UL sertifikaları.</li>
      </ul>
      
      <h2>Ek Notlar</h2>
      <ul>
        <li><strong>Elektronik Ticaret Belgeleri:</strong> Bazı ülkeler elektronik ticaret belgelerini kabul etmektedir. Özellikle e-Fatura ve e-Menşe belgeleri önem kazanmaktadır.</li>
        <li><strong>Dil Gereklilikleri:</strong> Belgelerin doğru dilde hazırlanması ve uluslararası kabul görmesi için çeviri veya noter onaylı belgeler gerekebilir.</li>
      </ul>
    `
  },
  {
    "id": 5,
    "title": "Teslim Şekilleri (Incoterms 2020)",
    "content": `
      <h1>Teslim Şekilleri (Incoterms 2020)</h1>
      <p>Uluslararası ticarette kullanılan standart teslim şekilleridir.</p>
  
      <h2>E Grubu:</h2>
      <h3>EXW (Ex Works):</h3>
      <ul>
        <li>Mallar satıcının deposunda teslim edilir.</li>
        <li>Tüm masraf ve riskler alıcıya aittir.</li>
        <li>İhracatçı için en az sorumluluk.</li>
        <li>Alıcı, tüm gümrükleme işlemlerinden sorumludur.</li>
      </ul>
  
      <h2>F Grubu:</h2>
      <h3>FCA (Free Carrier):</h3>
      <ul>
        <li>Mallar belirlenen yerde taşıyıcıya teslim edilir.</li>
        <li>Taşıyıcıya teslim noktasının esnekliği vardır, bu teslim şekli farklı taşıma terminallerinde kullanılabilir.</li>
      </ul>
      
      <h3>FOB (Free on Board):</h3>
      <ul>
        <li>Mallar gemiye yüklenerek teslim edilir.</li>
        <li>Yalnızca deniz taşımacılığında kullanılır.</li>
        <li>Malların gemi güvertesine yüklenmesiyle satıcının sorumluluğu sona erer.</li>
      </ul>
      
      <h3>FAS (Free Alongside Ship):</h3>
      <ul>
        <li>Mallar gemi yanında teslim edilir.</li>
        <li>Genellikle dökme yük taşımacılığında tercih edilir.</li>
      </ul>
  
      <h2>C Grubu:</h2>
      <h3>CFR (Cost and Freight):</h3>
      <ul>
        <li>Navlun satıcıya ait olup, taşıma ücreti satıcı tarafından ödenir.</li>
        <li>Sigorta alıcıya aittir ve bu teslim şekli sigorta sağlamaz.</li>
      </ul>
      
      <h3>CIF (Cost, Insurance, Freight):</h3>
      <ul>
        <li>Navlun ve sigorta satıcıya aittir.</li>
        <li>Sigorta genellikle minimum kapsamda olur; alıcı, sigorta hakkında ekstra düzenleme yapabilir.</li>
      </ul>
      
      <h3>CPT (Carriage Paid To):</h3>
      <ul>
        <li>Taşıma ücreti satıcı tarafından ödenir.</li>
        <li>Bu teslim şekli tüm taşıma türlerinde kullanılabilir.</li>
      </ul>
      
      <h3>CIP (Carriage and Insurance Paid):</h3>
      <ul>
        <li>Taşıma ve sigorta ücreti satıcı tarafından ödenir.</li>
        <li>ICC sigorta koşulları geçerli olabilir, geniş sigorta kapsamı sağlanmalıdır.</li>
      </ul>
  
      <h2>D Grubu:</h2>
      <h3>DAP (Delivered at Place):</h3>
      <ul>
        <li>Belirlenen yerde teslim edilir.</li>
        <li>Boşaltma masrafları alıcıya aittir.</li>
      </ul>
      
      <h3>DPU (Delivered at Place Unloaded):</h3>
      <ul>
        <li>Belirlenen yerde boşaltılmış olarak teslim edilir.</li>
        <li>Alıcı, teslim edilen malları boşaltma işlemi için sorumlu olur.</li>
      </ul>
      
      <h3>DDP (Delivered Duty Paid):</h3>
      <ul>
        <li>Gümrük vergileri ve diğer maliyetler satıcı tarafından ödenir.</li>
        <li>Bu teslim şekli, satıcının en fazla sorumluluğa sahip olduğu teslim şeklidir.</li>
      </ul>
  
      <h2>Ek Notlar:</h2>
      <ul>
        <li><strong>Incoterms 2020'nin Rolü:</strong> Uluslararası Ticaret Odası (ICC) tarafından yayımlanmış olup, ticaret sözleşmelerinde açıkça belirtilmesi durumunda geçerlidir.</li>
        <li><strong>Taşımacılık Türleri:</strong> Her teslim şekli farklı taşımacılık türlerine uygun olabilir. Örneğin, FOB ve FAS sadece deniz taşımacılığına uygulanabilirken, FCA ve DDP tüm taşıma türlerinde kullanılabilir.</li>
        <li><strong>Risk ve Masraf Paylaşımı:</strong> Teslim şekilleri, satıcı ve alıcı arasında risk ve masrafların nasıl paylaştırılacağı konusunda rehberlik eder.</li>
      </ul>
    `
  },
  {
    "id": 6,
    "title": "Dış Ticarette Ödeme Yöntemleri",
    "content": `
      <h1>Dış Ticarette Ödeme Yöntemleri</h1>
  
      <h2>1. Peşin Ödeme:</h2>
      <ul>
        <li>Mallar gönderilmeden önce ödeme yapılır.</li>
        <li>Satıcı için en güvenli yöntem.</li>
        <li>Alıcı için riskli olabilir.</li>
        <li>Ödeme, Swift, havale veya EFT ile yapılabilir.</li>
        <li>Genellikle ilk kez yapılan ticarette tercih edilir.</li>
        <li>Alıcı, malları teslim almadan ödeme yaptığı için risk altındadır.</li>
        <li>Satıcı, ödeme alana kadar hiçbir risk taşımaz.</li>
      </ul>
  
      <h2>2. Mal Mukabili Ödeme:</h2>
      <ul>
        <li>Mallar teslim edildikten sonra ödeme yapılır.</li>
        <li>Alıcı için avantajlıdır.</li>
        <li>Satıcı için riskli olabilir.</li>
        <li>Genellikle güven ilişkisi gerektirir.</li>
        <li>Uzun süreli ticari ilişkilerde tercih edilir.</li>
        <li>Alıcı, malları teslim aldıktan sonra ödeme yapma fırsatı bulur, ancak satıcı riske girer.</li>
        <li>Alıcı, malların durumunu kontrol ettikten sonra ödeme yapar.</li>
      </ul>
  
      <h2>3. Vesaik Mukabili Ödeme:</h2>
      <ul>
        <li>Belgeler karşılığı ödeme yapılır.</li>
        <li>Bankalar aracılığıyla gerçekleşir.</li>
        <li>Orta düzeyde risk içerir.</li>
        <li>Belgelerin ibrazı ile ödeme yapılır.</li>
        <li>Alıcı, malların belgelerini aldıktan sonra ödeme yapar, ancak mallar henüz teslim edilmemiştir.</li>
      </ul>
  
      <h2>4. Akreditif:</h2>
      <ul>
        <li>Banka garantisi ile yapılan ödeme.</li>
        <li>Her iki taraf için güvenli bir ödeme yöntemidir.</li>
        <li>Belge bazlı işlem yapılır.</li>
        <li><strong>Çeşitleri:</strong></li>
        <ul>
          <li><strong>Dönülebilir/Dönülemez Akreditif:</strong> Dönülemez akreditif, satıcının onayı olmadan değiştirilemez. Dönülebilir akreditif ise, alıcı ve satıcı arasında anlaşmazlık durumunda değiştirilebilir.</li>
          <li><strong>Teyitli/Teyitsiz Akreditif:</strong> Teyitli akreditifde başka bir banka ödeme garantisi verirken, teyitsiz akreditifde yalnızca ihraç bankası garantisi vardır.</li>
          <li><strong>Devredilebilir Akreditif:</strong> Başka bir kişiye transfer edilebilen akreditif türüdür.</li>
          <li><strong>Rotatif Akreditif:</strong> Belirli bir süre için geçerli olan ve dönen akreditif türüdür.</li>
        </ul>
      </ul>
  
      <h2>Ek Bilgiler:</h2>
      <ul>
        <li><strong>Ödeme Yöntemlerinin Seçimi:</strong> Satıcı ve alıcı arasındaki güven ilişkisi, ödeme yönteminin seçilmesinde önemli bir faktördür. Satıcılar genellikle daha güvenli yöntemleri tercih ederken, alıcılar genellikle ödeme riski taşımak istemezler.</li>
        <li><strong>Risk Yönetimi:</strong> Her ödeme yönteminde riskler farklı seviyelerdedir. Satıcılar, ödeme alma risklerini minimize etmek için güvenli yöntemler tercih ederken, alıcılar ürünleri teslim almadan ödeme yapmaktan kaçınabilir.</li>
      </ul>
    `
  },
  {
    "id": 7,
    "title": "Lojistik ve Nakliye İşlemleri",
    "content": `
      <h1>Lojistik ve Nakliye İşlemleri</h1>
  
      <h2>Taşıma Modları:</h2>
      <ul>
        <li><strong>Denizyolu Taşımacılığı:</strong> En yaygın kullanılan taşıma türüdür. Büyük hacimli mallar için idealdir. Maliyet açısından düşük ama süre açısından uzun olabilir.</li>
        <li><strong>Havayolu Taşımacılığı:</strong> Yüksek maliyetli olmakla birlikte, hızlı teslimatlar için tercih edilir. Özellikle acil ve yüksek değerli mallar için uygundur.</li>
        <li><strong>Karayolu Taşımacılığı:</strong> Kısa mesafelerde hızlı ve esnek taşıma sağlar. Malın teslimatı daha doğrudan yapılabilir.</li>
        <li><strong>Demiryolu Taşımacılığı:</strong> Genellikle büyük hacimli, düşük maliyetli taşımalarda tercih edilir. Ancak ulaşım altyapısının sınırlı olması bir dezavantaj olabilir.</li>
        <li><strong>Multimodal Taşımacılık:</strong> Farklı taşıma modlarının birleştirilmesiyle yapılan taşıma türüdür. Örneğin, denizyolu ile başlar, karayolu ile tamamlanabilir.</li>
      </ul>
  
      <h2>Konteyner Türleri:</h2>
      <ul>
        <li><strong>20'lik Standart Konteyner (20' DC):</strong> En yaygın kullanılan konteyner türüdür.</li>
        <li><strong>40'lık Standart Konteyner (40' DC):</strong> Daha büyük yükler için kullanılır.</li>
        <li><strong>40'lık Yüksek Konteyner (40' HC):</strong> Standart konteynerden daha yüksek olan ve hacimli yüklerin taşınmasına olanak tanır.</li>
        <li><strong>Soğutmalı Konteyner (Reefer):</strong> Gıda, ilaç ve diğer hassas ürünlerin taşınmasında kullanılır. Sabit sıcaklık ve nem koşulları sağlar.</li>
        <li><strong>Açık Yük Konteyneri (Open Top):</strong> Büyük ve hacimli yükler için uygundur, genellikle vinçle yükleme yapılır.</li>
        <li><strong>Flat Rack Konteyner:</strong> Boyutları büyük, ancak standart konteynerlere sığmayan yükler için kullanılır. Üstü açık olan konteynerlerdir.</li>
      </ul>
  
      <h2>Paketleme ve İşaretleme:</h2>
      <ul>
        <li><strong>Uluslararası Paketleme Standartları:</strong> İthalat ve ihracat sırasında geçerli olan paketleme standartları, taşımanın güvenliğini ve verimliliğini sağlamak için önemlidir. Bu standartlar genellikle IATA ve IMO tarafından belirlenir.</li>
        <li><strong>Taşıma Sembolleri ve Etiketler:</strong> Taşıma sırasında, kırılgan, ıslanmaz, üst üste konulmaz gibi işaretler kullanılır.</li>
        <li><strong>Kırılgan, Islanmaz, Üst Üste Konulmaz İşaretleri:</strong> Ürünlerin zarar görmemesi için bu tür işaretler kullanılır.</li>
        <li><strong>Tehlikeli Madde İşaretlemeleri:</strong> Tehlikeli maddelerin taşınmasında, bu maddelerin sınıflandırılması için belirli işaretler gereklidir.</li>
        <li><strong>Barkod ve RFID Sistemleri:</strong> Barkodlar ve RFID teknolojileri, lojistik süreçlerde malzeme takibini kolaylaştırır. RFID, ürünlerin daha hızlı ve güvenilir bir şekilde takip edilmesini sağlar.</li>
      </ul>
  
      <h2>Lojistik Süreç Yönetimi:</h2>
      <ul>
        <li><strong>Depolama ve Antrepo Hizmetleri:</strong> Lojistik zincirinin önemli bir parçası olan depolama hizmetleri, malların güvenli bir şekilde saklanmasını sağlar. Antrepo hizmetleri, gümrük işlemleri bekleyen malların depolanmasını içerir.</li>
        <li><strong>Yükleme ve Boşaltma Operasyonları:</strong> Malların taşıma araçlarına yüklenmesi ve araçlardan boşaltılması, genellikle elleçleme ve uygun taşıma ekipmanları gerektirir.</li>
        <li><strong>Gümrük İşlemleri ve Terminal Hizmetleri:</strong> Gümrükteki belgeler ve işlemler, yüklerin serbest dolaşıma girmesini sağlar. Terminal hizmetleri, yüklerin taşıma modlarına göre terminaldeki işlemlerini ifade eder.</li>
        <li><strong>Sigorta ve Risk Yönetimi:</strong> Lojistikte risk yönetimi, taşınan malların zarar görmemesi için çeşitli sigorta türlerini içerebilir. Bu, taşımanın güvenliğini sağlamak açısından kritik öneme sahiptir.</li>
        <li><strong>Teslimat Takibi ve Raporlama:</strong> Modern lojistik yönetim sistemleri, teslimatların anlık takibini sağlar. Bu, alıcı ve satıcı arasında iletişimi güçlendirir.</li>
      </ul>
  
      <h2>Eklemeler:</h2>
      <ul>
        <li><strong>Lojistik Teknolojileri:</strong> Yapay zeka ve otomasyon sistemleri, lojistikte maliyetleri düşürürken verimliliği artırabilir. Ayrıca, Blockchain teknolojisi ile belge doğrulama ve ödeme işlemleri daha güvenilir hale gelebilir.</li>
        <li><strong>Çevresel Etkiler ve Sürdürülebilirlik:</strong> Yeşil lojistik, çevresel etkilerin azaltılmasını amaçlar. Düşük emisyonlu taşıma araçları ve geri dönüştürülebilir ambalaj kullanımı bu süreçte yer alır.</li>
      </ul>
    `
  },
  {
    "id": 8,
    "title": "Müşteri Bulma Stratejileri",
    "content": `
      <h1>Müşteri Bulma Stratejileri</h1>
  
      <h2>Pazar Araştırması:</h2>
      <ul>
        <li><strong>İhracat Pazarlarının Belirlenmesi:</strong> Hangi ülkelerde ürünlerinizi satabileceğinizi ve potansiyel pazarları değerlendirmek. Bu aşama, pazarın coğrafi, kültürel ve ekonomik yapısını anlamayı içerir.</li>
        <li><strong>Pazar Büyüklüğü Analizi:</strong> Belirlenen pazarların büyüklüğünü ve potansiyelini incelemek. Pazarın gelecekteki büyüme hızını tahmin etmek ve bu verileri ihracat stratejilerine entegre etmek.</li>
        <li><strong>Tüketici Davranışları Araştırması:</strong> Hedef pazarda tüketicilerin tercihleri, alışveriş alışkanlıkları ve taleplerini anlamak. Bu, ürün özelleştirmesi veya yeni ürün geliştirme kararlarında rehberlik eder.</li>
        <li><strong>Rekabet Analizi:</strong> Pazardaki mevcut rakipleri analiz ederek, onların güçlü ve zayıf yönlerini belirlemek. Ayrıca, rakiplerin fiyatlandırma stratejileri, ürün çeşitliliği ve dağıtım kanallarını incelemek gerekir.</li>
        <li><strong>Hedef Pazar Seçimi Kriterleri:</strong> Potansiyel pazarları ekonomik, demografik ve yasal faktörlere göre değerlendirmek. Yüksek gelirli pazarlar, orta sınıf tüketici kitlesine sahip bölgeler veya özgün ürün gereksinimleri olan pazarlar seçilebilir.</li>
        <li><strong>Ekonomik Göstergeler:</strong> Gelişmekte olan pazarların ekonomik durumunu analiz etmek; gayri safi yurt içi hasıla (GSYİH), işsizlik oranı ve enflasyon gibi göstergeleri dikkate almak.</li>
        <li><strong>Demografik Yapı:</strong> Hedef pazardaki yaş grupları, gelir seviyeleri, eğitim durumu ve yaşam tarzlarını inceleyerek uygun müşteri segmentleri oluşturmak.</li>
        <li><strong>Yasal Düzenlemeler:</strong> İhracat yapılacak ülkenin ticaret yasaları, gümrük vergileri ve ithalat düzenlemelerini incelemek. Ayrıca, fikri mülkiyet hakları ve çevresel yasalar da dikkate alınmalıdır.</li>
      </ul>
  
      <h2>Pazarlama Kanalları:</h2>
      <ul>
        <li><strong>Dijital Platformlar:</strong> B2B platformları (Alibaba, TradeKey), sosyal medya pazarlaması, SEO ve dijital reklamcılık ile online pazarlama kanallarını etkin kullanmak.</li>
        <li><strong>B2B Platformları (Alibaba, TradeKey):</strong> Potansiyel iş ortakları ve müşterilere ulaşmak için en etkili platformlardır. Bu tür platformlarda ürünlerinizi sergileyebilir ve ticaret anlaşmaları yapabilirsiniz.</li>
        <li><strong>Sosyal Medya Pazarlaması:</strong> Facebook, Instagram, LinkedIn gibi platformlarda uluslararası hedef kitlelere yönelik kampanyalar düzenlemek.</li>
        <li><strong>SEO ve Dijital Reklamcılık:</strong> Arama motoru optimizasyonu (SEO) ve Google Ads gibi dijital reklamcılık araçları kullanarak web sitesi trafiği sağlamak ve marka bilinirliğini artırmak.</li>
        <li><strong>Geleneksel Kanallar:</strong> Yüz yüze pazarlama ve kişisel bağlantılarla müşteri bulmak.</li>
        <li><strong>Uluslararası Ticaret Fuarları:</strong> Ürünleri tanıtmak, sektör profesyonelleriyle tanışmak ve yeni iş fırsatları oluşturmak için katılmak.</li>
        <li><strong>Ticaret Heyetleri:</strong> Ulusal ticaret heyetleri veya ülke dışı temsilcilikler aracılığıyla iş geliştirme ve yeni pazarlar keşfetme.</li>
        <li><strong>Sektörel Yayınlar:</strong> Sektörle ilgili dergiler ve yayınlarda reklam vermek veya ürün tanıtımları yapmak.</li>
        <li><strong>Resmi Kanallar:</strong> Hükümet ve devlet kurumları tarafından sağlanan ticaret destek hizmetleri ve müşteri bulma imkanları.</li>
        <li><strong>Ticaret Müşavirlikleri:</strong> Uluslararası ticaret müşavirlikleri aracılığıyla hedef pazarlarda ticaret fırsatları keşfetmek.</li>
        <li><strong>İhracatçı Birlikleri:</strong> İhracatçı birlikleriyle iletişim kurarak yurtdışındaki pazar fırsatlarına yönelmek.</li>
        <li><strong>Ticaret ve Sanayi Odaları:</strong> Ticaret ve sanayi odalarının düzenlediği etkinlikler ve iş bağlantıları sağlamak.</li>
      </ul>
  
      <h2>Müşteri İlişkileri Yönetimi:</h2>
      <ul>
        <li><strong>CRM Sistemleri Kullanımı:</strong> Müşteri bilgilerini ve etkileşimlerini yönetmek için müşteri ilişkileri yönetimi (CRM) yazılımları kullanarak verimli bir şekilde takip etmek.</li>
        <li><strong>Düzenli İletişim ve Takip:</strong> Müşteri ile sürekli iletişim halinde kalarak, onların ihtiyaçlarını ve taleplerini anlamak, takip etmek ve hızlı bir şekilde çözüm sunmak.</li>
        <li><strong>Müşteri Memnuniyeti Ölçümü:</strong> Anketler ve geri bildirim sistemleri ile müşteri memnuniyetini ölçmek ve iyileştirmek.</li>
        <li><strong>Profesyonel Teklif Hazırlama:</strong> Müşterilere yönelik açık, anlaşılır ve profesyonel teklifler hazırlamak.</li>
        <li><strong>After-Sales Hizmetler:</strong> Satış sonrası destek ve hizmet sunarak müşteri sadakati oluşturmak, ürünle ilgili sorunları çözmek ve ek hizmetler sağlamak.</li>
      </ul>
    `
  },
  {
    "id": 9,
    "title": "Ticari Fatura ve Resmi Fatura",
    "content": `
      <h1>Ticari Fatura ve Resmi Fatura</h1>
  
      <h2>Ticari Fatura</h2>
      <h3>Temel Bilgiler:</h3>
      <ul>
        <li><strong>Fatura Numarası ve Tarihi:</strong> Faturanın benzersiz numarası ve düzenlendiği tarih.</li>
        <li><strong>Satıcı ve Alıcı Bilgileri:</strong> Satıcı ve alıcı firmaların tam unvan ve adres bilgileri, vergi/sicil numaraları.</li>
        <li><strong>Mal Bilgileri:</strong> Malların tam tanımı, GTIP kodu, birim fiyatı, toplam değeri, miktar ve ağırlık bilgileri.</li>
      </ul>
      <h3>Ticari Şartlar:</h3>
      <ul>
        <li><strong>Ödeme Şekli ve Vadesi:</strong> Satıcı ve alıcı arasındaki ödeme koşulları ve vade tarihi.</li>
        <li><strong>Teslim Şekli (Incoterms):</strong> Malların teslimat koşullarına dair açıklamalar.</li>
        <li><strong>Paketleme Detayları:</strong> Ürünlerin paketlenme şekli, boyutları, kullanılan ambalaj malzemeleri.</li>
        <li><strong>İhracatçı ve İthalatçı Banka Bilgileri:</strong> Ödemelerin yapılacağı banka hesap bilgileri.</li>
        <li><strong>İhracatçı/İthalatçı Firma Referans Numarası:</strong> Ticaretin izlenebilmesi için her iki tarafın fatura üzerinde referans numaralarını belirtmesi.</li>
      </ul>
  
      <h2>Resmi Fatura</h2>
      <h3>Yasal Gereklilikler:</h3>
      <ul>
        <li><strong>Gümrük Beyannamesi ile Uyum:</strong> Resmi faturanın, gümrük beyannamesiyle uyumlu olması gereklidir.</li>
        <li><strong>Vergi Oranları ve Hesaplamaları:</strong> Uygulanan vergi oranları ve hesaplamalar.</li>
        <li><strong>KDV Düzenlemeleri:</strong> KDV ile ilgili özel düzenlemeler, indirimler veya muafiyetler.</li>
      </ul>
      <h3>Ek Bilgiler:</h3>
      <ul>
        <li><strong>Menşe Ülke Bilgisi:</strong> Ürünün üretildiği ülkenin bilgisi.</li>
        <li><strong>İlgili Belge Referansları:</strong> İhracat veya ithalatla ilgili diğer belgeler ve referans numaraları.</li>
        <li><strong>Özel İzin/Lisans Numaraları:</strong> İthalat veya ihracat için gerekli özel izinlerin ve lisansların numaraları.</li>
        <li><strong>İthalatçı İçin Gümrük İşlemleri:</strong> İthalatçı firmaya ait gümrük işlemleri ve belgelerinin belirtilmesi.</li>
        <li><strong>Fatura Dilinin Belirtilmesi:</strong> İlgili ülkenin ticaret dili doğrultusunda faturanın hazırlanması gerekebilir.</li>
      </ul>
    `
  },
  {
    "id": 10,
    "title": "Paketleme Listesi",
    "content": `
      <h1>Paketleme Listesi</h1>
  
      <h2>Temel Bilgiler:</h2>
      <ul>
        <li><strong>Gönderici ve Alıcı Bilgileri:</strong> Gönderen ve alıcı firmaların tam unvan ve adres bilgileri.</li>
        <li><strong>Sipariş ve Fatura Referans Numaraları:</strong> İlgili sipariş ve fatura numaralarının belirtilmesi.</li>
        <li><strong>Sevkiyat Tarihi ve Taşıma Şekli:</strong> Ürünlerin sevk edileceği tarih ve kullanılacak taşıma şekli (denizyolu, havayolu, karayolu vb.).</li>
      </ul>
  
      <h2>Paket Detayları:</h2>
      <ul>
        <li><strong>Her Paketin İçeriği ve Numarası:</strong> Her bir paketin içeriği ve paket numarası.</li>
        <li><strong>Paket Başına Ürün Miktarı:</strong> Her pakette bulunan ürün adedi.</li>
        <li><strong>Brüt ve Net Ağırlıklar:</strong> Paketlerin toplam ağırlığı (brüt) ve sadece ürünün ağırlığı (net).</li>
        <li><strong>Paket Boyutları (En/Boy/Yükseklik):</strong> Her bir paketin boyutları.</li>
        <li><strong>Özel Taşıma Talimatları:</strong> Özel taşıma koşulları ve talimatları (örneğin sıcaklık, nem, hassas taşıma vb.).</li>
      </ul>
  
      <h2>İşaretleme Bilgileri:</h2>
      <ul>
        <li><strong>Paket Numaraları ve Sembolleri:</strong> Paketlerin sıralı numaraları ve taşıma sembollerinin belirtilmesi.</li>
        <li><strong>Varış Noktası Bilgileri:</strong> Malların teslim edileceği varış noktası bilgileri.</li>
        <li><strong>Özel Elleçleme İşaretleri:</strong> Kırılgan, sıcaklık hassasiyeti gibi özel işaretler ve semboller.</li>
      </ul>
    `
  },
  {
    "id": 11,
    "title": "Ağırlık Listesi",
    "content": `
      <h1>Ağırlık Listesi</h1>
  
      <h2>Genel Bilgiler:</h2>
      <ul>
        <li><strong>Sevkiyat Referans Numarası:</strong> Sevkiyatla ilgili benzersiz referans numarası.</li>
        <li><strong>Taşıma Modu ve Araç Bilgileri:</strong> Kullanılacak taşıma modu (deniz, kara, hava) ve taşıma aracının bilgileri.</li>
        <li><strong>Toplam Paket Sayısı:</strong> Sevk edilen toplam paket sayısı.</li>
      </ul>
  
      <h2>Ağırlık Detayları:</h2>
      <ul>
        <li><strong>Her Bir Ürünün Net Ağırlığı:</strong> Her bir ürünün kendi ağırlığı (ambalaj dışı).</li>
        <li><strong>Paketleme Malzemesi Ağırlığı:</strong> Paketleme malzemelerinin (karton, plastik, vb.) ağırlığı.</li>
        <li><strong>Brüt Ağırlık Hesaplamaları:</strong> Ürünün net ağırlığı ile paketleme malzemelerinin toplam ağırlığı.</li>
        <li><strong>Konteyner/Araç Başına Dağılım:</strong> Ağırlığın taşıma aracına veya konteynere göre dağılımı.</li>
      </ul>
  
      <h2>Ölçüm Birimleri:</h2>
      <ul>
        <li><strong>Metrik Sistem:</strong> Ağırlık ölçü birimleri (kg, ton) kullanılır.</li>
        <li><strong>İngiliz Sistemi:</strong> Ağırlık ölçü birimleri (pound, ounce) kullanılır.</li>
        <li><strong>Hacimsel Ağırlık Hesaplamaları:</strong> Paketlerin hacmine göre ağırlık hesaplamaları (genellikle havayolu taşımacılığında kullanılır).</li>
      </ul>
    `
  },
  {
    "id": 12,
    "title": "Konşimento Taslağı (Bill of Lading Draft)",
    "content": `
      <h1>Konşimento Taslağı (Bill of Lading Draft)</h1>
  
      <h2>Temel Bilgiler:</h2>
      <ul>
        <li><strong>Taşıyıcı Firma Bilgileri:</strong> Taşıma işlemini gerçekleştiren firmanın adı, adresi ve iletişim bilgileri.</li>
        <li><strong>Yükleme ve Boşaltma Limanları:</strong> Malların yükleneceği ve boşaltılacağı limanların adı.</li>
        <li><strong>Gemi Adı ve Sefer Numarası:</strong> Taşımanın yapılacağı geminin adı ve sefer numarası.</li>
        <li><strong>Konşimento Numarası:</strong> Her bir konşimentoya verilen benzersiz referans numarası.</li>
      </ul>
  
      <h2>Yük Bilgileri:</h2>
      <ul>
        <li><strong>Mal Tanımı ve Miktarı:</strong> Taşınan malların açıklaması ve miktarı.</li>
        <li><strong>Konteyner Numaraları:</strong> Taşınan malların bulunduğu konteynerlerin numaraları.</li>
        <li><strong>Mühür Numaraları:</strong> Konteynerlerin güvenliğini sağlamak amacıyla kullanılan mühürlerin numaraları.</li>
        <li><strong>Brüt/Net Ağırlık:</strong> Taşınan malların brüt (toplam) ve net (sadece ürün) ağırlıkları.</li>
      </ul>
  
      <h2>Konşimento Türleri:</h2>
      <ul>
        <li><strong>Ciro Edilebilir Konşimento:</strong> Konşimentonun başka bir tarafa devredilebilmesi.</li>
        <li><strong>Nama Yazılı Konşimento:</strong> Konşimentonun sadece belirtilen kişiye verilmesi.</li>
        <li><strong>Deniz Konşimentosu:</strong> Deniz yolu taşımacılığına ilişkin verilen konşimento.</li>
        <li><strong>Express Bill of Lading:</strong> Elektronik ortamda düzenlenen, hızlı ve basitleştirilmiş konşimento.</li>
      </ul>
    `
  },
  {
    "id": 13,
    "title": "EUR.1 Dolaşım Belgesi Taslağı",
    "content": `
      <h1>EUR.1 Dolaşım Belgesi Taslağı</h1>
  
      <h2>Belge İçeriği:</h2>
      <ul>
        <li><strong>İhracatçı Bilgileri:</strong> İhracatçının adı, adresi, vergi numarası ve iletişim bilgileri.</li>
        <li><strong>Alıcı Bilgileri:</strong> Alıcının adı, adresi, vergi numarası ve iletişim bilgileri.</li>
        <li><strong>Tercihli Ticaret Anlaşması Bilgisi:</strong> Uygulanan tercihli ticaret anlaşmasının adı ve referansı.</li>
        <li><strong>Menşe Ülke Beyanı:</strong> Malın üretildiği ve menşei olduğu ülkenin beyanı.</li>
      </ul>
  
      <h2>Mal Bilgileri:</h2>
      <ul>
        <li><strong>Ürün Tanımı ve GTIP Kodu:</strong> Ürünlerin kısa tanımı ve uluslararası ticarette kullanılan GTIP kodu.</li>
        <li><strong>Menşe Kriterleri:</strong> Menşe ülkesi ile ilgili belirli şartlar ve kriterler.</li>
        <li><strong>Brüt/Net Ağırlık:</strong> Ürünün brüt (toplam) ve net (sadece ürün) ağırlığı.</li>
        <li><strong>Fatura Numarası ve Tarihi:</strong> Malın satış faturasının numarası ve düzenleme tarihi.</li>
      </ul>
  
      <h2>Onay Süreci:</h2>
      <ul>
        <li><strong>Gümrük İdaresi Onayı:</strong> Gümrük idaresinin belgeyi onaylaması gerekliliği.</li>
        <li><strong>Ticaret Odası Onayı:</strong> Ticaret odası tarafından verilen onay.</li>
        <li><strong>Gerekli Damga ve Mühürler:</strong> Belgeyi geçerli kılmak için gerekli olan damga ve mühürler.</li>
        <li><strong>Geçerlilik Süresi:</strong> Belgenin geçerlilik süresi ve son kullanma tarihi.</li>
      </ul>
    `
  },
  {
    "id": 14,
    "title": "Resmi Fatura Taslağı Hazırlanması",
    "content": `
      <h1>Resmi Fatura Taslağı Hazırlanması</h1>
  
      <h2>Zorunlu Bilgiler:</h2>
      
      <h3>Firma Bilgileri:</h3>
      <ul>
        <li><strong>İhracatçı Unvanı ve Adresi:</strong> İhracatçının firma adı, adresi ve iletişim bilgileri.</li>
        <li><strong>Vergi Numarası ve Sicil Bilgileri:</strong> İhracatçının vergi numarası ve sicil bilgileri.</li>
        <li><strong>İthalatçı Bilgileri:</strong> İthalatçının adı, adresi ve iletişim bilgileri.</li>
      </ul>
  
      <h3>Mal Bilgileri:</h3>
      <ul>
        <li><strong>Detaylı Ürün Tanımı:</strong> Ürünlerin tam açıklaması ve özellikleri.</li>
        <li><strong>GTIP Kodları:</strong> Malların uluslararası ticarette kullanılan GTIP (Gümrük Tarife İstatistik Pozisyonu) kodları.</li>
        <li><strong>Menşe Ülke:</strong> Malların üretildiği ülke.</li>
        <li><strong>Miktar ve Birim Fiyatlar:</strong> Satılan ürünlerin miktarı ve birim fiyatları.</li>
      </ul>
  
      <h3>Ticari Şartlar:</h3>
      <ul>
        <li><strong>Ödeme Şekli ve Vadesi:</strong> Ürünler için belirlenen ödeme şekli ve ödeme süresi.</li>
        <li><strong>Teslim Şekli (Incoterms 2020):</strong> Malların teslimatının hangi Incoterms kuralına göre yapılacağı.</li>
        <li><strong>Banka Bilgileri:</strong> Ödeme için kullanılan banka bilgileri (banka adı, IBAN, swift kodu vb.).</li>
        <li><strong>Sigorta Detayları:</strong> Malların sigortalanmasıyla ilgili detaylı bilgiler.</li>
      </ul>
  
      <h3>Yasal Gereklilikler:</h3>
      <ul>
        <li><strong>Gümrük Beyanı İçin Gerekli Bilgiler:</strong> Gümrük işlemleri için gerekli olan tüm bilgilere yer verilmesi.</li>
        <li><strong>Vergi Hesaplamaları:</strong> Uygulanan vergi oranları ve hesaplamaları.</li>
        <li><strong>İlgili Belge Referansları:</strong> İlgili fatura, sözleşme veya diğer ticaret belgelerinin referans numaraları.</li>
        <li><strong>Özel İzin ve Lisanslar:</strong> İhracat için gereken özel izinler veya lisanslar.</li>
      </ul>
    `
  }
];