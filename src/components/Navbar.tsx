import React, { useState } from 'react';
import { Menu, X, Phone, Clock, Mail, MapPin, ChevronDown } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const navItems = [
    { id: 'home', label: 'BERANDA', hasDropdown: false },
    { 
      id: 'profil_parent', 
      label: 'PROFIL', 
      hasDropdown: true,
      subItems: [
        { id: 'about', label: 'Identitas Sekolah' },
        { id: 'manajemen', label: 'Manajemen' },
        { id: 'teachers', label: 'Direktori Guru' },
        { id: 'fasilitas', label: 'Fasilitas' },
        { id: 'akreditasi', label: 'Akreditasi' },
      ]
    },
    { 
      id: 'academic_parent', 
      label: 'AKADEMIK', 
      hasDropdown: true,
      subItems: [
        { id: 'kurikulum', label: 'Kurikulum' },
        { id: 'peminatan', label: 'Peminatan' },
        { id: 'kalender', label: 'Kalender Akademik' },
        { id: 'portal', label: 'Tautan Portal' }
      ]
    },
    { 
      id: 'student_alumni_parent', 
      label: 'KESISWAAN & ALUMNI', 
      hasDropdown: true,
      subItems: [
        { id: 'osis', label: 'OSIS & MPK' },
        { id: 'ekstrakurikuler', label: 'Ekstrakurikuler' },
        { id: 'prestasi', label: 'Prestasi' },
        { id: 'alumni', label: 'Ikatan Alumni' },
      ]
    },
    { 
      id: 'public_info_parent', 
      label: 'INFORMASI PUBLIK', 
      hasDropdown: true,
      subItems: [
        { id: 'ppdb', label: 'Informasi PPDB' },
        { id: 'pengumuman', label: 'Pengumuman Resmi' },
        { id: 'berita', label: 'Berita Kegiatan' }
      ]
    },
    { id: 'contact', label: 'KONTAK', hasDropdown: false },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    setExpandedMenu(null);
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
            <div className="w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center shrink-0">
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
              <span className="text-[11px] lg:text-[12px] font-bold tracking-widest text-gray-400 uppercase mb-0.5">SMA Negeri 1</span>
              <span className="text-[17px] lg:text-[19px] font-black tracking-tight text-brand-navy uppercase">Halmahera Utara</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-[12px] xl:text-sm font-semibold text-brand-navy whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = activeSection === item.id || (item.subItems && item.subItems.some(sub => sub.id === activeSection));
              return (
                <div key={item.id} className="relative group py-2">
                  <button
                    onClick={() => {
                      if (!item.hasDropdown) handleNavClick(item.id);
                    }}
                    className={`flex items-center gap-1 transition-colors duration-200 cursor-pointer border-b-2 uppercase tracking-wide whitespace-nowrap pb-1 ${
                      isActive ? 'border-brand-red text-brand-red' : 'border-transparent hover:text-brand-red'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown size={16} className={`transition-transform duration-200 group-hover:rotate-180 ${isActive ? 'text-brand-red' : 'text-brand-navy/70'}`} />}
                  </button>

                  {/* Desktop Dropdown */}
                  {item.subItems && (
                    <div className="absolute top-full left-0 mt-0 w-56 bg-white shadow-xl border border-gray-100 rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left z-50">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNavClick(subItem.id);
                          }}
                          className="block w-full text-left px-5 py-3 text-[13px] font-semibold text-brand-navy hover:text-brand-red hover:bg-red-50 border-l-4 hover:border-brand-red border-transparent transition-all"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
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
              const isActive = activeSection === item.id || (item.subItems && item.subItems.some(sub => sub.id === activeSection));
              return (
                <div key={item.id} className="flex flex-col">
                  <button
                    onClick={() => {
                      if (item.hasDropdown) {
                        setExpandedMenu(expandedMenu === item.id ? null : item.id);
                      } else {
                        handleNavClick(item.id);
                      }
                    }}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                      isActive ? 'text-brand-red bg-red-50' : 'text-brand-navy hover:text-brand-red hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={18} 
                        className={`transition-transform duration-200 ${expandedMenu === item.id ? 'rotate-180' : ''} ${isActive ? 'text-brand-red' : 'text-gray-400'}`} 
                      />
                    )}
                  </button>
                  {item.subItems && expandedMenu === item.id && (
                    <div className="bg-gray-50/50 flex flex-col py-1 border-l-2 border-gray-100 ml-4 pl-4 pr-4">
                      {item.subItems.map((subItem) => {
                        const isSubActive = activeSection === subItem.id;
                        return (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.id)}
                            className={`text-left py-2.5 text-sm font-semibold tracking-wide ${
                              isSubActive ? 'text-brand-red' : 'text-brand-navy hover:text-brand-red'
                            }`}
                          >
                            {subItem.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
