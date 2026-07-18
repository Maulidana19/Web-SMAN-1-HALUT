import React, { useState } from 'react';
import { Menu, X, Phone, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);

  const navigationMenu = [
    {
      label: 'Beranda',
      prefix: 'beranda',
      subItems: [
        { id: 'beranda-sekilas', label: 'Sekilas Sekolah' },
        { id: 'beranda-sambutan', label: 'Sambutan Kepala Sekolah' },
        { id: 'beranda-agenda', label: 'Agenda Sekolah' },
      ]
    },
    {
      label: 'Profil',
      prefix: 'profil',
      subItems: [
        { id: 'profil-identitas', label: 'Identitas Sekolah' },
        { id: 'profil-manajemen', label: 'Manajemen' },
        { id: 'profil-guru', label: 'Direktori Guru' },
        { id: 'profil-fasilitas', label: 'Fasilitas' },
        { id: 'profil-akreditasi', label: 'Akreditasi' },
      ]
    },
    {
      label: 'Akademik',
      prefix: 'akademik',
      subItems: [
        { id: 'akademik-kurikulum', label: 'Kurikulum' },
        { id: 'akademik-peminatan', label: 'Peminatan' },
        { id: 'akademik-kalender', label: 'Kalender Akademik' },
        { id: 'akademik-portal', label: 'Tautan Portal' },
      ]
    },
    {
      label: 'Kesiswaan & Alumni',
      prefix: 'kesiswaan',
      subItems: [
        { id: 'kesiswaan-osis', label: 'OSIS & MPK' },
        { id: 'kesiswaan-ekstrakurikuler', label: 'Ekstrakurikuler' },
        { id: 'kesiswaan-prestasi', label: 'Prestasi' },
        { id: 'kesiswaan-alumni', label: 'Ikatan Alumni' },
      ]
    },
    {
      label: 'Informasi Publik',
      prefix: 'informasi',
      subItems: [
        { id: 'informasi-ppdb', label: 'Informasi PPDB' },
        { id: 'informasi-pengumuman', label: 'Pengumuman Resmi' },
        { id: 'informasi-berita', label: 'Berita Kegiatan' },
      ]
    },
    {
      label: 'Media & Kontak',
      prefix: 'media',
      subItems: [
        { id: 'media-galeri', label: 'Galeri Visual' },
        { id: 'media-hubungi', label: 'Hubungi Kami' },
        { id: 'media-lokasi', label: 'Lokasi' },
      ]
    }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    setExpandedMobileMenu(null);
  };

  const isMenuCategoryActive = (prefix: string) => {
    if (activeSection === 'home' && prefix === 'beranda') return true;
    return activeSection.startsWith(prefix);
  };

  const toggleMobileCategory = (prefix: string) => {
    if (expandedMobileMenu === prefix) {
      setExpandedMobileMenu(null);
    } else {
      setExpandedMobileMenu(prefix);
    }
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
            onClick={() => handleNavClick('beranda-sekilas')}
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
          <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-brand-navy">
            {navigationMenu.map((menu) => {
              const isCategoryActive = isMenuCategoryActive(menu.prefix);
              return (
                <div key={menu.prefix} className="relative group py-6">
                  <button
                    className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 uppercase tracking-wide py-1 border-b-2 ${
                      isCategoryActive 
                        ? 'border-brand-red text-brand-red' 
                        : 'border-transparent hover:text-brand-red hover:border-brand-red'
                    }`}
                  >
                    <span>{menu.label}</span>
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200 shrink-0" />
                  </button>

                  {/* Dropdown Menu Container */}
                  <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-2xl border border-slate-100 rounded-xl py-2.5 min-w-[240px] z-50 transform translate-y-[-4px] animate-in fade-in slide-in-from-top-2 duration-200">
                    {menu.subItems.map((sub) => {
                      const isSubActive = activeSection === sub.id;
                      return (
                        <button
                          key={sub.id}
                          onClick={() => handleNavClick(sub.id)}
                          className={`block w-full text-left px-5 py-2.5 text-xs font-bold transition-all ${
                            isSubActive 
                              ? 'text-brand-red bg-red-50/60 border-l-4 border-brand-red' 
                              : 'text-slate-700 hover:bg-slate-50 hover:text-brand-red border-l-4 border-transparent'
                          }`}
                        >
                          {sub.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Mobile Navigation Button */}
          <div className="flex xl:hidden">
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
        <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
            {navigationMenu.map((menu) => {
              const isCategoryActive = isMenuCategoryActive(menu.prefix);
              const isExpanded = expandedMobileMenu === menu.prefix;
              
              return (
                <div key={menu.prefix} className="border-b border-gray-50 pb-2">
                  <button
                    onClick={() => toggleMobileCategory(menu.prefix)}
                    className={`flex items-center justify-between w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider ${
                      isCategoryActive ? 'text-brand-red' : 'text-brand-navy hover:text-brand-red'
                    }`}
                  >
                    <span>{menu.label}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  {/* Mobile Submenu Accordion */}
                  {isExpanded && (
                    <div className="mt-1 ml-4 pl-2 border-l-2 border-slate-100 flex flex-col gap-1 bg-slate-50/50 py-1 rounded-r-xl">
                      {menu.subItems.map((sub) => {
                        const isSubActive = activeSection === sub.id;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => handleNavClick(sub.id)}
                            className={`block w-full text-left px-4 py-2.5 text-xs font-bold uppercase tracking-wide ${
                              isSubActive 
                                ? 'text-brand-red font-extrabold' 
                                : 'text-slate-600 hover:text-brand-red'
                            }`}
                          >
                            {sub.label}
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
