import React from 'react';
import { motion } from 'motion/react';

const EKSKUL_DATA = [
  {
    title: 'OSIS',
    image: '/assets/osis1.jpg',
    description: 'Wadah bagi siswa untuk melatih kepemimpinan, berorganisasi, serta menyalurkan minat dan bakat.',
  },
  {
    title: 'Paskibraka',
    image: '/assets/paskibraka.jpg',
    description: 'Melatih kedisiplinan tingkat tinggi, baris-berbaris, fisik mental, serta memupuk rasa nasionalisme.',
  },
  {
    title: 'Pramuka',
    image: '/assets/pramuka.jpg',
    description: 'Pendidikan kepanduan untuk membentuk karakter tangguh, kemandirian, dan menanamkan kerja sama tim.',
  },
  {
    title: 'PMR',
    image: '/assets/pmr.jpg',
    description: 'Wadah siswa berlatih pertolongan pertama dan menumbuhkan jiwa kemanusiaan.',
  },
  {
    title: 'Olahraga',
    image: '/assets/olahraga1.jpg',
    description: 'Meningkatkan kebugaran jasmani, sportivitas, dan bakat siswa di bidang olahraga.',
  },
  {
    title: 'English Club',
    image: '/assets/englishclub.jpg',
    description: 'Wadah siswa mengembangkan keterampilan berbahasa Inggris melalui diskusi dan kegiatan interaktif yang menyenangkan.',
  }
];

export const Ekstrakurikuler: React.FC = () => {
  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
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
            Organisasi & Ekstrakurikuler
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Wadah kegiatan utama siswa untuk mengasah potensi kepemimpinan dan non-akademik di luar jam belajar.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[16px] sm:rounded-[24px] p-5 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Grid Layout for Ekstrakurikuler */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {EKSKUL_DATA.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-[16px] sm:rounded-[24px] aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
                {/* Gradient overlay - kept tight so photo is visible */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-navy via-brand-navy/70 to-transparent pointer-events-none"></div>
                
                {/* Text Content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-xl sm:text-2xl font-display mb-2 sm:mb-3 group-hover:text-blue-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-blue-50 text-[11px] sm:text-xs leading-snug opacity-90 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </div>
  );
};
