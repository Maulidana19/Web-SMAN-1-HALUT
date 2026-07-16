import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_DATA } from '../data';

export const NewsSection: React.FC = () => {
  return (
    <section id="news-section" className="pt-8 sm:pt-12 pb-16 sm:pb-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Kabar Terkini</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Berita & Informasi Terbaru
            </p>
            <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
            <p className="text-slate-500 text-sm sm:text-base mt-4">
              Ikuti perkembangan terbaru, kegiatan sekolah, dan prestasi siswa-siswi SMA Negeri 1 Halmahera Utara.
            </p>
          </div>
        </div>

        {/* 3 Column Grid for News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((news, idx) => (
            <motion.a
              key={news.id}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-video bg-slate-100 overflow-hidden">
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                    (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-200');
                    (e.target as HTMLImageElement).parentElement!.innerHTML = '<div class="text-slate-400 text-sm font-semibold flex flex-col items-center"><svg class="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>Gambar Berita ' + (idx + 1) + '</div>';
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 mb-3 uppercase tracking-wider">
                  <Calendar size={14} />
                  <span>{news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-600 transition-colors font-display line-clamp-2">
                  {news.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-slate-500 line-clamp-3 mb-6 flex-grow">
                  {news.excerpt}
                </p>

                {/* Read More Link */}
                <div className="mt-auto flex items-center gap-1.5 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Baca Selengkapnya 
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
