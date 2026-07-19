import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const Kurikulum: React.FC = () => {
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
            Kurikulum Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Sistem belajar mengajar adaptif berbasis Kurikulum Merdeka.
          </motion.p>
        </div>

        {/* Features Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            
            {/* Feature 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-[20px] p-4 sm:p-8 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300">
              <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy leading-tight">Kurikulum Merdeka (Pembelajaran Mendalam)</h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium pl-6 sm:pl-8">
                Pendekatan pembelajaran berkesadaran, bermakna, dan menggembirakan melalui aktivitas olah pikir, olah hati, olah rasa, dan olah raga.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-[20px] p-4 sm:p-8 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300">
              <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy leading-tight">8 Profil Kelulusan</h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium pl-6 sm:pl-8">
                Standar kompetensi lulusan komprehensif yang meliputi: Keimanan & Ketakwaan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Kesehatan, dan Komunikasi.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-[20px] p-4 sm:p-8 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300">
              <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy leading-tight">Pembelajaran Berbasis IT</h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium pl-6 sm:pl-8">
                Integrasi penuh platform digital dan LMS dalam kegiatan harian untuk efisiensi dan adaptabilitas teknologi modern.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-[20px] p-4 sm:p-8 hover:border-red-100 hover:bg-red-50/30 transition-colors duration-300">
              <div className="flex items-start gap-2.5 sm:gap-3 mb-1.5 sm:mb-3">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red shrink-0 mt-0.5" />
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-brand-navy leading-tight">Asesmen Kompetensi Minimum</h3>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium pl-6 sm:pl-8">
                Fokus pada literasi membaca, numerasi, dan survei karakter untuk pemetaan kualitas mutu pendidikan secara objektif.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
