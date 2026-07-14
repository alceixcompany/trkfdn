import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiMail } from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const articles = [
  {
    title: 'Sigorta sürekli atıyorsa ne yapmalısınız?',
    description: 'Aşırı yük, kısa devre ve kaçak akım ihtimallerini ayırt etmek için dikkat edilmesi gereken ilk işaretler.',
    date: '14.07.2026',
    image: '/trkfdn/news/sigorta-arizasi.png',
    objectPosition: '70% center',
  },
  {
    title: 'Evde güvenli priz kullanımı',
    description: 'Uzatma kablosu, çoklayıcı ve yüksek güçlü cihazlarda yangın riskini azaltan pratik kontroller.',
    date: '08.07.2026',
    image: '/trkfdn/news/guvenli-priz.png',
    objectPosition: '62% center',
  },
  {
    title: 'Tesisat yenileme ne zaman gerekir?',
    description: 'Eski kablo, topraklama eksikliği ve pano kapasitesi gibi yenileme kararını etkileyen başlıklar.',
    date: '02.07.2026',
    image: '/trkfdn/news/tesisat-yenileme.png',
    objectPosition: '54% center',
  },
] as const;

export default function NewsPage() {
  return (
    <main className="page-flow trkfdn-soft-flow min-h-screen">
      <PageHero
        eyebrow="Elektrik Rehberi"
        title={<>Haberler<br />& notlar</>}
        description="Elektrik arızalarını erken fark etmek, güvenli kullanım alışkanlıkları kazanmak ve servis süreçlerini anlamak için kısa rehberler."
        image="/trkfdn/news-hero.png"
        imageAlt="TRKFDN Elektrik elektrik rehberi"
      />

      <section className="lale-light-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.title} className="overflow-hidden rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#1b1b1b]/90 shadow-[0_20px_54px_rgba(31,24,18,0.08)]">
                <div className="relative min-h-[250px] bg-[#101820]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    style={{ objectPosition: article.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(16,24,32,0.72))]" />
                </div>
                <div className="p-7">
                  <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--lale-gold)]">{article.date}</p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--dream-dark)]">{article.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--dream-text)]">{article.description}</p>
                  <Link href="/iletisim" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--lale-gold)]">
                    Sorunuzu iletin
                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#101820] p-8 text-white shadow-[0_24px_70px_rgba(16,24,32,0.18)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(242,182,50,0.16)] text-[var(--lale-gold-soft)]">
                  <FiMail className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-3xl">Elektrik sorunuz mu var?</h3>
              </div>
              <div>
                <p className="text-sm leading-7 text-white/72">
                  Arıza belirtisini ve mümkünse pano/priz fotoğrafını paylaşın. Ekibimiz
                  yönlendirme ve servis planı için size dönüş yapsın.
                </p>
                <Link href="/iletisim" className="lale-gold-button mt-6 gap-3">
                  İletişime Geç
                  <FiArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
