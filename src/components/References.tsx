'use client';

import Image from 'next/image';
import { FiMapPin, FiStar } from 'react-icons/fi';

const founder = {
  name: 'TRKFDN Elektrik Ekibi',
  role: 'Elektrik Servisi',
  location: 'İstanbul',
  comment:
    'Elektrik işinde hız kadar doğru teşhis de önemlidir. Amacımız arızayı geçici olarak susturmak değil, güvenli ve uzun ömürlü çözüm üretmek.',
  image: '/trkfdn/about-hero.png',
} as const;

const reviews = [
  {
    service: 'Pano Arızası',
    comment:
      'Sürekli atan sigorta için geldiler, ölçüm yapıp sebebi net anlattılar. İş bittikten sonra panoyu da düzenli teslim ettiler.',
  },
  {
    service: 'Aydınlatma',
    comment:
      'Salon aydınlatmasını yeniledik. Hem ışık seviyesi hem kablo düzeni beklediğimizden iyi oldu.',
  },
  {
    service: 'Tesisat',
    comment:
      'Eski priz hattını yenilediler, fiyatı baştan konuştuk ve aynı gün içinde temiz şekilde tamamlandı.',
  },
] as const;

const stats = [
  { value: '240+', label: 'Olumlu yorum' },
  { value: '1200+', label: 'Tamamlanan servis' },
  { value: '7/24', label: 'Acil ulaşım' },
] as const;

const References = () => {
  return (
    <section id="referanslar" className="lale-light-section py-16 sm:py-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="mb-7 h-px w-28 bg-[linear-gradient(90deg,var(--lale-gold),transparent)]" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold)]">
              Müşteri deneyimi
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-normal leading-tight text-[var(--dream-dark)] sm:text-4xl lg:text-5xl">
              Hızlı gelen, net konuşan ve işi temiz bırakan elektrikçi.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--dream-text)]">
              Ev ve iş yeri servislerinde müşterilerimizin en çok önemsediği konu:
              sorunun anlaşılması, ücretin baştan netleşmesi ve güvenli teslim.
            </p>

            <div className="mt-8 grid max-w-xl grid-cols-3 border-y border-[rgba(199,155,67,0.22)] py-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-[var(--lale-gold)]">{stat.value}</p>
                  <p className="mt-1 text-sm text-[var(--dream-text)]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#1b1b1b]/90 p-6 shadow-[0_24px_70px_rgba(31,24,18,0.08)] sm:p-8">
            <div className="flex items-center gap-4">
              <Image
                src={founder.image}
                alt={founder.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-[var(--dream-dark)]">{founder.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-[var(--dream-text)]">
                  <FiMapPin className="h-4 w-4" />
                  {founder.role} · {founder.location}
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-1 text-[var(--lale-gold)]">
              {Array.from({ length: 5 }).map((_, index) => (
                <FiStar key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="mt-6 font-serif text-2xl leading-relaxed text-[var(--dream-dark)]">
              “{founder.comment}”
            </p>

            <div className="mt-8 grid gap-4 border-t border-[rgba(199,155,67,0.16)] pt-6">
              {reviews.map((review) => (
                <div key={review.service} className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
                  <p className="text-sm leading-6 text-[var(--dream-text)]">“{review.comment}”</p>
                  <span className="text-sm font-medium text-[var(--lale-gold)]">{review.service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
