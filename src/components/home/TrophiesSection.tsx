import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Sparkles } from 'lucide-react';

const TrophiesSection: React.FC = () => {
  return (
    <>
      <section className="section relative overflow-hidden bg-[url('/images/trofei.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-slate-950/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-transparent to-slate-950/95 pointer-events-none" />
      <div className="absolute left-1/4 top-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-10 h-[320px] w-[320px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none" />

      <div className="container relative z-10 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 p-10 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.9)] backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-slate-950/50 opacity-90 pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-slate-950/90 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 space-y-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent font-semibold">
                <Star size={12} />
                Eccellenza e Competizione
              </div>

              <div className="space-y-6">
                <h2 className="text-white text-4xl md:text-5xl font-heading leading-tight">
                  L'Arte della Vittoria: <br />
                  <span className="bg-gradient-to-r from-amber-300 via-white to-accent bg-clip-text text-transparent italic font-light">
                    Trofei d'Autore
                  </span>
                </h2>

                <p className="text-slate-200/90 max-w-3xl text-lg leading-relaxed">
                  Nel mondo della competizione, il trofeo non è solo un premio, ma il simbolo tangibile di un traguardo raggiunto. Per l'Accademia Over Line, abbiamo ridefinito il concetto di "premio", trasformando un oggetto celebrativo in un'opera di design scultoreo.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/75 p-6 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-slate-950/80 opacity-80 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-4">
                      <Award size={20} />
                    </div>
                    <h4 className="text-white font-heading mb-2">Design Scultoreo</h4>
                    <p className="text-slate-300/80 text-sm font-light">
                      Abbiamo eliminato gli schemi tradizionali per creare forme minimaliste e moderne, rendendo ogni trofeo un oggetto d'arredo che i campioni esibiscono con orgoglio nei propri saloni.
                    </p>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/75 p-6 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-950/20 via-transparent to-accent/15 opacity-80 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center mb-4">
                      <Sparkles size={20} />
                    </div>
                    <h4 className="text-white font-heading mb-2">Esperienza Unica</h4>
                    <p className="text-slate-300/80 text-sm font-light">
                      Grecart ha permesso di elevare l'esperienza della competizione, trasformando il momento della premiazione in un evento di alto prestigio, dove l'estetica del premio riflette l'eccellenza della tecnica.
                    </p>
                  </div>
                </div>
              </div>

              <p className="relative max-w-3xl border-l-2 border-accent/40 pl-6 text-sm italic text-slate-300/80">
                "La sfida non è solo vincere, ma lasciare un segno. Abbiamo progettato un'identità visiva che celebra il talento e l'impegno, fondendo l'estetica del lusso con il rigore della disciplina professionale."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-10 bg-[#050505] pointer-events-none z-20" />
    </section>

    <section className="relative overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70 pointer-events-none" />
      <div className="relative py-16 flex items-center justify-center">
        <div className="w-full max-w-5xl px-6">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/85 p-6 shadow-[0_40px_150px_-50px_rgba(15,23,42,0.9)]">
            <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.35),transparent_45%)] opacity-80 pointer-events-none" />
            <div className="absolute -right-12 -bottom-12 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.25),transparent_45%)] opacity-70 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-slate-950/20 pointer-events-none" />
            <div className="absolute left-10 top-10 h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-2xl opacity-80 pointer-events-none" />
            <div className="absolute right-10 bottom-10 h-24 w-24 rounded-full border border-cyan-300/20 bg-cyan-400/10 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative z-10">
              <div className="absolute top-6 right-6 rounded-3xl border border-white/10 bg-black/30 p-4 text-right text-sm text-slate-200/80 backdrop-blur-sm">
                <p className="font-semibold text-white">Nuovo concept</p>
                <p className="text-xs text-slate-300/70">Volume amplificato</p>
              </div>
              <img src="/images/trofei.png" alt="Trofei" className="w-full h-[520px] sm:h-[620px] lg:h-[760px] object-cover rounded-[28px] border border-white/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.6)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  </>
  );
};

export default TrophiesSection;
