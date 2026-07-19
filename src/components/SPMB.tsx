import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export const SPMB: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pendaftaran Online',
      desc: 'Buat akun di portal SPMB Provinsi dan unggah berkas persyaratan.'
    },
    {
      num: '02',
      title: 'Verifikasi Berkas',
      desc: 'Tim verifikator sekolah memverifikasi dokumen fisik & digital pendaftar.'
    },
    {
      num: '03',
      title: 'Seleksi Berkas',
      desc: 'Pemeringkatan berdasarkan jalur masuk (Domisili, Afirmasi, Prestasi, Mutasi).'
    },
    {
      num: '04',
      title: 'Daftar Ulang',
      desc: 'Calon siswa baru yang lolos melakukan registrasi ulang di sekolah.'
    }
  ];

  return (
    <div className="pt-10 pb-12 sm:pb-20 bg-[#f1f5f9] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
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
            Informasi SPMB Online
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Panduan Sistem Penerimaan Murid Baru (SPMB) SMAN 1 Halmahera Utara
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[16px] sm:rounded-[24px] p-5 sm:p-6 lg:p-8 shadow-sm border border-gray-100"
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white border border-slate-100 rounded-[16px] sm:rounded-[20px] p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group overflow-hidden h-full flex flex-col"
              >
                {/* Watermark Number */}
                <div className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 text-6xl sm:text-8xl font-black text-slate-50 opacity-50 group-hover:text-brand-red/5 group-hover:scale-110 transition-all duration-500 select-none z-0">
                  {step.num}
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="text-base sm:text-lg font-bold text-brand-navy mb-2 sm:mb-3 group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-snug sm:leading-relaxed text-justify">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Banner */}
          <div className="bg-brand-navy rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 font-display">Sudah Siap Melakukan Pendaftaran?</h3>
                <p className="text-blue-100/80 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed max-w-2xl text-justify md:text-left">
                  Pendaftaran resmi SPMB dilakukan melalui portal SPMB Dinas Pendidikan Provinsi Maluku Utara.
                </p>
              </div>
              
              <button 
                onClick={() => window.open('https://spmb.malutprov.go.id', '_blank')}
                className="flex-shrink-0 bg-brand-red hover:bg-red-700 text-white font-bold text-xs sm:text-sm md:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl flex items-center gap-1.5 sm:gap-2 transition-colors duration-300 shadow-md cursor-pointer"
              >
                PORTAL SPMB PROVINSI <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
          {/* SPMB Activities Gallery */}
          <div className="mt-6 sm:mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { 
                  title: 'Rapat Koordinasi SPMB', 
                  image: '/assets/spmb1.jpg',
                  desc: 'Evaluasi panitia bersama kepala sekolah untuk penentuan hasil akhir kelulusan siswa sesuai kuota.'
                },
                { 
                  title: 'Persiapan SPMB', 
                  image: '/assets/spmb2.jpg',
                  desc: 'Rapat awal panitia untuk mempersiapkan seluruh kebutuhan teknis dan administrasi pendaftaran.'
                },
                { 
                  title: 'Pelaksanaan SPMB', 
                  image: '/assets/spmb3.jpg',
                  desc: 'Proses seleksi penerimaan murid baru, tes tertulis, hingga wawancara yang berlangsung transparan.'
                }
              ].map((activity, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative aspect-video overflow-hidden bg-black cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                >
                  {/* Background Image */}
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                      (e.target as HTMLImageElement).parentElement!.classList.add('bg-slate-300');
                    }}
                  />
                  
                  {/* Dark Gradient Overlay (Black/Gray instead of Blue) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"></div>
                  
                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 sm:p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-bold text-lg sm:text-xl font-display mb-2">{activity.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      {activity.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
