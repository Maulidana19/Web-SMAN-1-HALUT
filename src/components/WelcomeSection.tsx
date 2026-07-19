import React from 'react';
import { SCHOOL_INFO } from '../data';
import { Quote } from 'lucide-react';

interface WelcomeSectionProps {
  onNavigateToAbout?: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="bg-gray-50 pt-8 sm:pt-12 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
        {/* 1. SAMBUTAN KEPALA SEKOLAH */}
        <div className="relative z-20 mb-16 sm:mb-20">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
            
            {/* Decorative quote marks */}
            <Quote className="absolute top-12 right-12 w-32 h-32 text-gray-50 opacity-50 rotate-180" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              
              {/* Foto Kepsek */}
              <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
                <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 border-[6px] border-gray-50 relative">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10"></div>
                  <img 
                    src="/assets/foto1.jpg" 
                    alt={SCHOOL_INFO.principal.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-slate-900 text-lg sm:text-xl font-display">{SCHOOL_INFO.principal.name}</h4>
                  <p className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mt-1">{SCHOOL_INFO.principal.role}</p>
                </div>
              </div>

              {/* Pesan Kepsek */}
              <div className="md:col-span-7 lg:col-span-8">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold font-display text-slate-900 mb-6 flex items-center gap-2 sm:gap-3">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 shrink-0" />
                  Sambutan Kepala Sekolah
                </h3>
                <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed italic space-y-4 text-justify">
                  <p>"{SCHOOL_INFO.principal.message}"</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Welcome & Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight font-display mb-6">
              Selamat Datang di <br />
              <span className="text-brand-red">SMAN 1</span> Halmahera Utara
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              {SCHOOL_INFO.shortDescription}
            </p>
            <div className="mb-8">
              <span className="text-gray-500 font-medium">Berdiri sejak </span>
              <span className="text-brand-navy font-bold text-xl ml-1">1967</span>
            </div>
            {onNavigateToAbout && (
              <button 
                onClick={onNavigateToAbout}
                className="bg-brand-red text-white px-8 py-3.5 font-bold hover:bg-brand-red-hover transition-colors shadow-md text-sm uppercase tracking-wide cursor-pointer"
              >
                PELAJARI LEBIH LANJUT
              </button>
            )}
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {SCHOOL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="bg-white border-l-4 border-brand-red p-4 sm:p-6 shadow-sm flex flex-col justify-center overflow-hidden">
                <div className="text-xl sm:text-3xl font-extrabold text-brand-navy mb-1 truncate">{stat.value}</div>
                <div className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wider truncate">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width Image (like building in reference) */}
      <div className="w-full h-[400px] lg:h-[600px] bg-cover bg-center mb-0" style={{ backgroundImage: "url('/assets/tentang.png')" }}></div>

      {/* Trusted By Banner (Navy Background) */}
      <div className="bg-brand-navy w-full py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-xl md:text-2xl font-bold font-display text-center md:text-left">
            Terakreditasi A (Unggul) <br className="hidden md:block" />
            Dalam Pendidikan & Karakter
          </div>
          <div className="text-blue-100 text-sm max-w-lg text-center md:text-left">
            {SCHOOL_INFO.vision}
          </div>
        </div>
      </div>
    </section>
  );
};
