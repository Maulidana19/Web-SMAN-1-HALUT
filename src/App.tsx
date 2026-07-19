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
import { Akreditasi } from './components/Akreditasi';
import { Manajemen } from './components/Manajemen';
import { Kurikulum } from './components/Kurikulum';
import { Peminatan } from './components/Peminatan';
import { Kalender } from './components/Kalender';
import { Portal } from './components/Portal';
import { Osis } from './components/Osis';
import { Ekstrakurikuler } from './components/Ekstrakurikuler';
import { Prestasi } from './components/Prestasi';
import { Alumni } from './components/Alumni';
import { SPMB } from './components/SPMB';
import { Pengumuman } from './components/Pengumuman';
import { Berita } from './components/Berita';
import { BeritaDetail } from './components/BeritaDetail';
import { Gallery } from './components/Gallery';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const handleNavigateToNewsDetail = (id: string) => {
    setSelectedNewsId(id);
    setActiveSection('berita-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const sectionTitles: Record<string, string> = {
      home: 'Beranda',
      about: 'Profil',
      teachers: 'Direktori Guru',
      achievements: 'Prestasi',
      contact: 'Kontak',
      manajemen: 'Manajemen',
      akreditasi: 'Akreditasi Sekolah',
      fasilitas: 'Fasilitas Sekolah',
      kurikulum: 'Kurikulum',
      peminatan: 'Peminatan',
      kalender: 'Kalender Akademik',
      portal: 'Tautan Portal',
      osis: 'OSIS & MPK',
      ekstrakurikuler: 'Ekstrakurikuler',
      prestasi: 'Prestasi',
      alumni: 'Ikatan Alumni',
      ppdb: 'Informasi SPMB',
      pengumuman: 'Pengumuman Resmi',
      berita: 'Berita Kegiatan',
      galeri: 'Galeri Kegiatan',
    };
    document.title = sectionTitles[activeSection] || 'Beranda';
  }, [activeSection]);

  // Renders the component matching the active view/section
  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero 
              key="home"
              onNavigateToAbout={() => {
                setActiveSection('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToTeachers={() => {
                setActiveSection('teachers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <WelcomeSection 
              key="home-welcome" 
              onNavigateToAbout={() => {
                setActiveSection('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
            <FacilitiesSection key="home-facilities" />
            <AchievementsHighlight key="home-achievements" />
            <TestimonialsSection key="home-testimonials" />
            <NewsSection 
              key="home-news" 
              onNavigateToNewsDetail={handleNavigateToNewsDetail}
              onNavigateToAllNews={() => {
                setActiveSection('berita');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          </>
        );
      case 'about':
        return <About key="about" />;
      case 'teachers':
        return <Teachers key="teachers" />;
      case 'achievements':
        return <Achievements key="achievements" />;
      case 'contact':
        return <Contact key="contact" />;
      case 'manajemen':
        return <Manajemen key="manajemen" />;
      case 'akreditasi':
        return <Akreditasi key="akreditasi" />;
      case 'fasilitas':
        return <FacilitiesSection key="fasilitas-page" />;
      case 'kurikulum':
        return <Kurikulum key="kurikulum" />;
      case 'peminatan':
        return <Peminatan key="peminatan" />;
      case 'kalender':
        return <Kalender key="kalender" />;
      case 'portal':
        return <Portal key="portal" />;
      case 'osis':
        return <Osis key="osis" />;
      case 'ekstrakurikuler':
        return <Ekstrakurikuler key="ekstrakurikuler" />;
      case 'prestasi':
        return <Prestasi key="prestasi" />;
      case 'alumni':
        return <Alumni key="alumni" />;
      case 'ppdb':
        return <SPMB key="ppdb" />;
      case 'pengumuman':
        return <Pengumuman key="pengumuman" />;
      case 'berita':
        return <Berita key="berita" onNavigateToNewsDetail={handleNavigateToNewsDetail} />;
      case 'berita-detail':
        return (
          <BeritaDetail 
            key="berita-detail" 
            newsId={selectedNewsId} 
            onBack={() => {
              setActiveSection('berita');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        );
      case 'galeri':
        return <Gallery key="galeri" />;
      default:
        return (
          <Hero 
            key="home-fallback"
            onNavigateToAbout={() => setActiveSection('about')}
            onNavigateToTeachers={() => setActiveSection('teachers')}
          />
        );
    }
  };

  return (
    <div id="school-app-container" className="min-h-screen bg-[#f1f5f9] flex flex-col font-sans select-none selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Header */}
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
