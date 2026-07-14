'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

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

const News = () => {
  const [featuredArticle, ...otherArticles] = articles;

  return (
    <section id="haberler" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-5 border-b border-[rgba(199,155,67,0.18)] pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">Haberler</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Elektrik işleri ve güvenli kullanım notları.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[var(--dream-text)]">
            Ev ve iş yerlerinde sık görülen elektrik sorunlarını erken fark etmenize
            yardımcı olacak pratik bilgiler.
          </p>
        </div>

        <Link href="/haberler" className="group grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-[#101820] shadow-[0_24px_70px_rgba(31,24,18,0.16)] sm:min-h-[420px]">
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
              style={{ objectPosition: featuredArticle.objectPosition }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,24,32,0.1)_25%,rgba(16,24,32,0.82)_100%)]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold-soft)]">Öne çıkan haber</p>
              <h3 className="mt-3 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">{featuredArticle.title}</h3>
            </div>
          </div>

          <article className="lg:pl-6">
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--lale-gold)]">{featuredArticle.date}</p>
            <h3 className="mt-5 font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl">
              {featuredArticle.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--dream-text)]">{featuredArticle.description}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--lale-gold)]">
              Yazıyı Oku
              <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </article>
        </Link>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="grid border-y border-[rgba(199,155,67,0.2)] lg:grid-cols-2">
            {otherArticles.map((article, index) => (
              <Link
                key={article.title}
                href="/haberler"
                className="group grid gap-5 border-b border-[rgba(199,155,67,0.16)] py-7 last:border-b-0 sm:grid-cols-[150px_1fr] lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <div className="relative min-h-[132px] overflow-hidden rounded-lg border border-white/10 bg-[#101820]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="150px"
                    style={{ objectPosition: article.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(16,24,32,0.58))]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.16em] text-[var(--lale-gold)]">
                    {String(index + 2).padStart(2, '0')} / {article.date}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold leading-snug text-[var(--dream-dark)] transition-colors group-hover:text-[var(--lale-gold)]">
                    {article.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-7 text-[var(--dream-text)]">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="lg:pl-6">
            <Link
              href="/haberler"
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(199,155,67,0.34)] bg-[#1b1b1b]/80 px-6 py-3 text-sm font-semibold text-[var(--dream-dark)] transition-colors hover:border-[var(--lale-gold)] hover:text-[var(--lale-gold)]"
            >
              Tüm Haberleri Gör
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
