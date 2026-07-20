import React from 'react';
import Link from 'next/link';
import { FiArrowUpRight, FiInstagram, FiMapPin, FiMessageCircle, FiPhone, FiUser } from 'react-icons/fi';

const contacts = [
  {
    label: 'Tarık Fidan',
    value: '0531 606 39 87',
    sub: 'İkinci iletişim hattı',
    href: 'tel:05316063987',
    icon: FiPhone,
  },
  {
    label: 'WhatsApp',
    value: 'Hızlı servis talebi',
    sub: 'Fotoğraf ve konum gönderin',
    href: 'https://wa.me/905550344224',
    icon: FiMessageCircle,
  },
  {
    label: 'Instagram',
    value: '@trkfdn',
    sub: 'Güncel işler ve paylaşımlar',
    href: 'https://www.instagram.com/trkfdn/',
    icon: FiInstagram,
  },
  {
    label: 'Bölge',
    value: 'İstanbul geneli',
    sub: 'Elektrik servisi',
    href: '/iletisim',
    icon: FiMapPin,
  },
] as const;

const primaryContact = {
  label: 'Yetkili · Ana Hat',
  value: 'Tarık Fidan',
  number: '0555 034 42 24',
  href: 'tel:05550344224',
  icon: FiUser,
} as const;

const Contact = () => {
  const PrimaryIcon = primaryContact.icon;

  return (
    <section id="iletisim" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="border-y border-[rgba(199,155,67,0.2)] py-10 sm:py-12 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">İletişim</p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
                Tüm elektrik arızalarında arayın, hızlıca müdahale edelim.
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[var(--dream-text)]">
                Arıza belirtisini, konumu ve uygun saati paylaşın. Ekibimiz önce
                durumu netleştirir, ardından en hızlı servis planını oluşturur.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="tel:05550344224" className="lale-gold-button gap-3">
                  Hemen Ara
                  <FiPhone className="h-4 w-4" />
                </a>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.08] px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[var(--lale-gold)] hover:text-[var(--lale-gold)]"
                >
                  Formu Doldur
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[0.88fr_1.12fr]">
            <a
              href={primaryContact.href}
              className="group relative overflow-hidden rounded-lg border border-[rgba(244,197,66,0.24)] bg-[#121212]/92 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] transition-colors hover:border-[var(--lale-gold)] sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--lale-gold),transparent)]" />
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--lale-gold)] text-[#111] shadow-[0_18px_38px_rgba(244,197,66,0.16)]">
                  <PrimaryIcon className="h-6 w-6" />
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(244,197,66,0.28)] text-[var(--lale-gold)] transition-colors group-hover:bg-[var(--lale-gold)] group-hover:text-[#111]">
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--lale-gold)]">
                  {primaryContact.label}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{primaryContact.value}</h3>
                <p className="mt-3 font-serif text-4xl leading-none text-white sm:text-5xl">
                  {primaryContact.number}
                </p>
              </div>
            </a>

            <div className="grid gap-4 sm:grid-cols-2">
              {contacts.map((item) => {
                const Icon = item.icon;
                const isExternal = item.href.startsWith('http');

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="group rounded-lg border border-white/10 bg-white/[0.045] p-5 transition-colors hover:border-[rgba(244,197,66,0.46)] hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#202020] text-[var(--lale-gold)] transition-colors group-hover:bg-[rgba(244,197,66,0.14)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <FiArrowUpRight className="h-4 w-4 text-[var(--lale-gold)] opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold leading-7 text-white">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-white/56">{item.sub}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
