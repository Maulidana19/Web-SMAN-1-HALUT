import React from 'react';
import { SCHOOL_INFO } from '../data';

interface WelcomeSectionProps {
  onNavigateToAbout?: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onNavigateToAbout }) => {
  return (
    <section className="bg-gray-50 pt-16 sm:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        
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
