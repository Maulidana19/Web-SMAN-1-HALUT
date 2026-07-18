import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Teachers } from './components/Teachers';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NewsSection } from './components/NewsSection';
import { WelcomeSection } from './components/WelcomeSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { AchievementsHighlight } from './components/AchievementsHighlight';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ComingSoon } from './components/ComingSoon';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda-sekilas');

  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      'beranda-sekilas': 'Sekilas Sekolah | SMAN 1 Halmahera Utara',
      'beranda-sambutan': 'Sambutan Kepala Sekolah | SMAN 1 Halmahera Utara',
      'beranda-agenda': 'Agenda Sekolah | SMAN 1 Halmahera Utara',
      'profil-identitas': 'Identitas Sekolah | SMAN 1 Halmahera Utara',
      'profil-manajemen': 'Manajemen Sekolah | SMAN 1 Halmahera Utara',
      'profil-guru': 'Direktori Guru | SMAN 1 Halmahera Utara',
      'profil-fasilitas': 'Fasilitas | SMAN 1 Halmahera Utara',
      'profil-akreditasi': 'Akreditasi | SMAN 1 Halmahera Utara',
      'akademik-kurikulum': 'Kurikulum | SMAN 1 Halmahera Utara',
      'akademik-peminatan': 'Program Peminatan | SMAN 1 Halmahera Utara',
      'akademik-kalender': 'Kalender Akademik | SMAN 1 Halmahera Utara',
      'akademik-portal': 'Tautan Portal | SMAN 1 Halmahera Utara',
      'kesiswaan-osis': 'OSIS & MPK | SMAN 1 Halmahera Utara',
      'kesiswaan-ekstrakurikuler': 'Ekstrakurikuler | SMAN 1 Halmahera Utara',
      'kesiswaan-prestasi': 'Prestasi Siswa | SMAN 1 Halmahera Utara',
      'kesiswaan-alumni': 'Ikatan Alumni | SMAN 1 Halmahera Utara',
      'informasi-ppdb': 'Informasi PPDB | SMAN 1 Halmahera Utara',
      'informasi-pengumuman': 'Pengumuman Resmi | SMAN 1 Halmahera Utara',
      'informasi-berita': 'Berita Kegiatan | SMAN 1 Halmahera Utara',
      'media-galeri': 'Galeri Visual | SMAN 1 Halmahera Utara',
      'media-hubungi': 'Hubungi Kami | SMAN 1 Halmahera Utara',
      'media-lokasi': 'Lokasi Sekolah | SMAN 1 Halmahera Utara',
    };
    document.title = sectionTitles[activeSection] || 'SMAN 1 Halmahera Utara';
  }, [activeSection]);

  // Renders the component matching the active view/section
  const renderContent = () => {
    switch (activeSection) {
      // 1. BERANDA
      case 'beranda-sekilas':
        return (
          <>
            <Hero 
              key="home"
              onNavigateToAbout={() => {
                setActiveSection('profil-identitas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToTeachers={() => {
                setActiveSection('profil-guru');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <WelcomeSection 
              key="home-welcome" 
              onNavigateToAbout={() => {
                setActiveSection('profil-identitas');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <FacilitiesSection key="home-facilities" />
            <AchievementsHighlight key="home-achievements" />
            <TestimonialsSection key="home-testimonials" />
            <NewsSection key="home-news" />
          </>
        );
      case 'beranda-sambutan':
        return <About key="beranda-sambutan" view="sambutan" />;
      case 'beranda-agenda':
        return <ComingSoon key="beranda-agenda" section="beranda-agenda" />;

      // 2. PROFIL
      case 'profil-identitas':
        return <About key="profil-identitas" view="identitas" />;
      case 'profil-manajemen':
        return <About key="profil-manajemen" view="manajemen" />;
      case 'profil-guru':
        return <Teachers key="profil-guru" />;
      case 'profil-fasilitas':
        return <FacilitiesSection key="profil-fasilitas" />;
      case 'profil-akreditasi':
        return <ComingSoon key="profil-akreditasi" section="profil-akreditasi" />;

      // 3. AKADEMIK
      case 'akademik-kurikulum':
        return <ComingSoon key="akademik-kurikulum" section="akademik-kurikulum" />;
      case 'akademik-peminatan':
        return <ComingSoon key="akademik-peminatan" section="akademik-peminatan" />;
      case 'akademik-kalender':
        return <ComingSoon key="akademik-kalender" section="akademik-kalender" />;
      case 'akademik-portal':
        return <ComingSoon key="akademik-portal" section="akademik-portal" />;

      // 4. KESISWAAN & ALUMNI
      case 'kesiswaan-osis':
        return <ComingSoon key="kesiswaan-osis" section="kesiswaan-osis" />;
      case 'kesiswaan-ekstrakurikuler':
        return <ComingSoon key="kesiswaan-ekstrakurikuler" section="kesiswaan-ekstrakurikuler" />;
      case 'kesiswaan-prestasi':
        return <Achievements key="kesiswaan-prestasi" />;
      case 'kesiswaan-alumni':
        return <ComingSoon key="kesiswaan-alumni" section="kesiswaan-alumni" />;

      // 5. INFORMASI PUBLIK
      case 'informasi-ppdb':
        return <ComingSoon key="informasi-ppdb" section="informasi-ppdb" />;
      case 'informasi-pengumuman':
        return <ComingSoon key="informasi-pengumuman" section="informasi-pengumuman" />;
      case 'informasi-berita':
        return <NewsSection key="informasi-berita" />;

      // 6. MEDIA & KONTAK
      case 'media-galeri':
        return <ComingSoon key="media-galeri" section="media-galeri" />;
      case 'media-hubungi':
        return <Contact key="media-hubungi" view="hubungi" />;
      case 'media-lokasi':
        return <Contact key="media-lokasi" view="lokasi" />;

      default:
        return (
          <Hero 
            key="home-fallback"
            onNavigateToAbout={() => {
              setActiveSection('profil-identitas');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToTeachers={() => {
              setActiveSection('profil-guru');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        );
    }
  };

  return (
    <div id="school-app-container" className="min-h-screen bg-[#f1f5f9] flex flex-col font-sans select-none selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Header with Sitemap Dropdown */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      {/* Main Content Area with Smooth Cross-fading Transitions */}
      <main className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full h-full"
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern footer with navigation trigger callback */}
      <Footer setActiveSection={(sec) => setActiveSection(sec)} />

    </div>
  );
}
