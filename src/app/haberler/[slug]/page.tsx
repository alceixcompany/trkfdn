import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiCheckCircle } from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const articles = {
  'sigorta-surekli-atiyorsa-ne-yapmalisiniz': {
    title: 'Sigorta sürekli atıyorsa ne yapmalısınız?',
    description: 'Aşırı yük, kısa devre ve kaçak akım ihtimallerini ayırt etmek için dikkat edilmesi gereken ilk işaretler.',
    image: '/trkfdn/news/sigorta-arizasi.png',
    points: ['Aynı prize çok güçlü cihazlar bağlanmış olabilir.', 'Kaçak akım rölesi nem veya hat arızası nedeniyle devreye giriyor olabilir.', 'Sorun tekrarlıyorsa panoda ve hatta ölçüm yapılmalıdır.'],
  },
  'evde-guvenli-priz-kullanimi': {
    title: 'Evde güvenli priz kullanımı',
    description: 'Uzatma kablosu, çoklayıcı ve yüksek güçlü cihazlarda yangın riskini azaltan pratik kontroller.',
    image: '/trkfdn/news/guvenli-priz.png',
    points: ['Isınan priz ve gevşek fişler ihmal edilmemelidir.', 'Çoklayıcılara yüksek güçlü cihazlar aynı anda bağlanmamalıdır.', 'Topraklama hattı olmayan prizler risk oluşturabilir.'],
  },
  'tesisat-yenileme-ne-zaman-gerekir': {
    title: 'Tesisat yenileme ne zaman gerekir?',
    description: 'Eski kablo, topraklama eksikliği ve pano kapasitesi gibi yenileme kararını etkileyen başlıklar.',
    image: '/trkfdn/news/tesisat-yenileme.png',
    points: ['Sık sigorta atması ve yanık kokusu ciddi uyarılardır.', 'Eski kablo kesitleri yeni cihaz yüklerini taşımayabilir.', 'Yenileme kararı ölçüm ve keşif sonrası verilmelidir.'],
  },
} as const;

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    notFound();
  }

  return (
    <main className="page-flow trkfdn-soft-flow min-h-screen">
      <PageHero
        eyebrow="Elektrik Rehberi"
        title={<>{article.title}</>}
        description={article.description}
        image={article.image}
        imageAlt={article.title}
        align="center"
        heightClassName="min-h-[360px] py-20 sm:min-h-[430px] sm:py-24"
      />

      <section className="lale-light-section py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Link href="/haberler" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-[var(--lale-gold)]">
            <FiArrowLeft className="h-4 w-4" />
            Rehbere dön
          </Link>

          <article className="rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#1b1b1b]/90 p-7 shadow-[0_20px_54px_rgba(31,24,18,0.08)] sm:p-10">
            <h1 className="font-serif text-4xl leading-tight text-[var(--dream-dark)]">{article.title}</h1>
            <p className="mt-5 text-base leading-8 text-[var(--dream-text)]">{article.description}</p>

            <div className="mt-9 grid gap-4">
              {article.points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-lg border border-[rgba(199,155,67,0.14)] bg-[#1b1b1b]/90 p-4">
                  <FiCheckCircle className="mt-1 h-5 w-5 shrink-0 text-[var(--lale-gold)]" />
                  <p className="text-sm leading-7 text-[var(--dream-dark)]">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-lg bg-[#101820] p-6 text-white">
              <h2 className="font-serif text-2xl">Riskli bir belirti varsa beklemeyin.</h2>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Yanık kokusu, kıvılcım, ısınan priz veya sürekli atan sigorta durumunda
                hattı zorlamadan profesyonel kontrol isteyin.
              </p>
              <Link href="/iletisim" className="lale-gold-button mt-6">
                Servis Talep Et
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
