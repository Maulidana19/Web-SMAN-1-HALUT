import React from 'react';
import { motion } from 'motion/react';
import { Layers, Users } from 'lucide-react';

export const Manajemen: React.FC = () => {
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
            MANAJEMEN
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Manajemen Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Sistem tata kelola dan susunan organisasi kepemimpinan SMAN 1 Halmahera Utara yang berdedikasi tinggi untuk memajukan pendidikan.
          </motion.p>
        </div>

        {/* Tim Wakil Kepala Sekolah */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((idx) => {
              const names = ['Fendy V. Hitipeuw, S.Pd.', 'Donal R. Ollo, S.Pd.', 'Thomas S. Matrutty, S.Pd.', 'Reny Uktolseja, S.E., S.Pd.'];
              const roles = ['Bidang Kurikulum', 'Bidang Kesiswaan', 'Bidang Sarpras', 'Bidang Humas'];
              return (
                <div key={idx} className="relative group cursor-pointer overflow-hidden bg-brand-navy rounded-2xl">
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={`/assets/waka${idx}.jpg`} 
                      alt={`Wakil Kepala Sekolah ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                    <h3 className="text-white font-bold text-sm sm:text-lg font-display mb-1 leading-tight">{names[idx-1]}</h3>
                    <p className="text-blue-200 text-[10px] sm:text-xs font-medium uppercase tracking-wider">{roles[idx-1]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Struktur & Komite Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Struktur Organisasi */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <Layers className="w-6 h-6 text-brand-red" />
              <h4 className="text-lg md:text-xl font-bold text-brand-navy">Struktur Organisasi Sekolah</h4>
            </div>
            <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-medium mb-8">
              Bagan pembagian komando kepemimpinan serta tanggung jawab administratif internal SMAN 1 Halmahera Utara.
            </p>
            
            {/* Inner box */}
            <div className="mt-auto bg-slate-50 border border-slate-200 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center h-48">
              <Users className="w-8 h-8 text-slate-400 mb-3" />
              <span className="text-slate-600 font-bold text-[13px] uppercase tracking-wider mb-1">Bagan Organisasi Digital</span>
              <span className="text-slate-400 text-[12px]">Sedang dalam proses penyusunan bagan grafis terbaru.</span>
            </div>
          </motion.div>

          {/* Card 2: Komite Sekolah */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-brand-red" />
              <h4 className="text-lg md:text-xl font-bold text-brand-navy">Komite Sekolah</h4>
            </div>
            <p className="text-gray-500 text-[14px] md:text-[15px] leading-relaxed font-medium mb-8">
              Lembaga mandiri yang mewakili peran serta orang tua siswa dalam mendukung program kerja dan peningkatan sarana mutu pendidikan.
            </p>

            {/* Inner box */}
            <div className="mt-auto bg-slate-50 border border-slate-100 rounded-xl p-6 md:p-8">
              <h5 className="font-bold text-brand-navy text-[15px] mb-4">Jajaran Pengurus Komite</h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0"></span>
                  <span className="text-slate-700"><strong>Ketua Komite:</strong> Drs. H. Muhammad Saleh</span>
                </li>
                <li className="flex items-start gap-2 text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0"></span>
                  <span className="text-slate-700"><strong>Wakil Ketua:</strong> Dr. Ir. Yohanes W.</span>
                </li>
                <li className="flex items-start gap-2 text-[14px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red mt-2 shrink-0"></span>
                  <span className="text-slate-700"><strong>Sekretaris:</strong> Dra. Maria K.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
