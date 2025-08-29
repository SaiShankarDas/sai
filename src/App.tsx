import React, { useState, useEffect } from 'react';
import Hyperspeed from './components/Hyperspeed';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';

type Theme = 'light' | 'dark';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Hyperspeed Background */}
      <Hyperspeed 
        effectOptions={{
          colors: {
            roadColor: 0x080808,
            islandColor: 0x0a0a0a,
            background: 0x000000,
            shoulderLines: 0x111111,
            brokenLines: 0x333333,
            leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
            rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
            sticks: 0x03b3c3,
          }
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 pointer-events-none">
        <Navigation 
          isOpen={isNavOpen} 
          toggleNav={toggleNav} 
          theme={theme}
          setTheme={setTheme}
        />
        <Hero />
        <About />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

export default App;
