import React from 'react';
import { motion } from 'motion/react';

const EKSKUL_DATA = [
  {
    tag: 'WAJIB / KARAKTER',
    title: 'Pramuka',
    description: 'Pendidikan kepanduan pembentuk watak, kemandirian, dan kerjasama.',
  },
  {
    tag: 'SEMI-MILITER',
    title: 'Paskibra',
    description: 'Kedisiplinan tinggi, baris-berbaris, dan pembinaan fisik mental.',
  },
  {
    tag: 'KEMANUSIAAN',
    title: 'PMR (PMR Wira)',
    description: 'Keterampilan dasar medis pertolongan pertama & kesehatan remaja.',
  },
  {
    tag: 'PRESTASI / FISIK',
    title: 'Klub Olahraga',
    description: 'Futsal, Basket, Voli, Badminton, dan Bela Diri (Karate/Silat).',
  },
  {
    tag: 'KREATIVITAS',
    title: 'Seni & Paduan Suara',
    description: 'Vokal grup, band sekolah, tari tradisional, tari kreasi, dan seni rupa.',
  },
  {
    tag: 'SAINS / RISET',
    title: 'KIR (Karya Ilmiah Remaja)',
    description: 'Penelitian sederhana, eksperimen sains, dan persiapan kompetisi karya tulis.',
  },
  {
    tag: 'TEKNOLOGI',
    title: 'Klub IT & Robotik',
    description: 'Belajar pemrograman dasar, desain grafis, perakitan robot, dan multimedia.',
  },
  {
    tag: 'SPIRITUAL',
    title: 'Rohis & Rokris',
    description: 'Pembinaan kerohanian, pendalaman iman, dan toleransi antar umat beragama.',
  }
];

export const Ekstrakurikuler: React.FC = () => {
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
            Kegiatan Ekstrakurikuler
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Daftar unit kegiatan siswa untuk mengasah potensi non-akademik di luar jam belajar.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Grid Layout for Ekstrakurikuler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EKSKUL_DATA.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-100 rounded-[20px] p-6 shadow-sm hover:shadow-md hover:border-brand-red/30 transition-all duration-300 flex flex-col h-full group"
              >
                <div className="mb-4">
                  <span className="inline-block bg-red-50 text-brand-red text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md mb-1">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </div>
  );
};
