import { Facility, Achievement, Testimonial } from "./types";

export const SCHOOL_INFO = {
  name: "SMA Negeri 1 Halmahera Utara",
  slogan: "Berkarakter, Berprestasi, Inovatif, Adaptif terhadap Perkembangan Teknologi",
  shortDescription: "SMA Negeri 1 Halmahera Utara merupakan sekolah model yang mengintegrasikan pembelajaran mendalam, koding, dan kecerdasan artifisial dalam kurikulum. Sebagai sekolah mitra pembelajaran jarak jauh, lembaga ini berkomitmen untuk memperluas akses pendidikan berkualitas melalui teknologi digital, mencetak generasi yang siap bersaing di tingkat nasional maupun global.",
  vision: "Sekolah unggul, berkarakter, berprestasi, inovatif, adaptif, berwawasan global melalui pembelajaran mendalam, koding dan kecerdasan artifisial.",
  missions: [
    "Menanamkan nilai-nilai karakter yang kuat, berlandaskan integritas, tanggung jawab, dan kepedulian sosial dalam setiap kegiatan pembelajaran.",
    "Meningkatkan prestasi akademik dan non-akademik melalui penerapan pembelajaran mendalam (deep learning) yang berorientasi pada pemahaman konsep dan penerapan nyata.",
    "Mengembangkan kompetensi digital peserta didik melalui pembelajaran koding, kecerdasan artifisial, dan teknologi informasi sebagai bekal menghadapi era industri 5.0.",
    "Mendorong inovasi dalam proses belajar mengajar dengan memanfaatkan teknologi digital dan sumber belajar terbuka.",
    "Menjalin kemitraan dengan lembaga pendidikan dan industri dalam pelaksanaan program pembelajaran jarak jauh serta pengembangan keterampilan abad ke-21.",
    "Mewujudkan lingkungan sekolah yang adaptif, kolaboratif, dan berorientasi pada pengembangan potensi individu secara optimal."
  ],
  goals: [
    "Menghasilkan lulusan yang berkarakter kuat, berpikir kritis, kreatif, dan mampu beradaptasi dengan perubahan teknologi.",
    "Meningkatkan kualitas pembelajaran berbasis teknologi digital dan AI.",
    "Menjadi sekolah model dalam penerapan pembelajaran mendalam dan kolaborasi pembelajaran jarak jauh.",
    "Membangun budaya inovasi dan literasi digital di seluruh ekosistem sekolah."
  ],
  principal: {
    name: "Ellen Sintya Dewi, S.Pd., M.Si.",
    role: "Kepala SMA Negeri 1 Halmahera Utara",
    message: "Selamat datang di website resmi SMA Negeri 1 Halmahera Utara. Berbekal pengalaman lebih dari 19 tahun mengabdi, saya berkomitmen menjadikan sekolah ini sebagai lingkungan belajar yang inklusif, inovatif, dan berpihak pada peserta didik. Kami tidak hanya berfokus pada peningkatan kemampuan akademik, tetapi juga berupaya kuat dalam pengembangan profesionalisme guru serta pembentukan karakter siswa yang mandiri, kreatif, dan adaptif. Dengan semangat kolaborasi, mari bersama-sama kita persiapkan generasi masa depan yang kompeten, berakhlak mulia, dan siap menghadapi tantangan perkembangan zaman."
  },
  stats: [
    { label: "NPSN", value: "60200296" },
    { label: "Akreditasi", value: "A (Unggul)" },
    { label: "Ruang Kelas", value: "24" },
    { label: "Laboratorium", value: "Komputer" },
    { label: "Luas Tanah", value: "7.298 m²" },
    { label: "Luas Bangunan", value: "1.584 m²" },
    { label: "Siswa Aktif", value: "350+" },
    { label: "Guru", value: "52" }
  ],
  contact: {
    address: "Jalan Siswa, Desa Gamsungi, Kecamatan Tobelo, Kabupaten Halmahera Utara, Provinsi Maluku Utara, Kodepos 97762",
    phone: "(0924) 2621113",
    email: "smanegeri1halut@gmail.com",
    hours: "07.00 - 17.40 WIT",
    mapsEmbedUrl: "https://www.google.com/maps?q=SMA+Negeri+1+Halmahera+Utara,+Tobelo&output=embed"
  }
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: "fac-1",
    title: "Perpustakaan Literasi",
    description: "Perpustakaan modern ber-AC dengan ribuan koleksi buku fisik, area baca lesehan yang nyaman, serta akses e-book dan jurnal digital.",
    iconName: "BookOpen"
  },
  {
    id: "fac-2",
    title: "Laboratorium Sains Modern",
    description: "Laboratorium Fisika, Kimia, dan Biologi yang dilengkapi dengan peralatan praktikum lengkap dan standar keselamatan kerja tinggi.",
    iconName: "FlaskConical"
  },
  {
    id: "fac-3",
    title: "Laboratorium Komputer & AI",
    description: "Ruang komputer modern dengan PC spesifikasi tinggi, koneksi internet serat optik, dan perangkat pembelajaran coding, desain, dan AI.",
    iconName: "Monitor"
  },
  {
    id: "fac-4",
    title: "Sarana Olahraga Terpadu",
    description: "Lapangan olahraga outdoor multifungsi (Basket, Futsal, Voli) dan aula indoor serbaguna untuk olahraga bela diri, bulu tangkis, dan tenis meja.",
    iconName: "Dribbble"
  },
  {
    id: "fac-5",
    title: "Studio Seni & Musik",
    description: "Ruang berperedam suara yang dilengkapi berbagai alat musik modern dan tradisional, serta ruang workshop seni rupa untuk mengasah kreativitas.",
    iconName: "Music"
  },
  {
    id: "fac-6",
    title: "Masjid Baitul Ilmu",
    description: "Masjid sekolah yang luas, bersih, dan sejuk sebagai sarana ibadah harian serta kegiatan pembinaan karakter spiritual siswa.",
    iconName: "Sparkles"
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: "ach-1",
    title: "Juara 1 Olimpiade Sains Nasional (OSN) Fisika",
    year: "2025",
    category: "Akademik",
    description: "Meraih medali emas tingkat nasional dalam kompetisi sains paling bergengsi yang diselenggarakan oleh Puspresnas Kemendikbudristek."
  },
  {
    id: "ach-2",
    title: "Medali Emas Kejuaraan Karate Antar Pelajar Nasional",
    year: "2025",
    category: "Olahraga",
    description: "Meraih podium pertama dalam kategori Kumite Putra yang diikuti oleh ratusan sekolah se-Indonesia."
  },
  {
    id: "ach-3",
    title: "Peringkat 5 Besar Rata-Rata Nilai UTBK Provinsi",
    year: "2024",
    category: "Akademik",
    description: "Berhasil masuk dalam jajaran sekolah dengan tingkat kelulusan dan nilai ujian tulis berbasis komputer tertinggi di provinsi."
  },
  {
    id: "ach-4",
    title: "Juara Utama Festival & Lomba Seni Siswa Nasional (FLS2N)",
    year: "2024",
    category: "Kesenian",
    description: "Meraih penghargaan terbaik pada kategori Cipta Puisi dan Desain Poster Tingkat Nasional."
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Muh. Dimas S Handjoe",
    role: "Alumni",
    content: "Sebagai alumni SMAN 1 Halmahera Utara, saya berterima kasih kepada seluruh guru. Berkat ilmu dan dukungan mereka, saya dapat melanjutkan studi di Universitas Gadjah Mada, salah satu universitas terbaik di Indonesia.",
    image: "/assets/alumni.jpg"
  },
  {
    id: "test-4",
    name: "Noel C. Luisan",
    role: "Alumni",
    content: "SMAN 1 Halut cukup baik menyajikan pembelajaran yang interaktif, dengan fasilitas pendukung yang memumpuni sehingga cocok untuk jadikan wadah berkembang lebih lagi kedepannya terbaik deh",
    image: "/assets/alumni2.jpg"
  },
  {
    id: "test-2",
    name: "Siti Rahmawati",
    role: "Orang Tua Siswa Kelas XII",
    content: "Secara keseluruhan, sekolah ini memberikan lingkungan belajar yang sangat baik, membuat anak saya merasa nyaman dan aman. Terima kasih atas dedikasi para guru yang selalu mendampingi anak kami dengan setulus hati.",
    image: "/assets/orangtua.jpg"
  },
  {
    id: "test-3",
    name: "Yemima Putri Sari Nainggolan",
    role: "Ketua OSIS (2025-2026)",
    content: "Bagi saya, SMANSA Halmahera Utara bukan sekadar tempat belajar, melainkan wadah pembentuk karakter. Melalui bimbingan para guru, saya belajar bahwa keberhasilan juga diukur dari integritas. Bangga menjadi bagian SMANSA.",
    image: "/assets/ketos.jpg"
  }
];

export const TEACHERS_DATA = [
  { id: "teacher-1", name: "Ellen Sintya Dewi, S.Pd., M.Si.", image: "/assets/foto1.jpg", subject: "Kimia", extraDuty: "Kepala Sekolah" },
  { id: "teacher-2", name: "Fendy V. Hitipeuw, S.Pd.", image: "/assets/foto2.jpg", subject: "Kimia", extraDuty: "Wakil Kepala Sekolah Bidang Kurikulum" },
  { id: "teacher-3", name: "Donal R. Ollo, S.Pd.", image: "/assets/foto3.jpg", subject: "PJOK", extraDuty: "Wakil Kepala Sekolah Bidang Kesiswaan" },
  { id: "teacher-4", name: "Thomas Salfister Matrutty, S.Pd.", image: "/assets/foto4.jpg", subject: "Sosiologi", extraDuty: "Wakil Kepala Sekolah Bidang Sarana dan Prasarana" },
  { id: "teacher-5", name: "Reny Uktolseja, S.E., S.Pd.", image: "/assets/foto5.jpg" },
  { id: "teacher-6", name: "Stevi Sarundayang, S.Si.", image: "/assets/foto6.jpg", subject: "Kimia", extraDuty: "Wali Kelas XI-1" },
  { id: "teacher-7", name: "Henny Kristiana Masahe, S.Pd.", image: "/assets/foto7.jpg", subject: "Ekonomi", extraDuty: "Kepala Perpustakaan" },
  { id: "teacher-8", name: "Faisal Garusu, S.Pd.", image: "/assets/foto8.jpg", subject: "Matematika", extraDuty: "-" },
  { id: "teacher-9", name: "Adeleda Letlora, S.Pd.", image: "/assets/foto9.jpg", subject: "Sosiologi", extraDuty: "Wali Kelas XII-6" },
  { id: "teacher-10", name: "Agustine V. Singal, S.Pd.", image: "/assets/foto10.jpg", subject: "Matematika, Matematika Lanjut", extraDuty: "-" },
  { id: "teacher-11", name: "Christina Tiawata, S.Pd.", image: "/assets/foto11.jpg", subject: "Bahasa Indonesia", extraDuty: "Wali Kelas XI-7" },
  { id: "teacher-12", name: "Chintia E.P. Ngabalinn, S.PAK.", image: "/assets/foto12.jpg", subject: "PKn, PAK", extraDuty: "Wali Kelas X-4" },
  { id: "teacher-13", name: "Crista T.Y. Kakanga, S.Pd.", image: "/assets/foto13.jpg", subject: "Sosiologi, Sejarah", extraDuty: "Wali Kelas X-3" },
  { id: "teacher-14", name: "Dein L. Soloha, S.Pd.", image: "/assets/foto14.jpg", subject: "PJOK", extraDuty: "Wali Kelas XI-9" },
  { id: "teacher-15", name: "Dra. Wenefrida Ardiantari, M.M.", image: "/assets/foto15.jpg", subject: "Bahasa Indonesia", extraDuty: "Wali Kelas XII-1" },
  { id: "teacher-16", name: "Eminia Sofya Papuling, S.Si.", image: "/assets/foto16.jpg", subject: "Geografi", extraDuty: "Wali Kelas X-6" },
  { id: "teacher-17", name: "Handayane Utubira, S.Pd.", image: "/assets/foto17.jpg", subject: "Geografi", extraDuty: "-" },
  { id: "teacher-18", name: "Hawa S. Toluhula, S.Pd.", image: "/assets/foto18.jpg", subject: "Ekonomi", extraDuty: "Wali Kelas XII-5" },
  { id: "teacher-19", name: "Krismery D. Andalangi, S.Pd., M.M.", image: "/assets/foto19.jpg", subject: "Biologi", extraDuty: "Wali Kelas X-1" },
  { id: "teacher-20", name: "Lasma J.M. Sitompul, S.Pd.", image: "/assets/foto20.jpg", subject: "Matematika, MTK Lanjut", extraDuty: "-" },
  { id: "teacher-21", name: "Luciana M. Nanlohy, S.Si.", image: "/assets/foto21.jpg", subject: "PAK", extraDuty: "Wali Kelas X-8" },
  { id: "teacher-22", name: "Lumiati, S.Pd.", image: "/assets/foto22.jpg", subject: "Bahasa Inggris, Bahasa Inggris Lanjut", extraDuty: "Wali Kelas XI-8" },
  { id: "teacher-23", name: "Mersy Sameaputty, S.Pd.", image: "/assets/foto23.jpg", subject: "Kimia", extraDuty: "Wali Kelas X-7" },
  { id: "teacher-24", name: "Neti Herawati Hangkamu, S.Pd., M.Pd.", image: "/assets/foto24.jpg", subject: "Biologi", extraDuty: "Wali Kelas XII-2" },
  { id: "teacher-25", name: "Nurhayati, S.E.", image: "/assets/foto25.jpg", subject: "Prakarya, Ekonomi", extraDuty: "Wali Kelas XII-8" },
  { id: "teacher-26", name: "Putri Marwah Fajrin, S.Pd., Gr.", image: "/assets/foto26.jpg", subject: "Bahasa Inggris", extraDuty: "Bendahara BOSP" },
  { id: "teacher-27", name: "Rina Apling, S.Pd.", image: "/assets/foto27.jpg", subject: "Fisika", extraDuty: "-" },
  { id: "teacher-28", name: "Royani Pobela, S.Pd., M.M.", image: "/assets/foto28.jpg", subject: "PKn", extraDuty: "Wali Kelas XII-3" },
  { id: "teacher-29", name: "Silfester Balamau, S.Pd.", image: "/assets/foto29.jpg" },
  { id: "teacher-30", name: "Sri Anggriani, S.Pd.", image: "/assets/foto30.jpg", subject: "Biologi", extraDuty: "Wali Kelas XI-2" },
  { id: "teacher-31", name: "Stefi Apriani Tobelo, S.Pd.", image: "/assets/foto31.jpg", subject: "Bahasa Indonesia, Bahasa Indonesia Lanjut", extraDuty: "Wali Kelas XI-5" },
  { id: "teacher-32", name: "Suwarsi Abubakar, S.Pd.", image: "/assets/foto32.jpg", subject: "Ekonomi", extraDuty: "Wali Kelas XI-4" },
  { id: "teacher-33", name: "Wanda Cristianita Lukas, S.Pd., M.Si.", image: "/assets/foto33.jpg", subject: "Fisika, Informatika", extraDuty: "Wali Kelas X-5" },
  { id: "teacher-34", name: "Yeni Katemung, S.Pd.", image: "/assets/foto34.jpg", subject: "BK", extraDuty: "-" },
  { id: "teacher-35", name: "Yunus Rumu, S.Pd.", image: "/assets/foto35.jpg" },
  { id: "teacher-36", name: "Yurike F. Makaoming, S.Pd.", image: "/assets/foto36.jpg", subject: "Fisika", extraDuty: "Wali Kelas X-2" },
  { id: "teacher-37", name: "Yusdi T. Sura, S.Pd.", image: "/assets/foto37.jpg", subject: "Bahasa Inggris, Bahasa Inggris Pilihan", extraDuty: "Wali Kelas XII-4" },
  { id: "teacher-38", name: "Rasni Bitjoli, S.Si.", image: "/assets/foto38.jpg", subject: "Matematika", extraDuty: "-" },
  { id: "teacher-39", name: "Elita Taramen, S.Pd.", image: "/assets/foto39.jpg", subject: "-", extraDuty: "-" },
  { id: "teacher-40", name: "Warni A. Mezak, S.Pd.", image: "/assets/foto40.jpg", subject: "Bahasa Jepang, Bahasa Jepang Lanjut", extraDuty: "Wali Kelas XII-9" },
  { id: "teacher-41", name: "Oktofianus Lasa, S.Pd.K.", image: "/assets/foto41.jpg" },
  { id: "teacher-42", name: "Haidir Yasman Kardi, S.Pd.", image: "/assets/foto42.jpg", subject: "Matematika, KKA", extraDuty: "-" }
];

export const TENDIK_DATA = [
  { id: "tendik-1", name: "Asmawati Latusu Idi, A.Md.", image: "/assets/tendik1.jpg" },
  { id: "tendik-2", name: "Herianto Tahe, S.AP.", image: "/assets/tendik2.jpg" },
  { id: "tendik-3", name: "Jantje Mantol", image: "/assets/tendik3.jpg" },
  { id: "tendik-4", name: "Mariane Stien Gumabo, S.Si.", image: "/assets/tendik4.jpg" },
  { id: "tendik-5", name: "Meyanti Sartin Gumabo, S.T.", image: "/assets/tendik5.jpg" },
  { id: "tendik-6", name: "Novenci Garo, S.AP.", image: "/assets/tendik6.jpg" },
  { id: "tendik-7", name: "Opsalina Tawar", image: "/assets/tendik7.jpg" },
  { id: "tendik-8", name: "Boy G. Talaba", image: "/assets/tendik8.jpg" }
];

export const NEWS_DATA = [
  {
    id: "news-3",
    title: "Meilan Widje Juarai Lomba Debat Bahasa Inggris Tingkat Kabupaten",
    excerpt: "Meilan Widje, siswa kelas XII 3 SMAN 1 Halmahera Utara, berhasil meraih juara pertama Lomba Debat Bahasa Inggris Tingkat Kabupaten dan siap melaju ke ajang provinsi.",
    content: "HALMAHERA UTARA – Kabar membanggakan kembali datang dari perwakilan siswa terbaik SMA Negeri 1 Halmahera Utara. Meilan Widje, siswa yang saat ini duduk di kelas XII 3, berhasil mengukir prestasi gemilang dengan keluar sebagai pemenang dalam ajang Lomba Debat Bahasa Inggris Tingkat Kabupaten. Keberhasilan Meilan ini menjadi bukti nyata dari dedikasi, kerja keras, serta ketajaman berpikir yang diasah dengan baik di lingkungan sekolah. Prestasi ini tidak hanya mengharumkan nama pribadi dan keluarga, tetapi juga membawa bendera SMA Negeri 1 Halmahera Utara semakin berkibar di tingkat daerah.\n\nKompetisi tidak berhenti sampai di sini. Atas kemenangan manis di tingkat kabupaten ini, Meilan Widje kini tengah mempersiapkan diri secara intensif untuk melaju ke babak berikutnya, yaitu Tingkat Provinsi. Pihak sekolah, guru pembimbing, serta seluruh rekan-rekan siswa memberikan dukungan penuh dan doa terbaik agar Meilan dapat kembali memberikan penampilan maksimal dan membawa pulang hasil yang membanggakan di tingkat yang lebih tinggi.\n\nKepala Sekolah SMA Negeri 1 Halmahera Utara turut menyampaikan apresiasi yang setinggi-tingginya atas pencapaian ini: \"Selamat dan sukses untuk Ananda Meilan Widje. Prestasi ini adalah buah dari ketekunan dan semangat pantang menyerah. Semoga pencapaian ini menjadi inspirasi bagi seluruh siswa SMA Negeri 1 Halmahera Utara untuk terus berprestasi dalam akademik, berkarakter mulia, dan siap menghadapi tantangan masa depan.\"",
    date: "19 Juli 2026",
    image: "/assets/beritabaru1.jpg"
  },
  {
    id: "news-new",
    title: "Puluhan Siswa SMA Negeri 1 Halmahera Utara Mengikuti Diklatsar Palang Merah Remaja Angkatan I Tahun 2026",
    excerpt: "Puluhan siswa mengikuti kegiatan Pendidikan dan Latihan Dasar (Diklatsar) PMR. Kegiatan ini bertujuan membekali siswa dengan keterampilan dasar kepalangmerahan, pertolongan pertama, dan kesiapsiagaan bencana.",
    content: "Puluhan Siswa Sekolah Menengah Atas (SMA) Negeri 1 Halmahera Utara (Halut) mengikuti kegiatan Pendidikan Dan Pelatihan Dasar (Diklatsar) Palang Merah Remaja (PMR) angkatan I (Pertama) tahun 2026, Sabtu (18/07/2026).\n\nTujuan utama Diklatsar PMR adalah untuk membentuk karakter anggota yang berjiwa kemanusiaan, disiplin, dan bertanggung jawab. Kegiatan ini membekali siswa dengan keterampilan dasar kepalangmerahan, pertolongan pertama (First Aid), kepemimpinan, dan kesiapsiagaan bencana agar mereka siap menjadi relawan PMI di masa depan.\n\nTheovani Anu, S.Si Staf Markas PMI Halmahera Utara bidang relawan dan PMR menyampaikan bahwa siswa-siswi SMA Negeri 1 Halmahera Utara yang mengikuti kegiatan Pendidikan Dan Pelatihan Dasar atau DIKLATSAR PMR ini merupakan anggota PMR SMA Negeri 1 Halut angkatan pertama tahun 2026, dengan jumlah keseluruhan sebanyak 42 orang siswa.\n\n“Materi yang diberikan mulai dari pengenalan organisasi kemanusiaan Palang Merah Indonesia, peranan PMR hingga pada Kesiapsiagaan Bencana sekolah,” Jelasnya.\n\nTheo juga bilang, kegiatan tersebut dilaksanakan selama 2 hari dari tanggal 17 s/d 18 dan dilanjutkan dengan Pelantikan anggota PMR SMA Negeri 1 Halmahera Utara yang telah mengikuti kegiatan DIKLATSAR tersebut.\n\nSementara itu, Koordinator Bidang Kebencaan dan Relawan PMI Kabupaten Halmahera Sukitman Asgar, SH.,MH juga mengatakan bahwa anggota PMR tersebut dapat menjadi relawan Markas PMI Halmahera Utara kedepan yang akan menjadi ujung tombak PMI di Kabupaten Halmahera Utara. Selain itu, ia juga mengatakan kegiatan PMR tersebut akan dibuka di seluruh SMP dan SMA di Kabupaten Halmahera Utara. Sehingga, program Kesiapsiagaan Bencana di sekolah dapat berjalan dengan baik.\n\n“Jadi, anggota PMR yang telah terbentuk di beberapa SMA dan SMP di Halmahera Utara diharapkan dapat menjadi ujung tombak PMI di Halmahera Utara, sehingga dapat melaksanakan tugas kemanusiaan dengan rasa tanggungjawab,” harapnya.",
    date: "18 Juli 2026",
    image: "/assets/news1.jpg"
  },
  {
    id: "news-1",
    title: "SPMB SMAN 1 Halmahera Utara Tahun Ajaran 2026/2027 Resmi Dibuka",
    excerpt: "Saatnya melangkah lebih dekat menuju sekolah dengan Akreditasi A (Unggul) dan predikat Sekolah Penggerak yang siap mendukung setiap langkah, mimpi, dan prestasimu.",
    content: "📣 Halo, calon SobSaa 2026! 📣\nMinSaa punya kabar baik nih! 🎉\n\n🚪✨ SPMB SMAN 1 Halmahera Utara Tahun Ajaran 2026/2027 resmi dibuka!\nSaatnya melangkah lebih dekat menuju sekolah dengan Akreditasi A (Unggul) dan predikat Sekolah Penggerak yang siap mendukung setiap langkah, mimpi, dan prestasimu. 🌟\n\nDi SMANSA, kamu tidak hanya belajar untuk meraih nilai terbaik, tetapi juga bertumbuh menjadi pribadi yang berkarakter, kreatif, berprestasi, dan siap menghadapi masa depan. 📚🏆\n\n💡 Jalur Pendaftaran:\n🏅 Jalur Prestasi\n📍 Jalur Domisili\n🤝 Jalur Afirmasi\n🔄 Jalur Mutasi\n\n📌 Pastikan seluruh berkas telah disiapkan dan lakukan pendaftaran sesuai jadwal yang telah ditentukan.\nKarena setiap perjalanan besar selalu dimulai dari satu langkah kecil. Dan siapa tahu, langkah itu dimulai dari SMAN 1 Halmahera Utara. 💙✨\n\n📍 Ayo bergabung menjadi bagian dari keluarga besar SMANSA! Mari belajar, berkembang, berprestasi, dan mengukir masa depan bersama.\nSMANSA Menyapa, SobSaa Menjawab! 💙🤍\n#SPMB2026 #SMAN1HalmaheraUtara #SobSaa2026 #minSaa",
    date: "6 Juni 2026",
    image: "/assets/spmb2026.png"
  },
  {
    id: "news-4",
    title: "Warga SMAN 1 Halmahera Utara Serahkan Hewan Qurban",
    excerpt: "Sebagai wujud kepedulian sosial, keikhlasan, dan semangat berbagi, warga SMAN 1 Halmahera Utara menyerahkan hewan qurban untuk disembelih pada Hari Raya Iduladha.",
    content: "Sebagai wujud kepedulian sosial, keikhlasan, dan semangat berbagi, keluarga besar warga SMAN 1 Halmahera Utara menyerahkan seekor hewan qurban kepada pengurus masjid setempat untuk disembelih pada perayaan Hari Raya Iduladha. Penyerahan hewan qurban ini merupakan tradisi tahunan sekolah dalam rangka meningkatkan ketakwaan serta mempererat tali silaturahmi antara sekolah dan masyarakat sekitar.\n\nKegiatan ini diharapkan mampu menumbuhkan karakter siswa tentang pentingnya berbagi dengan sesama, kepedulian, dan rasa syukur atas nikmat yang diberikan. Semoga semangat keikhlasan ini terus menjadi inspirasi bagi seluruh elemen pendidikan di SMAN 1 Halmahera Utara.",
    date: "30 Mei 2026",
    image: "/assets/news2.jpg"
  },
  {
    id: "news-2",
    title: "Densus 88 AT Polri Gelar Densus Goes To School di SMAN 1 Halmahera Utara",
    excerpt: "Tim Pencegahan Densus 88 AT Polri melaksanakan kegiatan Densus Goes To School untuk meningkatkan kesadaran murid tentang bahaya penyebaran paham intoleransi dan radikalisme.",
    content: "Halmahera Utara - Tim Pencegahan Densus 88 AT Polri melaksanakan kegiatan Densus Goes To School di SMA Negeri 1 Halmahera Utara, Senin (19/01/2026). Kegiatan ini diikuti oleh 500 murid SMA Negeri 1 Halmahera Utara dan bertujuan meningkatkan kesadaran mereka tentang bahaya penyebaran paham Intoleransi, Radikalisme, Ekstremisme, dan Terorisme (IRET).\n\n\"Saya sangat berterima kasih kepada Tim Densus 88 AT Polri yang telah meluangkan waktu untuk berkunjung dan bersedia memberikan sosialisasi dan edukasi kepada murid SMA Negeri 1 Halmahera Utara,\" ujar Bapak Doland Richard Ollo, Kepala Kesiswaan SMA Negeri 1 Halmahera Utara.\n\nIPTU Herry Rinsampessy, S.H, Katim Pencegahan Densus 88 , menyampaikan materi tentang ciri-ciri masyarakat dan anak muda yang mulai terpapar paham IRET, serta anak-anak yang terkena paham radikalisme melalui media sosial dan game online.\n\n\"Kita harus waspada terhadap modus baru aksi teror, seperti menempatkan perempuan dan anak sebagai pelaku teror, serta merekrut milenial yang sedang dalam pencarian jati diri dan identitas,\" ujar IPTU Herry Rinsampessy.\n\nKegiatan ini diakhiri dengan sesi tanya jawab dan foto bersama. Kepala Sekolah SMA Negeri 1 Halmahera Utara, Bapak Marthin Manuel, S.Pd., M.Pd, menyampaikan terima kasih kepada Tim Densus 88 AT Polri dan berharap kegiatan ini dapat berkelanjutan.",
    date: "20 Januari 2026",
    image: "/assets/berita2_densus.jpg"
  }
];
