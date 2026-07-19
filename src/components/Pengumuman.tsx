import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { ComingSoonModal } from './ComingSoonModal';

export const Pengumuman: React.FC = () => {
  const announcements = [
    {
      id: 1,
      tag: 'KESISWAAN',
      title: 'Surat Edaran Pelaksanaan Libur Semester Genap TA 2025/2026',
      date: '15 Juni 2026'
    },
    {
      id: 2,
      tag: 'KURIKULUM',
      title: 'Pengumuman Kelulusan Peserta Didik Kelas XII Angkatan 2026',
      date: '6 Mei 2026'
    },
    {
      id: 3,
      tag: 'HUMAS',
      title: 'Pemberitahuan Rapat Komite Orang Tua Siswa Kelas X Baru',
      date: '12 Juli 2026'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
      <ComingSoonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            INFORMASI PUBLIK
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Pengumuman Resmi Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Surat edaran, agenda pembagian rapor, dan maklumat kedinasan resmi bagi warga sekolah
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[16px] sm:rounded-[24px] p-5 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* List of Announcements - Changed to Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
            {announcements.map((item, idx) => (
              <motion.div 
                key={item.id}
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-6 bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] shadow-sm hover:shadow-md hover:border-brand-red/30 cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative highlight line on hover */}
                <div className="absolute left-0 top-0 h-full w-1 bg-brand-red scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"></div>

                <div className="flex items-start sm:items-center gap-3 sm:gap-5 w-full">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-xl flex items-center justify-center text-brand-red group-hover:scale-110 group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <FileText className="w-5 h-5 sm:w-[22px] sm:h-[22px]" strokeWidth={2} />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-grow">
                    <span className="block text-[9px] sm:text-[10px] font-bold text-brand-red uppercase tracking-widest mb-1">
                      {item.tag}
                    </span>
                    <h3 className="text-brand-navy font-bold text-sm sm:text-lg mb-1 sm:mb-1.5 group-hover:text-brand-red transition-colors leading-snug sm:leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-[11px] sm:text-sm">
                      {item.date}
                    </p>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="flex-shrink-0 self-end sm:self-auto w-8 h-8 sm:w-10 sm:h-10 bg-slate-50 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="text-center pt-5 sm:pt-6 border-t border-slate-50">
            <p className="text-slate-400 text-[11px] sm:text-sm italic">
              Daftar arsip pengumuman resmi lengkap dapat diperoleh melalui Bagian Tata Usaha sekolah.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
