import React, { useState, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Send, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_2xq5dal';
const EMAILJS_TEMPLATE_ID = 'template_hu93noc';
const EMAILJS_PUBLIC_KEY = 'L8RvYZvLZU59E_i9k';

const contactInfo = [
  {
    icon: MapPin,
    label: "Sede",
    content: "Viale Colli Aminei, 50",
    sub: "80131 Napoli, Italia",
    href: "https://maps.google.com/?q=Viale+Colli+Aminei+50+Napoli",
  },
  {
    icon: Phone,
    label: "Telefono",
    content: "+39 081 1893 9338",
    sub: "Lun – Ven: 9:00 – 18:00",
    href: "tel:+3908118939338",
  },
  {
    icon: Mail,
    label: "Email",
    content: "info@grecart.it",
    sub: "Risposta entro 24h",
    href: "mailto:info@grecartstudio.it",
  },
];

const reasons = [
  "Brand Identity & Logo Design",
  "Siti Web & E-Commerce",
  "Packaging Design",
  "Grafica Pubblicitaria",
  "Social Media Management",
  "Stampa & Produzione",
];

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Errore nell\'invio. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-dark overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent/8 blur-[150px]" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 blur-[120px]" />
        </div>

        <div className="container relative z-10 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-accent" />
              Parliamo Insieme
              <span className="w-8 h-[1px] bg-accent" />
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading mb-6 leading-tight">
              Contattaci
            </h1>
            <p className="text-base sm:text-lg text-light/50 font-light max-w-xl mx-auto leading-relaxed">
              Hai un progetto in mente? Siamo pronti a trasformare le tue idee in esperienze visive straordinarie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 sm:py-24 bg-dark-100 relative" id="contact">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: Form (3 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3"
            >
              <div className="mb-8">
                <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-3">Richiedi Preventivo</p>
                <h2 className="text-white text-3xl sm:text-4xl font-heading mb-3">
                  Raccontaci il tuo <span className="italic font-light text-light/50">progetto</span>
                </h2>
                <p className="text-light/40 font-light text-sm">
                  Compila il form e ti ricontatteremo entro 24 ore con una proposta su misura.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-panel p-10 sm:p-14 rounded-2xl border border-accent/20 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={32} className="text-accent" />
                    </div>
                    <h3 className="text-white text-2xl font-heading mb-3">Messaggio Inviato!</h3>
                    <p className="text-light/50 font-light mb-8">
                      Grazie per averci contattato. Ti risponderemo al più presto.
                    </p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormState({ name: '', email: '', phone: '', service: '', message: '' }); }}
                      className="px-6 py-3 rounded-xl border border-accent/30 text-accent text-xs uppercase tracking-widest font-medium hover:bg-accent hover:text-dark transition-all"
                    >
                      Invia un altro messaggio
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    ref={formRef}
                    key="form"
                    onSubmit={handleSubmit}
                    className="glass-panel p-6 sm:p-8 rounded-2xl border border-light/10"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-light/40 font-medium mb-2">Nome *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Il tuo nome"
                          className="w-full px-4 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-light placeholder:text-light/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-light/40 font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="La tua email"
                          className="w-full px-4 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-light placeholder:text-light/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-light/40 font-medium mb-2">Telefono</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="Il tuo numero"
                          className="w-full px-4 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-light placeholder:text-light/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-light/40 font-medium mb-2">Servizio *</label>
                        <select
                          name="service"
                          required
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-light focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all appearance-none"
                        >
                          <option value="" className="bg-dark">Seleziona un servizio</option>
                          {reasons.map((r) => (
                            <option key={r} value={r} className="bg-dark">{r}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-xs uppercase tracking-widest text-light/40 font-medium mb-2">Messaggio *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Raccontaci il tuo progetto..."
                        className="w-full px-4 py-3.5 bg-dark border border-light/10 rounded-xl text-white text-sm font-light placeholder:text-light/20 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent text-dark text-xs uppercase tracking-widest font-semibold hover:bg-accent-light hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] disabled:opacity-60 transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send size={16} />
                          Invia Messaggio
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right: Info + Map (2 cols) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Cards */}
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href?.startsWith('http') ? '_blank' : undefined}
                  rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-light/10 bg-dark hover:border-accent/30 transition-all duration-300 block"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-widest text-light/30 font-medium mb-1">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.content}</p>
                    <p className="text-light/40 text-xs font-light">{item.sub}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-light/20 group-hover:text-accent mt-1 transition-colors" />
                </motion.a>
              ))}

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-xl overflow-hidden border border-light/10 h-64"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24097.984455729404!2d14.21517!3d40.85177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b0a3c328c13fd%3A0xedd23d0bd709e293!2sNapoli%20NA!5e0!3m2!1sit!2sit!4v1684144200547!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(90%) invert(90%) contrast(85%)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa della sede di Grecart Studio"
                />
                <div className="absolute top-3 right-3 z-10">
                  <a
                    href="https://maps.google.com/?q=Viale+Colli+Aminei+50+Napoli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-dark/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/60 hover:text-accent transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-5 rounded-xl border border-light/10 bg-dark"
              >
                <p className="text-xs uppercase tracking-widest text-light/30 font-medium mb-4">Seguici</p>
                <a
                  href="https://www.instagram.com/grecartstudio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-white/60 hover:text-accent transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">@grecartstudio</p>
                    <p className="text-xs text-light/30 font-light">Seguici per novità</p>
                  </div>
                  <ArrowUpRight size={14} className="ml-auto text-light/20 group-hover:text-accent transition-colors" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-dark relative overflow-hidden border-t border-light/5">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full bg-accent/5 blur-[120px]" />
        </div>
        <div className="container relative z-10 text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs uppercase tracking-widest font-semibold mb-6"
          >
            <Sparkles size={12} />
            Pronto a iniziare?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-3xl sm:text-4xl font-heading mb-4"
          >
            Trasformiamo le tue idee in <span className="italic font-light text-light/50">realtà</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-light/40 font-light max-w-md mx-auto mb-8"
          >
            Ogni grande progetto inizia con una semplice conversazione. Scrivici, ti risponderemo entro 24 ore.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+3908118939338"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/60 text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-dark transition-all duration-300"
            >
              <Phone size={14} />
              Chiamaci ora
            </a>
            <a
              href="mailto:info@grecartstudio.it"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-dark text-xs uppercase tracking-widest font-semibold hover:bg-accent-light hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
            >
              <Mail size={14} />
              Invia una email
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
