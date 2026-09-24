import React from 'react';

const Partners: React.FC = () => {
  // Normally you'd use actual client logos
  // Here we're using generic placeholders for demonstration
  const partners = [
    { name: "Napoli Food", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=NapoliFood" },
    { name: "TechNova", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=TechNova" },
    { name: "Boutique Eleganza", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=Eleganza" },
    { name: "CaféMio", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=CaféMio" },
    { name: "Sport Club", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=SportClub" },
    { name: "MediaGroup", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=MediaGroup" },
    { name: "Fashion House", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=FashionHouse" },
    { name: "GreenLife", logo: "https://via.placeholder.com/150x60/e8e8e8/145266?text=GreenLife" }
  ];

  return (
    <div className="py-12 bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;