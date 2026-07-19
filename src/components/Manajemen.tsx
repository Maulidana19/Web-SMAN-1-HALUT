import React from 'react';
import { motion } from 'motion/react';
import { Layers, Users } from 'lucide-react';

export const Manajemen: React.FC = () => {
  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-red text-xs font-bold uppercase tracking-widest block mb-3"
          >
            MANAJEMEN
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight"
          >
            Manajemen Sekolah
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Sistem tata kelola dan susunan organisasi kepemimpinan SMAN 1 Halmahera Utara yang berdedikasi tinggi untuk memajukan pendidikan.
          </motion.p>
        </div>

        {/* Profil Kepala Sekolah */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Foto */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="w-full max-w-[260px] mx-auto md:mx-0 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border-[6px] border-gray-50 bg-gray-100 relative">
                <img 
                  src="/assets/foto1.jpg" 
                  alt="Ellen Sintya Dewi"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
            </div>
            
            {/* Profil Teks */}
            <div className="md:col-span-8 lg:col-span-9">
              <div className="mb-6 border-b border-gray-100 pb-4 text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-1">
                  Ellen Sintya Dewi, S.Pd., M.Si.
                </h3>
                <p className="text-brand-red text-sm font-bold uppercase tracking-wide">
                  Kepala SMA Negeri 1 Halmahera Utara
                </p>
              </div>
              <div className="text-gray-600 text-sm sm:text-[15px] leading-relaxed space-y-4 text-justify">
                <p>
                  Ellen Sintya Dewi merupakan seorang pendidik yang telah mengabdikan diri dalam dunia pendidikan selama kurang lebih 19 tahun. Sebagai guru Kimia dan Kepala SMA Negeri 1 Halmahera Utara, ia memiliki komitmen kuat terhadap peningkatan mutu pembelajaran, pengembangan profesionalisme guru, serta pembentukan karakter peserta didik.
                </p>
                <p>
                  Dalam kepemimpinannya, ia berupaya membangun SMA Negeri 1 Halmahera Utara sebagai sekolah yang aman, inklusif, disiplin, inovatif, dan berpihak pada kebutuhan peserta didik. Ia meyakini bahwa sekolah tidak hanya bertugas mengembangkan kemampuan akademik, tetapi juga menumbuhkan karakter, kemandirian, kreativitas, kepedulian sosial, dan kesiapan peserta didik menghadapi perkembangan zaman.
                </p>
                <p>
                  Saat ini, Ellen Sintya Dewi juga sedang menempuh pendidikan doktoral pada Program Studi Ilmu Pendidikan Universitas Negeri Yogyakarta. Pengembangan akademiknya berfokus pada peningkatan kompetensi guru, komunitas belajar, praktik reflektif, dan implementasi pembelajaran mendalam.
                </p>
                <p>
                  Dengan semangat kolaborasi, keterbukaan, dan pelayanan, ia berkomitmen membawa SMA Negeri 1 Halmahera Utara menjadi sekolah yang terus bertumbuh, berprestasi, adaptif, serta mampu menghasilkan generasi yang beriman, berkarakter, kompeten, dan bermanfaat bagi masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tim Wakil Kepala Sekolah */}
        <div className="mb-10 sm:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((idx) => {
              const names = ['Fendy V. Hitipeuw, S.Pd.', 'Donal R. Ollo, S.Pd.', 'Thomas S. Matrutty, S.Pd.', 'Reny Uktolseja, S.E., S.Pd.'];
              const roles = ['Bidang Kurikulum', 'Bidang Kesiswaan', 'Bidang Sarpras', 'Bidang Humas'];
              return (
                <div key={idx} className="relative group cursor-pointer overflow-hidden bg-brand-navy rounded-2xl">
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={`/assets/waka${idx}.jpg`} 
                      alt={`Wakil Kepala Sekolah ${idx}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-3 sm:p-6">
                    <h3 className="text-white font-bold text-xs sm:text-lg font-display mb-0.5 sm:mb-1 leading-tight">{names[idx-1]}</h3>
                    <p className="text-blue-200 text-[8px] sm:text-xs font-medium uppercase tracking-wider">{roles[idx-1]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Struktur Organisasi Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-[16px] sm:rounded-[24px] p-5 sm:p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col h-full"
          >
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-brand-navy">Struktur Organisasi Sekolah</h4>
            </div>
            <p className="text-gray-500 text-xs sm:text-[14px] md:text-[15px] leading-snug sm:leading-relaxed font-medium mb-5 sm:mb-8">
              Bagan pembagian komando kepemimpinan serta tanggung jawab administratif internal SMAN 1 Halmahera Utara.
            </p>
            
            {/* Inner box */}
            <div className="mt-auto bg-slate-50 border border-slate-200 border-dashed rounded-xl p-5 sm:p-8 flex flex-col items-center justify-center text-center h-32 sm:h-48">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400 mb-2 sm:mb-3" />
              <span className="text-slate-600 font-bold text-[11px] sm:text-[13px] uppercase tracking-wider mb-1">Bagan Organisasi Digital</span>
              <span className="text-slate-400 text-[10px] sm:text-[12px]">Sedang dalam proses penyusunan bagan grafis terbaru.</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
