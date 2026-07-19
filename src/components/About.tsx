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


      {/* 2. VISI & MISI SECTION - NEW LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
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
            <div className="bg-brand-red text-white p-5 sm:p-10 rounded-[20px] sm:rounded-3xl shadow-lg shrink-0 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 text-white rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display tracking-wide">Visi Sekolah</h3>
              </div>
              <p className="text-sm sm:text-lg font-medium leading-snug sm:leading-relaxed italic text-red-50 text-justify">
                "{SCHOOL_INFO.vision}"
              </p>
            </div>
          </div>

          {/* Right Column (Misi Box - Blue) */}
          <div className="lg:col-span-7 bg-brand-navy text-white p-5 sm:p-12 rounded-[20px] sm:rounded-3xl shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 text-white rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold font-display tracking-wide">Misi Sekolah</h3>
            </div>
            
            <div className="space-y-4 sm:space-y-6 flex-1">
              {SCHOOL_INFO.missions.map((misi, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-5 items-start group/misi">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 border border-white/20 text-white font-bold text-xs sm:text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-gray-300 text-xs sm:text-base leading-snug sm:leading-relaxed group-hover/misi:text-white transition-colors duration-300 text-justify">
                    {misi}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* 2.5. SEJARAH & LOGO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10 space-y-16 mt-16">
        
        {/* Sejarah Singkat */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Left */}
          <div className="lg:col-span-5 relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-gray-100">
              <img 
                src="/assets/utama.jpg" 
                alt="Sejarah SMAN 1 Halut" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="lg:col-span-7">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">SEJARAH</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-4">Sejarah Singkat Sekolah</h3>
            <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4 text-justify">
              <p>SMA Negeri 1 Halmahera Utara didirikan sebagai wujud komitmen pemerintah dan masyarakat dalam memajukan pendidikan di wilayah Halmahera. Sejak awal berdirinya, sekolah ini telah menjadi pusat keunggulan dan pelopor pendidikan menengah atas di daerah ini.</p>
              <p>Seiring berjalannya waktu, SMAN 1 Halmahera Utara terus bertransformasi dengan melengkapi fasilitas akademik dan non-akademik, serta meningkatkan kualitas pendidik, hingga berhasil meraih akreditasi A (Unggul) dan mencetak ribuan alumni yang tersebar di seluruh Indonesia dan mancanegara.</p>
            </div>
          </div>
        </div>

        {/* Arti Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Left */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="w-72 sm:w-80 lg:w-96 aspect-square flex items-center justify-center p-4 relative">
              <div className="absolute inset-0 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
              <img 
                src="/assets/logo.png" 
                alt="Logo SMAN 1 Halut" 
                className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.opacity = '0';
                }}
              />
            </div>
          </div>
          {/* Content Right */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">IDENTITAS VISUAL</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-6">Makna & Arti Logo</h3>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0 shadow-sm"></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">Perisai Segi Lima</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed text-justify">Melambangkan pertahanan diri yang kuat dan dasar negara Pancasila sebagai landasan utama pendidikan karakter siswa.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0 shadow-sm"></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">Buku dan Pena</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed text-justify">Merupakan simbol proses belajar-mengajar yang tak pernah berhenti sebagai sumber utama ilmu pengetahuan dan teknologi.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-2 h-2 rounded-full bg-brand-red mt-2 shrink-0 shadow-sm"></div>
                <div>
                  <h4 className="font-bold text-brand-navy text-sm sm:text-base">Warna Identitas (Biru & Kuning Emas)</h4>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed text-justify">Biru mencerminkan wawasan luas layaknya samudera, sedangkan kuning emas melambangkan masa keemasan, kejayaan, dan prestasi tinggi.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* 3. JAJARAN PIMPINAN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <span className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-2">STRUKTUR KEPEMIMPINAN</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Jajaran Pimpinan
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {[0, 1, 2, 3, 4].map((idx) => {
            const photos = ['/assets/foto1.jpg', '/assets/waka1.jpg', '/assets/waka2.jpg', '/assets/waka3.jpg', '/assets/waka4.jpg'];
            const names = ['Ellen Sintya Dewi, S.Pd., M.Si.', 'Fendy V. Hitipeuw, S.Pd.', 'Donal R. Ollo, S.Pd.', 'Thomas S. Matrutty, S.Pd.', 'Reny Uktolseja, S.E., S.Pd.'];
            const roles = ['Kepala Sekolah', 'Bidang Kurikulum', 'Bidang Kesiswaan', 'Bidang Sarpras', 'Bidang Humas'];
            return (
              <div key={idx} className="relative group cursor-pointer overflow-hidden bg-brand-navy">
                <div className="aspect-[3/4] w-full">
                  <img 
                    src={photos[idx]} 
                    alt={roles[idx]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                  {/* Overlay only for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent pointer-events-none"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-3 sm:p-5">
                  <h3 className="text-white font-bold text-xs sm:text-sm font-display mb-0.5 sm:mb-1 leading-tight">{names[idx]}</h3>
                  <p className="text-blue-200 text-[8px] sm:text-[10px] font-medium uppercase tracking-wider">{roles[idx]}</p>
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

