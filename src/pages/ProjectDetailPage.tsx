import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { allProjects } from '../data/projectsData';
import DearFlipViewer from '../components/portfolio/DearFlipViewer';
import { motion } from 'framer-motion';

const DEARFLIP_LICENSE_KEY = 'sk_vzsTC&B*#5mKQ6Gc*lV+CEKXe:VJ1';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = allProjects.find(p => p.id === projectId);

  const [selectedPDF, setSelectedPDF] = useState<{url: string, title: string} | null>(null);

  if (!project) {
    return (
      <div className="section min-h-screen bg-dark flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl font-heading text-white mb-6">Progetto non trovato</h2>
        <p className="text-light/60 mb-8 max-w-md">
          Il progetto che stai cercando non esiste o è stato rimosso.
        </p>
        <Link to="/tutti-i-lavori" className="btn btn-primary px-8">
          Torna al portfolio
        </Link>
      </div>
    );
  }

  // Find next and previous projects
  const currentIndex = allProjects.findIndex(p => p.id === projectId);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  // Titoli personalizzati per i PDF basati sul progetto
  const getPdfTitle = (index: number) => {
    if (project.id === "le-delizie-del-sud") {
      const titles = ["Canvass", "Progetto Pulito", "PetFood", "Supermercati"];
      return titles[index] || `PDF ${index + 1}`;
    }
    if (project.id === "merini-overline") {
      const titles = ["Linea Consumer", "Linea Professional Altri Prodotti", "Linea Professional Shampoo", "Mockup Overline Academy"];
      return titles[index] || `PDF ${index + 1}`;
    }
    return `PDF ${index + 1}`;
  };

  const handlePDFClick = (url: string, title: string) => {
    setSelectedPDF({ url, title });
  };

  const closePDF = () => {
    setSelectedPDF(null);
  };

  return (
    <div className="bg-dark min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] mix-blend-screen z-0"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <Link to="/tutti-i-lavori" className="inline-flex items-center text-light/50 hover:text-accent transition-colors uppercase tracking-widest text-xs font-semibold">
              <ArrowLeft size={14} className="mr-3" />
              Torna ai lavori
            </Link>
          </motion.div>
          <div className="max-w-4xl">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
            >
              Case Study
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-heading mb-8 leading-tight"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-light/60 font-light text-xl leading-relaxed max-w-2xl"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Project Gallery / PDF DearFlip */}
      <section className="py-20 bg-dark-100 border-y border-light/5">
        <div className="container">
          {/* Visualizza prima i PDF */}
          {project.pdfUrls && project.pdfUrls.length > 0 ? (
            <div className="mb-20">
              <h3 className="text-white text-2xl font-heading mb-10 text-center">Esplora i Documenti</h3>
              <div className="flex justify-center">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                  {project.pdfUrls.map((url, i) => (
                    <motion.div 
                      key={url}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center group cursor-pointer"
                      onClick={() => handlePDFClick(url, getPdfTitle(i))}
                    >
                      <div className="relative w-[180px] h-[240px] bg-dark-200 border border-light/5 shadow-glass rounded-sm overflow-hidden mb-5 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] flex items-center justify-center p-4">
                        <img
                          src={project.thumbUrl}
                          alt={getPdfTitle(i)}
                          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                          <div className="bg-accent/20 border border-accent/50 text-accent rounded-full p-4 transform scale-50 group-hover:scale-100 transition-all duration-300">
                            <Eye size={24} />
                          </div>
                        </div>
                      </div>
                      <h4 className="text-sm font-medium text-light/80 uppercase tracking-wider group-hover:text-accent transition-colors text-center w-[180px]">
                        {getPdfTitle(i)}
                      </h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}

          {/* Single PDF View */}
          {!project.pdfUrls && project.pdfUrl && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mb-20"
            >
              <button
                onClick={() => handlePDFClick(project.pdfUrl as string, project.title)}
                className="glass-panel p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 w-full max-w-4xl text-left group hover:border-accent/30 transition-colors duration-500"
              >
                <div className="w-24 h-24 shrink-0 bg-dark-200 rounded-full border border-light/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors duration-500">
                  <Eye strokeWidth={1.5} className="w-10 h-10 text-light/50 group-hover:text-accent transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading text-white mb-3">Sfoglia il Progetto</h3>
                  <p className="text-light/50 font-light leading-relaxed">
                    Clicca qui per aprire e leggere il materiale in formato interattivo fullscreen. Scopri ogni dettaglio della nostra impaginazione.
                  </p>
                </div>
              </button>
            </motion.div>
          )}

          {/* Visualizza sempre le immagini se presenti */}
          {project.imageUrls && project.imageUrls.length > 0 && (
            <div className="mt-20">
              <h3 className="text-white text-2xl font-heading mb-10 text-center">Galleria Visuale</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {project.imageUrls.map((image, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="overflow-hidden rounded-sm bg-dark-200 border border-light/5"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Immagine ${index + 1}`}
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <div className="fixed inset-0 bg-dark/95 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-dark-100 rounded-xl border border-light/10 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-light/10">
              <h3 className="text-xl font-heading font-medium text-white tracking-wide">{selectedPDF.title}</h3>
              <button
                onClick={closePDF}
                className="text-light/50 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-auto flex-grow bg-dark-200">
               {/* @ts-ignore - Let DearFlip handle its own types if needed */}
              <DearFlipViewer
                pdfUrl={selectedPDF.url}
                licenseKey={DEARFLIP_LICENSE_KEY}
                showIcons={true}
              />
            </div>
          </div>
        </div>
      )}

      {/* Next/Prev Navigation */}
      <section className="py-16 bg-dark border-t border-light/5">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto gap-8">
            <Link
              to={`/tutti-i-lavori/${prevProject.id}`}
              className="flex items-center text-light/60 hover:text-accent transition-colors group w-full md:w-auto"
            >
              <div className="w-12 h-12 rounded-full border border-light/10 flex items-center justify-center mr-4 group-hover:border-accent/50 transition-colors">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest text-light/40 mb-1">Precedente</span>
                <span className="font-heading text-lg text-white group-hover:text-accent transition-colors">{prevProject.title}</span>
              </div>
            </Link>
            
            <div className="hidden md:block w-[1px] h-12 bg-light/10"></div>
            
            <Link
              to={`/tutti-i-lavori/${nextProject.id}`}
              className="flex items-center text-light/60 hover:text-accent transition-colors group text-right w-full md:w-auto justify-end"
            >
              <div className="text-right">
                <span className="block text-xs uppercase tracking-widest text-light/40 mb-1">Successivo</span>
                <span className="font-heading text-lg text-white group-hover:text-accent transition-colors">{nextProject.title}</span>
              </div>
              <div className="w-12 h-12 rounded-full border border-light/10 flex items-center justify-center ml-4 group-hover:border-accent/50 transition-colors">
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA overlay block */}
      <section className="py-32 bg-dark-100 relative overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark to-transparent z-0"></div>
        <div className="container text-center relative z-10 glass-panel p-16 max-w-4xl mx-auto border-accent/10">
          <h2 className="text-4xl md:text-5xl font-heading mb-6 text-white">Il tuo progetto <span className="italic font-light text-light/70">potrebbe</span> essere qui</h2>
          <p className="text-xl text-light/50 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Trasformiamo idee in esperienze visive straordinarie. Inizia oggi.
          </p>
          <Link to="/contatti" className="btn btn-primary px-12 py-4">
            Parlaci del tuo brand
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;