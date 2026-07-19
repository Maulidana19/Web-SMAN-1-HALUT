import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Users, GraduationCap, Building, Briefcase } from 'lucide-react';
import { ComingSoonModal } from './ComingSoonModal';

export const Alumni: React.FC = () => {
  const stats = [
    { label: 'Perguruan Tinggi Negeri (PTN)', percent: 45, color: 'bg-blue-600', icon: GraduationCap },
    { label: 'Perguruan Tinggi Swasta (PTS) Terkemuka', percent: 30, color: 'bg-emerald-500', icon: Building },
    { label: 'Kedinasan / TNI / POLRI', percent: 15, color: 'bg-orange-500', icon: Users },
    { label: 'Wirausaha & Memasuki Dunia Kerja', percent: 10, color: 'bg-slate-500', icon: Briefcase },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Ikatan Alumni SMANSA
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Ruang komunikasi antarlintas generasi alumni dan pelacakan jejak karir lulusan.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left: Tracer Study Card */}
            <div className="bg-slate-50 border border-slate-100 rounded-[20px] p-8 flex flex-col justify-between h-full relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-navy/5 rounded-full group-hover:scale-[2] transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-brand-navy mb-4 font-display">Tracer Study Alumni</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
                  Mohon kesediaan alumni SMAN 1 Halmahera Utara untuk mengisi survei penelusuran lulusan demi peningkatan mutu pendidikan dan kemitraan industri.
                </p>
              </div>

              <div className="relative z-10 mt-auto">
                <button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto bg-brand-navy hover:bg-brand-red text-white font-bold text-sm py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300 shadow-md">
                  ISI FORMULIR TRACER <ExternalLink size={16} />
                </button>
              </div>
            </div>

            {/* Right: Statistics */}
            <div className="bg-white border border-slate-100 rounded-[20px] p-8 shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-brand-navy mb-8 font-display">Statistik Lulusan Terakhir (Estimasi)</h3>
              
              <div className="space-y-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="group cursor-default">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                        <stat.icon size={16} className="text-slate-400 group-hover:text-brand-navy transition-colors" />
                        <span>{stat.label}</span>
                      </div>
                      <span className="text-brand-navy font-bold text-sm">{stat.percent}%</span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden relative">
                      {/* Animated Fill */}
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stat.percent}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className={`h-full rounded-full ${stat.color} relative overflow-hidden`}
                      >
                        {/* Shimmer effect inside the bar using standard tailwind translate */}
                        <motion.div 
                          initial={{ x: "-100%" }}
                          animate={{ x: "200%" }}
                          transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 1 }}
                          className="absolute top-0 left-0 w-full h-full bg-white/30 skew-x-[-20deg]"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};
