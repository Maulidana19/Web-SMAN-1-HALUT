import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Peminatan: React.FC = () => {
  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
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
            Program Peminatan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Struktur Kurikulum Merdeka: pembelajaran yang fleksibel sesuai minat, bakat, dan rencana karir siswa.
          </motion.p>
        </div>

        {/* Features Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[16px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-4 sm:p-8 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex flex-col h-full">
              <span className="text-brand-red text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">KELAS X</span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-navy mb-2 sm:mb-4">Fase E (Mata Pelajaran Umum)</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium mb-4 sm:mb-8 flex-grow text-justify">
                Siswa mempelajari seluruh mata pelajaran secara umum (tanpa peminatan) guna membangun fondasi ilmu dan memetakan minat untuk tahun berikutnya.
              </p>
              <button className="flex items-center gap-1 text-brand-navy font-bold text-[11px] sm:text-xs md:text-sm hover:text-brand-red transition-colors w-fit">
                Selengkapnya <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-4 sm:p-8 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex flex-col h-full">
              <span className="text-brand-red text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">FASE F (KELAS XI & XII)</span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-navy mb-2 sm:mb-4">Paket Belajar Pilihan</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium mb-4 sm:mb-8 flex-grow text-justify">
                Tidak ada lagi sistem penjurusan. Siswa diberikan keleluasaan menentukan kombinasi mata pelajaran pilihan sesuai dengan minat dan rencana studi/karir masa depan.
              </p>
              <button className="flex items-center gap-1 text-brand-navy font-bold text-[11px] sm:text-xs md:text-sm hover:text-brand-red transition-colors w-fit">
                Selengkapnya <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-4 sm:p-8 shadow-sm hover:shadow-md hover:border-red-100 transition-all duration-300 flex flex-col h-full">
              <span className="text-brand-red text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest block mb-1.5 sm:mb-2">FASE F (KELAS XI & XII)</span>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-brand-navy mb-2 sm:mb-4">Pendampingan Karir</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-snug sm:leading-relaxed font-medium mb-4 sm:mb-8 flex-grow text-justify">
                Pemilihan paket belajar akan didampingi penuh oleh guru Bimbingan Konseling (BK) agar kombinasi mata pelajaran selaras dengan persyaratan masuk perguruan tinggi.
              </p>
              <button className="flex items-center gap-1 text-brand-navy font-bold text-[11px] sm:text-xs md:text-sm hover:text-brand-red transition-colors w-fit">
                Selengkapnya <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
