'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMapPin, FiMessageCircle, FiPhone } from 'react-icons/fi';

const Footer = () => {
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  if (isAdminPage) {
    return null;
  }

  return (
    <footer className="lale-light-section text-[var(--dream-dark)]">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="border-t border-[rgba(199,155,67,0.20)] py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.78fr_1.22fr_1fr] lg:gap-12">
            <div>
              <div className="inline-flex min-h-[64px] items-center">
                <Image
                  src="/brand/trkfdn-logo.svg"
                  alt="TRKFDN Elektrik"
                  width={720}
                  height={220}
                  className="h-12 w-auto max-w-[220px] object-contain"
                />
              </div>
              <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--dream-text)]">
                Sigorta arızaları, bakım-onarım, ev ve ofis elektrik işleri,
                aydınlatma, taahhüt ve kamera kurulumlarında hızlı servis.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href="https://wa.me/905316063987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-[#1b1b1b]/90 text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="WhatsApp"
                >
                  <FiMessageCircle className="h-4 w-4" />
                </a>
                <a
                  href="tel:05316063987"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-[#1b1b1b]/90 text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="Telefon"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
                <a
                  href="/iletisim"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(199,155,67,0.28)] bg-[#1b1b1b]/90 text-[var(--lale-gold)] shadow-sm backdrop-blur-xl transition-colors hover:bg-white/80"
                  title="Konum"
                >
                  <FiMapPin className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Sayfalar</h3>
              <ul className="mt-5 space-y-3 text-sm text-[var(--dream-text)]">
                <li><Link href="/" className="transition-colors hover:text-[var(--lale-gold)]">Ana Sayfa</Link></li>
                <li><Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">Hakkımızda</Link></li>
                <li><Link href="/hizmetlerimiz" className="transition-colors hover:text-[var(--lale-gold)]">Hizmetlerimiz</Link></li>
                <li><Link href="/galeri" className="transition-colors hover:text-[var(--lale-gold)]">İşler</Link></li>
                <li><Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">İletişim</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">Hizmetler</h3>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-[var(--dream-text)]">
                <li>Sigorta Arızaları</li>
                <li>Bakım Onarım</li>
                <li>Ev Elektrik İşleri</li>
                <li>Ofis Elektrik İşleri</li>
                <li>Aydınlatma Montajı</li>
                <li>Taahhüt İşleri</li>
                <li>Kamera Montajı</li>
                <li>Kamera Kurulumu</li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl text-[var(--lale-gold)]">İletişim</h3>
              <ul className="mt-5 space-y-4 text-sm text-[var(--dream-text)]">
                <li className="flex items-start gap-3">
                  <FiMapPin className="mt-1 h-4 w-4 text-[var(--lale-gold)]" />
                  <span>İstanbul geneli elektrik servisi</span>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="tel:05316063987" className="transition-colors hover:text-[var(--lale-gold)]">
                    0531 606 39 87
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiPhone className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a href="tel:05550344224" className="transition-colors hover:text-[var(--lale-gold)]">
                    0555 034 42 24
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FiInstagram className="h-4 w-4 text-[var(--lale-gold)]" />
                  <a
                    href="https://www.instagram.com/trkfdn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-[var(--lale-gold)]"
                  >
                    Instagram: trkfdn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[rgba(199,155,67,0.20)] py-6">
          <div className="flex flex-col gap-3 text-center text-sm text-[var(--dream-text)] md:flex-row md:items-center md:justify-between md:text-left">
            <p>
              © 2026 <span className="font-medium text-[var(--lale-gold)]">TRKFDN Elektrik</span>. Tüm hakları saklıdır.
            </p>

            <div className="flex items-center justify-center gap-5 md:justify-end">
              <a
                href="https://www.alceix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--lale-gold)]"
              >
                Hakları Alceix tarafından saklıdır
              </a>
              <Link href="/hakkimizda" className="transition-colors hover:text-[var(--lale-gold)]">
                Gizlilik Politikası
              </Link>
              <Link href="/iletisim" className="transition-colors hover:text-[var(--lale-gold)]">
                İletişim
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
