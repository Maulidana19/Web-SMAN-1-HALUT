import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

export const Osis: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Mencegah scroll body saat pop-up terbuka
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isZoomed]);
  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            KESISWAAN
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Organisasi Siswa (OSIS & MPK)
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Wadah pembinaan kepemimpinan, kepribadian, dan penyalur kreativitas siswa.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Organizational Chart (Image with Zoom) */}
            <div className="flex flex-col items-center w-full">
              <div 
                onClick={() => setIsZoomed(true)}
                className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden shadow-md cursor-pointer group border-2 border-white"
              >
                <img 
                  src="/assets/osis.jpg" 
                  alt="Struktur Organisasi OSIS" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-200');
                  }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-brand-navy px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    <Maximize2 size={16} />
                    <span>Klik untuk Zoom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Program Kerja List */}
            <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 sm:p-8 h-fit flex flex-col justify-start">
              <h4 className="font-bold text-brand-navy text-base sm:text-lg mb-5">Program Kerja Unggulan OSIS</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c81e2b] mt-2.5 shrink-0 shadow-sm"></div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-brand-navy">SMANSA Cup:</strong> Turnamen olahraga dan seni antar pelajar tingkat kabupaten.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c81e2b] mt-2.5 shrink-0 shadow-sm"></div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-brand-navy">Latihan Kepemimpinan Siswa (LKS):</strong> Pembekalan leadership bagi calon pengurus kelas dan ekskul.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c81e2b] mt-2.5 shrink-0 shadow-sm"></div>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    <strong className="text-brand-navy">Bakti Sosial Kemasyarakatan:</strong> Aksi berbagi dan edukasi lingkungan di desa terdekat.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Modal Pop-up */}
      <AnimatePresence>
        {isZoomed && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsZoomed(false)}
              className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm cursor-zoom-out"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl custom-scrollbar"
            >
              <button 
                onClick={() => setIsZoomed(false)}
                className="sticky top-4 float-right right-4 ml-4 mb-4 z-50 bg-brand-red text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
              >
                <X size={24} />
              </button>
              
              <img 
                src="/assets/osis.jpg" 
                alt="Struktur Organisasi OSIS Full" 
                className="w-full h-auto block"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
