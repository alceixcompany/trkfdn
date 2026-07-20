'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight, FiClock, FiInstagram, FiPhone, FiZap } from 'react-icons/fi';

const quickServices = [
  'Sigorta arızaları',
  'Bakım - onarım - tadilat',
  'Ev ve ofis elektrik işleri',
  'Aydınlatma ve kamera kurulum',
] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] pt-28 text-white sm:pt-32">
      <Image
        src="/trkfdn/home-hero.png"
        alt="TRKFDN Elektrik gerçekçi elektrik arıza müdahalesi"
        fill
        priority
        className="object-cover object-[62%_center]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.96)_0%,rgba(10,10,10,0.82)_36%,rgba(10,10,10,0.38)_68%,rgba(10,10,10,0.16)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,#0d0d0d)]" />

      <div className="relative z-[1] mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end gap-10 px-5 pb-14 sm:px-8 lg:grid-cols-[1fr_390px] lg:px-12">
        <div className="pb-8 lg:pb-14">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--lale-gold)] backdrop-blur-xl">
              <FiZap className="h-4 w-4" />
              TRKFDN Elektrik
            </span>
            <a
              href="https://www.instagram.com/trkfdn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-white/78 backdrop-blur-xl transition-colors hover:text-white"
            >
              <FiInstagram className="h-4 w-4 text-[#e72b25]" />
              trkfdn
            </a>
          </div>

          <h1 className="max-w-4xl font-serif text-5xl font-normal leading-[0.94] text-white sm:text-7xl lg:text-8xl">
            Elektrik arızasında hızlı ve net müdahale.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Tarık Fidan yönetiminde sigorta arızaları, bakım-onarım-tadilat,
            ev/ofis elektrik işleri, aydınlatma montajları, taahhüt ve kamera kurulum hizmetleri.
          </p>

          <div className="mt-9 grid max-w-3xl gap-2 sm:grid-cols-2">
            {quickServices.map((service) => (
              <div key={service} className="flex items-center gap-3 border-l border-[#e72b25] bg-[#161616]/78 px-4 py-3 text-sm font-semibold text-white/82 backdrop-blur-xl">
                <FiZap className="h-4 w-4 shrink-0 text-[var(--lale-gold)]" />
                {service}
              </div>
            ))}
          </div>
        </div>

        <aside className="mb-10 rounded-[28px] border border-white/12 bg-[#111]/82 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:mb-14">
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e72b25] text-white">
              <FiClock className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--lale-gold)]">Acil servis</p>
              <p className="mt-1 text-sm text-white/68">Tüm elektrik arızalarında arayın</p>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            <a href="tel:05550344224" className="lale-gold-button justify-between gap-3">
              <span>Tarık Fidan</span>
              <span className="inline-flex items-center gap-2">
                0555 034 42 24
                <FiPhone className="h-4 w-4" />
              </span>
            </a>
            <a
              href="tel:05316063987"
              className="inline-flex items-center justify-between gap-3 rounded-full border border-white/12 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-colors hover:border-[var(--lale-gold)]"
            >
              <span>Tarık Fidan · 2. Hat</span>
              <span className="inline-flex items-center gap-2">
                0531 606 39 87
                <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
              </span>
            </a>
          </div>

          <Link href="/hizmetlerimiz" className="mt-5 inline-flex w-full items-center justify-center gap-2 text-sm font-bold text-white/76 transition-colors hover:text-white">
            Tüm hizmetleri incele
            <FiArrowUpRight className="h-4 w-4" />
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
