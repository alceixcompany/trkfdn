'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const workItems = [
  {
    title: 'Pano Kontrolü',
    category: 'Güvenlik',
    description: 'Kaçak akım rölesi, sigorta grupları ve yük dağılımı kontrol edilir.',
    image: '/trkfdn/gallery/pano-kontrol.png',
    objectPosition: '74% center',
  },
  {
    title: 'Ofis Aydınlatma',
    category: 'Montaj',
    description: 'LED hatlar, kablo kanalları ve bağlantılar düzenli şekilde tamamlanır.',
    image: '/trkfdn/gallery/ofis-aydinlatma.png',
    objectPosition: '50% center',
  },
  {
    title: 'Kamera Kurulum',
    category: 'Zayıf Akım',
    description: 'Kamera, network hattı ve bağlantı kutuları test edilerek teslim edilir.',
    image: '/trkfdn/gallery/kamera-kurulum.png',
    objectPosition: '38% center',
  },
] as const;

const Gallery = () => {
  return (
    <section id="isler" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              İşler / Galeri
            </p>
            <h2 className="max-w-xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Tamamlanan işlerden seçili kareler.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[var(--dream-text)] lg:justify-self-end">
            Pano, tesisat, aydınlatma ve kamera kurulumlarında temiz işçilik
            detaylarını bu bölümde öne çıkarıyoruz.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Link href="/galeri" className="group relative min-h-[460px] overflow-hidden rounded-lg border border-white/55 bg-white/35 shadow-[0_28px_80px_rgba(31,24,18,0.14)]">
            <Image
              src="/trkfdn/gallery/pano-kontrol.png"
              alt="Elektrik panosu ölçüm ve kontrol işlemi"
              fill
              className="object-cover object-[74%_center] transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(18,14,10,0.76))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Pano ve tesisat
              </p>
              <h3 className="mt-3 font-serif text-3xl">Ölçerek ilerleyen elektrik servisi</h3>
            </div>
          </Link>

          <div className="grid gap-5">
            {workItems.map((item) => {
              return (
                <Link
                  key={item.title}
                  href="/galeri"
                  className="group grid grid-cols-[128px_1fr] overflow-hidden rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#1b1b1b]/90 shadow-[0_16px_44px_rgba(31,24,18,0.08)]"
                >
                  <div className="relative min-h-[142px] overflow-hidden bg-[#101820]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: item.objectPosition }}
                      sizes="128px"
                    />
                    <div className="absolute inset-0 bg-black/18" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.14em] text-[var(--lale-gold)]">{item.category}</p>
                    <h3 className="mt-2 text-base font-semibold text-[var(--dream-dark)]">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--dream-text)]">{item.description}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--lale-gold)]">
                      İncele
                      <FiArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
