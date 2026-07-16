import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, GraduationCap, Phone, Clock, Home, Info, Users, Trophy, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'about', label: 'Tentang Kami', icon: Info },
    { id: 'teachers', label: 'Guru & Tendik', icon: Users },
    { id: 'achievements', label: 'Prestasi', icon: Trophy },
    { id: 'contact', label: 'Kontak', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      {/* Top Bar for Phone and Hours */}
      <div className="hidden sm:block w-full bg-blue-600 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={12} />
              {SCHOOL_INFO.contact.phone}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {SCHOOL_INFO.contact.hours}
            </span>
          </div>
          <div className="text-[11px] font-medium tracking-wide">
            Mencetak Generasi Cerdas, Berkarakter, dan Berprestasi
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            id="school-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/logo.png" 
                alt="Logo SMAN 1" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"><svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg></div>';
                }}
              />
            </div>
            <div>
              <span className="block text-[11px] font-extrabold tracking-widest text-slate-400 uppercase leading-none">SMA NEGERI 1</span>
              <span className="block text-[15px] font-black tracking-tight text-blue-600 uppercase leading-none mt-1">HALMAHERA UTARA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-btn-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 transition-colors duration-200 cursor-pointer ${
                    isActive ? 'text-blue-600' : 'text-slate-500 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
            <button
              id="cta-ppdb-desktop"
              onClick={() => handleNavClick('contact')}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Hubungi Kami
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(true)}
              className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blurred Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[50] bg-slate-900/60 backdrop-blur-md md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.div
              id="mobile-nav-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[60] h-screen w-[300px] bg-white/95 backdrop-blur-2xl border-l border-white/40 shadow-2xl md:hidden overflow-y-auto flex flex-col"
            >
              <div className="flex justify-between items-center p-5 h-20 border-b border-slate-200/50 bg-white/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0">
                    <img src="/assets/logo.png" alt="Logo SMAN 1" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="block text-[9px] font-extrabold tracking-widest text-slate-400 uppercase leading-none">SMA NEGERI 1</span>
                    <span className="block text-[13px] font-black tracking-tight text-blue-600 uppercase leading-none mt-0.5">HALMAHERA UTARA</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-white rounded-full transition-all shadow-sm border border-slate-200 cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 pt-6 pb-6 space-y-3 flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Menu Utama</p>
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.id;
                  const Icon = item.icon;
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                      key={item.id}
                      id={`mobile-nav-btn-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-xl text-[15px] font-semibold transition-all shadow-sm ${
                        isActive
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-600/30'
                          : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-blue-600 border border-slate-100'
                      }`}
                    >
                      <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                      {item.label}
                    </motion.button>
                  );
                })}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6"
                >
                  <button
                    id="cta-ppdb-mobile"
                    onClick={() => handleNavClick('contact')}
                    className="block w-full text-center py-4 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                  >
                    Hubungi Kami
                  </button>
                </motion.div>
              </div>

              <div className="p-6 border-t border-slate-200/50 bg-slate-50/50">
                <div className="flex justify-center gap-4 mb-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-pink-600 hover:shadow-md transition-all border border-slate-200"><Instagram size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-md transition-all border border-slate-200"><Facebook size={18} /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-600 hover:shadow-md transition-all border border-slate-200"><Youtube size={18} /></a>
                </div>
                <p className="text-center text-[10px] font-semibold text-slate-400">© 2026 SMAN 1 Halmahera Utara</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
