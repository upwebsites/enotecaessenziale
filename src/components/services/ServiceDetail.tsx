import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
  reverse?: boolean;
  index?: number;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  description,
  benefits,
  imageUrl,
  reverse = false,
  index = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="py-20 border-b border-light/5 last:border-b-0"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
        {/* Text block */}
        <div className={reverse ? 'order-1 lg:order-2' : 'order-1'}>
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">
            0{index + 1}
          </p>
          <h3 className="text-white text-4xl font-heading mb-6 leading-snug">{title}</h3>
          <p className="text-light/60 font-light text-lg leading-relaxed mb-10">{description}</p>
          
          <ul className="space-y-4 mb-12">
            {benefits.map((benefit, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Check size={11} className="text-accent" />
                </div>
                <span className="text-light/70 font-light leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Link to="/contatti" className="btn btn-outline">
            Richiedi un preventivo
          </Link>
        </div>
        
        {/* Image block */}
        <div className={`${reverse ? 'order-2 lg:order-1' : 'order-2'} relative`}>
          <div className="relative overflow-hidden rounded-sm bg-dark-200 border border-light/5 aspect-[4/3]">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover opacity-70 hover:opacity-90 transition-opacity duration-700 hover:scale-105 transition-transform duration-1000"
            />
            {/* Subtle gold corner accent */}
            <div className="absolute top-0 left-0 w-16 h-[2px] bg-accent"></div>
            <div className="absolute top-0 left-0 w-[2px] h-16 bg-accent"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;