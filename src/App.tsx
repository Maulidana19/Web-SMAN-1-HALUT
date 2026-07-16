import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Teachers } from './components/Teachers';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NewsSection } from './components/NewsSection';
export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

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
            <NewsSection key="home-news" />
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
