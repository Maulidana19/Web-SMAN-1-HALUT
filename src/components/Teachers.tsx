import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TEACHERS_DATA, TENDIK_DATA } from '../data';

export const Teachers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guru' | 'tendik'>('guru');
  return (
    <section id="teachers-section" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Guru & Tendik</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Tenaga Pendidik & Kependidikan
          </p>
          <div className="h-1 w-12 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Dibimbing dan didukung oleh tenaga profesional yang kompeten, berpengalaman, dan berdedikasi tinggi di bidangnya masing-masing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100/80 p-1 rounded-full relative shadow-inner">
            <button
              onClick={() => setActiveTab('guru')}
              className={`relative z-10 px-6 py-2 text-sm sm:text-base rounded-full font-bold transition-colors duration-300 ${
                activeTab === 'guru' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Guru
              {activeTab === 'guru' && (
                <motion.div
                  layoutId="activeTabTeachers"
                  className="absolute inset-0 bg-brand-navy rounded-full -z-10 shadow-md shadow-brand-navy/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('tendik')}
              className={`relative z-10 px-6 py-2 text-sm sm:text-base rounded-full font-bold transition-colors duration-300 ${
                activeTab === 'tendik' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Tenaga Kependidikan
              {activeTab === 'tendik' && (
                <motion.div
                  layoutId="activeTabTeachers"
                  className="absolute inset-0 bg-brand-navy rounded-full -z-10 shadow-md shadow-brand-navy/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-8">
          {(activeTab === 'guru' ? TEACHERS_DATA : TENDIK_DATA).map((person, idx) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: (idx % 4) * 0.1 } }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25, delay: 0 } }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-sm sm:shadow-md hover:shadow-2xl hover:border-brand-red/50 transition-colors transition-shadow duration-300 group text-center relative overflow-hidden"
            >
              {/* Animasi latar belakang tipis saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Image Frame (Pas Foto) - Dikembalikan seperti semula */}
              <div className="relative z-10 w-full aspect-[3/4] bg-slate-100 rounded-md sm:rounded-xl overflow-hidden mb-2 sm:mb-3 border-2 border-white shadow-sm flex items-center justify-center">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="text-slate-400 font-bold text-[8px] sm:text-sm text-center px-1 sm:px-4 relative z-10">
                  (Tempat Foto {idx + 1})<br/>
                  <span className="text-[6px] sm:text-[10px] font-normal">
                    {activeTab === 'guru' ? `src/assets/foto${idx + 1}.jpg` : `src/assets/tendik${idx + 1}.jpg`}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="relative z-10 flex flex-col justify-center h-8 sm:h-auto">
                <h3 className="font-bold text-slate-900 text-[10px] sm:text-lg font-display leading-tight line-clamp-2">{person.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
