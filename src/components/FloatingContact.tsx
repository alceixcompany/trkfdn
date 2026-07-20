'use client'

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isAdminPage = pathname?.startsWith('/admin') || false;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactOptions = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp className="h-5 w-5 text-[#25D366]" />,
      href: 'https://wa.me/905550344224',
      isExternal: true,
      color: 'bg-[#15110d]/92 border border-[rgba(199,155,67,0.48)] backdrop-blur-xl',
      angle: 220,
    },
    {
      name: 'Telefon',
      icon: <FaPhoneAlt className="h-5 w-5 text-[#34B7F1]" />,
      href: 'tel:05550344224',
      isExternal: false,
      color: 'bg-[#15110d]/92 border border-[rgba(199,155,67,0.48)] backdrop-blur-xl',
      angle: 260,
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="h-5 w-5 text-[#E4405F]" />,
      href: 'https://www.instagram.com/trkfdn/',
      isExternal: true,
      color: 'bg-[#15110d]/92 border border-[rgba(199,155,67,0.48)] backdrop-blur-xl',
      angle: 180,
    },
  ];

  if (isAdminPage || !isMounted) {
    return null;
  }

  const radius = 110;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {contactOptions.map((option, index) => {
          const angleRad = (option.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <a
              key={option.name}
              href={option.href}
              target={option.isExternal ? '_blank' : undefined}
              rel={option.isExternal ? 'noopener noreferrer' : undefined}
              className={`${option.color} absolute flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg transition-all duration-500 ease-out ${
                isOpen
                  ? 'scale-100 opacity-100'
                  : 'pointer-events-none scale-0 opacity-0'
              } hover:scale-110 hover:rotate-12`}
              style={{
                left: `${x + 32}px`,
                top: `${y + 32}px`,
                transitionDelay: isOpen ? `${index * 150}ms` : '0ms',
                zIndex: isOpen ? 20 : -1,
              }}
              title={option.name}
              aria-label={option.name}
            >
              {option.icon}
            </a>
          );
        })}
      </div>

      <button
        onClick={() => setIsOpen((current) => !current)}
        className="relative z-30 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-[var(--lale-gold)] text-[#17120c] shadow-2xl shadow-[rgba(31,24,18,0.22)] transition-all duration-300 hover:scale-110 hover:bg-[var(--lale-gold-soft)] active:scale-95"
        title="İletişim"
        type="button"
        aria-label="İletişim menüsü"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <FaPhoneAlt className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
