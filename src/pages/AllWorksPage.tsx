import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projectsData';
import { motion } from 'framer-motion';
import ProjectCard from '../components/portfolio/ProjectCard';

const AllWorksPage: React.FC = () => {
  const [cols, setCols] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setCols(2);
      else if (width < 1024) setCols(4);
      else setCols(6);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getProjectSize = (index: number, total: number) => {
    const project = allProjects[index];
    if (project.id === 'villa-belvedere' || project.id === 'il-negozietto') return '2x1';

    let size: '1x1' | '2x1' | '2x2';
    if (index % 4 === 0) size = '2x2';
    else if (index % 3 === 0) size = '2x1';
    else size = '1x1';

    if (index === total - 1) {
      const currentArea = allProjects.reduce((acc, p, i) => {
        if (i === index) return acc;
        if (p.id === 'villa-belvedere' || p.id === 'il-negozietto') return acc + 2;
        const s = (i % 4 === 0) ? 4 : (i % 3 === 0) ? 2 : 1;
        return acc + s;
      }, 0);

      const remainder = currentArea % cols;
      const needed = (cols - remainder) % cols;

      if (needed === 1) return '1x1';
      if (needed === 2) return '2x1';
      if (needed === 4) return '2x2';
      return size;
    }

    return size;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-accent/5 rounded-full blur-[120px] mix-blend-screen z-0"></div>
        <div className="container relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6"
          >
            L'Eccellenza Creativa
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Tutti i <span className="italic font-light text-light/70">Lavori</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Esplora il nostro portfolio completo: dal brand design all'editoria, ogni progetto è un capolavoro di comunicazione visiva.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="section bg-dark-100">
        <div className="container">
          <div 
            className="grid gap-2" 
            style={{ 
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridAutoFlow: 'dense' 
            }}
          >
            {allProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                size={getProjectSize(index, allProjects.length)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20 z-0"></div>
        <div className="container text-center relative z-10 glass-panel p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading mb-6 text-white">Pronto a trasformare la tua <span className="italic font-light text-light/70">visione</span>?</h2>
          <p className="text-light/60 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Sei stato ispirato dai nostri lavori? Creiamo qualcosa di straordinario anche per il tuo brand.
          </p>
          <Link to="/contatti" className="btn btn-primary px-10">
            Contattaci Ora
          </Link>
        </div>
      </section>
    </>
  );
};

export default AllWorksPage;
