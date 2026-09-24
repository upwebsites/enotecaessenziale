import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  imageUrl: string;
  date: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Marco Bianchi",
      company: "NapoliFood",
      position: "Direttore Marketing",
      content: "Grecart Studio ha reinventato completamente la nostra identità visiva. Dall'aggiornamento del logo alla creazione del packaging, hanno interpretato perfettamente la nostra visione. Un vero tocco di classe.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Marzo 2026"
    },
    {
      id: 2,
      name: "Laura Rossi",
      company: "Boutique Eleganza",
      position: "Proprietaria",
      content: "Design elegante, facile da navigare e perfettamente in linea con l'estetica del nostro luxury brand. Le conversioni sono aumentate in modo esponenziale grazie alla loro attenzione al dettaglio.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Aprile 2026"
    },
    {
      id: 3,
      name: "Alessandro Marino",
      company: "FitnessPro",
      position: "Founder",
      content: "Il packaging è passato da anonimo a premium grazie a Grecart Studio. Ogni prodotto ora racconta una storia e i clienti apprezzano la qualità visiva impressionante.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1600",
      date: "Febbraio 2026"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  return (
    <section className="section bg-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Testimonials</p>
            <h2 className="text-white mb-6">Partnership di <span className="text-light/50 font-light italic">Valore</span></h2>
            <div className="w-12 h-[1px] bg-accent mx-auto"></div>
          </motion.div>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="glass-panel p-10 md:p-16 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
            <Quote 
              className="absolute top-4 left-4 text-white opacity-5 w-40 h-40 rotate-180 pointer-events-none" 
              strokeWidth={1}
            />
            
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="relative z-10"
              >
                <div className="flex items-center gap-1 mb-8">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-accent fill-accent" />
                  ))}
                  {[...Array(5 - testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i + testimonials[activeIndex].rating} size={18} className="text-light/20" />
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-light leading-relaxed text-white mb-10">
                  {testimonials[activeIndex].content}
                </h3>
                
                <div className="flex items-center border-t border-light/10 pt-6">
                  <img 
                    src={testimonials[activeIndex].imageUrl} 
                    alt={testimonials[activeIndex].name} 
                    className="w-16 h-16 rounded-full object-cover mr-5 border border-light/20"
                  />
                  <div>
                    <p className="font-medium text-white tracking-wide text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-white/50 text-sm font-light uppercase tracking-wider mt-1">
                      {testimonials[activeIndex].position}, {testimonials[activeIndex].company} <span className="mx-2 opacity-50">•</span> {testimonials[activeIndex].date}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* External Controls */}
          <div className="flex justify-end items-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-4 rounded-full border border-light/20 text-white hover:bg-white hover:text-dark transition-all duration-300 focus:outline-none"
              aria-label="Testimonianza precedente"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-4 rounded-full border border-light/20 text-white hover:bg-white hover:text-dark transition-all duration-300 focus:outline-none"
              aria-label="Testimonianza successiva"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;