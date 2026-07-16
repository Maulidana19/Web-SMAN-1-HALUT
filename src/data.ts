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
    message: "Selamat datang di website resmi SMA Negeri 1 Halmahera Utara. Kami berkomitmen untuk menyelenggarakan pendidikan berkualitas yang berfokus pada pengembangan potensi unik setiap siswa. Melalui sinergi antara akademik, pengembangan karakter, dan teknologi, kami mempersiapkan lulusan yang siap menghadapi tantangan masa depan dan berkontribusi nyata bagi bangsa."
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
    role: "Alumni 2023 - Mahasiswa Teknik Informatika Universitas Halmahera",
    content: "SMAN 1 Harapan Bangsa tidak hanya mengajarkan materi pelajaran, tetapi juga cara berpikir kritis dan kepemimpinan. Guru-gurunya sangat mendukung kami untuk mengejar mimpi akademik.",
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
  { id: "teacher-1", name: "Dr. Budi Santoso, M.Pd.", image: "/src/assets/foto1.jpg" },
  { id: "teacher-2", name: "Fendy V. Hitipeuw, S.Pd.", image: "/src/assets/foto2.jpg" },
  { id: "teacher-3", name: "Ahmad Fauzi, S.S.", image: "/src/assets/foto3.jpg" },
  { id: "teacher-4", name: "Thomas Salfister Matrutty, S.Pd.", image: "/src/assets/foto4.jpg" },
  { id: "teacher-5", name: "Drs. Hendro Wibowo", image: "/src/assets/foto5.jpg" },
  { id: "teacher-6", name: "Eka Setiawati, S.Pd.", image: "/src/assets/foto6.jpg" },
  { id: "teacher-7", name: "Bambang Pamungkas, M.Pd.", image: "/src/assets/foto7.jpg" },
  { id: "teacher-8", name: "Tri Hapsari, S.Pd.", image: "/src/assets/foto8.jpg" },
  { id: "teacher-9", name: "Adeleda Letlora, S.Pd.", image: "/src/assets/foto9.jpg" },
  { id: "teacher-10", name: "Agustine V. Singal, S.Pd.", image: "/src/assets/foto10.jpg" },
  { id: "teacher-11", name: "Christina Tiawata, S.Pd.", image: "/src/assets/foto11.jpg" },
  { id: "teacher-12", name: "Chintia E.P. Ngabalinn, S.PAK.", image: "/src/assets/foto12.jpg" },
  { id: "teacher-13", name: "Crista T.Y. Kakanga, S.Pd.", image: "/src/assets/foto13.jpg" },
  { id: "teacher-14", name: "Dein L. Soloha, S.Pd.", image: "/src/assets/foto14.jpg" },
  { id: "teacher-15", name: "Dra. Wenefrida Ardiantari, M.M.", image: "/src/assets/foto15.jpg" },
  { id: "teacher-16", name: "Eminia Sofya Papuling, S.Si.", image: "/src/assets/foto16.jpg" },
  { id: "teacher-17", name: "Handayane Utubira, S.Pd.", image: "/src/assets/foto17.jpg" },
  { id: "teacher-18", name: "Hawa S. Toluhula, S.Pd.", image: "/src/assets/foto18.jpg" },
  { id: "teacher-19", name: "Krismery D. Andalangi, S.Pd., M.M.", image: "/src/assets/foto19.jpg" },
  { id: "teacher-20", name: "Lasma J.M. Sitompul, S.Pd.", image: "/src/assets/foto20.jpg" },
  { id: "teacher-21", name: "Luciana M. Nanlohy, S.Si.", image: "/src/assets/foto21.jpg" },
  { id: "teacher-22", name: "Lumiati, S.Pd.", image: "/src/assets/foto22.jpg" },
  { id: "teacher-23", name: "Mersy Sameaputty, S.Pd.", image: "/src/assets/foto23.jpg" },
  { id: "teacher-24", name: "Neti Herawati Hangkamu, S.Pd., M.Pd.", image: "/src/assets/foto24.jpg" },
  { id: "teacher-25", name: "Nurhayati, S.E.", image: "/src/assets/foto25.jpg" },
  { id: "teacher-26", name: "Putri Marwah Fajrin, S.Pd., Gr.", image: "/src/assets/foto26.jpg" },
  { id: "teacher-27", name: "Rina Apling, S.Pd.", image: "/src/assets/foto27.jpg" },
  { id: "teacher-28", name: "Royani Pobela, S.Pd., M.M.", image: "/src/assets/foto28.jpg" },
  { id: "teacher-29", name: "Silfester Balamau, S.Pd.", image: "/src/assets/foto29.jpg" },
  { id: "teacher-30", name: "Sri Anggriani, S.Pd.", image: "/src/assets/foto30.jpg" },
  { id: "teacher-31", name: "Stefi Apriani Tobelo, S.Pd.", image: "/src/assets/foto31.jpg" },
  { id: "teacher-32", name: "Suwarsi Abubakar, S.Pd.", image: "/src/assets/foto32.jpg" },
  { id: "teacher-33", name: "Wanda Cristianita Lukas, S.Pd., M.Si.", image: "/src/assets/foto33.jpg" },
  { id: "teacher-34", name: "Yeni Katemung, S.Pd.", image: "/src/assets/foto34.jpg" },
  { id: "teacher-35", name: "Yunus Rumu, S.Pd.", image: "/src/assets/foto35.jpg" },
  { id: "teacher-36", name: "Yurike F. Makaoming, S.Pd.", image: "/src/assets/foto36.jpg" },
  { id: "teacher-37", name: "Yusdi T. Sura, S.Pd.", image: "/src/assets/foto37.jpg" },
  { id: "teacher-38", name: "Rasni Bitjoli, S.Si.", image: "/src/assets/foto38.jpg" },
  { id: "teacher-39", name: "Elita Taramen, S.Pd.", image: "/src/assets/foto39.jpg" },
  { id: "teacher-40", name: "Warni A. Mezak, S.Pd.", image: "/src/assets/foto40.jpg" },
  { id: "teacher-41", name: "Oktofianus Lasa, S.Pd.K.", image: "/src/assets/foto41.jpg" },
  { id: "teacher-42", name: "Haidir Yasman Kardi, S.Pd.", image: "/src/assets/foto42.jpg" },
  { id: "teacher-43", name: "Faisal Riza, S.Kom.", image: "/src/assets/foto43.jpg" },
  { id: "teacher-44", name: "Ratna Sari, M.Pd.", image: "/src/assets/foto44.jpg" }
];

export const TENDIK_DATA = [
  { id: "tendik-1", name: "Asmawati Latusu Idi, A.Md.", image: "/src/assets/tendik1.jpg" },
  { id: "tendik-2", name: "Herianto Tahe, S.AP.", image: "/src/assets/tendik2.jpg" },
  { id: "tendik-3", name: "Jantje Mantol", image: "/src/assets/tendik3.jpg" },
  { id: "tendik-4", name: "Mariane Stien Gumabo, S.Si.", image: "/src/assets/tendik4.jpg" },
  { id: "tendik-5", name: "Meyanti Sartin Gumabo, S.T.", image: "/src/assets/tendik5.jpg" },
  { id: "tendik-6", name: "Novenci Garo, S.AP.", image: "/src/assets/tendik6.jpg" },
  { id: "tendik-7", name: "Opsalina Tawar", image: "/src/assets/tendik7.jpg" },
  { id: "tendik-8", name: "Nama Tendik 8", image: "/src/assets/tendik8.jpg" }
];

export const NEWS_DATA = [
  {
    id: "news-1",
    title: "SPMB SMAN 1 Halmahera Utara Tahun Ajaran 2026/2027 Resmi Dibuka",
    excerpt: "Saatnya melangkah lebih dekat menuju sekolah dengan Akreditasi A (Unggul) dan predikat Sekolah Penggerak yang siap mendukung setiap langkah, mimpi, dan prestasimu.",
    date: "6 Juni 2026",
    image: "/src/assets/spmb2026.png",
    link: "https://www.instagram.com/p/DZOa_YSko8A/?utm_source=chatgpt.com"
  },
  {
    id: "news-2",
    title: "Densus 88 AT Polri Gelar Densus Goes To School di SMAN 1 Halmahera Utara",
    excerpt: "Tim Pencegahan Densus 88 AT Polri melaksanakan kegiatan Densus Goes To School untuk meningkatkan kesadaran murid tentang bahaya penyebaran paham intoleransi dan radikalisme.",
    date: "20 Januari 2026",
    image: "/src/assets/berita2_densus.jpg",
    link: "https://humas.polri.go.id/news/detail/2251246-densus-88-at-polri-gelar-densus-goes-to-school-di-sma-negeri-1-halmahera-utara"
  },
  {
    id: "news-3",
    title: "Komite SMA 1 Halut, Sambut Baik Muhtar Taha Jadi Kepala Sekolah yang Baru",
    excerpt: "Sekretaris Komite SMA Negeri 1 Tobelo, Halmahera Utara(Halut) Nuku Romoni menyambut baik adanya pergantian Kepala Sekolah.",
    date: "26 Juni 2023",
    image: "https://infopublik.id/assets/upload/headline//25062023_Papannamasmatobelo25_(1)_wmcomp.jpg",
    link: "https://infopublik.id/kategori/nusantara/753436/komite-sma-1-halut-sambut-baik-muhtar-taha-jadi-kepala-sekolah-yang-baru"
  }
];
