import React, { useState } from 'react';
import { 
  Calendar, BookOpen, Compass, Clock, Link2, Users, 
  Sparkles, GraduationCap, FileText, Bell, Image as ImageIcon, 
  ArrowRight, ExternalLink, Award, CheckCircle2, ChevronRight, HelpCircle
} from 'lucide-react';

interface ComingSoonProps {
  section: string;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ section }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Define section-specific configurations
  const getSectionConfig = () => {
    switch (section) {
      case 'beranda-agenda':
        return {
          title: "Agenda Sekolah",
          subtitle: "Jadwal kegiatan terdekat yang akan berlangsung di SMAN 1 Halmahera Utara",
          icon: <Calendar className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Agenda Mendatang</h4>
              {[
                { date: "17 Agu", title: "Upacara Peringatan HUT RI ke-81", desc: "Upacara bendera dan perlombaan HUT RI di lapangan utama sekolah.", time: "07.30 - selesai" },
                { date: "15 Sep", title: "Penilaian Tengah Semester Ganjil", desc: "Ujian tengah semester berbasis komputer untuk semua angkatan.", time: "07.30 - 13.00 WIT" },
                { date: "24 Okt", title: "Pameran Karya P5 (Projek Pancasila)", desc: "Gelar karya siswa bertema kearifan lokal dan gaya hidup berkelanjutan.", time: "09.00 - 15.00 WIT" }
              ].map((ev, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow">
                  <div className="bg-brand-navy text-white font-bold p-3 rounded-lg flex flex-col items-center justify-center shrink-0 w-16 h-16">
                    <span className="text-xs uppercase leading-none font-medium">{ev.date.split(" ")[1]}</span>
                    <span className="text-xl font-extrabold leading-none mt-1">{ev.date.split(" ")[0]}</span>
                  </div>
                  <div className="text-left">
                    <h5 className="font-bold text-slate-800 text-sm sm:text-base leading-tight mb-1">{ev.title}</h5>
                    <p className="text-slate-500 text-xs sm:text-sm mb-2">{ev.desc}</p>
                    <span className="inline-block bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full">{ev.time}</span>
                  </div>
                </div>
              ))}
              <p className="text-xs text-slate-400 italic text-center mt-4">Jadwal di atas bersifat tentatif dan dapat berubah sewaktu-waktu.</p>
            </div>
          )
        };

      case 'akademik-kurikulum':
        return {
          title: "Kurikulum Sekolah",
          subtitle: "Sistem belajar mengajar adaptif berbasis Kurikulum Merdeka",
          icon: <BookOpen className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                { title: "Kurikulum Merdeka", desc: "Pembelajaran intrakurikuler yang beragam di mana peserta didik memiliki cukup waktu untuk mendalami konsep dan menguatkan kompetensi." },
                { title: "Projek Penguatan Profil Pelajar Pancasila (P5)", desc: "Pembelajaran kokurikuler lintas disiplin ilmu untuk mengamati dan memikirkan solusi terhadap permasalahan di lingkungan sekitar." },
                { title: "Pembelajaran Berbasis IT", desc: "Integrasi penuh platform digital dan LMS dalam kegiatan harian untuk efisiensi dan adaptabilitas teknologi modern." },
                { title: "Asesmen Kompetensi Minimum", desc: "Fokus pada literasi membaca, numerasi, dan survei karakter untuk pemetaan kualitas mutu pendidikan secara objektif." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-5 border border-slate-100 rounded-2xl hover:border-brand-red/30 transition-colors">
                  <h5 className="font-bold text-brand-navy mb-2 flex items-center gap-2 text-sm sm:text-base">
                    <CheckCircle2 size={16} className="text-brand-red shrink-0" />
                    {item.title}
                  </h5>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )
        };

      case 'akademik-peminatan':
        return {
          title: "Program Peminatan",
          subtitle: "Struktur kelompok mata pelajaran pilihan sesuai minat, bakat, dan rencana karir siswa",
          icon: <Compass className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { title: "Fase E (Umum)", subtitle: "Kelas X", desc: "Siswa mempelajari seluruh mata pelajaran secara umum sebagai dasar pemetaan minat akademik untuk tahun berikutnya." },
                { title: "MIPA (Matematika & Alam)", subtitle: "Fase F (Kelas XI & XII)", desc: "Fokus mendalam pada Matematika Lanjut, Fisika, Kimia, Biologi, dan Informatika untuk persiapan jurusan sains & teknologi." },
                { title: "IPS (Sosial & Humaniora)", subtitle: "Fase F (Kelas XI & XII)", desc: "Fokus pada Ekonomi, Geografi, Sosiologi, Sejarah Lanjut, dan Bahasa untuk persiapan karir ilmu sosial, bisnis, dan hukum." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 border border-slate-100 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">{item.subtitle}</span>
                    <h5 className="font-extrabold text-slate-800 text-base sm:text-lg mb-3 mt-1 leading-snug">{item.title}</h5>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">{item.desc}</p>
                  </div>
                  <button 
                    onClick={() => triggerToast(`Informasi detail peminatan ${item.title} akan segera dirilis.`)}
                    className="flex items-center gap-1.5 text-xs font-bold text-brand-navy hover:text-brand-red transition-colors self-start"
                  >
                    <span>Selengkapnya</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          )
        };

      case 'akademik-kalender':
        return {
          title: "Kalender Akademik",
          subtitle: "Jadwal kalender pendidikan, ujian semester, pembagian rapor, dan hari libur nasional",
          icon: <Clock className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-6 text-left">
              {/* Calendar Grid Placeholder */}
              <div className="bg-white p-5 border border-slate-100 rounded-2xl">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="font-bold text-slate-800 text-sm sm:text-base">Kalender Pendidikan 2026/2027</h5>
                  <span className="text-xs bg-brand-navy text-white px-3 py-1 font-semibold rounded-full">Semester Ganjil</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-[10px] sm:text-xs font-bold text-slate-400 mb-2">
                  <span>Sn</span><span>Sl</span><span>Rb</span><span>Km</span><span>Jm</span><span>Sb</span><span>Mg</span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-600">
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1;
                    const isSpecial = day === 17 || day === 24;
                    return (
                      <div 
                        key={day} 
                        className={`p-2 rounded-lg font-semibold ${
                          isSpecial ? 'bg-brand-red text-white' : 'bg-slate-50 hover:bg-slate-100'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 border border-slate-100 rounded-xl flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                  <div>
                    <h6 className="font-bold text-slate-800 text-xs sm:text-sm">Hari Libur & Peringatan Nasional</h6>
                    <p className="text-slate-500 text-xs mt-0.5">Ditandai dengan warna merah di kalender sekolah.</p>
                  </div>
                </div>
                <div className="bg-white p-4 border border-slate-100 rounded-xl flex items-start gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-navy shrink-0 mt-1.5" />
                  <div>
                    <h6 className="font-bold text-slate-800 text-xs sm:text-sm">Unduh Dokumen Kalender PDF</h6>
                    <p className="text-slate-500 text-xs mt-0.5">File Kalender Pendidikan resmi akan segera diunggah.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case 'akademik-portal':
        return {
          title: "Tautan Portal Sekolah",
          subtitle: "Akses cepat ke portal pembelajaran daring, pelaporan, dan SIAKAD",
          icon: <Link2 className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              {[
                { name: "SIAKAD SMANSA", desc: "Sistem Informasi Akademik sekolah untuk memantau nilai, kehadiran, jadwal, dan biodata siswa.", actionLabel: "Buka SIAKAD", url: "https://siakad.smansahalut.sch.id" },
                { name: "LMS Pembelajaran Daring", desc: "Platform Learning Management System untuk kuis online, tugas kelas, dan materi pembelajaran mandiri.", actionLabel: "Buka LMS", url: "https://lms.smansahalut.sch.id" },
                { name: "Rapor Pendidikan", desc: "Akses dashboard Rapor Pendidikan Kemendikbudristek untuk pemetaan berkala mutu pendidikan.", actionLabel: "Buka Rapor", url: "https://rapordik.kemendikbud.go.id" }
              ].map((portal, idx) => (
                <div key={idx} className="bg-white p-6 border border-slate-100 rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-navy/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-300" />
                  <div className="relative z-10 mb-6">
                    <h5 className="font-extrabold text-brand-navy text-base sm:text-lg mb-2">{portal.name}</h5>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{portal.desc}</p>
                  </div>
                  <button 
                    onClick={() => triggerToast(`${portal.name} sedang dalam proses pemeliharaan berkala.`)}
                    className="relative z-10 w-full bg-[#f1f5f9] hover:bg-brand-red hover:text-white text-brand-navy font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 text-xs uppercase tracking-wider cursor-pointer"
                  >
                    <span>{portal.actionLabel}</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              ))}
            </div>
          )
        };

      case 'profil-akreditasi':
        return {
          title: "Akreditasi Sekolah",
          subtitle: "Status akreditasi dan pemenuhan standar nasional pendidikan SMAN 1 Halmahera Utara",
          icon: <Award className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-6 text-left">
              <div className="bg-white p-6 sm:p-8 border border-slate-100 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                <div>
                  <h5 className="font-extrabold text-slate-800 text-lg mb-2">Akreditasi A "Unggul"</h5>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                    SMA Negeri 1 Halmahera Utara kembali meraih status Akreditasi A (Unggul) dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M) dengan nilai total evaluasi yang sangat memuaskan (94).
                  </p>
                </div>
                <div className="bg-brand-red text-white p-5 rounded-2xl text-center shrink-0 w-24 h-24 flex flex-col justify-center shadow-lg">
                  <span className="text-[10px] font-bold uppercase leading-none text-red-100">Nilai</span>
                  <span className="text-3xl font-black leading-none mt-1">94</span>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 border border-slate-100 rounded-xl">
                  <h6 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">Sertifikat Resmi BAN-S/M</h6>
                  <p className="text-slate-500 text-xs leading-relaxed">No. SK: 1344/BAN-SM/SK/2023. Berlaku hingga tahun 2028.</p>
                </div>
                <div className="bg-white p-5 border border-slate-100 rounded-xl">
                  <h6 className="font-bold text-slate-800 text-xs sm:text-sm mb-2">Status Sekolah Penggerak</h6>
                  <p className="text-slate-500 text-xs leading-relaxed">Berstatus Sekolah Penggerak yang siap mengimplementasikan program kurikulum merdeka.</p>
                </div>
              </div>
            </div>
          )
        };

      case 'kesiswaan-osis':
        return {
          title: "Organisasi Siswa (OSIS & MPK)",
          subtitle: "Wadah pembinaan kepemimpinan, kepribadian, dan penyalur kreativitas siswa",
          icon: <Users className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-6 text-left">
              {/* Hierarchy Mockup Tree */}
              <div className="bg-white p-6 border border-slate-100 rounded-2xl text-center">
                <h5 className="font-bold text-slate-800 text-sm sm:text-base mb-6">Struktur Inti OSIS SMANSA (Masa Bakti 2025/2026)</h5>
                
                <div className="flex flex-col items-center gap-4">
                  {/* Top Node */}
                  <div className="bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md">
                    Pembina OSIS
                  </div>
                  {/* Connector */}
                  <div className="w-0.5 h-6 bg-slate-300" />
                  
                  {/* Leader Node */}
                  <div className="bg-brand-red text-white px-8 py-3 rounded-xl font-bold text-xs sm:text-sm shadow-md">
                    Ketua OSIS (Yemima Putri S. N.)
                  </div>
                  
                  {/* Branch Row */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-12 mt-2 w-full max-w-md">
                    <div className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm">
                      Sekretaris OSIS
                    </div>
                    <div className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm">
                      Bendahara OSIS
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/50">
                <h6 className="font-bold text-brand-navy text-sm mb-2">Program Kerja Unggulan OSIS</h6>
                <ul className="text-slate-600 text-xs sm:text-sm space-y-2 list-disc pl-5 leading-relaxed">
                  <li><strong>SMANSA Cup:</strong> Turnamen olahraga dan seni antar pelajar tingkat kabupaten.</li>
                  <li><strong>Latihan Kepemimpinan Siswa (LKS):</strong> Pembekalan leadership bagi calon pengurus kelas dan ekskul.</li>
                  <li><strong>Bakti Sosial Kemasyarakatan:</strong> Aksi berbagi dan edukasi lingkungan di desa terdekat.</li>
                </ul>
              </div>
            </div>
          )
        };

      case 'kesiswaan-ekstrakurikuler':
        return {
          title: "Kegiatan Ekstrakurikuler",
          subtitle: "Daftar unit kegiatan siswa untuk mengasah potensi non-akademik di luar jam belajar",
          icon: <Sparkles className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {[
                { name: "Pramuka", category: "Wajib / Karakter", desc: "Pendidikan kepanduan pembentuk watak, kemandirian, dan kerjasama." },
                { name: "Paskibra", category: "Semi-Militer", desc: "Kedisiplinan tinggi, baris-berbaris, dan pembinaan fisik mental." },
                { name: "PMR (PMR Wira)", category: "Kemanusiaan", desc: "Keterampilan dasar medis pertolongan pertama & kesehatan remaja." },
                { name: "Klub Olahraga", category: "Prestasi / Fisik", desc: "Futsal, Basket, Voli, Badminton, dan Bela Diri (Karate/Silat)." },
                { name: "Seni & Paduan Suara", category: "Kreativitas", desc: "Vokal grup, band sekolah, tari tradisional, tari kreasi, dan seni rupa." },
                { name: "KIR (Karya Ilmiah Remaja)", category: "Sains / Riset", desc: "Penelitian sederhana, eksperimen sains, dan persiapan kompetisi karya tulis." },
                { name: "Klub IT & Robotik", category: "Teknologi", desc: "Belajar pemrograman dasar, desain grafis, perakitan robot, dan multimedia." },
                { name: "Rohis & Rokris", category: "Spiritual", desc: "Pembinaan kerohanian, pendalaman iman, dan toleransi antar umat beragama." }
              ].map((ekskul, idx) => (
                <div key={idx} className="bg-white p-4 border border-slate-100 rounded-xl hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-[9px] font-bold text-brand-red uppercase tracking-wide bg-red-50 px-2 py-0.5 rounded-full inline-block mb-2">{ekskul.category}</span>
                    <h5 className="font-extrabold text-slate-800 text-sm sm:text-base mb-1.5">{ekskul.name}</h5>
                    <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed">{ekskul.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        };

      case 'kesiswaan-alumni':
        return {
          title: "Ikatan Alumni SMANSA",
          subtitle: "Ruang komunikasi antarlintas generasi alumni dan pelacakan jejak karir lulusan",
          icon: <GraduationCap className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 text-left">
              <div className="sm:col-span-5 bg-white p-5 border border-slate-100 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <h5 className="font-bold text-slate-800 text-sm sm:text-base mb-2">Tracer Study Alumni</h5>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
                    Mohon kesediaan alumni SMAN 1 Halmahera Utara untuk mengisi survei penelusuran lulusan demi peningkatan mutu pendidikan dan kemitraan industri.
                  </p>
                </div>
                <button 
                  onClick={() => triggerToast("Formulir Tracer Study Alumni akan diaktifkan segera.")}
                  className="w-full bg-brand-navy hover:bg-brand-red text-white font-bold py-2 px-4 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Isi Formulir Tracer
                </button>
              </div>
              
              <div className="sm:col-span-7 bg-white p-5 border border-slate-100 rounded-2xl shadow-sm">
                <h5 className="font-bold text-slate-800 text-sm sm:text-base mb-4">Statistik Lulusan Terakhir (Estimasi)</h5>
                <div className="space-y-3.5">
                  {[
                    { target: "Perguruan Tinggi Negeri (PTN)", percent: 45, color: "bg-blue-600" },
                    { target: "Perguruan Tinggi Swasta (PTS) Terkemuka", percent: 30, color: "bg-emerald-600" },
                    { target: "Kedinasan / TNI / POLRI", percent: 15, color: "bg-amber-500" },
                    { target: "Wirausaha & Memasuki Dunia Kerja", percent: 10, color: "bg-slate-500" }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold text-slate-600">
                        <span>{stat.target}</span>
                        <span>{stat.percent}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className={`${stat.color} h-full rounded-full`} style={{ width: `${stat.percent}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        };

      case 'informasi-ppdb':
        return {
          title: "Informasi PPDB Online",
          subtitle: "Panduan Penerimaan Peserta Didik Baru (PPDB) SMAN 1 Halmahera Utara",
          icon: <FileText className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-6 text-left">
              {/* Steps/Flowcharts */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "Pendaftaran Online", desc: "Buat akun di portal PPDB Provinsi dan unggah berkas persyaratan." },
                  { step: "02", title: "Verifikasi Berkas", desc: "Tim verifikator sekolah memverifikasi dokumen fisik & digital pendaftar." },
                  { step: "03", title: "Seleksi Berkas", desc: "Pemeringkatan berdasarkan jalur masuk (Zonasi, Afirmasi, Prestasi)." },
                  { step: "04", title: "Daftar Ulang", desc: "Calon siswa baru yang lolos melakukan registrasi ulang di sekolah." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-5 border border-slate-100 rounded-2xl shadow-sm relative group">
                    <span className="absolute -top-3 -right-2 text-4xl font-black text-slate-100/80 group-hover:text-red-50 transition-colors duration-300 z-0">{item.step}</span>
                    <div className="relative z-10">
                      <h5 className="font-bold text-slate-800 text-sm sm:text-base mb-1.5 leading-snug">{item.title}</h5>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call-to-action details */}
              <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <h5 className="font-bold text-base sm:text-xl mb-1 text-center sm:text-left">Sudah Siap Melakukan Pendaftaran?</h5>
                  <p className="text-blue-100 text-xs sm:text-sm text-center sm:text-left">Pendaftaran resmi PPDB dilakukan melalui portal PPDB Dinas Pendidikan Provinsi Maluku Utara.</p>
                </div>
                <a 
                  href="https://ppdb.malutprov.go.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-red text-white hover:bg-brand-red-hover px-6 py-3 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Portal PPDB Provinsi</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          )
        };

      case 'informasi-pengumuman':
        return {
          title: "Pengumuman Resmi Sekolah",
          subtitle: "Surat edaran, agenda pembagian rapor, dan maklumat kedinasan resmi bagi warga sekolah",
          icon: <Bell className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-4">
              {[
                { title: "Surat Edaran Pelaksanaan Libur Semester Genap TA 2025/2026", date: "15 Juni 2026", tag: "Kesiswaan", file: "SE_Libur_2026.pdf" },
                { title: "Pengumuman Kelulusan Peserta Didik Kelas XII Angkatan 2026", date: "6 Mei 2026", tag: "Kurikulum", file: "Kelulusan_XII_2026.pdf" },
                { title: "Pemberitahuan Rapat Komite Orang Tua Siswa Kelas X Baru", date: "12 Juli 2026", tag: "Humas", file: "Undangan_Rapat_Komite_X.pdf" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-4 sm:p-5 border border-slate-100 rounded-xl flex items-center justify-between gap-4 hover:shadow-md transition-all text-left">
                  <div className="flex gap-4 items-start">
                    <div className="p-3 bg-red-50 text-brand-red rounded-xl shrink-0 mt-0.5">
                      <FileText size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-brand-red uppercase tracking-wider">{item.tag}</span>
                      <h5 className="font-bold text-slate-800 text-xs sm:text-sm mt-0.5 mb-1.5 leading-snug">{item.title}</h5>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-medium">{item.date}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => triggerToast(`Mengunduh berkas "${item.file}"...`)}
                    className="bg-[#f1f5f9] hover:bg-brand-red hover:text-white p-2.5 rounded-lg text-slate-600 transition-colors cursor-pointer shrink-0"
                    title="Unduh Pengumuman"
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
              <p className="text-xs text-slate-400 italic text-center mt-6">Daftar arsip pengumuman resmi lengkap dapat diperoleh melalui Bagian Tata Usaha sekolah.</p>
            </div>
          )
        };

      case 'media-galeri':
        return {
          title: "Galeri Dokumentasi",
          subtitle: "Dokumentasi album foto dan video berbagai event, perlombaan, dan kegiatan harian sekolah",
          icon: <ImageIcon className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="space-y-6">
              {/* Category tabs mockup */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["Semua", "Upacara & Formal", "Lomba & Prestasi", "Ekskul", "Kelas & Lab"].map((tab, idx) => (
                  <span key={idx} className={`px-4 py-1.5 rounded-full text-xs font-bold cursor-pointer transition-colors ${
                    idx === 0 ? 'bg-brand-navy text-white' : 'bg-white border border-slate-100 text-slate-500 hover:bg-slate-50'
                  }`}>
                    {tab}
                  </span>
                ))}
              </div>
              
              {/* Image Grid Skeletons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Diklatsar PMR Angkatan I", img: "/assets/news1.jpg" },
                  { label: "Kegiatan Pembelajaran Lapangan", img: "/assets/visi.jpg" },
                  { label: "Upacara Peringatan Hari Pendidikan", img: "/assets/utama.jpg" },
                  { label: "Lomba FLS2N Tingkat Sekolah", img: "/assets/model.jpg" }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm group cursor-pointer relative aspect-square">
                    <img 
                      src={item.img} 
                      alt={item.label}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.opacity = '0';
                      }}
                    />
                    {/* Placeholder content if image fails */}
                    <div className="absolute inset-0 bg-slate-100 -z-10 animate-pulse flex items-center justify-center text-slate-400 font-bold text-xs text-center px-2">
                      Dokumentasi Foto {idx + 1}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-3.5 text-left">
                      <h6 className="text-white font-bold text-[10px] sm:text-xs leading-snug">{item.label}</h6>
                      <span className="text-blue-300 text-[8px] sm:text-[10px] font-semibold mt-1">Lihat Album</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        };

      default:
        return {
          title: "Halaman Coming Soon",
          subtitle: "Halaman ini sedang berada dalam tahap pengerjaan konten oleh tim IT sekolah.",
          icon: <HelpCircle className="w-8 h-8 text-brand-red" />,
          bgColor: "bg-red-50",
          renderMockup: () => (
            <div className="bg-white p-8 border border-slate-100 rounded-2xl max-w-md mx-auto shadow-sm">
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Kami berkomitmen memberikan informasi sekolah yang akurat, komprehensif, dan terbaru. Silakan periksa kembali halaman ini beberapa waktu lagi.
              </p>
              <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                <div className="bg-brand-red h-full w-2/3 animate-pulse" />
              </div>
            </div>
          )
        };
    }
  };

  const config = getSectionConfig();

  return (
    <section className="py-12 sm:py-20 bg-slate-50 relative overflow-hidden">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 bg-brand-navy text-white text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-2xl border border-blue-500/20 z-50 animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Decorative vector background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-navy/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Banner Section Info */}
        <div className="mb-10 flex flex-col items-center">
          <div className={`p-4 ${config.bgColor} rounded-2xl shadow-sm inline-block mb-6`}>
            {config.icon}
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight font-display mb-3">
            {config.title}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
            {config.subtitle}
          </p>
          <div className="h-1 w-12 bg-brand-red rounded-full mt-4" />
        </div>

        {/* Content Box Mockup */}
        <div className="bg-[#f8fafc] border border-slate-200/60 p-6 sm:p-10 rounded-3xl shadow-lg w-full max-w-4xl mx-auto">
          {config.renderMockup()}
        </div>

      </div>
    </section>
  );
};
