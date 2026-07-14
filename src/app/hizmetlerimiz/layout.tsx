import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz | TRKFDN Elektrik',
  description: 'TRKFDN Elektrik arıza tespiti, pano düzenleme, sigorta değişimi, tesisat yenileme, priz ve aydınlatma montajı hizmetlerini inceleyin.',
  alternates: {
    canonical: 'https://trkfdnelektrik.com/hizmetlerimiz',
  },
  openGraph: {
    title: 'Hizmetlerimiz | TRKFDN Elektrik',
    description: 'Elektrik arızası, pano, sigorta, tesisat ve aydınlatma hizmetleri.',
    url: 'https://trkfdnelektrik.com/hizmetlerimiz',
    type: 'website',
  },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
