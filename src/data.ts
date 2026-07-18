import { Facility, Achievement, Testimonial } from "./types";

export const SCHOOL_INFO = {
  name: "SMA Negeri 1 Halmahera Utara",
  slogan: "Unggul dalam Prestasi, Berkarakter, dan Berwawasan Global",
  shortDescription: "Sekolah Menengah Atas berstatus Sekolah Negeri Provinsi Maluku Utara yang berdedikasi membentuk generasi unggul, kreatif, dan mandiri dengan landasan nilai karakter luhur.",
  vision: "Terwujudnya insan pendidikan yang bertaqwa, cerdas, kreatif, berkarakter luhur, dan siap bersaing di kancah global.",
  missions: [
    "Menyelenggarakan proses pembelajaran yang inovatif, efektif, dan berbasis teknologi.",
    "Menanamkan nilai-nilai karakter budi pekerti, disiplin, dan religius dalam keseharian sekolah.",
    "Mengembangkan minat, bakat, dan potensi siswa melalui program ekstrakurikuler yang komprehensif.",
    "Membangun kemitraan yang kuat dengan orang tua, masyarakat, dan institusi global untuk kemajuan pendidikan.",
    "Mewujudkan lingkungan sekolah yang bersih, hijau, aman, dan kondusif untuk belajar."
  ],
  principal: {
    name: "Ellen Sintya Dewi, S.Pd., M.Si.",
    role: "Kepala Sekolah SMAN 1 Halmahera Utara",
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
    email: "smansahalutTobelo1969@gmail.com",
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
    name: "Rian Aditya",
    role: "Alumni 2023 - Universitas Halmahera",
    content: "SMAN 1 Halmahera Utara tidak hanya mengajarkan materi pelajaran, tetapi juga cara berpikir kritis dan kepemimpinan. Guru-gurunya sangat mendukung kami untuk mengejar mimpi akademik.",
    avatarSeed: "Rian"
  },
  {
    id: "test-2",
    name: "Siti Rahmawati",
    role: "Orang Tua Siswa Kelas XII",
    content: "Kami sangat bersyukur menyekolahkan anak kami di sini. Perkembangan karakternya luar biasa, anak menjadi lebih disiplin, sopan, dan rajin beribadah di samping prestasi akademiknya.",
    avatarSeed: "Siti"
  },
  {
    id: "test-3",
    name: "Faris Pratama",
    role: "Siswa Kelas XI - Ketua OSIS",
    content: "Fasilitas belajar di sini sangat memadai, terutama lab komputer dan perpustakaan. Program ekstrakurikuler juga sangat seru, memberi banyak ruang untuk belajar berorganisasi.",
    avatarSeed: "Faris"
  }
];

export const TEACHERS_DATA = [
  { id: "teacher-1", name: "Ellen Sintya Dewi, S.Pd., M.Si.", image: "/assets/foto1.jpg" },
  { id: "teacher-2", name: "Fendy V. Hitipeuw, S.Pd.", image: "/assets/foto2.jpg" },
  { id: "teacher-3", name: "Donal R. Ollo, S.Pd.", image: "/assets/foto3.jpg" },
  { id: "teacher-4", name: "Thomas Salfister Matrutty, S.Pd.", image: "/assets/foto4.jpg" },
  { id: "teacher-5", name: "Reny Uktolseja, S.E., S.Pd.", image: "/assets/foto5.jpg" },
  { id: "teacher-6", name: "Stevi Sarundayang, S.Si.", image: "/assets/foto6.jpg" },
  { id: "teacher-7", name: "Henny Kristiana Masahe, S.Pd.", image: "/assets/foto7.jpg" },
  { id: "teacher-8", name: "Faisal Garusu, S.Pd.", image: "/assets/foto8.jpg" },
  { id: "teacher-9", name: "Adeleda Letlora, S.Pd.", image: "/assets/foto9.jpg" },
  { id: "teacher-10", name: "Agustine V. Singal, S.Pd.", image: "/assets/foto10.jpg" },
  { id: "teacher-11", name: "Christina Tiawata, S.Pd.", image: "/assets/foto11.jpg" },
  { id: "teacher-12", name: "Chintia E.P. Ngabalinn, S.PAK.", image: "/assets/foto12.jpg" },
  { id: "teacher-13", name: "Crista T.Y. Kakanga, S.Pd.", image: "/assets/foto13.jpg" },
  { id: "teacher-14", name: "Dein L. Soloha, S.Pd.", image: "/assets/foto14.jpg" },
  { id: "teacher-15", name: "Dra. Wenefrida Ardiantari, M.M.", image: "/assets/foto15.jpg" },
  { id: "teacher-16", name: "Eminia Sofya Papuling, S.Si.", image: "/assets/foto16.jpg" },
  { id: "teacher-17", name: "Handayane Utubira, S.Pd.", image: "/assets/foto17.jpg" },
  { id: "teacher-18", name: "Hawa S. Toluhula, S.Pd.", image: "/assets/foto18.jpg" },
  { id: "teacher-19", name: "Krismery D. Andalangi, S.Pd., M.M.", image: "/assets/foto19.jpg" },
  { id: "teacher-20", name: "Lasma J.M. Sitompul, S.Pd.", image: "/assets/foto20.jpg" },
  { id: "teacher-21", name: "Luciana M. Nanlohy, S.Si.", image: "/assets/foto21.jpg" },
  { id: "teacher-22", name: "Lumiati, S.Pd.", image: "/assets/foto22.jpg" },
  { id: "teacher-23", name: "Mersy Sameaputty, S.Pd.", image: "/assets/foto23.jpg" },
  { id: "teacher-24", name: "Neti Herawati Hangkamu, S.Pd., M.Pd.", image: "/assets/foto24.jpg" },
  { id: "teacher-25", name: "Nurhayati, S.E.", image: "/assets/foto25.jpg" },
  { id: "teacher-26", name: "Putri Marwah Fajrin, S.Pd., Gr.", image: "/assets/foto26.jpg" },
  { id: "teacher-27", name: "Rina Apling, S.Pd.", image: "/assets/foto27.jpg" },
  { id: "teacher-28", name: "Royani Pobela, S.Pd., M.M.", image: "/assets/foto28.jpg" },
  { id: "teacher-29", name: "Silfester Balamau, S.Pd.", image: "/assets/foto29.jpg" },
  { id: "teacher-30", name: "Sri Anggriani, S.Pd.", image: "/assets/foto30.jpg" },
  { id: "teacher-31", name: "Stefi Apriani Tobelo, S.Pd.", image: "/assets/foto31.jpg" },
  { id: "teacher-32", name: "Suwarsi Abubakar, S.Pd.", image: "/assets/foto32.jpg" },
  { id: "teacher-33", name: "Wanda Cristianita Lukas, S.Pd., M.Si.", image: "/assets/foto33.jpg" },
  { id: "teacher-34", name: "Yeni Katemung, S.Pd.", image: "/assets/foto34.jpg" },
  { id: "teacher-35", name: "Yunus Rumu, S.Pd.", image: "/assets/foto35.jpg" },
  { id: "teacher-36", name: "Yurike F. Makaoming, S.Pd.", image: "/assets/foto36.jpg" },
  { id: "teacher-37", name: "Yusdi T. Sura, S.Pd.", image: "/assets/foto37.jpg" },
  { id: "teacher-38", name: "Rasni Bitjoli, S.Si.", image: "/assets/foto38.jpg" },
  { id: "teacher-39", name: "Elita Taramen, S.Pd.", image: "/assets/foto39.jpg" },
  { id: "teacher-40", name: "Warni A. Mezak, S.Pd.", image: "/assets/foto40.jpg" },
  { id: "teacher-41", name: "Oktofianus Lasa, S.Pd.K.", image: "/assets/foto41.jpg" },
  { id: "teacher-42", name: "Haidir Yasman Kardi, S.Pd.", image: "/assets/foto42.jpg" },
  { id: "teacher-43", name: "Nama", image: "/assets/foto43.jpg" },
  { id: "teacher-44", name: "Nama", image: "/assets/foto44.jpg" }
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
    id: "news-1",
    title: "SPMB SMAN 1 Halmahera Utara Tahun Ajaran 2026/2027 Resmi Dibuka",
    excerpt: "Saatnya melangkah lebih dekat menuju sekolah dengan Akreditasi A (Unggul) dan predikat Sekolah Penggerak yang siap mendukung setiap langkah, mimpi, dan prestasimu.",
    date: "6 Juni 2026",
    image: "/assets/spmb2026.png",
    link: "https://www.instagram.com/p/DZOa_YSko8A/?utm_source=chatgpt.com"
  },
  {
    id: "news-2",
    title: "Densus 88 AT Polri Gelar Densus Goes To School di SMAN 1 Halmahera Utara",
    excerpt: "Tim Pencegahan Densus 88 AT Polri melaksanakan kegiatan Densus Goes To School untuk meningkatkan kesadaran murid tentang bahaya penyebaran paham intoleransi dan radikalisme.",
    date: "20 Januari 2026",
    image: "/assets/berita2_densus.jpg",
    link: "https://humas.polri.go.id/news/detail/2251246-densus-88-at-polri-gelar-densus-goes-to-school-di-sma-negeri-1-halmahera-utara"
  },
  {
    id: "news-3",
    title: "Siswa Baru SMAN 1 Halmahera Utara Dapat Materi Wawasan Kebangsaan Dari Kodim Tobelo",
    excerpt: "Dalam rangka Masa Pengenalan Lingkungan Sekolah (MPLS) bagi siswa siswi baru, Pasi Pers Kodim 1508/Tobelo Kapten Inf Abd. Hadji Talaohu memberikan materi wawasan kebangsaan kepada pelajar SMA Negeri 1 Halmahera Utara.",
    date: "19 Juli 2022",
    image: "/assets/news3.jpg",
    link: "https://zonamalut.id/siswa-baru-sman-1-halmahera-utara-dapat-materi-wawasan-kebangsaan-dari-kodim-tobelo/"
  }
];
