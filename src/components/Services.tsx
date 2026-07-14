'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiCheckCircle } from 'react-icons/fi';

const serviceGroups = [
  {
    title: 'Sigorta Arızaları',
    description: 'Sürekli atan sigorta, kaçak akım ve pano sorunlarında hızlı müdahale.',
    items: ['Sigorta kontrolü', 'Kaçak akım', 'Pano arızası'],
  },
  {
    title: 'Bakım - Onarım - Tadilat',
    description: 'Elektrik hattı, priz, anahtar ve bağlantı noktalarında düzenli onarım.',
    items: ['Bakım', 'Onarım', 'Tadilat'],
  },
  {
    title: 'Ev Elektrik İşleri',
    description: 'Daire ve konutlarda priz, avize, hat ve küçük elektrik işleri.',
    items: ['Priz', 'Avize', 'Ev tesisatı'],
  },
  {
    title: 'Ofis Elektrik İşleri',
    description: 'Ofis, mağaza ve iş yerleri için planlı bakım ve elektrik çözümleri.',
    items: ['Ofis hattı', 'Network altyapı', 'Acil müdahale'],
  },
  {
    title: 'Aydınlatma ve Kamera',
    description: 'Aydınlatma montajları, kamera montajı ve kurulum hizmetleri.',
    items: ['Aydınlatma', 'Kamera montaj', 'Kamera kurulum'],
  },
  {
    title: 'Taahhüt İşleri',
    description: 'Planlı elektrik işleri, keşif ve uygulama süreçlerinde taahhüt desteği.',
    items: ['Keşif', 'Planlama', 'Uygulama'],
  },
] as const;

const Services = () => {
  const featured = serviceGroups[0];

  return (
    <section id="hizmetler" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Hizmetler
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Elektrik işleriniz için net keşif, temiz uygulama ve ölçümlü teslim.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-[var(--dream-text)]">
            Küçük arızadan komple tesisat yenilemeye kadar her işte önce riski ölçer,
            çözümü açık anlatır ve alanı düzenli bırakarak teslim ederiz.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/55 bg-white/35 shadow-[0_28px_80px_rgba(31,24,18,0.14)] sm:min-h-[540px]">
            <Image
              src="/trkfdn/services-hero.png"
              alt={featured.title}
              fill
              className="object-cover object-[68%_center]"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_38%,rgba(18,14,10,0.78))]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">Öne çıkan servis</p>
              <h3 className="mt-3 font-serif text-3xl">{featured.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/76">{featured.description}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between border-y border-[rgba(199,155,67,0.22)]">
            {serviceGroups.map((group, index) => (
              <Link
                key={group.title}
                href="/hizmetlerimiz"
                className="group grid gap-4 border-b border-[rgba(199,155,67,0.16)] py-5 last:border-b-0 sm:grid-cols-[64px_1fr_auto] sm:items-center"
              >
                <span className="font-serif text-2xl text-[var(--lale-gold)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <span className="block text-lg font-semibold text-[var(--dream-dark)]">{group.title}</span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--dream-text)]">{group.items.join(' · ')}</span>
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(199,155,67,0.24)] text-[var(--lale-gold)] transition-transform group-hover:rotate-45">
                  <FiArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            ))}

            <div className="grid gap-3 py-6 sm:grid-cols-3">
              {['Aynı gün destek', 'Ölçümlü kontrol', 'Temiz teslim'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[var(--dream-dark)]">
                  <FiCheckCircle className="h-4 w-4 text-[var(--lale-gold)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
