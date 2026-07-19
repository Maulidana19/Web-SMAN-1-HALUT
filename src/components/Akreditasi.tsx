import React from 'react';
import { motion } from 'motion/react';

export const Akreditasi: React.FC = () => {
  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            AKREDITASI
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Akreditasi Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Status akreditasi dan pemenuhan standar nasional pendidikan SMAN 1 Halmahera Utara.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="space-y-3 sm:space-y-6 max-w-4xl mx-auto">
          
          {/* Main Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 flex flex-row items-center justify-between gap-3 sm:gap-6"
          >
            <div className="flex-1 pr-0">
              <h3 className="text-base sm:text-xl md:text-[22px] font-extrabold text-brand-navy mb-1.5 sm:mb-3">Akreditasi A "Unggul"</h3>
              <p className="text-gray-500 leading-snug sm:leading-relaxed text-[11px] sm:text-sm md:text-[15px] font-medium">
                SMA Negeri 1 Halmahera Utara kembali meraih status Akreditasi A (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) dengan nilai total evaluasi yang sangat memuaskan (94).
              </p>
            </div>
            
            <div className="bg-[#c81e2b] text-white rounded-[12px] sm:rounded-[20px] p-2 sm:p-4 md:p-5 flex flex-col items-center justify-center w-[60px] h-[60px] sm:w-28 sm:h-28 md:w-32 md:h-32 shrink-0 shadow-lg shadow-red-200">
              <span className="text-[7px] sm:text-[10px] font-bold tracking-[0.2em] uppercase mb-0.5 sm:mb-1 opacity-90">NILAI</span>
              <span className="text-2xl sm:text-4xl md:text-5xl font-black leading-none">94</span>
            </div>
          </motion.div>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Sertifikat Resmi BAN-S/M</h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium">
                No. SK: 1344/BAN-SM/SK/2023. Berlaku hingga tahun 2028.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100"
            >
              <h4 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy mb-1.5 sm:mb-2">Status Sekolah Penggerak</h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium">
                Berstatus Sekolah Penggerak yang siap mengimplementasikan program kurikulum merdeka.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};
