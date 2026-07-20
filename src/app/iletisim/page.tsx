'use client'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiChevronDown, FiMessageCircle } from 'react-icons/fi';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { RootState } from '../../store';
import { sendContactMessage, fetchContactInfo, clearError } from '../../store/slices/contactSlice';
import PageHero from '@/components/PageHero';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  urgency: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: 'normal',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const dispatch = useAppDispatch();
  const { isSending, error } = useAppSelector((state: RootState) => state.contact) as { isSending: boolean; error: string | null };

  useEffect(() => {
    dispatch(fetchContactInfo());
    dispatch(clearError());
  }, [dispatch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    if (!formData.name || !formData.phone || !formData.email || !formData.serviceType || !formData.message) {
      return;
    }

    try {
      const messageData = {
        ...formData,
        subject: `${formData.serviceType} - ${formData.urgency}`,
        priority: formData.urgency === 'cok-acil' ? 'high' as const : formData.urgency === 'acil' ? 'medium' as const : 'low' as const,
      };

      await dispatch(sendContactMessage(messageData)).unwrap();

      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        urgency: 'normal',
        message: ''
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Mesaj gönderilirken hata:', err);
    }
  };

  return (
    <div className="page-flow min-h-screen bg-[var(--lale-emerald-deep)]">
      <PageHero
        eyebrow="Bize Ulaşın"
        title={<>Servis<br />talebi</>}
        description="Elektrik arızası, keşif veya montaj ihtiyacınız için bizi arayın ya da formu doldurun."
        image="/trkfdn/contact-hero.png"
        imageAlt="TRKFDN Elektrik iletişim"
        heightClassName="min-h-[380px] py-20 sm:min-h-[440px] sm:py-24"
      />

      <section className="lale-dark-section py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#151515] border border-[rgba(212,175,55,0.25)] shadow-[0_30px_70px_rgba(0,0,0,0.32)] p-8 sm:p-12 rounded-[28px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="font-serif text-3xl sm:text-4xl text-[var(--lale-ivory)] mb-2">Mesaj Gönderin</h2>
                  <p className="text-[rgba(251,250,246,0.68)] mb-10">Size en kısa sürede dönüş sağlayacağız.</p>

                  {success && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-8 p-6 bg-[rgba(34,197,94,0.12)] rounded-[20px] border border-[rgba(34,197,94,0.24)] flex items-center gap-4 text-green-200"
                    >
                      <FiCheckCircle className="w-6 h-6 flex-shrink-0" />
                      <p className="font-medium">Mesajınız başarıyla iletildi! Ekibimiz sizi arayacaktır.</p>
                    </motion.div>
                  )}

                  {error && (
                    <div className="mb-8 p-6 bg-[rgba(239,68,68,0.12)] rounded-[20px] border border-[rgba(239,68,68,0.22)] text-red-200">
                      <p className="font-medium text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Ad Soyad</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] placeholder-white/40 text-sm"
                          placeholder="İsminiz"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Telefon</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] placeholder-white/40 text-sm"
                          placeholder="05xx xxx xx xx"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">E-posta</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] placeholder-white/40 text-sm"
                        placeholder="e-posta@adresiniz.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Hizmet Türü</label>
                        <div className="relative">
                          <select 
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-6 py-4 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm appearance-none cursor-pointer pr-10"
                          >
                            <option value="" className="bg-[#151515] text-[var(--lale-ivory)]">Hizmet seçiniz</option>
                            <option value="sigorta-arizalari" className="bg-[#151515] text-[var(--lale-ivory)]">Sigorta Arızaları</option>
                            <option value="bakim-onarim-tadilat" className="bg-[#151515] text-[var(--lale-ivory)]">Bakım - Onarım - Tadilat</option>
                            <option value="ev-elektrik-isleri" className="bg-[#151515] text-[var(--lale-ivory)]">Ev Elektrik İşleri</option>
                            <option value="ofis-elektrik-isleri" className="bg-[#151515] text-[var(--lale-ivory)]">Ofis Elektrik İşleri</option>
                            <option value="aydinlatma-montajlari" className="bg-[#151515] text-[var(--lale-ivory)]">Aydınlatma Montajları</option>
                            <option value="taahhut-isleri" className="bg-[#151515] text-[var(--lale-ivory)]">Taahhüt İşleri</option>
                            <option value="kamera-montaj-kurulum" className="bg-[#151515] text-[var(--lale-ivory)]">Kamera Montaj - Kurulum</option>
                            <option value="diger" className="bg-[#151515] text-[var(--lale-ivory)]">Diğer</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 text-[var(--lale-gold)]">
                            <FiChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Aciliyet</label>
                        <div className="relative">
                          <select 
                            name="urgency"
                            value={formData.urgency}
                            onChange={handleInputChange}
                            className="w-full px-6 py-4 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-full focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] text-sm appearance-none cursor-pointer pr-10"
                          >
                            <option value="normal" className="bg-[#151515] text-[var(--lale-ivory)]">Normal</option>
                            <option value="acil" className="bg-[#151515] text-[var(--lale-ivory)]">Acil</option>
                            <option value="cok-acil" className="bg-[#151515] text-[var(--lale-ivory)]">Çok Acil</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-6 text-[var(--lale-gold)]">
                            <FiChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs tracking-[0.2em] text-[var(--lale-gold)] uppercase font-bold">Mesajınız</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        required
                        className="w-full px-8 py-5 bg-[#101010] border border-[rgba(212,175,55,0.22)] rounded-[32px] focus:outline-none focus:border-[var(--lale-gold)] focus:ring-1 focus:ring-[var(--lale-gold)] transition-all text-[var(--lale-ivory)] placeholder-white/40 text-sm resize-none"
                        placeholder="Size nasıl yardımcı olabiliriz?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSending}
                      className="w-full bg-[var(--lale-gold)] text-[#111] py-5 rounded-full font-bold tracking-[0.15em] text-sm hover:bg-[var(--lale-gold-soft)] transition-all shadow-[0_20px_40px_rgba(244,197,66,0.16)] active:scale-[0.98] flex items-center justify-center gap-3 disabled:bg-gray-400"
                    >
                      {isSending ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          GÖNDERİLİYOR...
                        </>
                      ) : (
                        <>
                          <FiSend className="w-4 h-4" />
                          MESAJ GÖNDER
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="font-serif text-3xl text-white mb-8">İletişim <span className="text-[var(--lale-gold)]">Bilgilerimiz</span></h2>
                
                <div className="space-y-8">
                  {[
                    { icon: FiPhone, title: "Tarık Fidan", value: "0555 034 42 24", sub: "Ana Hat · Acil Servis & Bilgi" },
                    { icon: FiPhone, title: "Tarık Fidan", value: "0531 606 39 87", sub: "İkinci iletişim hattı" },
                    { icon: FiMail, title: "E-posta", value: "info@trkfdnelektrik.com", sub: "Servis talepleri" },
                    { icon: FiMapPin, title: "Bölge", value: "Eyüpsultan ve çevresi", sub: "İstanbul, Türkiye" },
                    { icon: FiClock, title: "Çalışma Saatleri", value: "7/24 Acil Destek", sub: "Planlı servis: 09:00 - 20:00" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group rounded-2xl border border-white/8 bg-white/[0.035] p-4">
                      <div className="w-12 h-12 bg-[rgba(244,197,66,0.10)] rounded-2xl flex items-center justify-center text-[var(--lale-gold)] shadow-sm border border-[rgba(244,197,66,0.18)] flex-shrink-0 group-hover:bg-[var(--lale-gold)] group-hover:text-[#111] transition-all duration-300">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs tracking-widest text-[var(--lale-gold)] uppercase font-bold mb-1">{item.title}</h4>
                        <p className="text-lg text-white font-serif mb-1">{item.value}</p>
                        <p className="text-sm text-white/58">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square sm:aspect-video lg:aspect-auto lg:h-[350px] rounded-[32px] overflow-hidden border border-[rgba(212,175,55,0.18)] shadow-lg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.4794848700762!2d28.916935076232356!3d41.080369171340564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0e367186d89%3A0xc7564c8384c9da2b!2zWWXFn2lscMSxbmFyLCBHaXJuZSBDZCBObzoxOCwgMzQwNjUgRXnDvHBzdWx0YW4vxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1str!2saz!4v1783179815934!5m2!1str!2saz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="TRKFDN Elektrik Konum"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="lale-dark-section pb-32 px-5">
        <div className="max-w-5xl mx-auto p-12 sm:p-20 rounded-[32px] bg-[#111] border border-[rgba(244,197,66,0.22)] shadow-[0_30px_70px_rgba(0,0,0,0.32)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[rgba(212,175,55,0.08)] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          
          <h2 className="font-serif text-3xl sm:text-5xl text-[var(--lale-ivory)] mb-6">WhatsApp üzerinden <span className="text-[var(--lale-gold)]">hızlı ulaşın</span></h2>
          <p className="text-[rgba(251,250,246,0.68)] text-lg mb-12 max-w-xl mx-auto">Arıza fotoğrafını, konumu ve kısa açıklamayı gönderin; ekip en kısa sürede dönüş yapsın.</p>
          
          <a 
            href="https://wa.me/905550344224"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--lale-gold)] hover:bg-[var(--lale-gold-soft)] px-8 py-4 text-sm font-bold tracking-[0.15em] text-[#111] shadow-[0_16px_34px_rgba(244,197,66,0.20)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <FiMessageCircle className="mr-2 h-4 w-4" />
            WHATSAPP'TAN YAZ
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
