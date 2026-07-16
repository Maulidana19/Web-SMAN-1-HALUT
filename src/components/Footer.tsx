import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
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
    <footer id="app-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Branding and short introduction */}
          <div className="md:col-span-5 flex flex-col items-start text-left space-y-4">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleLinkClick('home')}>
              <div className="w-10 h-10 flex items-center justify-center rounded-lg overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Logo SMAN 1" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="p-2 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30 flex items-center justify-center w-full h-full"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" /></svg></div>';
                  }}
                />
              </div>
              <div>
                <span className="block text-xs font-bold tracking-wider text-blue-400 uppercase leading-none">SMA NEGERI 1</span>
                <span className="block text-xl font-black tracking-tighter text-white uppercase leading-none mt-1">HALMAHERA UTARA</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Membina generasi unggul, bertaqwa, berkarakter mulia, dan siap bersaing secara global melalui ekosistem pembelajaran modern.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/osissman1halut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-600/30 transition-all duration-300 hover:-translate-y-1" title="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/osis.s.halut" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1" title="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://youtube.com/@osissmansahalut6442?si=ZMusjWKn2AFE1E6n" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 hover:-translate-y-1" title="YouTube">
                <Youtube size={16} />
              </a>
              <a href="https://www.whatsapp.com/channel/0029VatILbOBA1esTd3ce63h?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn82g1FTiIuLj4q0_9FvpWswbAvk4wfYx5K8DBSksC_HSGGWGwDCNE_vUQUmA_aem_gGA5kYCQNITa8n6he-C0Jw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-400 hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1" title="WhatsApp Channel">
                <MessageCircle size={16} />
              </a>
            </div>


          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6 border-l-4 border-blue-500 pl-3 font-display">
              Navigasi Cepat
            </h4>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <button 
                  id="footer-link-home"
                  onClick={() => handleLinkClick('home')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0 text-blue-400" />
                  <span>Beranda</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-about"
                  onClick={() => handleLinkClick('about')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0 text-blue-400" />
                  <span>Tentang Kami</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-teachers"
                  onClick={() => handleLinkClick('teachers')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0 text-blue-400" />
                  <span>Guru & Tendik</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-achievements"
                  onClick={() => handleLinkClick('achievements')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0 text-blue-400" />
                  <span>Prestasi</span>
                </button>
              </li>
              <li>
                <button 
                  id="footer-link-contact"
                  onClick={() => handleLinkClick('contact')}
                  className="hover:text-blue-400 transition-colors cursor-pointer text-left flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-3 group-hover:ml-0 text-blue-400" />
                  <span>Hubungi Kontak</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details Footer */}
          <div className="md:col-span-4 flex flex-col items-start text-left space-y-4">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-2 border-l-4 border-blue-500 pl-3 font-display">
              Kontak Sekolah
            </h4>
            
            <div className="flex gap-3 text-sm text-slate-400">
              <MapPin size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <span>{SCHOOL_INFO.contact.address}</span>
            </div>

            <div className="flex gap-3 text-sm text-slate-400">
              <Phone size={18} className="text-blue-400 flex-shrink-0" />
              <span>{SCHOOL_INFO.contact.phone}</span>
            </div>

            <div className="flex gap-3 text-sm text-slate-400">
              <Mail size={18} className="text-blue-400 flex-shrink-0" />
              <span>{SCHOOL_INFO.contact.email}</span>
            </div>
          </div>

        </div>
      </div>

      <div className="border-t border-slate-800 bg-slate-950 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <div className="text-xs sm:text-sm text-slate-500 text-center">
            © {currentYear} {SCHOOL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.
          </div>
        </div>
      </div>

    </footer>
  );
};
