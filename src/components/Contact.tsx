import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Trash2, ShieldAlert } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { ContactMessage } from '../types';

export const Contact: React.FC = () => {
  // Form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Statuses
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');


  // Form submission handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validations
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMsg('Semua kolom formulir harus diisi dengan lengkap.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg('Alamat email tidak valid. Periksa kembali penulisan email Anda.');
      return;
    }

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${SCHOOL_INFO.contact.email}&su=${encodeURIComponent(subject.trim())}&body=${encodeURIComponent(
      `Nama: ${name.trim()}\nEmail: ${email.trim()}\n\nPesan:\n${message.trim()}`
    )}`;
    
    // Buka aplikasi web Gmail secara instan di tab baru
    window.open(gmailUrl, '_blank');

    setSubmitSuccess(true);

    // Reset fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');

    // Auto dismiss success banner after 6s
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };


  return (
    <section id="contact-section" className="py-10 sm:py-16 bg-[#f1f5f9]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Kontak & Lokasi</h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Hubungi SMAN 1 Halmahera Utara
          </p>
          <div className="h-1 w-12 bg-brand-red mx-auto mt-4 rounded-full" />
          <p className="text-slate-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Punya pertanyaan mengenai pendaftaran (SPMB), program akademik, atau ingin berkunjung? Tim humas kami siap membantu Anda.
          </p>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Address */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-100 flex items-start gap-3 sm:gap-4 text-left shadow-sm">
            <div className="p-2.5 sm:p-3 bg-red-50 text-brand-red rounded-lg sm:rounded-xl flex-shrink-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-0.5 sm:mb-1 font-display">Alamat Sekolah</h4>
              <p className="text-slate-500 text-xs sm:text-sm leading-snug sm:leading-relaxed">{SCHOOL_INFO.contact.address}</p>
            </div>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-100 flex items-start gap-3 sm:gap-4 text-left shadow-sm">
            <div className="p-2.5 sm:p-3 bg-red-50 text-brand-red rounded-lg sm:rounded-xl flex-shrink-0">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="w-full min-w-0">
              <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-0.5 sm:mb-1 font-display">Hubungi Kami</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">Telepon: {SCHOOL_INFO.contact.phone}</p>
              <div className="text-slate-500 text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
                <span>Email: </span>
                <span className="break-all text-brand-red">{SCHOOL_INFO.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Card 3: School Hours */}
          <div className="bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl border border-slate-100 flex items-start gap-3 sm:gap-4 text-left shadow-sm">
            <div className="p-2.5 sm:p-3 bg-red-50 text-brand-red rounded-lg sm:rounded-xl flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm sm:text-base mb-0.5 sm:mb-1 font-display">Jam Operasional</h4>
              <div className="text-slate-500 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                <p>Shift Pagi: 07.00 - 12.30 WIT</p>
                <p>Shift Siang: 12.30 - 17.40 WIT</p>
              </div>
              <p className="text-[10px] sm:text-xs text-brand-red font-bold mt-1.5 sm:mt-2 uppercase tracking-wider">Sabtu & Minggu Libur</p>
            </div>
          </div>

        </div>

        {/* Map & Form Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Form Container (Left) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-2xl text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">Kirim Pesan</h3>
            <p className="text-slate-500 text-sm sm:text-base mb-8">Isi formulir berikut untuk mengirimkan pertanyaan langsung ke meja administrasi kami.</p>

            {/* Error Message banner */}
            <AnimatePresence>
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r-xl flex items-center gap-2"
                >
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Message Banner */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 text-emerald-800 text-sm rounded-r-xl flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <div>
                    <span className="font-bold block">Membuka Aplikasi Email...</span>
                    <span>Silakan kirim pesan melalui aplikasi email default Anda.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="form-name" className="block text-sm font-semibold text-slate-700 mb-2">Nama Lengkap</label>
                  <input
                    id="form-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama Anda"
                    className="w-full px-4 py-3 bg-[#f1f5f9]/50 border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none rounded-xl text-slate-800 transition-all font-medium text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="form-email" className="block text-sm font-semibold text-slate-700 mb-2">Alamat Email</label>
                  <input
                    id="form-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@contoh.com"
                    className="w-full px-4 py-3 bg-[#f1f5f9]/50 border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none rounded-xl text-slate-800 transition-all font-medium text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="form-subject" className="block text-sm font-semibold text-slate-700 mb-2">Subjek / Keperluan</label>
                <input
                  id="form-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Contoh: Info Pendaftaran SPMB, Kunjungan Kerja"
                  className="w-full px-4 py-3 bg-[#f1f5f9]/50 border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none rounded-xl text-slate-800 transition-all font-medium text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="form-message" className="block text-sm font-semibold text-slate-700 mb-2">Isi Pesan</label>
                <textarea
                  id="form-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  placeholder="Tuliskan detail pertanyaan atau maksud Anda di sini..."
                  className="w-full px-4 py-3 bg-[#f1f5f9]/50 border border-slate-200 focus:border-brand-red focus:bg-white focus:outline-none rounded-xl text-slate-800 transition-all font-medium text-sm sm:text-base"
                  required
                />
              </div>

              <button
                id="form-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-7 py-3.5 bg-brand-red hover:bg-brand-red-hover text-white font-bold rounded-xl transition-all shadow-md shadow-red-200 flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Interactive Map Visual (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex-1 bg-white p-4 rounded-2xl border border-slate-100 shadow-2xl flex flex-col justify-between">
              <div className="p-2 sm:p-4 bg-[#f1f5f9]/50 rounded-xl flex-1 min-h-[200px] overflow-hidden relative border border-slate-100">
                <iframe
                  id="google-maps-frame"
                  title="Lokasi SMAN 1 Halmahera Utara"
                  src={SCHOOL_INFO.contact.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="rounded-lg absolute inset-0"
                />
              </div>
              <div className="pt-4 text-left px-2 flex-shrink-0">
                <h4 className="font-bold text-slate-800 text-base mb-1 font-display">Panduan Lokasi</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Sekolah kami terletak di lokasi strategis pusat kota Tobelo, sangat mudah diakses oleh kendaraan umum maupun pribadi.
                </p>
              </div>
            </div>
            
            <div className="flex-1 rounded-2xl shadow-2xl overflow-hidden flex">
              <img 
                src="/assets/kontak.png" 
                alt="Ilustrasi Kontak" 
                className="w-full h-full object-cover bg-[#f1f5f9]/50" 
              />
            </div>
          </div>

        </div>



      </div>
    </section>
  );
};
