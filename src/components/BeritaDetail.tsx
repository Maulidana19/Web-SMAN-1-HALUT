import React from 'react';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { NEWS_DATA } from '../data';

interface BeritaDetailProps {
  newsId: string | null;
  onBack: () => void;
}

export const BeritaDetail: React.FC<BeritaDetailProps> = ({ newsId, onBack }) => {
  const news = NEWS_DATA.find((n) => n.id === newsId) || NEWS_DATA[0];

  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-brand-navy hover:text-brand-red font-bold text-sm mb-8 transition-colors cursor-pointer"
        >
          <ArrowLeft size={18} />
          Kembali ke Daftar Berita
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-gray-100"
        >
          {/* Header Image */}
          <div className="w-full aspect-[21/9] sm:aspect-[2/1] relative">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.opacity = '0';
                (e.target as HTMLImageElement).parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-200');
              }}
            />
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-brand-red text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-md shadow-sm">
              BERITA
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            {/* Meta */}
            <div className="flex items-center gap-6 text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">
              <span className="flex items-center gap-2"><User size={16} className="text-brand-red" /> Admin</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-brand-red" /> {news.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6 sm:mb-8 font-display">
              {news.title}
            </h1>

            {/* Content */}
            <div className="prose prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-brand-red">
              {news.content ? (
                news.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 sm:mb-6 text-gray-700 leading-relaxed text-[15px] md:text-[17px] text-justify">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-700 leading-relaxed text-[15px] md:text-[17px] text-justify">{news.excerpt}</p>
              )}
            </div>


          </div>
        </motion.div>
      </div>
    </div>
  );
};
