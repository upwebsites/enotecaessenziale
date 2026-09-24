import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scissors, 
  Leaf, 
  GraduationCap, 
  Award, 
  Truck, 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Eye, 
  ChevronRight, 
  Droplet,
  Package,
  Layers,
  Presentation,
  Trophy,
  CheckCircle2
} from 'lucide-react';

const MeriniOverlineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'design' | 'espositori' | 'fiere' | 'school'>('design');


  return (
    <section 
      id="merini-overline-spotlight" 
      className="section bg-gradient-to-b from-[#041a17] via-[#05221e] to-[#0a0a0a] relative overflow-hidden border-t border-accent/20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vw] bg-accent/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container relative z-10">
        
        {/* Header Row - Intro & Grecart Influence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs uppercase tracking-widest font-semibold mb-6">
                <Sparkles size={12} />
                Sinergia e Art Direction
              </div>
              
              <h2 className="text-white mb-6">
                Grecart Studio & <br />
                <span className="text-accent italic font-light font-heading">
                  Merini Over Line
                </span>
              </h2>
              
              <p className="text-light/80 text-lg md:text-xl font-light leading-relaxed mb-6">
                Come l'Art Direction e il design di Grecart Studio hanno amplificato l'eredità storica di <strong>Merini Over Line</strong>, trasformando un'eccellenza romana della toelettatura nata nel 1990 in un brand cosmetico d'élite riconosciuto a livello europeo.
              </p>
              
              <p className="text-light/60 font-light leading-relaxed mb-8">
                Il nostro approccio al design non si ferma alla superficie. Per Merini Over Line, abbiamo sviluppato una strategia visiva e tattile integrata, curando ogni touchpoint fisico e digitale: dal packaging dei prodotti cosmetici naturali, agli espositori per i punti vendita, fino ai trofei d'autore per l'accademia e ai materiali per le fiere internazionali.
              </p>
            </motion.div>


          </div>

           {/* Art Direction Badge */}
           <div className="lg:col-span-5 flex items-center justify-center">
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="relative group"
             >
               {/* Decorative Glow */}
               <div className="absolute -inset-4 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
               
               <div className="relative flex flex-col items-center text-center p-8 rounded-3xl border border-accent/30 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm shadow-2xl">
                 <div className="relative mb-6">
                   <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md"></div>
                   <img 
                     src="/LoghiLavori/Logo_Merini.png" 
                     alt="Logo Merini" 
                     className="relative h-20 w-20 object-contain bg-white/10 p-3 rounded-full border border-white/20 shadow-inner"
                   />
                 </div>
                 
                 <div className="space-y-2">
                   <h4 className="text-white text-sm font-semibold uppercase tracking-[0.2em]">Grecart Art Direction</h4>
                   <div className="flex items-center justify-center gap-2">
                     <span className="h-[1px] w-4 bg-accent/50"></span>
                     <p className="text-emerald-400 text-[10px] uppercase tracking-widest font-light font-heading">
                       Brand Identity & Packaging
                     </p>
                     <span className="h-[1px] w-4 bg-accent/50"></span>
                   </div>
                 </div>
                 
                 <div className="mt-6 px-4 py-1 rounded-full border border-accent/40 bg-accent/10 text-accent text-[10px] uppercase tracking-widest font-medium">
                   Success Case
                 </div>
               </div>
             </motion.div>
           </div>

        </div>

        {/* 4 Touchpoints Navigation - What Grecart Crafted */}
        <div className="text-center mb-8">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-2">Progettazione Integrata</p>
          <h3 className="text-white text-2xl md:text-3xl font-heading">Gli Elementi Chiave del Lavoro di Grecart</h3>
          <div className="w-12 h-[1px] bg-accent/50 mx-auto mt-4"></div>
        </div>

        <div className="mb-12 border-b border-white/10 flex flex-wrap justify-center gap-2 md:gap-8">
          <button
            onClick={() => setActiveTab('design')}
            className={`py-4 px-6 text-sm uppercase tracking-widest font-heading font-medium transition-all duration-300 relative ${
              activeTab === 'design' ? 'text-accent' : 'text-light/50 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Package size={16} />
              1. Packaging Cosmesi
            </span>
            {activeTab === 'design' && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" 
              />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('espositori')}
            className={`py-4 px-6 text-sm uppercase tracking-widest font-heading font-medium transition-all duration-300 relative ${
              activeTab === 'espositori' ? 'text-accent' : 'text-light/50 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Layers size={16} />
              2. Espositori Retail
            </span>
            {activeTab === 'espositori' && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" 
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('fiere')}
            className={`py-4 px-6 text-sm uppercase tracking-widest font-heading font-medium transition-all duration-300 relative ${
              activeTab === 'fiere' ? 'text-accent' : 'text-light/50 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Presentation size={16} />
              3. Materiali per Fiere
            </span>
            {activeTab === 'fiere' && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" 
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('school')}
            className={`py-4 px-6 text-sm uppercase tracking-widest font-heading font-medium transition-all duration-300 relative ${
              activeTab === 'school' ? 'text-accent' : 'text-light/50 hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Trophy size={16} />
              4. Scuola & Trofei
            </span>
            {activeTab === 'school' && (
              <motion.div 
                layoutId="activeTabIndicator" 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" 
              />
            )}
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mb-20 min-h-[350px]">
          <AnimatePresence mode="wait">
            {activeTab === 'design' && (
              <motion.div
                key="design"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Intro Card */}
                <div className="md:col-span-3 mb-2">
                  <h4 className="text-2xl font-heading text-white mb-2">Il Ridisegno del Packaging: Alta Cosmesi Naturale</h4>
                  <p className="text-light/60 font-light leading-relaxed">
                    Abbiamo studiato un packaging dall'impronta organica, raffinata e scientifica. Rimuovendo i vecchi elementi grafici saturi, abbiamo guidato Over Line verso un'estetica che valorizza gli ingredienti preziosi e la natura Made in Italy dei prodotti.
                  </p>
                </div>
                
                {/* Point 1 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Leaf size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Minimalismo & Botanica</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    L'uso di tonalità cromatiche ispirate alla terra, etichette pulite e dettagli dorati comunica immediatamente l'assenza di parabeni, coloranti e SLS, enfatizzando l'alta concentrazione di olio di argan, argilla termale e germe di grano.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Droplet size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Ergonomia Professional</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Abbiamo selezionato flaconi e dosatori adatti all'uso intensivo in salone. L'ergonomia studiata protegge la praticità d'uso per il toelettatore, garantendo un dosaggio perfetto senza sprechi durante il lavaggio.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <ShieldCheck size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Coerenza di Linea</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Dalla linea all'Ozono e trattamenti ristrutturanti Pro Active 46 fino alle lozioni occhi (Neo Eye Clean), abbiamo introdotto un codice colore che rende le referenze facilmente distinguibili sugli scaffali dei professionisti.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'espositori' && (
              <motion.div
                key="espositori"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Intro Card */}
                <div className="md:col-span-3 mb-2">
                  <h4 className="text-2xl font-heading text-white mb-2">Espositori d'Autore per Saloni ed Area Retail</h4>
                  <p className="text-light/60 font-light leading-relaxed">
                    Per valorizzare la vendita diretta all'interno di <em>Toelettatura Moderna</em> in Via Gregorio XI a Roma e nei saloni partner, abbiamo ideato strutture fisiche espositive scultoree e funzionali.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Layers size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Espositori da Terra</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Realizzati con materiali ecosostenibili come legno chiaro e metallo brunito, questi espositori richiamano la naturalezza delle formulazioni Over Line e guidano visivamente l'acquisto d'impulso da parte dei clienti del salone.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Sparkles size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Corner "Toelettatura Moderna"</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Il ridisegno dell'area retail della storica struttura di 200 mq a Roma ha convertito una zona di attesa in un'esperienza d'acquisto lussuosa, incrementando le vendite della linea consumer del +45% in loco.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Award size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Materiale Point-of-Sale (POS)</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Brochure pieghevoli, cartelli da banco informativi e descrizioni degli ingredienti biologici progettati da Grecart per educare i proprietari di animali al rispetto del manto e alla cosmesi naturale.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'fiere' && (
              <motion.div
                key="fiere"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {/* Intro Card */}
                <div className="md:col-span-3 mb-2">
                  <h4 className="text-2xl font-heading text-white mb-2">Allestimenti e Materiale Pubblicitario per Grandi Eventi</h4>
                  <p className="text-light/60 font-light leading-relaxed">
                    Le fiere internazionali e nazionali del settore pet sono arene competitive. Grecart Studio ha ideato l'intera immagine coordinata per la presenza di Merini Over Line nei più prestigiosi eventi europei.
                  </p>
                </div>

                {/* Point 1 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Presentation size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Allestimento Stand Fieristici</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Progettazione dell'architettura dello stand fieristico: layout minimali con macro-grafiche retroilluminate, zone dimostrative pratiche e aree lounge eleganti per la chiusura di contratti B2B.
                  </p>
                </div>

                {/* Point 2 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <BookOpen size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Cataloghi Editoriali di Pregio</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Creazione del catalogo completo Merini Over Line (Linea Consumer, Professional Shampoo, Altri Prodotti). Cataloghi fisici impaginati con carta di pregio e controparti digitali sfogliabili ( DearFlip) per agenti di commercio.
                  </p>
                </div>

                {/* Point 3 */}
                <div className="glass-panel p-8 border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <Scissors size={20} />
                  </div>
                  <h5 className="text-lg font-heading text-white mb-3">Materiale per Forbici & Accessori</h5>
                  <p className="text-light/50 text-sm font-light leading-relaxed">
                    Packaging protettivi e libretti di manutenzione per la linea di forbici professionali e accessori tecnologici all'ozono, confermando l'autorità tecnica di Merini in ogni piccolo dettaglio.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'school' && (
              <motion.div
                key="school"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* Intro Column */}
                <div className="lg:col-span-4">
                  <div className="sticky top-24">
                    <h4 className="text-2xl font-heading text-white mb-4">L'Accademia Over Line School e i Trofei d'Autore</h4>
                    <p className="text-light/60 font-light leading-relaxed mb-6">
                      La scuola guidata da <strong>Nelly Oliva</strong> è il fiore all'occhiello del brand. Grecart ha sviluppato l'intera brand identity dell'accademia, progettando i diplomi professionali e i prestigiosi <strong>trofei personalizzati</strong> consegnati durante i campionati.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex gap-3 items-start">
                        <Trophy size={16} className="text-accent shrink-0 mt-1" />
                        <p className="text-xs text-light/75 font-light">
                          <strong>Trofei Esclusivi</strong>: Progettati come sculture minimaliste che i diplomati e i campioni esibiscono con orgoglio nei propri saloni in tutta Europa.
                        </p>
                      </div>
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-1" />
                        <p className="text-xs text-light/75 font-light">
                          <strong>Identità Accademica</strong>: Materiale didattico coordinato, manuali teorico-pratici illustrati e cartelline d'iscrizione che trasmettono prestigio e rigore istituzionale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table Curriculum Column */}
                <div className="lg:col-span-8">
                  <div className="glass-panel p-6 border-white/5 overflow-hidden">
                    <div className="mb-4">
                      <h5 className="text-lg font-heading text-white mb-1">Il Percorso Formativo curato da Over Line</h5>
                      <p className="text-xs text-light/40 font-light">Il corso professionale di 3 mesi a Roma di cui Grecart ha supportato il posizionamento strategico.</p>
                    </div>
                    
                    {/* Simplified list of competencies for school */}
                    <div className="space-y-3">
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                        <span className="text-xs text-accent uppercase font-bold tracking-wider">Fase Igiene & Preparazione</span>
                        <p className="text-sm text-light/70 font-light mt-1">Lavaggio, asciugatura, stiratura e snodatura del pelo in base alla razza.</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                        <span className="text-xs text-accent uppercase font-bold tracking-wider">Fase Tecnica Forbici & Tosatura</span>
                        <p className="text-sm text-light/70 font-light mt-1">Impostazione e uso corretto delle forbici, tosatura a macchinetta.</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                        <span className="text-xs text-accent uppercase font-bold tracking-wider">Fase Trattamenti Avanzati</span>
                        <p className="text-sm text-light/70 font-light mt-1">Tecniche di Stripping, Trimming, sfoltitura e colorazione del pelo.</p>
                      </div>
                      <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                        <span className="text-xs text-accent uppercase font-bold tracking-wider">Fase Standard & Show / Business</span>
                        <p className="text-sm text-light/70 font-light mt-1">Preparazione per standard espositivi e modulo di business management per l'apertura del negozio.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link 
            to="/tutti-i-lavori/merini-overline" 
            className="btn btn-primary text-xs px-10 py-5 tracking-widest flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            Esplora il Caso Studio Completo
            <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            to="/tutti-i-lavori/merini-overline" 
            className="btn btn-outline text-xs px-10 py-5 tracking-widest flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            <Eye size={16} />
            Sfoglia i Cataloghi in DearFlip
          </Link>
        </div>

      </div>
    </section>
  );
};

export default MeriniOverlineSection;
