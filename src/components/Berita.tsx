import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User } from 'lucide-react';
import { NEWS_DATA } from '../data';

export const Berita: React.FC = () => {
  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-6xl mx-auto mb-12 md:mb-16">
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
            Ikuti Berita dan Acara Terbaru di Lingkungan Sekolah Kami
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Dapatkan informasi terkini seputar kegiatan akademik, non-akademik, dan prestasi yang diraih oleh siswa-siswi SMA Negeri 1 Halmahera Utara.
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* 3 Column Grid for News */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {NEWS_DATA.map((news, idx) => (
              <a
                key={news.id}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-slate-50 hover:bg-brand-red transition-colors duration-300 overflow-hidden shadow-sm rounded-[20px] border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                      (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-200');
                    }}
                  />
                  {/* Red Label */}
                  <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-md shadow-sm">
                    BERITA
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 group-hover:text-red-100 mb-4 uppercase tracking-wider transition-colors">
                    <span className="flex items-center gap-1.5"><User size={14} /> Admin</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {news.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-white transition-colors font-display line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 line-clamp-3 group-hover:text-red-50 transition-colors">
                    {news.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
