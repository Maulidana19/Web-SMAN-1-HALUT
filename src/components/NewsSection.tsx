import React from 'react';
import { Calendar, User } from 'lucide-react';
import { NEWS_DATA } from '../data';

export const NewsSection: React.FC = () => {
  return (
    <section id="news-section" className="pt-20 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3">BERITA TERKINI</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
            Ikuti Berita dan Acara Terbaru di Lingkungan Sekolah Kami
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Dapatkan informasi terkini seputar kegiatan akademik, non-akademik, dan prestasi yang diraih oleh siswa-siswi SMA Negeri 1 Halmahera Utara.
          </p>
        </div>

        {/* 3 Column Grid for News */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_DATA.map((news, idx) => (
            <a
              key={news.id}
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-gray-50 hover:bg-brand-red transition-colors duration-300 overflow-hidden shadow-sm"
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
                <div className="absolute top-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  BERITA
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 group-hover:text-red-100 mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><User size={14} /> Admin</span>
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {news.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-white transition-colors font-display line-clamp-2">
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
      </div>
    </section>
  );
};
