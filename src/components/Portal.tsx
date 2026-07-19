import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export const Portal: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            AKADEMIK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Tautan Portal Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Akses cepat ke portal pembelajaran daring, pelaporan, dan SIAKAD.
          </motion.p>
        </div>

        {/* Features Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              {/* Decorative Blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 group-hover:bg-brand-navy/5 transition-transform duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-4">SIAKAD SMANSA</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  Sistem Informasi Akademik sekolah untuk memantau nilai, kehadiran, jadwal, dan biodata siswa.
                </p>
                <button className="w-full bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-[13px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                  BUKA SIAKAD <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              {/* Decorative Blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 group-hover:bg-brand-navy/5 transition-transform duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-4">LMS Pembelajaran Daring</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  Platform Learning Management System untuk kuis online, tugas kelas, dan materi pembelajaran mandiri.
                </p>
                <button className="w-full bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-[13px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                  BUKA LMS <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-[20px] p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all duration-300 flex flex-col h-full relative overflow-hidden group">
              {/* Decorative Blob */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-slate-50 rounded-full group-hover:scale-150 group-hover:bg-brand-navy/5 transition-transform duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-4">Rapor Pendidikan</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium mb-8 flex-grow">
                  Akses dashboard Rapor Pendidikan Kemendikbudristek untuk pemetaan berkala mutu pendidikan.
                </p>
                <button className="w-full bg-slate-100 hover:bg-brand-navy hover:text-white text-brand-navy font-bold text-[13px] py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300">
                  BUKA RAPOR <ExternalLink size={16} />
                </button>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
