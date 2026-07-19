import React from 'react';
import { motion } from 'motion/react';

export const Prestasi: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
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
            Prestasi & Penghargaan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Berbagai pencapaian prestisius yang berhasil diukir oleh putra-putri terbaik SMAN 1 Halmahera Utara di kancah daerah, nasional, maupun internasional.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          
          {/* Image Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            
            {/* Card 1: Lomba Lari */}
            <div className="group flex flex-col overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 bg-white">
              <div className="relative w-full aspect-video overflow-hidden">
                <img 
                  src="/assets/prestasi1.jpg" 
                  alt="Lomba Lari" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-200');
                  }}
                />
              </div>
              {/* Content Box */}
              <div className="relative mt-auto w-full bg-white group-hover:bg-brand-navy transition-colors duration-300 p-6 sm:p-8">
                <h3 className="text-slate-900 group-hover:text-white transition-colors font-bold text-xl sm:text-2xl font-display mb-3">Prestasi di Ajang Lomba Lari</h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm sm:text-base leading-relaxed">
                  Siswa kami terus berprestasi dengan menunjukkan kecepatan dan semangat juang yang tinggi dalam setiap ajang kejuaraan atletik.
                </p>
              </div>
            </div>

            {/* Card 2: Lomba Pencak Silat */}
            <div className="group flex flex-col overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl border border-gray-100 bg-white">
              <div className="relative w-full aspect-video overflow-hidden">
                <img 
                  src="/assets/prestasi2.jpg" 
                  alt="Lomba Pencak Silat" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-200');
                  }}
                />
              </div>
              {/* Content Box */}
              <div className="relative mt-auto w-full bg-white group-hover:bg-brand-navy transition-colors duration-300 p-6 sm:p-8">
                <h3 className="text-slate-900 group-hover:text-white transition-colors font-bold text-xl sm:text-2xl font-display mb-3">Kejuaraan Pencak Silat Pelajar</h3>
                <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm sm:text-base leading-relaxed">
                  Menjunjung tinggi sportivitas dan nilai tradisi beladiri, siswa-siswi kami selalu tampil maksimal di berbagai kompetisi pencak silat.
                </p>
              </div>
            </div>

          </div>

          {/* Motivation Board */}
          <div className="bg-[#f1f5f9]/50 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto border border-slate-100">
            <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
              "Bukan hanya medali atau piala yang kami kejar, melainkan proses, daya juang, sportivitas, dan integritas kepribadian yang terbentuk di balik setiap perjuangan prestasi."
            </p>
            <span className="block text-xs font-bold text-brand-red uppercase tracking-widest mt-3">— Dewan Pembina Prestasi Siswa</span>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
