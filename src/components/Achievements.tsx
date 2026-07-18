import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Calendar, Medal, Star, Target } from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data';

export const Achievements: React.FC = () => {
  // Helper to color code category badges
  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case 'akademik':
        return 'bg-red-50 text-brand-red border-red-200';
      case 'olahraga':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'kesenian':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'akademik':
        return <Star className="w-4 h-4" />;
      case 'olahraga':
        return <Target className="w-4 h-4" />;
      case 'kesenian':
        return <Medal className="w-4 h-4" />;
      default:
        return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <section id="achievements-section" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Prestasi & Penghargaan</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Tradisi Juara yang Terus Berlanjut
          </p>
          <div className="h-1 w-12 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Berbagai pencapaian prestisius yang berhasil diukir oleh putra-putri terbaik SMAN 1 Harapan Bangsa di kancah daerah, nasional, maupun internasional.
          </p>
        </div>

        {/* Timeline/Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
          {ACHIEVEMENTS_DATA.map((ach, idx) => (
            <motion.div
              key={ach.id}
              id={`achievement-card-${ach.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:translate-y-[-4px] hover:border-brand-red/30 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group"
            >
              {/* Decorative faint background trophy */}
              <div className="absolute right-0 bottom-0 translate-x-6 translate-y-6 text-slate-100/40 group-hover:text-red-50/50 transition-colors duration-300 -z-0">
                <Trophy size={160} className="stroke-1" />
              </div>

              <div className="relative z-10">
                {/* Year + Category Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold">
                    <Calendar size={16} className="text-brand-red" />
                    <span>Tahun {ach.year}</span>
                  </div>
                  
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full border ${getCategoryStyles(ach.category)}`}>
                    {getCategoryIcon(ach.category)}
                    {ach.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-red transition-colors leading-snug font-display">
                  {ach.title}
                </h3>
                
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {ach.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-8 pt-4 border-t border-slate-50 relative z-10 flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Prestasi Tingkat Nasional</span>
                <Trophy size={12} className="stroke-2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivation Board */}
        <div className="bg-[#f1f5f9]/50 rounded-2xl p-8 text-center max-w-4xl mx-auto border border-slate-100">
          <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed">
            "Bukan hanya medali atau piala yang kami kejar, melainkan proses, daya juang, sportivitas, dan integritas kepribadian yang terbentuk di balik setiap perjuangan prestasi."
          </p>
          <span className="block text-xs font-bold text-brand-red uppercase tracking-widest mt-3">— Dewan Pembina Prestasi Siswa</span>
        </div>

      </div>
    </section>
  );
};
