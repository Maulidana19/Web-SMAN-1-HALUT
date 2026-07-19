import React from 'react';
import { motion } from 'motion/react';

export const Osis: React.FC = () => {
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
          {/* Organizational Chart */}
          <div className="flex flex-col items-center mb-12">
            <h3 className="font-bold text-brand-navy mb-8 text-center text-lg">
              Struktur Inti OSIS SMANSA (Masa Bakti 2025/2026)
            </h3>
            
            {/* Pembina */}
            <div className="bg-brand-navy text-white px-8 py-2.5 rounded-xl font-bold shadow-md text-sm sm:text-base z-10">
              Pembina OSIS
            </div>
            
            <div className="w-px h-6 bg-slate-300"></div>
            
            {/* Ketua */}
            <div className="bg-[#c81e2b] text-white px-10 py-2.5 rounded-xl font-bold shadow-md text-sm sm:text-base z-10">
              Ketua OSIS
            </div>
            
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="w-48 sm:w-64 border-t-2 border-slate-300 flex justify-between">
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="w-px h-6 bg-slate-300"></div>
            </div>
            
            {/* Sekretaris & Bendahara */}
            <div className="flex justify-between w-[18rem] sm:w-[22rem] max-w-full">
              <div className="bg-slate-50 border border-slate-200 text-brand-navy px-4 py-2.5 rounded-xl font-bold shadow-sm text-sm sm:text-base w-32 sm:w-40 text-center z-10">
                Sekretaris OSIS
              </div>
              <div className="bg-slate-50 border border-slate-200 text-brand-navy px-4 py-2.5 rounded-xl font-bold shadow-sm text-sm sm:text-base w-32 sm:w-40 text-center z-10">
                Bendahara OSIS
              </div>
            </div>
          </div>

          {/* Program Kerja List */}
          <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-6 sm:p-8">
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

        </motion.div>
      </div>
    </div>
  );
};
