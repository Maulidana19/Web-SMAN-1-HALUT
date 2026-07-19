import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  'Semua', 
  'Kegiatan Guru', 
  'Kegiatan Tendik', 
  'Kegiatan Sekolah', 
  'Kunjungan Kerja', 
  'MPLS', 
  'Rapat Orang Tua', 
  'SPMB'
];

const GALLERY_DATA = [
  { id: 1, title: 'MGMP Tiap Semester', desc: 'Kegiatan MGMP.', category: 'Kegiatan Guru', image: '/assets/galleryG1.jpg' },
  { id: 2, title: 'Piket Rutin', desc: 'Piket rutin guru.', category: 'Kegiatan Guru', image: '/assets/galleryG2.jpg' },
  { id: 3, title: 'Upacara Bendera', desc: 'Upacara bendera guru.', category: 'Kegiatan Guru', image: '/assets/galleryG3.jpg' },
  { id: 4, title: 'Apel Pagi Rutin', desc: 'Apel pagi rutin guru.', category: 'Kegiatan Guru', image: '/assets/galleryG4.jpg' },
  { id: 5, title: 'Rapat Rutin', desc: 'Rapat rutin bulanan.', category: 'Kegiatan Guru', image: '/assets/galleryG5.jpg' },
  { id: 6, title: 'Optimalisasi Tugas dan Fungsi Tendik', desc: 'Optimalisasi tugas tendik.', category: 'Kegiatan Tendik', image: '/assets/galleryT1.jpg' },
  { id: 7, title: 'Optimalisasi Tugas dan Fungsi Tendik', desc: 'Optimalisasi tugas tendik.', category: 'Kegiatan Tendik', image: '/assets/galleryT2.jpg' },
  { id: 8, title: 'Fun Run', desc: 'Kegiatan olahraga bersama.', category: 'Kegiatan Sekolah', image: '/assets/galleryS1.jpg' },
  { id: 9, title: 'Market Day', desc: 'Kegiatan kewirausahaan siswa.', category: 'Kegiatan Sekolah', image: '/assets/galleryS2.jpg' },
  { id: 10, title: 'OSN Kabupaten', desc: 'Olimpiade Sains Nasional tingkat kabupaten.', category: 'Kegiatan Sekolah', image: '/assets/galleryS3.jpg' },
  { id: 11, title: 'Kunjungan KADIS PENDIDIKAN Prov Maluku Utara', desc: 'Kunjungan kerja dinas pendidikan.', category: 'Kunjungan Kerja', image: '/assets/galleryKK1.jpg' },
  { id: 12, title: 'Kunjungan KADIS PENDIDIKAN Prov Maluku Utara', desc: 'Kunjungan kerja dinas pendidikan.', category: 'Kunjungan Kerja', image: '/assets/galleryKK2.jpg' },
  { id: 13, title: '', desc: '', category: 'MPLS', image: '/assets/galleryM1.jpg' },
  { id: 14, title: '', desc: '', category: 'MPLS', image: '/assets/galleryM2.jpg' },
  { id: 15, title: '', desc: '', category: 'MPLS', image: '/assets/galleryM3.jpg' },
  { id: 16, title: '', desc: '', category: 'MPLS', image: '/assets/galleryM4.jpg' },
  { id: 17, title: '', desc: '', category: 'Rapat Orang Tua', image: '/assets/galleryR1.jpg' },
  { id: 18, title: '', desc: '', category: 'Rapat Orang Tua', image: '/assets/galleryR2.jpg' },
  { id: 19, title: '', desc: '', category: 'SPMB', image: '/assets/gallerySP1.jpg' },
  { id: 20, title: '', desc: '', category: 'SPMB', image: '/assets/gallerySP2.jpg' },
  { id: 21, title: '', desc: '', category: 'SPMB', image: '/assets/gallerySP3.jpg' },
];

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  const filteredGallery = activeTab === 'Semua' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeTab);

  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
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
            Galeri Kegiatan Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Dokumentasi visual berbagai aktivitas dan kegiatan di lingkungan SMAN 1 Halmahera Utara.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 relative">
          <div className="w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex sm:justify-center w-max sm:w-auto px-4 sm:px-0 mx-auto">
              <div className="inline-flex bg-slate-100/80 p-1 rounded-full relative shadow-inner">
                {CATEGORIES.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(cat)}
                    className={`relative z-10 px-4 sm:px-6 py-2 text-xs sm:text-sm rounded-full font-bold transition-colors duration-300 whitespace-nowrap ${
                      activeTab === cat ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {cat}
                    {activeTab === cat && (
                      <motion.div
                        layoutId="activeTabIndicatorGallery"
                        className="absolute inset-0 bg-brand-navy rounded-full -z-10 shadow-md shadow-brand-navy/30"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile Swipe Indicator */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-slate-400 text-xs font-medium animate-pulse">
            <span>Geser untuk melihat kategori lain</span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative ${
                  item.category === 'Rapat Orang Tua' ? 'aspect-[3/4]' : 'aspect-video'
                } overflow-hidden bg-black cursor-pointer shadow-sm hover:shadow-xl transition-shadow`}
              >
                {/* Background Image */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                    (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-300');
                  }}
                />
                
                {item.title && (
                  <>
                    {/* Short Dark Gradient Overlay for Title */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Title Content */}
                    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5">
                      <h3 className="text-white font-bold text-sm sm:text-base font-display mb-0">{item.title}</h3>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-medium">Belum ada foto untuk kategori ini.</p>
          </div>
        )}

      </div>
    </div>
  );
};
