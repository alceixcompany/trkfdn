'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiCheckCircle, FiTool, FiShield, FiClock } from 'react-icons/fi';
import PageHero from '@/components/PageHero';

const AboutPage = () => {
  return (
    <div className="page-flow trkfdn-soft-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <PageHero
        eyebrow="Hakkımızda"
        title={<>Güvenli<br />işçilik</>}
        description="TRKFDN Elektrik, elektrik arızalarında hızlı müdahaleyi ölçümlü teşhis ve temiz işçilikle birleştirir."
        image="/trkfdn/about-hero.png"
        imageAlt="TRKFDN Elektrik hakkında"
      />

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-[rgba(212,175,55,0.10)] rounded-2xl text-[var(--lale-gold)] shadow-sm mb-8">
                <FiTool className="w-6 h-6" />
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-gold)] mb-8 leading-tight">
                TRKFDN Elektrik
              </h2>

              <div className="space-y-6 text-[var(--lale-gold)] opacity-70 text-[17px] leading-relaxed">
                <p>
                  TRKFDN Elektrik, ev ve iş yerlerinde elektrik işlerini hızlı, anlaşılır ve güvenli şekilde çözmek için çalışan profesyonel bir servis ekibidir.
                </p>
                <p>
                  Arıza tespiti, pano düzenleme, sigorta değişimi, tesisat yenileme ve aydınlatma montajında önce ölçer, sonra çözümü net anlatırız. İş bitiminde alanı düzenli bırakmak servis standardımızdır.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-serif text-[var(--lale-gold)] mb-1">10+</div>
                  <div className="text-xs tracking-widest text-[var(--lale-gold)] opacity-70 uppercase font-bold">Yıl Deneyim</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-[var(--lale-gold)] mb-1">1200+</div>
                  <div className="text-xs tracking-widest text-[var(--lale-gold)] opacity-70 uppercase font-bold">Tamamlanan Servis</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden border border-[rgba(212,175,55,0.22)] shadow-2xl">
                <Image
                  src="/trkfdn/about-hero.png"
                  alt="TRKFDN Elektrik servis felsefesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-4 border border-[rgba(212,175,55,0.20)] rounded-[56px] -z-10 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 bg-[rgba(6,35,31,0.84)] p-8 rounded-[32px] shadow-xl hidden sm:block border border-[rgba(212,175,55,0.18)]">
                <p className="font-serif text-[var(--lale-gold)] text-xl mb-1">“Elektrikte güven, doğru ölçümle başlar.”</p>
                <p className="text-xs tracking-widest text-[rgba(251,250,246,0.66)] uppercase">TRKFDN Elektrik Felsefesi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(223,167,69,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(223,167,69,0.04)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Misyonumuz */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative p-10 sm:p-12 rounded-[32px] border border-[rgba(223,167,69,0.18)] bg-[#1b1b1b]/90 shadow-[0_20px_50px_rgba(95,89,108,0.06)] hover:border-[var(--lale-gold)]/60 hover:shadow-[0_20px_50px_rgba(223,167,69,0.12)] transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-[rgba(223,167,69,0.08)] rounded-2xl flex items-center justify-center text-[var(--lale-gold)] border border-[rgba(223,167,69,0.18)] shadow-sm group-hover:scale-110 transition-transform">
                  <FiTarget className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--lale-gold)] font-bold">Hedeflerimiz</span>
                  <h3 className="font-serif text-3xl text-[var(--dream-dark)] mt-1 font-normal">Misyonumuz</h3>
                </div>
              </div>
              
              <div className="h-px w-16 bg-[linear-gradient(90deg,var(--lale-gold),transparent)] mb-6" />
              
              <p className="text-[var(--dream-text)] leading-relaxed text-[16px] sm:text-[17px]">
                Güvenliği, doğru teşhisi ve temiz işçiliği merkeze alarak elektrik arızalarını kalıcı şekilde çözmek temel görevimizdir.
              </p>
            </motion.div>

            {/* Vizyonumuz */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative p-10 sm:p-12 rounded-[32px] border border-[rgba(223,167,69,0.18)] bg-[#1b1b1b]/90 shadow-[0_20px_50px_rgba(95,89,108,0.06)] hover:border-[var(--lale-gold)]/60 hover:shadow-[0_20px_50px_rgba(223,167,69,0.12)] transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-[rgba(223,167,69,0.08)] rounded-2xl flex items-center justify-center text-[var(--lale-gold)] border border-[rgba(223,167,69,0.18)] shadow-sm group-hover:scale-110 transition-transform">
                  <FiEye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[var(--lale-gold)] font-bold">Geleceğimiz</span>
                  <h3 className="font-serif text-3xl text-[var(--dream-dark)] mt-1 font-normal">Vizyonumuz</h3>
                </div>
              </div>
              
              <div className="h-px w-16 bg-[linear-gradient(90deg,var(--lale-gold),transparent)] mb-6" />
              
              <p className="text-[var(--dream-text)] leading-relaxed text-[16px] sm:text-[17px]">
                İstanbul’da elektrik servisinde hızlı ulaşılabilen, net fiyat veren ve işini ölçümlü teslim eden güvenilir marka olmak.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-block h-px w-20 bg-[var(--lale-gold)] mb-6" />
            <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-gold)] mb-4">Değerlerimiz</h2>
            <p className="text-[var(--lale-gold)] opacity-70 tracking-widest uppercase text-xs font-bold">Bizi biz yapan prensiplerimiz</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {[
              { icon: FiShield, title: "Güvenlik", desc: "Enerji kesme, ölçüm ve kontrol adımlarına sadakat." },
              { icon: FiCheckCircle, title: "Kalite", desc: "Doğru malzeme ve düzenli bağlantı standardı." },
              { icon: FiClock, title: "Zaman", desc: "Acil durumlarda hızlı dönüş ve planlı servis." },
              { icon: FiTool, title: "Ustalık", desc: "Sorunu geçici değil kalıcı şekilde çözme yaklaşımı." }
            ].map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-[rgba(212,175,55,0.10)] rounded-xl flex items-center justify-center mx-auto mb-6 text-[var(--lale-gold)] shadow-sm border border-[rgba(212,175,55,0.18)]">
                  <value.icon className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[var(--lale-gold)] mb-2">{value.title}</h4>
                <p className="text-sm text-[var(--lale-gold)] opacity-60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lale-dark-section pb-32 px-5">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[32px] lale-card-dark">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative p-10 sm:p-20 text-center">
            <h2 className="font-serif text-4xl sm:text-5xl text-[var(--lale-ivory)] mb-6">
              Elektrik sorununuzu güvenle <span className="text-[var(--lale-gold)]">çözelim.</span>
            </h2>
            <p className="text-[rgba(251,250,246,0.68)] text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Arıza belirtisini paylaşın, ekibimiz en uygun servis planıyla size dönüş yapsın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="lale-gold-button"
              >
                İLETİŞİME GEÇİN
              </Link>
              <a
                href="tel:05316063987"
                className="lale-outline-button"
              >
                HEMEN ARA
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
