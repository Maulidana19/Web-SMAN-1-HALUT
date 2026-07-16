import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Trophy } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { SchoolHeroIllustration } from './Illustrations';

interface HeroProps {
  onNavigateToAbout: () => void;
  onNavigateToTeachers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToAbout, onNavigateToTeachers }) => {
  const [currentFasilitasIndex, setCurrentFasilitasIndex] = useState(0);
  const [currentPrestasiIndex, setCurrentPrestasiIndex] = useState(0);
  
  const fasilitasImages = [
    '/assets/fasilitas1.jpg',
    '/assets/fasilitas2.jpg',
    '/assets/fasilitas3.jpg'
  ];
  const prestasiImages = [
    '/assets/prestasi1.jpg',
    '/assets/prestasi2.jpg',
    '/assets/prestasi3.jpg'
  ];

  useEffect(() => {
    const intervalFasilitas = setInterval(() => {
      setCurrentFasilitasIndex((prev) => (prev + 1) % 3);
    }, 3500);

    const intervalPrestasi = setInterval(() => {
      setCurrentPrestasiIndex((prev) => (prev + 1) % 3);
    }, 4500);

    return () => {
      clearInterval(intervalFasilitas);
      clearInterval(intervalPrestasi);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="hero-section" className="relative bg-[#f1f5f9]/50 pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-100/40 rounded-full filter blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-10 left-10 -z-10 w-[300px] h-[300px] bg-sky-100/50 rounded-full filter blur-2xl opacity-50 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <motion.div
            id="hero-text-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
          >
            {/* Highlight Tag */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Akreditasi A (Unggul)</span>
            </motion.div>

            {/* School Name and Slogan */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight font-display"
              >
                Membangun <span className="text-blue-600 relative inline-block">Masa Depan</span> dengan Karakter Unggul.
              </motion.h1>
              
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl font-bold text-blue-600 italic leading-relaxed"
              >
                "{SCHOOL_INFO.slogan}"
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
            >
              {SCHOOL_INFO.shortDescription} Kami menyediakan lingkungan belajar yang inovatif, berstandar nasional, dan berfokus pada pengembangan kreativitas siswa.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-cta-primary"
                onClick={onNavigateToAbout}
                className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold shadow-xl hover:translate-y-[-2px] active:scale-95 transition-transform duration-200 cursor-pointer text-base"
              >
                Jelajahi Profil
              </button>
              <button
                id="hero-cta-secondary"
                onClick={onNavigateToTeachers}
                className="border-2 border-slate-200 bg-white px-8 py-3.5 rounded-xl font-bold text-slate-700 hover:bg-slate-50 hover:text-blue-600 active:scale-95 transition-all duration-200 cursor-pointer text-base"
              >
                Kenali Guru & Tendik
              </button>
            </motion.div>

            {/* Quick Pillars */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60 w-full"
            >
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm sm:text-base">
                  <BookOpen size={16} />
                  <span>Akademik</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-medium">Metode pembelajaran modern</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm sm:text-base">
                  <ShieldCheck size={16} />
                  <span>Karakter</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-medium">Nilai budi pekerti & moral</span>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm sm:text-base">
                  <Trophy size={16} />
                  <span>Prestasi</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-medium">Juara tingkat nasional</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            id="hero-illustration-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
            className="lg:col-span-5 w-full flex flex-col gap-4 sm:gap-6 justify-center items-center h-auto"
          >
            {/* Top Frame: Fasilitas Sekolah */}
            <div className="w-full max-w-[500px] lg:max-w-none bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100/60 z-0">
                  <svg className="w-8 h-8 mb-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-bold text-xs tracking-wide">fasilitas{currentFasilitasIndex + 1}.jpg</span>
                  <span className="text-[9px] mt-0.5 font-medium opacity-80 text-slate-400 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200/50">src/assets/</span>
                </div>
                
                <AnimatePresence mode="sync">
                  <motion.img
                    key={`fasilitas-${currentFasilitasIndex}`}
                    src={fasilitasImages[currentFasilitasIndex]}
                    alt={`Fasilitas Sekolah ${currentFasilitasIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover z-10 bg-slate-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </AnimatePresence>

                {/* Tag */}
                <div className="absolute top-3 left-3 z-20 bg-blue-600/90 backdrop-blur text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg border border-white/20">
                  Fasilitas Sekolah
                </div>
              </div>
            </div>

            {/* Bottom Frame: Prestasi Siswa */}
            <div className="w-full max-w-[500px] lg:max-w-none bg-white p-2 sm:p-3 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center border border-slate-100/50">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 bg-slate-100/60 z-0">
                  <svg className="w-8 h-8 mb-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="font-bold text-xs tracking-wide">prestasi{currentPrestasiIndex + 1}.jpg</span>
                  <span className="text-[9px] mt-0.5 font-medium opacity-80 text-slate-400 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200/50">src/assets/</span>
                </div>
                
                <AnimatePresence mode="sync">
                  <motion.img
                    key={`prestasi-${currentPrestasiIndex}`}
                    src={prestasiImages[currentPrestasiIndex]}
                    alt={`Prestasi Siswa ${currentPrestasiIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="absolute inset-0 w-full h-full object-cover z-10 bg-slate-50"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </AnimatePresence>

                {/* Tag */}
                <div className="absolute bottom-3 right-3 z-20 bg-amber-500/90 backdrop-blur text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg border border-white/20">
                  Prestasi Siswa
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Dynamic Statistics Bar */}
        <motion.div
          id="stats-bar"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-24 bg-white border border-slate-100 shadow-sm rounded-2xl py-8 px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-y-10 md:gap-x-4"
        >
          {SCHOOL_INFO.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
