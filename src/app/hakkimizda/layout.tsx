import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | TRKFDN Elektrik',
  description: 'TRKFDN Elektrik elektrik servisinin güvenli işçilik, doğru teşhis ve temiz teslim yaklaşımı hakkında bilgi edinin.',
  alternates: {
    canonical: 'https://trkfdnelektrik.com/hakkimizda',
  },
  openGraph: {
    title: 'Hakkımızda | TRKFDN Elektrik',
    description: 'TRKFDN Elektrik elektrik servisinin güvenli işçilik ve doğru teşhis yaklaşımı.',
    url: 'https://trkfdnelektrik.com/hakkimizda',
    type: 'website',
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
