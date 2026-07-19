import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export const PPDB: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Pendaftaran Online',
      desc: 'Buat akun di portal PPDB Provinsi dan unggah berkas persyaratan.'
    },
    {
      num: '02',
      title: 'Verifikasi Berkas',
      desc: 'Tim verifikator sekolah memverifikasi dokumen fisik & digital pendaftar.'
    },
    {
      num: '03',
      title: 'Seleksi Berkas',
      desc: 'Pemeringkatan berdasarkan jalur masuk (Zonasi, Afirmasi, Prestasi).'
    },
    {
      num: '04',
      title: 'Daftar Ulang',
      desc: 'Calon siswa baru yang lolos melakukan registrasi ulang di sekolah.'
    }
  ];

  return (
    <div className="pt-10 pb-20 bg-[#f1f5f9] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
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
            Informasi PPDB Online
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Panduan Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Halmahera Utara
          </motion.p>
        </div>

        {/* Content Wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-[24px] p-6 sm:p-10 shadow-sm border border-gray-100"
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative bg-white border border-slate-100 rounded-[20px] p-6 shadow-sm hover:shadow-lg hover:border-brand-red/30 transition-all duration-300 group overflow-hidden h-full flex flex-col"
              >
                {/* Watermark Number */}
                <div className="absolute -top-4 -right-2 text-8xl font-black text-slate-50 opacity-50 group-hover:text-brand-red/5 group-hover:scale-110 transition-all duration-500 select-none z-0">
                  {step.num}
                </div>
                
                <div className="relative z-10 flex-grow">
                  <h3 className="text-lg font-bold text-brand-navy mb-3 group-hover:text-brand-red transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Banner */}
          <div className="bg-brand-navy rounded-[20px] p-8 md:p-10 shadow-lg relative overflow-hidden group">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 font-display">Sudah Siap Melakukan Pendaftaran?</h3>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Pendaftaran resmi PPDB dilakukan melalui portal PPDB Dinas Pendidikan Provinsi Maluku Utara.
                </p>
              </div>
              
              <button className="flex-shrink-0 bg-brand-red hover:bg-red-700 text-white font-bold text-sm sm:text-base py-4 px-8 rounded-xl flex items-center gap-2 transition-colors duration-300 shadow-md">
                PORTAL PPDB PROVINSI <ExternalLink size={18} />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
