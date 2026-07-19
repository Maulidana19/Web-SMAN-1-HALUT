import React from 'react';

const facilities = [
  {
    title: 'Ruang Guru',
    desc: 'Fasilitas ruang guru yang nyaman dan memadai untuk mendukung kinerja serta kreativitas para pendidik.',
    image: '/assets/sarana1.jpg'
  },
  {
    title: 'Perpustakaan',
    desc: 'Pusat sumber belajar dengan koleksi buku lengkap, mendukung minat literasi dan eksplorasi ilmu siswa.',
    image: '/assets/sarana2.jpg'
  },
  {
    title: 'Lapangan Olahraga',
    desc: 'Area terbuka yang luas untuk menunjang kegiatan olahraga, upacara, dan berbagai aktivitas ekstrakurikuler.',
    image: '/assets/sarana3.jpg'
  },
  {
    title: 'Ruang Komputer',
    desc: 'Laboratorium komputer modern dengan akses internet guna menunjang pembelajaran berbasis teknologi.',
    image: '/assets/sarana4.jpg'
  },
  {
    title: 'Ruang Kelas',
    desc: 'Ruang kelas yang bersih, nyaman, dan representatif untuk memastikan proses belajar mengajar yang kondusif.',
    image: '/assets/sarana5.jpg'
  },
  {
    title: 'Ruang Kelas',
    desc: 'Lingkungan belajar yang terstruktur dengan fasilitas memadai demi tercapainya target kompetensi siswa.',
    image: '/assets/sarana6.jpg'
  }
];

export const FacilitiesSection: React.FC = () => {
  return (
    <section className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3">FASILITAS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
            Sarana & Prasarana Sekolah
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            SMAN 1 Halmahera Utara terus berupaya menyediakan fasilitas terbaik guna menunjang <br className="hidden md:block" />
            perkembangan akademik, keterampilan, dan karakter seluruh siswa dalam lingkungan yang aman dan nyaman.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {facilities.map((fac, idx) => (
            <div key={idx} className="group relative aspect-video overflow-hidden bg-brand-navy cursor-pointer">
              {/* Background Image */}
              <img 
                src={fac.image} 
                alt={fac.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-300');
                }}
              />
              
              {/* Dark Gradient Overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-xl sm:text-2xl font-display mb-2">{fac.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
