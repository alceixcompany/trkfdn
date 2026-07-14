import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim & Servis Talebi | TRKFDN Elektrik',
  description: 'TRKFDN Elektrik ile iletişime geçin, acil elektrik arızası veya planlı elektrik servisi için talep oluşturun.',
  alternates: {
    canonical: 'https://trkfdnelektrik.com/iletisim',
  },
  openGraph: {
    title: 'İletişim & Servis Talebi | TRKFDN Elektrik',
    description: 'Acil elektrikçi ve planlı elektrik servisi için TRKFDN Elektrik ile iletişime geçin.',
    url: 'https://trkfdnelektrik.com/iletisim',
    type: 'website',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
