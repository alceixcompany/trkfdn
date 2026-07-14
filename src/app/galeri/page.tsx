import Image from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';
import PageHero from '@/components/PageHero';
import News from '@/components/News';

const items = [
  {
    title: 'Pano Düzenleme',
    text: 'Sigorta grupları, kaçak akım rölesi ve bağlantılar ölçümlü şekilde kontrol edilir.',
    image: '/trkfdn/gallery/pano-kontrol.png',
    objectPosition: '74% center',
  },
  {
    title: 'Ofis Aydınlatma',
    text: 'LED armatür, kablo kanalı ve tavan bağlantıları temiz işçilikle hazırlanır.',
    image: '/trkfdn/gallery/ofis-aydinlatma.png',
    objectPosition: '50% center',
  },
  {
    title: 'Kamera Kurulum',
    text: 'Kamera, network hattı ve bağlantı noktaları test edilerek teslim edilir.',
    image: '/trkfdn/gallery/kamera-kurulum.png',
    objectPosition: '38% center',
  },
] as const;

export default function GaleriPage() {
  return (
    <main className="page-flow trkfdn-soft-flow min-h-screen">
      <PageHero
        eyebrow="İşlerden Kareler"
        title={<>Temiz<br />işçilik</>}
        description="Pano, tesisat ve aydınlatma işlerimizde düzenli bağlantı, doğru ölçüm ve güvenli teslim standardını öne çıkarırız."
        image="/trkfdn/gallery-hero.png"
        imageAlt="TRKFDN Elektrik elektrik işi galerisi"
      />

      <section className="lale-light-section py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/55 shadow-[0_28px_80px_rgba(31,24,18,0.14)]">
              <Image
                src="/trkfdn/gallery/pano-kontrol.png"
                alt="Elektrik panosu çalışma detayı"
                fill
                className="object-cover object-[74%_center]"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(16,24,32,0.78))]" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--lale-gold-soft)]">Öne çıkan iş</p>
                <h2 className="mt-3 font-serif text-4xl">Pano kontrol ve arıza tespiti</h2>
              </div>
            </div>

            <div className="grid gap-5">
              {items.map((item, index) => (
                <article key={item.title} className="grid overflow-hidden rounded-lg border border-[rgba(199,155,67,0.18)] bg-[#1b1b1b]/90 shadow-[0_16px_44px_rgba(31,24,18,0.08)] sm:grid-cols-[150px_1fr]">
                  <div className="relative min-h-[150px] bg-[#101820]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="150px"
                      style={{ objectPosition: item.objectPosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(16,24,32,0.62))]" />
                  </div>
                  <div className="p-6">
                    <p className="font-serif text-2xl text-[var(--lale-gold)]">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-2 text-xl font-semibold text-[var(--dream-dark)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--dream-text)]">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-y border-[rgba(199,155,67,0.18)] py-7 sm:grid-cols-3">
            {['Önce ölçüm', 'Düzenli kablolama', 'Güvenli teslim'].map((text) => (
              <div key={text} className="flex items-center gap-3 text-sm font-semibold text-[var(--dream-dark)]">
                <FiCheckCircle className="h-5 w-5 text-[var(--lale-gold)]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
      <News />
    </main>
  );
}
