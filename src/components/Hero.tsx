import React from 'react';
import { BookOpen, ShieldCheck, Trophy, Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import { SCHOOL_INFO } from '../data';

interface HeroProps {
  onNavigateToAbout: () => void;
  onNavigateToTeachers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToAbout, onNavigateToTeachers }) => {
  return (
    <section id="home" className="relative w-full">
      {/* Background Image with Overlay */}
      <div 
        className="relative w-full min-h-[500px] lg:min-h-[550px] flex flex-col bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/utama.jpg')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-0 flex-1 flex flex-col justify-center w-full">
          <div className="max-w-5xl space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-block bg-brand-red/90 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-md backdrop-blur-sm border border-red-400/30">
              Akreditasi A "UNGGUL"
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight font-display tracking-tight">
              Membangun Masa Depan Untuk <br className="hidden md:block" />
              Pendidikan Karakter Unggul
            </h1>
            
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-3xl font-light">
              {SCHOOL_INFO.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onNavigateToAbout}
                className="bg-brand-red text-white px-8 py-3.5 font-bold hover:bg-brand-red-hover transition-colors shadow-lg text-sm md:text-base uppercase tracking-wide cursor-pointer"
              >
                Jelajahi Profil
              </button>
              <button
                onClick={onNavigateToTeachers}
                className="bg-white text-brand-navy px-8 py-3.5 font-bold hover:bg-gray-100 transition-colors shadow-lg text-sm md:text-base uppercase tracking-wide cursor-pointer"
              >
                Guru & Tendik
              </button>

              {/* Social Media Links */}
              <div className="flex gap-3 ml-0 sm:ml-4 w-full sm:w-auto justify-center sm:justify-start mt-2 sm:mt-0">
                <a href="https://www.instagram.com/osissman1halut?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#E1306C] hover:border-transparent transition-all shadow-sm" title="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/osis.s.halut" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-transparent transition-all shadow-sm" title="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://youtube.com/@osissmansahalut6442?si=ZMusjWKn2AFE1E6n" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-transparent transition-all shadow-sm" title="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="https://www.whatsapp.com/channel/0029VatILbOBA1esTd3ce63h?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn82g1FTiIuLj4q0_9FvpWswbAvk4wfYx5K8DBSksC_HSGGWGwDCNE_vUQUmA_aem_gGA5kYCQNITa8n6he-C0Jw" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#25D366] hover:border-transparent transition-all shadow-sm" title="WhatsApp Channel">
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Cards Section - positioned to slightly overlap the bottom of hero or just sit right below */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Card 1 */}
        <div className="flex-1 bg-brand-navy p-6 md:p-10 flex flex-col items-center md:items-start text-white group cursor-default transition-all duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <BookOpen className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold font-display">Akademik</h3>
          </div>
          <p className="text-sm text-blue-100 text-center md:text-left leading-relaxed">
            Metode pembelajaran modern yang dirancang untuk membangun pemahaman konseptual dan analitis siswa secara komprehensif.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-brand-navy-light p-6 md:p-10 flex flex-col items-center md:items-start text-white group cursor-default transition-all duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <ShieldCheck className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold font-display">Karakter</h3>
          </div>
          <p className="text-sm text-blue-100 text-center md:text-left leading-relaxed">
            Menanamkan nilai-nilai budi pekerti, integritas, dan moral yang kuat sebagai pondasi generasi pemimpin masa depan.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex-1 bg-brand-red p-6 md:p-10 flex flex-col items-center md:items-start text-white group cursor-default transition-all duration-300">
          <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
            <Trophy className="w-8 h-8 md:w-9 md:h-9 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-xl md:text-2xl font-bold font-display">Prestasi</h3>
          </div>
          <p className="text-sm text-red-100 text-center md:text-left leading-relaxed">
            Mencetak siswa-siswi unggul dengan berbagai pencapaian gemilang di tingkat regional hingga nasional.
          </p>
        </div>
      </div>
    </section>
  );
};
