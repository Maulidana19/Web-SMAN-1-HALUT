import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Heart, Shield, HelpCircle } from 'lucide-react';
import { SCHOOL_INFO, TESTIMONIALS_DATA } from '../data';

export const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const coreValues = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Prestasi Unggul",
      desc: "Mendorong seluruh civitas akademika untuk mencapai potensi terbaik mereka di bidang akademik dan non-akademik."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Karakter Mulia",
      desc: "Membina akhlak, integritas, kedisiplinan, dan rasa hormat yang mendalam berlandaskan nilai pancasila."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Kepedulian Sosial",
      desc: "Menanamkan empati, kerja sama tim, serta tanggung jawab sosial terhadap lingkungan sekitar."
    }
  ];

  return (
    <section id="about-section" className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* About Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Tentang Kami</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Membangun Generasi Emas yang Berkarakter & Unggul
          </p>
          <div className="h-1 w-12 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">

          {/* Vision card */}
          <motion.div
            id="vision-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 sm:p-10 rounded-2xl shadow-xl shadow-blue-900/10 relative overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full" />
            <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full" />

            <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2 border-b border-white/20 pb-4 font-display">
              <span>Visi Sekolah</span>
            </h3>
            <p className="text-lg sm:text-xl font-medium leading-relaxed italic">
              "{SCHOOL_INFO.vision}"
            </p>
          </motion.div>

          {/* Mission list */}
          <motion.div
            id="mission-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 font-display">
              <span className="text-blue-600">Misi Sekolah</span>
            </h3>
            <div className="space-y-4">
              {SCHOOL_INFO.missions.map((mission, index) => (
                <div key={index} className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200">
                  <div className="mt-0.5 text-blue-600 flex-shrink-0">
                    <CheckCircle2 size={20} className="stroke-2" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                    {mission}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Principal Message Row */}
        <div id="principal-section" className="bg-white border border-slate-100 shadow-sm rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24">

          {/* Principal Portrait */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="w-48 sm:w-56 aspect-[3/4] bg-white p-3 rounded-2xl shadow-lg border border-slate-100 relative">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-50 flex items-center justify-center relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0">
                  <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="font-bold text-[10px] tracking-wide">kepalasekolah.jpg</span>
                </div>
                <img
                  src="/assets/kepalasekolah.jpg"
                  alt="Foto Kepala Sekolah"
                  className="absolute inset-0 w-full h-full object-cover z-10"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold text-slate-800 font-display">{SCHOOL_INFO.principal.name}</h4>
              <p className="text-xs font-medium text-slate-500 mt-0.5">{SCHOOL_INFO.principal.role}</p>
            </div>
          </div>

          {/* Principal Message Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="text-3xl text-blue-300 font-serif leading-none h-3 select-none">“</span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4 font-display">
              Sambutan Kepala Sekolah
            </h3>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic mb-4">
              {SCHOOL_INFO.principal.message}
            </p>
            <span className="text-3xl text-blue-300 font-serif leading-none h-3 text-right select-none -mt-2">”</span>
          </div>

        </div>

        {/* Leadership Team Row (4 Frames) */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Jajaran Wakil Kepala Sekolah</h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Tim pimpinan yang berdedikasi mendukung kelancaran operasional dan akademik sekolah.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: idx * 0.1 } }}
                whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-md hover:shadow-2xl hover:border-blue-300 transition-colors transition-shadow duration-300 group text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 w-full aspect-[3/4] bg-slate-50 rounded-xl overflow-hidden mb-5 border-4 border-white shadow-md flex items-center justify-center">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 z-0">
                    <svg className="w-10 h-10 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="font-bold text-[10px] tracking-wide">waka{idx}.jpg</span>
                  </div>
                  <img
                    src={`/src/assets/waka${idx}.jpg`}
                    alt={`Wakil Kepala Sekolah ${idx}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-20"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <h3 className="font-bold text-slate-900 text-base mb-1 font-display leading-tight">
                    {['Fendy V. Hitipeuw, S.Pd.', 'Donal R. Ollo, S.Pd.', 'Thomas Salfister Matrutty, S.Pd.', 'Reny Uktolseja, S.E., S.Pd.'][idx - 1]}
                  </h3>
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide">
                    {['Bidang Kurikulum', 'Bidang Kesiswaan', 'Bidang Sarpras', 'Bidang Humas'][idx - 1]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values / Pillar Section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Nilai-Nilai Utama Kami</h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Pilar utama yang menuntun segenap proses belajar dan mengajar di sekolah kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 group text-left"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-6">
                  {val.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-display">
                  {val.title}
                </h4>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Apa Kata Mereka?</h3>
            <p className="text-slate-500 text-sm sm:text-base mt-2">Ulasan jujur dari alumni, orang tua siswa, dan siswa aktif kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={t.id}
                className="bg-[#f1f5f9]/50 border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between text-left hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300"
              >
                <p className="text-slate-600 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  {/* Avatar Image Frame */}
                  <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-sm shadow-md flex-shrink-0 overflow-hidden border-2 border-white relative">
                    <img
                      src={`/src/assets/${['mahasiswa.png', 'orangtua.png', 'siswa.png'][idx]}`}
                      alt={`Foto ${t.name}`}
                      className="absolute inset-0 w-full h-full object-cover z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    <div className="absolute inset-0 bg-blue-600 text-white font-bold flex items-center justify-center text-sm z-0">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 leading-none">{t.name}</h5>
                    <span className="text-xs text-slate-500 mt-1 block font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
