import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elektrik Rehberi | TRKFDN Elektrik',
  description: 'Elektrik arızaları, güvenli priz kullanımı, tesisat yenileme ve pano kontrolleri hakkında TRKFDN Elektrik rehberleri.',
  alternates: {
    canonical: 'https://trkfdnelektrik.com/haberler',
  },
  openGraph: {
    title: 'Elektrik Rehberi | TRKFDN Elektrik',
    description: 'Elektrik arızaları ve güvenli kullanım hakkında kısa rehberler.',
    url: 'https://trkfdnelektrik.com/haberler',
    type: 'website',
  },
};

export default function HaberlerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
