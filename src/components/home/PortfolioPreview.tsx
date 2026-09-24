import React from 'react';
import { Link } from 'react-router-dom';
import { allProjects } from '../../data/projectsData';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, LayoutGrid } from 'lucide-react';
import ProjectCard from '../portfolio/ProjectCard';

const MotionLink = motion(Link);

const PortfolioPreview: React.FC = () => {
  // Use first 3 projects for the preview
  const previewProjects = allProjects.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-white/10">
      {/* Blue Gradient Background - Sophisticated and professional */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-400/10 to-cyan-400/10 pointer-events-none" />
      
      {/* Animated Blue Gradient Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-500 via-blue-700 to-indigo-800 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-800 via-blue-700 to-blue-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 via-blue-400/20 to-cyan-400/20 border border-white/10 text-white text-xs uppercase tracking-widest font-semibold mb-8"
          >
            <Sparkles size={12} className="text-blue-400" />
            Selected Works
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-6xl font-heading mb-6 leading-tight"
          >
            Esplora il nostro <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent font-bold italic">
              Portfolio
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl"
          >
            Dalla concezione creativa alla realizzazione finale. 
            Scopri come trasformiamo le idee in realtà visive d'impatto attraverso i nostri progetti più iconici.
          </motion.p>

          {/* Primary CTA - Visit Portfolio */}
          <MotionLink 
            to="/tutti-i-lavori" 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 flex items-center gap-3"
          >
            <LayoutGrid size={20} />
            <span>Vedi tutti i progetti</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </MotionLink>
        </div>

        {/* Projects Grid - Using ProjectCard style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} size="1x1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;