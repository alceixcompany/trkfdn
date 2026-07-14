import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiCamera, FiCheckCircle, FiClock, FiHome, FiShield, FiTool, FiZap } from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const serviceGroups = [
  {
    slug: 'sigorta-arizalari',
    title: 'Sigorta Arızaları',
    description: 'Sürekli atan sigorta, kaçak akım ve pano sorunlarında hızlı müdahale.',
    items: ['Sigorta kontrolü', 'Kaçak akım', 'Pano arızası'],
    icon: FiShield,
  },
  {
    slug: 'bakim-onarim-tadilat',
    title: 'Bakım - Onarım - Tadilat',
    description: 'Elektrik bakım, onarım ve tadilat işlerinde temiz uygulama.',
    items: ['Bakım', 'Onarım', 'Tadilat'],
    icon: FiTool,
  },
  {
    slug: 'ev-elektrik-isleri',
    title: 'Ev Elektrik İşleri',
    description: 'Daire ve konutlarda priz, avize, hat ve küçük elektrik işleri.',
    items: ['Priz', 'Avize', 'Ev tesisatı'],
    icon: FiHome,
  },
  {
    slug: 'ofis-elektrik-isleri',
    title: 'Ofis Elektrik İşleri',
    description: 'Ofis, mağaza ve iş yerleri için planlı bakım ve arıza çözümleri.',
    items: ['Ofis hattı', 'Bakım', 'Acil müdahale'],
    icon: FiZap,
  },
  {
    slug: 'aydinlatma-montajlari',
    title: 'Aydınlatma Montajları',
    description: 'Ev, ofis ve iş yerleri için avize, LED ve dış mekan aydınlatmaları.',
    items: ['Avize', 'LED spot', 'Dış mekan'],
    icon: FiZap,
  },
  {
    slug: 'kamera-montaj-kurulum',
    title: 'Kamera Montaj - Kurulum',
    description: 'Kamera montajı, kablolama ve kurulum hizmetleri.',
    items: ['Kamera montaj', 'Kamera kurulum', 'Kablolama'],
    icon: FiCamera,
  },
  {
    slug: 'taahhut-isleri',
    title: 'Taahhüt İşleri',
    description: 'Planlı elektrik işleri, keşif ve uygulama süreçlerinde taahhüt desteği.',
    items: ['Keşif', 'Planlama', 'Uygulama'],
    icon: FiClock,
  },
] as const;

const process = ['Arızayı dinle', 'Yerinde ölç', 'Net fiyat ver', 'Temiz teslim et'] as const;

const ServicesPage = () => {
  const featured = serviceGroups[0];
  const FeaturedIcon = featured.icon;

  return (
    <main className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <PageHero
        eyebrow="TRKFDN Elektrik"
        title={<>Servis<br />alanları</>}
        description="Sigorta arızaları, bakım-onarım-tadilat, ev/ofis elektrik işleri, aydınlatma, taahhüt ve kamera kurulum hizmetleri."
        image="/trkfdn/services-hero.png"
        imageAlt="TRKFDN Elektrik elektrik hizmetleri"
      />

      <section className="lale-dark-section py-16 sm:py-20 lg:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <aside className="lg:sticky lg:top-32">
              <div className="rounded-[28px] border border-white/10 bg-[#111]/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--lale-gold)]">TRKFDN servis akışı</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
                  Arıza, montaj ve bakım işleri tek merkezden.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/62">
                  İş başlamadan önce sorun netleştirilir, yapılacak işlem açıklanır ve teslimde kontrol yapılır.
                </p>

                <div className="mt-7 grid gap-3">
                  {process.map((item, index) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.045] px-4 py-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e72b25] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold text-white/82">{item}</span>
                    </div>
                  ))}
                </div>

                <Link href="/iletisim" className="lale-gold-button mt-7 w-full gap-3">
                  Servis Talep Et
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            <div>
              <div className="grid gap-5 lg:grid-cols-2">
                <article className="rounded-[28px] border border-[rgba(244,197,66,0.22)] bg-[linear-gradient(135deg,#201b10,#111)] p-7 shadow-[0_28px_80px_rgba(0,0,0,0.24)] lg:col-span-2">
                  <div className="grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--lale-gold)] text-[#111]">
                      <FeaturedIcon className="h-8 w-8" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--lale-gold)]">En sık çağrı</p>
                      <h3 className="mt-2 font-serif text-4xl text-white">{featured.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">{featured.description}</p>
                    </div>
                    <a href="tel:05316063987" className="lale-gold-button whitespace-nowrap">
                      Hemen Ara
                    </a>
                  </div>
                </article>

                {serviceGroups.map((group, index) => {
                  const Icon = group.icon;

                  return (
                    <Link
                      key={group.slug}
                      href={`/hizmetlerimiz/${group.slug}`}
                      className="group rounded-[24px] border border-white/10 bg-[#171717]/92 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(244,197,66,0.34)] hover:bg-[#1d1d1d]"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-[var(--lale-gold)] ring-1 ring-white/10">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="font-serif text-2xl text-[var(--lale-gold)]">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <FiArrowUpRight className="h-5 w-5 text-white/34 transition-colors group-hover:text-[var(--lale-gold)]" />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold leading-tight text-white">{group.title}</h3>
                      <p className="mt-3 min-h-[56px] text-sm leading-7 text-white/58">{group.description}</p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-white/72"
                          >
                            <FiCheckCircle className="h-3.5 w-3.5 text-[var(--lale-gold)]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
