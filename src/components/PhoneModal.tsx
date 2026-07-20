'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiPhone, FiX } from 'react-icons/fi';

type PhoneModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const phoneNumbers = [
  {
    name: 'Tarık Fidan · Ana Hat',
    number: '0555 034 42 24',
    href: 'tel:05550344224',
  },
  {
    name: 'Tarık Fidan · 2. Hat',
    number: '0531 606 39 87',
    href: 'tel:05316063987',
  },
] as const;

const PhoneModal = ({ isOpen, onClose }: PhoneModalProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof window === 'undefined') {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/72 px-4 text-white backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="phone-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-[28px] border border-white/12 bg-[#111]/95 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.46)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Telefonlar
            </p>
            <h2 id="phone-modal-title" className="mt-1 text-2xl font-bold text-white">
              Bize ulaşın
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.10] text-white transition-colors hover:bg-white/[0.18]"
            aria-label="Telefon penceresini kapat"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          {phoneNumbers.map((phone, index) => (
            <a
              key={phone.href}
              href={phone.href}
              className={`inline-flex items-center justify-between gap-4 rounded-full px-5 py-4 text-sm font-bold transition-all ${
                index === 0
                  ? 'bg-[var(--lale-gold)] text-[#111] hover:bg-[var(--lale-gold-soft)]'
                  : 'border border-white/12 bg-white/[0.07] text-white hover:border-[var(--lale-gold)]'
              }`}
            >
              <span>{phone.name}</span>
              <span className="inline-flex items-center gap-2">
                <FiPhone className="h-4 w-4" />
                {phone.number}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default PhoneModal;
