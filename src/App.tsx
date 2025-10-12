import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import GalleryDetail from './components/GalleryDetail';
import About from './components/About';
import Contact from './components/Contact';
import FloatingContacts from './components/FloatingContacts';
import SearchModal from './components/SearchModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Smooth scroll spy
    const handleScroll = () => {
      const sections = ['home', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <Router>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        onSearchClick={() => setIsSearchOpen(true)}
      />

      <main className="pt-16">
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Hero /></section>
              <section id="gallery"><Gallery /></section>
              <section id="about"><About /></section>
              <section id="contact"><Contact /></section>
            </>
          } />

          {/* Gallery detail page */}
          <Route path="/gallery/:category" element={<GalleryDetail />} />
        </Routes>
      </main>

      <FloatingContacts />
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </Router>
  );
}

export default App;
