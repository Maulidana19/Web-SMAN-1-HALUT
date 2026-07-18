import React from 'react';

export const AchievementsHighlight: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3">PRESTASI SISWA</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
            Kembangkan Bakat & Ukir Prestasi Terbaik
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Siswa-siswi SMAN 1 Halmahera Utara terus menorehkan prestasi membanggakan di berbagai bidang, <br className="hidden md:block" />
            baik di tingkat regional maupun nasional, sebagai wujud nyata dari dedikasi dan pendidikan karakter unggul.
          </p>
        </div>

        {/* 2 Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Lomba Lari */}
          <div className="group flex flex-col overflow-hidden cursor-pointer shadow-md border border-gray-100 bg-white">
            <div className="relative w-full aspect-video overflow-hidden">
              <img 
                src="/assets/prestasi1.jpg" 
                alt="Lomba Lari" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-200');
                }}
              />
            </div>
            {/* Content Box */}
            <div className="relative mt-auto w-full bg-white group-hover:bg-brand-navy transition-colors duration-300 p-8">
              <h3 className="text-slate-900 group-hover:text-white transition-colors font-bold text-xl sm:text-2xl font-display mb-3">Prestasi di Ajang Lomba Lari</h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm leading-relaxed line-clamp-2">
                Siswa kami terus berprestasi dengan menunjukkan kecepatan dan semangat juang yang tinggi dalam setiap ajang kejuaraan atletik.
              </p>
            </div>
          </div>

          {/* Card 2: Lomba Pencak Silat */}
          <div className="group flex flex-col overflow-hidden cursor-pointer shadow-md border border-gray-100 bg-white">
            <div className="relative w-full aspect-video overflow-hidden">
              <img 
                src="/assets/prestasi2.jpg" 
                alt="Lomba Pencak Silat" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                  (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-200');
                }}
              />
            </div>
            {/* Content Box */}
            <div className="relative mt-auto w-full bg-white group-hover:bg-brand-navy transition-colors duration-300 p-8">
              <h3 className="text-slate-900 group-hover:text-white transition-colors font-bold text-xl sm:text-2xl font-display mb-3">Kejuaraan Pencak Silat Pelajar</h3>
              <p className="text-gray-600 group-hover:text-blue-100 transition-colors text-sm leading-relaxed line-clamp-2">
                Menjunjung tinggi sportivitas dan nilai tradisi beladiri, siswa-siswi kami selalu tampil maksimal di berbagai kompetisi pencak silat.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
