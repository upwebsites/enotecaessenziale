import React from "react";
import { Link } from "react-router-dom";

interface PopupLatestWorksProps {
  open: boolean;
  onClose: () => void;
}

const PopupLatestWorks: React.FC<PopupLatestWorksProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay dark + blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl px-8 py-10 max-w-md w-full z-10 text-center animate-fade-in">
        {/* Close */}
        <button
          className="absolute top-4 right-4 text-neutral-400 hover:text-primary-500 text-xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Chiudi pop up"
        >
          ×
        </button>
        <h2 className="text-primary-700 text-2xl font-extrabold mb-3 tracking-tight">Scopri i nostri ultimi lavori!</h2>
        <p className="text-neutral-700 mb-6 text-lg">Sfoglia il nostro portfolio per vedere i progetti creativi più recenti e lasciati ispirare da quello che possiamo realizzare per te.</p>
        <Link
          to="/tutti-i-lavori"
          className="inline-block rounded-full px-6 py-3 bg-primary-500 text-white font-semibold text-lg shadow-lg hover:bg-primary-600 transition-colors duration-200"
          onClick={onClose}
        >
          Vai al portfolio
        </Link>
      </div>
    </div>
  );
};

export default PopupLatestWorks;
