import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../data/projectsData';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
  size?: '1x1' | '2x1' | '2x2' | '3x1';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, size = '1x1' }) => {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isHovering && project.imageUrls && project.imageUrls.length > 0) {
      interval = window.setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrls.length);
      }, 3000);
    }

    return () => {
      if (interval) window.clearInterval(interval);
    };
  }, [isHovering, project.imageUrls]);

  useEffect(() => {
    if (isHovering && project.imageUrls && project.imageUrls.length > 0) {
      const nextIndex = (currentImageIndex + 1) % project.imageUrls.length;
      const nextImage = new Image();
      nextImage.src = project.imageUrls[nextIndex];
    }
  }, [currentImageIndex, isHovering, project.imageUrls]);

  const displayImage = isHovering && project.imageUrls && project.imageUrls.length > 0
    ? project.imageUrls[currentImageIndex]
    : project.thumbUrl;

  const sizeClasses = {
    '1x1': 'col-span-1 row-span-1',
    '2x1': 'col-span-2 row-span-1',
    '2x2': 'col-span-2 row-span-2',
    '3x1': 'col-span-3 row-span-1',
  };

  const ratioClasses = {
    '1x1': 'aspect-square',
    '2x1': 'aspect-[2/1]',
    '2x2': 'aspect-square',
    '3x1': 'aspect-[3/1]',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`group relative ${sizeClasses[size]} h-full`}
    >
      <motion.div
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="h-full w-full"
      >
        <Link
          to={`/tutti-i-lavori/${project.id}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => {
            setIsHovering(false);
            setCurrentImageIndex(0);
          }}
           className={`block relative overflow-hidden bg-white ring-1 ring-inset ring-light/10 shadow-glass h-full w-full rounded-none group flex flex-col justify-end transition-all duration-300 group-hover:ring-0 group-hover:bg-dark-100 ${ratioClasses[size]}`}
        >
    <div className="absolute inset-0 flex items-center justify-center bg-white p-6">
              <AnimatePresence mode="wait">
                {!imageError ? (
                  <motion.img
                    key={displayImage}
                    src={displayImage}
                    alt={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <motion.div 
                    key="error-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="max-w-full max-h-full bg-dark-100 flex items-center justify-center"
                  >
                   <span className="text-light/50 text-sm font-light tracking-widest uppercase">{project.title}</span>
                 </motion.div>
               )}
             </AnimatePresence>
           </div>

        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;