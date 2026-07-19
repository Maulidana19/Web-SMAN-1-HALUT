import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TEACHERS_DATA, TENDIK_DATA } from '../data';
import { X, Mail, Phone, BookOpen, Briefcase } from 'lucide-react';

interface Person {
  id: string;
  name: string;
  image: string;
  email?: string;
  phone?: string;
  subject?: string;
  extraDuty?: string;
}

// Fungsi bantu untuk menghasilkan informasi dummy yang konsisten jika data aslinya kosong
const getPersonInfo = (person: Person, isTeacher: boolean, index: number) => {
  const firstName = person.name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '');
  
  // Generate a realistic looking phone number based on index
  const prefix = isTeacher ? '0812' : '0821';
  const mid = String(4000 + index * 17).padStart(4, '0');
  const end = String(8000 - index * 11).padStart(4, '0');
  
  const subjects = ['Matematika', 'Bahasa Indonesia', 'Bahasa Inggris', 'Fisika', 'Biologi', 'Kimia', 'Sejarah', 'Geografi', 'Sosiologi', 'Ekonomi', 'Pendidikan Agama', 'PJOK', 'Seni Budaya', 'Prakarya'];
  const teacherDuties = ['Wali Kelas', 'Pembina OSIS', 'Kepala Laboratorium', 'Pembina Pramuka', 'Guru Piket', 'Koordinator P5', 'Wakasek', 'Tidak ada'];
  const tendikDuties = ['Staf Tata Usaha', 'Bendahara BOS', 'Operator Dapodik', 'Pengelola Perpustakaan', 'Tenaga Keamanan', 'Staf Kesiswaan'];

  return {
    email: person.email || "-",
    phone: person.phone || "-",
    subject: person.subject || "-",
    extraDuty: person.extraDuty || "-"
  };
};

export const Teachers: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'guru' | 'tendik'>('guru');
  const [selectedPerson, setSelectedPerson] = useState<(Person & { isTeacher: boolean, index: number }) | null>(null);

  // Mencegah scroll body saat pop-up terbuka
  useEffect(() => {
    if (selectedPerson) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedPerson]);

  return (
    <section id="teachers-section" className="pt-10 pb-16 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">DIREKTORI GURU</h2>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display mb-4 leading-tight">
            Tenaga Pendidik & Kependidikan
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Dibimbing dan didukung oleh tenaga profesional yang kompeten, berpengalaman, dan berdedikasi tinggi di bidangnya masing-masing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-100/80 p-1 rounded-full relative shadow-inner">
            <button
              onClick={() => setActiveTab('guru')}
              className={`relative z-10 px-6 py-2 text-sm sm:text-base rounded-full font-bold transition-colors duration-300 ${
                activeTab === 'guru' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Guru
              {activeTab === 'guru' && (
                <motion.div
                  layoutId="activeTabTeachers"
                  className="absolute inset-0 bg-brand-navy rounded-full -z-10 shadow-md shadow-brand-navy/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('tendik')}
              className={`relative z-10 px-6 py-2 text-sm sm:text-base rounded-full font-bold transition-colors duration-300 ${
                activeTab === 'tendik' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Tenaga Kependidikan
              {activeTab === 'tendik' && (
                <motion.div
                  layoutId="activeTabTeachers"
                  className="absolute inset-0 bg-brand-navy rounded-full -z-10 shadow-md shadow-brand-navy/30"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-8">
          {(activeTab === 'guru' ? TEACHERS_DATA : TENDIK_DATA).map((person, idx) => (
            <motion.div
              key={person.id}
              onClick={() => setSelectedPerson({ ...person, isTeacher: activeTab === 'guru', index: idx })}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: (idx % 4) * 0.1 } }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25, delay: 0 } }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-sm sm:shadow-md hover:shadow-2xl hover:border-brand-red/50 transition-colors transition-shadow duration-300 group text-center relative overflow-hidden cursor-pointer"
            >
              {/* Animasi latar belakang tipis saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Frame (Pas Foto) */}
              <div className="relative z-10 w-full aspect-[3/4] bg-slate-100 rounded-md sm:rounded-xl overflow-hidden mb-2 sm:mb-3 border-2 border-white shadow-sm flex items-center justify-center">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-20"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="text-slate-400 font-bold text-[8px] sm:text-sm text-center px-1 sm:px-4 relative z-10">
                  (Tempat Foto {idx + 1})<br/>
                  <span className="text-[6px] sm:text-[10px] font-normal">
                    {activeTab === 'guru' ? `src/assets/foto${idx + 1}.jpg` : `src/assets/tendik${idx + 1}.jpg`}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="relative z-10 flex flex-col justify-center h-8 sm:h-auto">
                <h3 className="font-bold text-slate-900 text-[10px] sm:text-lg font-display leading-tight line-clamp-2">{person.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL POP-UP */}
      <AnimatePresence>
        {selectedPerson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl relative w-full max-w-2xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedPerson(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center bg-black/10 hover:bg-brand-red text-slate-700 hover:text-white rounded-full transition-colors duration-300"
              >
                <X size={18} />
              </button>

              {/* Left Side: Large Photo */}
              <div className="w-full md:w-2/5 aspect-[3/4] bg-slate-100 relative shrink-0">
                <img 
                  src={selectedPerson.image} 
                  alt={selectedPerson.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.opacity = '0';
                  }}
                />
              </div>

              {/* Right Side: Information Details */}
              <div className="p-6 sm:p-8 w-full md:w-3/5 flex flex-col justify-center">
                <span className="text-brand-red text-xs font-bold uppercase tracking-widest mb-2 block">
                  {selectedPerson.isTeacher ? 'Tenaga Pendidik' : 'Tenaga Kependidikan'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 leading-tight mb-6">
                  {selectedPerson.name}
                </h3>

                {(() => {
                  const info = getPersonInfo(selectedPerson, selectedPerson.isTeacher, selectedPerson.index);
                  return (
                    <div className="space-y-4">
                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                          <Mail size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{info.email}</p>
                        </div>
                      </div>

                      {/* No HP */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                          <Phone size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">No HP</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{info.phone}</p>
                        </div>
                      </div>

                      {/* Materi yang diampu */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-brand-red">
                          <BookOpen size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            {selectedPerson.isTeacher ? 'Materi yang diampu' : 'Bidang Tugas'}
                          </p>
                          <p className="text-sm font-bold text-brand-navy mt-0.5">{info.subject}</p>
                        </div>
                      </div>

                      {/* Tugas Tambahan */}
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                          <Briefcase size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tugas Tambahan</p>
                          <p className="text-sm font-medium text-slate-900 mt-0.5">{info.extraDuty}</p>
                        </div>
                      </div>
                    </div>
                  );
                })()}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
