import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/portfolio/ProjectCard';
import { allProjects } from '../data/projectsData';
import CtaSection from '../components/home/CtaSection';
import { motion } from 'framer-motion';

const PortfolioPage: React.FC = () => {
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

  const getProjectSize = (project: any, index: number, total: number) => {
    // Force Villa Belvedere and Il Negozietto to be large to fill space
    if (project.id === 'villa-belvedere' || project.id === 'il-negozietto') return '3x1';

    // Base asymmetric pattern
    let size: '1x1' | '2x1' | '2x2';
    if (index % 4 === 0) size = '2x2';
    else if (index % 3 === 0) size = '2x1';
    else size = '1x1';

    // Correction logic for the last element to ensure "Zero-Hole"
    if (index === total - 1) {
       const currentArea = allProjects.reduce((acc, p, i) => {
           if (i === index) return acc;
           if (p.id === 'villa-belvedere' || p.id === 'il-negozietto') return acc + 3;
           const s = (i % 4 === 0) ? 4 : (i % 3 === 0) ? 2 : 1;
        return acc + s;
      }, 0);

      const remainder = currentArea % cols;
      const needed = (cols - remainder) % cols;

      if (needed === 1) return '1x1';
      if (needed === 2) return '2x1';
      if (needed === 4) return '2x2';
      
      // Fallback to maintain pattern if needed is not a standard size
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
            Lavori Selezionati
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
          >
            Il nostro <span className="italic font-light text-light/70">portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-light/60 font-light text-lg max-w-2xl mx-auto"
          >
            Esplora i progetti che abbiamo realizzato e scopri come abbiamo aiutato i nostri clienti a distinguersi nel loro mercato.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-dark-100 relative">
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
                size={getProjectSize(project, index, allProjects.length)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  );
};

export default PortfolioPage;
