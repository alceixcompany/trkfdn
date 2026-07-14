import { readFileSync } from 'node:fs';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith('#'))
    .map((line) => {
      const index = line.indexOf('=');
      return [line.slice(0, index), line.slice(index + 1)];
    }),
);

const app = initializeApp({
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

const db = getFirestore(app);
const now = new Date().toISOString();

const categories = [
  {
    id: 'pano',
    name: 'Pano ve Sigorta',
    description: 'Pano kontrolü, kaçak akım rölesi ve sigorta grubu düzenlemeleri.',
    icon: 'zap',
    color: '#f2b632',
    order: 1,
    isActive: true,
    createdAt: now,
  },
  {
    id: 'aydinlatma',
    name: 'Aydınlatma',
    description: 'Ev, ofis ve bina ortak alanları için LED aydınlatma montajları.',
    icon: 'lightbulb',
    color: '#f2b632',
    order: 2,
    isActive: true,
    createdAt: now,
  },
  {
    id: 'kamera',
    name: 'Kamera Sistemleri',
    description: 'Kamera, network ve zayıf akım bağlantı işleri.',
    icon: 'camera',
    color: '#ef2f2f',
    order: 3,
    isActive: true,
    createdAt: now,
  },
];

const galleryItems = [
  {
    id: 'pano-kontrol',
    title: 'Pano kontrol ve arıza tespiti',
    description: 'Sigorta grupları, kaçak akım rölesi ve yük dağılımı ölçümlü şekilde kontrol edildi.',
    categoryId: 'pano',
    imageUrl: '/trkfdn/gallery/pano-kontrol.png',
    thumbnailUrl: '/trkfdn/gallery/pano-kontrol.png',
    tags: ['pano', 'sigorta', 'arıza tespiti'],
    isActive: true,
    isFeatured: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'ofis-aydinlatma',
    title: 'Ofis LED aydınlatma montajı',
    description: 'LED lineer armatürler, kablo kanalları ve tavan bağlantıları temiz işçilikle hazırlandı.',
    categoryId: 'aydinlatma',
    imageUrl: '/trkfdn/gallery/ofis-aydinlatma.png',
    thumbnailUrl: '/trkfdn/gallery/ofis-aydinlatma.png',
    tags: ['aydınlatma', 'ofis', 'led'],
    isActive: true,
    isFeatured: false,
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'kamera-kurulum',
    title: 'Kamera ve network kurulumu',
    description: 'Kamera, network kablosu ve bağlantı kutusu test edilerek güvenli şekilde teslim edildi.',
    categoryId: 'kamera',
    imageUrl: '/trkfdn/gallery/kamera-kurulum.png',
    thumbnailUrl: '/trkfdn/gallery/kamera-kurulum.png',
    tags: ['kamera', 'network', 'zayıf akım'],
    isActive: true,
    isFeatured: false,
    order: 3,
    createdAt: now,
    updatedAt: now,
  },
];

const newsItems = [
  {
    id: 'sigorta-surekli-atiyorsa-ne-yapmalisiniz',
    slug: 'sigorta-surekli-atiyorsa-ne-yapmalisiniz',
    title: 'Sigorta sürekli atıyorsa ne yapmalısınız?',
    subtitle: 'Elektrik panosunda sık tekrarlayan arızalar için ilk kontroller',
    description: 'Aşırı yük, kısa devre ve kaçak akım ihtimallerini ayırt etmek için dikkat edilmesi gereken ilk işaretler.',
    content: 'Sigortanın sürekli atması çoğu zaman aşırı yük, kısa devre veya kaçak akım belirtisidir. Sorun tekrarlıyorsa hattı zorlamadan profesyonel ölçüm yapılmalıdır.',
    imageUrl: '/trkfdn/news/sigorta-arizasi.png',
    category: 'Elektrik Güvenliği',
    tags: ['sigorta', 'kaçak akım', 'arıza'],
    author: 'TRKFDN Elektrik',
    publishedAt: '2026-07-14T09:00:00.000Z',
    featured: true,
    isActive: true,
    createdAt: '2026-07-14T09:00:00.000Z',
    updatedAt: now,
  },
  {
    id: 'evde-guvenli-priz-kullanimi',
    slug: 'evde-guvenli-priz-kullanimi',
    title: 'Evde güvenli priz kullanımı',
    subtitle: 'Priz, çoklayıcı ve uzatma kablolarında güvenli kullanım notları',
    description: 'Uzatma kablosu, çoklayıcı ve yüksek güçlü cihazlarda yangın riskini azaltan pratik kontroller.',
    content: 'Isınan priz, gevşek fiş ve çoklayıcıya bağlanan yüksek güçlü cihazlar elektrik güvenliği açısından risk oluşturabilir.',
    imageUrl: '/trkfdn/news/guvenli-priz.png',
    category: 'Elektrik Güvenliği',
    tags: ['priz', 'topraklama', 'güvenlik'],
    author: 'TRKFDN Elektrik',
    publishedAt: '2026-07-08T09:00:00.000Z',
    featured: false,
    isActive: true,
    createdAt: '2026-07-08T09:00:00.000Z',
    updatedAt: now,
  },
  {
    id: 'tesisat-yenileme-ne-zaman-gerekir',
    slug: 'tesisat-yenileme-ne-zaman-gerekir',
    title: 'Tesisat yenileme ne zaman gerekir?',
    subtitle: 'Eski hatlarda yenileme kararını etkileyen teknik belirtiler',
    description: 'Eski kablo, topraklama eksikliği ve pano kapasitesi gibi yenileme kararını etkileyen başlıklar.',
    content: 'Eski elektrik hatları yeni cihaz yüklerini taşımakta zorlanabilir. Yenileme kararı topraklama, kablo kesiti ve pano kapasitesi ölçülerek verilmelidir.',
    imageUrl: '/trkfdn/news/tesisat-yenileme.png',
    category: 'Tesisat',
    tags: ['tesisat', 'kablo', 'yenileme'],
    author: 'TRKFDN Elektrik',
    publishedAt: '2026-07-02T09:00:00.000Z',
    featured: false,
    isActive: true,
    createdAt: '2026-07-02T09:00:00.000Z',
    updatedAt: now,
  },
];

for (const category of categories) {
  await setDoc(doc(db, 'gallery_categories', category.id), category);
}

for (const item of galleryItems) {
  await setDoc(doc(db, 'gallery_items', item.id), item);
}

for (const item of newsItems) {
  await setDoc(doc(db, 'haberler', item.id), item);
}

console.log(`Seed completed for ${env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}: ${categories.length} categories, ${galleryItems.length} gallery items, ${newsItems.length} news items.`);
process.exit(0);
