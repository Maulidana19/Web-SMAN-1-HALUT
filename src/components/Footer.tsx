import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface FooterProps {
  setActiveSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Col 1: Branding and short introduction */}
          <div className="flex flex-col items-start text-left space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleLinkClick('home')}>
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
              <div>
                <span className="block text-sm font-bold tracking-widest text-blue-200 leading-tight">SMA NEGERI 1</span>
                <span className="block text-xl sm:text-2xl font-extrabold text-white leading-none mt-1">HALMAHERA UTARA</span>
              </div>
            </div>
            
            <p className="text-blue-100 text-sm leading-relaxed max-w-sm font-medium">
              Membina generasi unggul, bertaqwa, berkarakter mulia, dan siap bersaing secara global melalui ekosistem pembelajaran modern.
            </p>

          </div>

          {/* Col 2: Contact Details */}
          <div className="flex flex-col items-start text-left space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-1 h-5 bg-blue-500"></div>
              <h4 className="text-white font-bold text-lg font-display">
                KONTAK SEKOLAH
              </h4>
            </div>
            
            <div className="text-sm text-blue-100 font-medium grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Left: Location */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-0.5 shrink-0" />
                <p className="leading-relaxed">{SCHOOL_INFO.contact.address}</p>
              </div>
              
              {/* Right: Phone & Email */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-blue-400 shrink-0" />
                  <p>{SCHOOL_INFO.contact.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-400 shrink-0" />
                  <p>{SCHOOL_INFO.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10 py-3 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto flex justify-center items-center text-center">
          <div className="text-xs sm:text-sm text-blue-200 font-medium">
            © {currentYear} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>
      </div>

    </footer>
  );
};
