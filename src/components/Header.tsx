'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPortal } from 'react-dom';
import { FiMenu, FiMessageCircle, FiPhone, FiX } from 'react-icons/fi';
import PhoneModal from './PhoneModal';

const navLinks = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/hizmetlerimiz', label: 'Hizmetler' },
  { href: '/galeri', label: 'İşler' },
  { href: '/haberler', label: 'Haberler' },
  { href: '/hakkimizda', label: 'Kurumsal' },
  { href: '/iletisim', label: 'İletişim' },
] as const;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isMenuOpen]);

  if (isAdminPage) {
    return null;
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[28px] border px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.30)] backdrop-blur-2xl transition-all duration-300 lg:px-5 ${
          isScrolled
            ? 'border-transparent bg-[#3a3a3a]/84'
            : 'border-transparent bg-[#4a4a4a]/58'
        }`}
      >
        <Link href="/" className="flex items-center" aria-label="TRKFDN Elektrik ana sayfa">
          <Image
            src="/brand/trkfdn-logo.svg"
            alt="TRKFDN Elektrik"
            width={780}
            height={190}
            className="h-11 w-auto max-w-[188px] object-contain sm:max-w-[230px]"
            priority
          />
        </Link>

        <nav className="hidden justify-self-center rounded-full border border-transparent bg-white/[0.18] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#e72b25] text-white shadow-[0_12px_28px_rgba(231,43,37,0.28)]'
                    : 'text-white/95 hover:bg-white/20 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 justify-self-end lg:flex">
          <button
            type="button"
            onClick={() => setIsPhoneModalOpen(true)}
            className="lale-gold-button gap-2 py-3"
          >
            <FiPhone className="h-4 w-4" />
            Hemen Ara
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="inline-flex h-12 w-12 items-center justify-center justify-self-end rounded-full border border-transparent bg-white/[0.18] text-white lg:hidden"
          aria-label="Mobil menüyü aç"
        >
          <FiMenu className="h-6 w-6" />
        </button>
      </div>

      {isMenuOpen && typeof window !== 'undefined' && createPortal(
        <div className="fixed inset-0 z-[9999] bg-[#303030] text-white lg:hidden">
            <div className="flex items-center justify-between border-b border-white/[0.04] px-5 py-4">
            <Image
              src="/brand/trkfdn-logo.svg"
              alt="TRKFDN Elektrik"
              width={780}
              height={190}
              className="h-11 w-auto max-w-[210px] object-contain"
              priority
            />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-transparent bg-white/[0.18] text-[var(--lale-gold)]"
              aria-label="Mobil menüyü kapat"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          <nav className="px-5 py-7">
            <div className="grid gap-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-2xl border px-5 py-4 text-sm font-bold tracking-[0.08em] ${
                      isActive
                        ? 'border-transparent bg-[#e72b25]/28 text-white'
                        : 'border-transparent bg-white/[0.14] text-white/95'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 grid gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsPhoneModalOpen(true);
                }}
                className="lale-gold-button gap-3"
              >
                <FiPhone className="h-4 w-4" />
                Telefon Numaraları
              </button>
              <a
                href="https://wa.me/905316063987"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-transparent bg-white/[0.16] px-6 py-3 text-sm font-semibold text-white"
              >
                <FiMessageCircle className="h-4 w-4 text-[var(--lale-gold)]" />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>,
        document.body
      )}
      <PhoneModal isOpen={isPhoneModalOpen} onClose={() => setIsPhoneModalOpen(false)} />
    </header>
  );
};

export default Header;
