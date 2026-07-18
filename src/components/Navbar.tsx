import React, { useState } from 'react';
import { Menu, X, Phone, Clock, Mail, MapPin } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'BERANDA' },
    { id: 'about', label: 'TENTANG' },
    { id: 'teachers', label: 'GURU & TENDIK' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar for Phone, Hours, and Motto */}
      <div className="hidden lg:flex w-full bg-brand-navy-light text-white text-xs py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-white" />
              (0924) 2621113
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-white" />
              07.00 - 17.40 WIT
            </span>
          </div>
          <div className="flex items-center">
            <span>Mencetak Generasi Cerdas, Berkarakter, dan Berprestasi</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 flex items-center justify-center shrink-0">
              <img 
                src="/assets/logo.png" 
                alt="Logo SMAN 1" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-[13px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">SMA Negeri 1</span>
              <span className="text-[22px] font-black tracking-tight text-brand-navy uppercase">Halmahera Utara</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-brand-navy">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 transition-colors duration-200 cursor-pointer border-b-2 uppercase tracking-wide ${
                    isActive ? 'border-brand-red text-brand-red' : 'border-transparent hover:text-brand-red'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-brand-red text-white px-6 py-2.5 font-bold hover:bg-brand-red-hover transition-colors shadow-md uppercase tracking-wider text-sm cursor-pointer ml-4"
            >
              HUBUNGI KAMI
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-navy hover:text-brand-red cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                    isActive ? 'text-brand-red bg-red-50' : 'text-brand-navy hover:text-brand-red hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="px-4 mt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-brand-red text-white py-3 font-bold text-sm uppercase tracking-wider hover:bg-brand-red-hover"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
