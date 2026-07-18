import React from 'react';
import { SCHOOL_INFO } from '../data';
import { CheckCircle2, Quote, Award, Shield, Heart, Target, Compass } from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <Award className="w-6 h-6 sm:w-10 sm:h-10 text-brand-red" />,
      title: "Prestasi Unggul",
      desc: "Mendorong seluruh civitas akademika untuk mencapai potensi terbaik di berbagai bidang."
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-10 sm:h-10 text-brand-red" />,
      title: "Karakter Mulia",
      desc: "Membina akhlak, integritas, dan kedisiplinan sebagai landasan utama pendidikan."
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-10 sm:h-10 text-brand-red" />,
      title: "Kepedulian Sosial",
      desc: "Menanamkan empati, kerja sama, dan rasa tanggung jawab sosial kepada lingkungan."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 sm:w-10 sm:h-10 text-brand-red" />,
      title: "Inovasi Belajar",
      desc: "Menerapkan metode pembelajaran adaptif yang terintegrasi dengan teknologi terkini."
    }
  ];

  return (
    <div id="about" className="bg-gray-50">
      
      {/* 0. HERO SECTION */}
      <div className="relative pt-16 sm:pt-20 pb-28 sm:pb-36 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/utama.jpg" 
            alt="Profil SMAN 1 Halmahera Utara" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-navy/70 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-brand-navy/20 to-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 mb-6 shadow-lg">
            PROFIL SEKOLAH
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-6 drop-shadow-lg">
            Mengenal Lebih Dekat SMAN 1 Halmahera Utara
          </h1>
          <p className="text-sm sm:text-base text-blue-50 mt-4 max-w-2xl mx-auto drop-shadow-md">
            Berdedikasi membentuk generasi unggul, berkarakter mulia, dan siap menghadapi tantangan masa depan melalui pendidikan yang inovatif.
          </p>
        </div>
      </div>

      {/* 1. SAMBUTAN KEPALA SEKOLAH */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 relative z-20 mb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
          
          {/* Decorative quote marks */}
          <Quote className="absolute top-12 right-12 w-32 h-32 text-gray-50 opacity-50 rotate-180" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Foto Kepsek */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-[240px] sm:max-w-[260px] lg:max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6 border-[6px] border-gray-50 relative">
                <div className="absolute inset-0 bg-gray-100 animate-pulse -z-10"></div>
                <img 
                  src="/assets/foto1.jpg" 
                  alt={SCHOOL_INFO.principal.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-slate-900 text-lg sm:text-xl font-display">{SCHOOL_INFO.principal.name}</h4>
                <p className="text-blue-600 text-xs sm:text-sm font-semibold uppercase tracking-wide mt-1">{SCHOOL_INFO.principal.role}</p>
              </div>
            </div>

            {/* Pesan Kepsek */}
            <div className="md:col-span-7 lg:col-span-8">
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-bold font-display text-slate-900 mb-6 flex items-center gap-2 sm:gap-3">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 shrink-0" />
                Sambutan Kepala Sekolah
              </h3>
              <div className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed italic space-y-4 text-justify">
                <p>"{SCHOOL_INFO.principal.message}"</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. VISI & MISI SECTION - NEW LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Image */}
            <div className="w-full aspect-[16/9] lg:aspect-auto lg:flex-1 rounded-3xl overflow-hidden shadow-lg relative bg-gray-100 group">
              <img 
                src="/assets/visi.jpg" 
                alt="Fasilitas SMA" 
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
            
            {/* Visi Box (Red) */}
            <div className="bg-brand-red text-white p-8 sm:p-10 rounded-3xl shadow-lg shrink-0 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white/20 text-white rounded-2xl flex items-center justify-center">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold font-display tracking-wide">Visi Sekolah</h3>
              </div>
              <p className="text-base sm:text-lg font-medium leading-relaxed italic text-red-50">
                "{SCHOOL_INFO.vision}"
              </p>
            </div>
          </div>

          {/* Right Column (Misi Box - Blue) */}
          <div className="lg:col-span-7 bg-brand-navy text-white p-8 sm:p-12 rounded-3xl shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white/10 text-white rounded-2xl flex items-center justify-center">
                <Compass size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-wide">Misi Sekolah</h3>
            </div>
            
            <div className="space-y-6 flex-1">
              {SCHOOL_INFO.missions.map((misi, idx) => (
                <div key={idx} className="flex gap-5 items-start group/misi">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20 text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover/misi:text-white transition-colors duration-300">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 3. JAJARAN PIMPINAN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">JAJARAN PIMPINAN</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Tim Wakil Kepala Sekolah
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[1, 2, 3, 4].map((idx) => {
            const names = ['Fendy V. Hitipeuw, S.Pd.', 'Donal R. Ollo, S.Pd.', 'Thomas S. Matrutty, S.Pd.', 'Reny Uktolseja, S.E., S.Pd.'];
            const roles = ['Bidang Kurikulum', 'Bidang Kesiswaan', 'Bidang Sarpras', 'Bidang Humas'];
            return (
              <div key={idx} className="relative group cursor-pointer overflow-hidden bg-brand-navy">
                <div className="aspect-[3/4] w-full">
                  <img 
                    src={`/assets/waka${idx}.jpg`} 
                    alt={`Wakil Kepala Sekolah ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  {/* Overlay only for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6">
                  <h3 className="text-white font-bold text-sm sm:text-lg font-display mb-0.5 sm:mb-1 leading-tight">{names[idx-1]}</h3>
                  <p className="text-blue-200 text-[9px] sm:text-xs font-medium uppercase tracking-wider">{roles[idx-1]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. MENGAPA SMAN 1 HALUT (Core Values) */}
      <div className="bg-white pt-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Title & Description */}
          <div className="w-full mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-brand-red text-xs font-bold uppercase tracking-widest">MENGAPA SMAN 1 HALUT?</span>
              <div className="h-[2px] w-16 bg-brand-red/30"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display leading-[1.15]">
              Pilihan Tepat Untuk Masa Depan Pendidikan Anda
            </h2>
          </div>

          {/* Bottom Section: Image & Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
            
            {/* Image Left */}
            <div className="lg:col-span-5 relative flex flex-col">
              {/* Blue Decorative Box behind image */}
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-navy z-0 hidden sm:block"></div>
              
              <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:flex-1 relative z-10 overflow-hidden shadow-xl bg-gray-100">
                <img 
                  src="/assets/model.jpg" 
                  alt="Siswa SMAN 1 Halut" 
                  className="w-full h-full object-cover lg:absolute lg:inset-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
            </div>

            {/* Grid Right */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {coreValues.map((val, idx) => (
                <div key={idx} className="bg-slate-50 p-4 sm:p-8 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                  <div className="mb-3 sm:mb-4">
                    {val.icon}
                  </div>
                  <h4 className="font-bold text-sm sm:text-xl text-slate-900 mb-2 sm:mb-4 font-display leading-snug">{val.title}</h4>
                  <p className="text-gray-500 text-[10px] sm:text-sm leading-relaxed flex-1">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

