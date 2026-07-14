import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri | TRKFDN Elektrik',
  description: 'TRKFDN Elektrik elektrik işlerinden pano, tesisat ve aydınlatma uygulama örneklerini inceleyin.',
  alternates: {
    canonical: 'https://trkfdnelektrik.com/galeri',
  },
  openGraph: {
    title: 'Galeri | TRKFDN Elektrik',
    description: 'TRKFDN Elektrik elektrik işlerinden uygulama örnekleri.',
    url: 'https://trkfdnelektrik.com/galeri',
    type: 'website',
  },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
