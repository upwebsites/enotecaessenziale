import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f7f5f2] border-t border-[#5a4a3a]/10">
      <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="enotecaessenziale" className="h-[68px] w-auto" />
        </Link>
        <p className="text-[#5a4a3a]/50 text-xs tracking-[0.15em] uppercase font-light">
          Vini che parlano al cuore
        </p>
        <p className="text-[#5a4a3a]/40 text-[11px] tracking-wider">
          &copy; {new Date().getFullYear()} Enoteca Essenziale
        </p>
      </div>
    </footer>
  );
};

export default Footer;
