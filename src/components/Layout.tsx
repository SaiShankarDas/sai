import { Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import CardNav, { CardNavItem } from './CardNav';
import Footer from './Footer';
import Hyperspeed, { HyperspeedHandle } from './Hyperspeed';
import { HyperspeedContext } from '../contexts/HyperspeedContext';
import WhatsAppButton from './WhatsAppButton';
import ChatbotController from './Chatbot/ChatbotController';

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const hyperspeedRef = useRef<HyperspeedHandle>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    // Set initial state
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    
    return () => observer.disconnect();
  }, []);

  const navItems: CardNavItem[] = [
    {
      label: "Products",
      bgColor: isDarkMode ? "#0D0716" : "#E9E6EF",
      textColor: isDarkMode ? "#fff" : "#000",
      links: [
        { label: "Explore by Industry", href: "/products", ariaLabel: "View All Products" },
        { label: "AI Calling Agent", href: "/products", ariaLabel: "View AI Calling Agent" },
        { label: "SEO Genie", href: "/products", ariaLabel: "View SEO Genie" }
      ]
    },
    {
      label: "Dashboard",
      bgColor: isDarkMode ? "#170D27" : "#DAD4E4",
      textColor: isDarkMode ? "#fff" : "#000",
      links: [
        { label: "View Analytics", href: "/dashboard", ariaLabel: "Go to Dashboard" },
        { label: "Campaign Performance", href: "/dashboard", ariaLabel: "View Campaign Performance" },
      ]
    },
    {
      label: "Contact",
      bgColor: isDarkMode ? "#271E37" : "#C4BED3",
      textColor: isDarkMode ? "#fff" : "#000",
      links: [
        { label: "Get in Touch", href: "/contact", ariaLabel: "Go to Contact Page" },
        { label: "Email Us", href: "mailto:info@sai.company", ariaLabel: "Email us" },
        { label: "Book a Demo", href: "/contact", ariaLabel: "Book a Demo" },
      ]
    }
  ];

  const darkColors = {
    roadColor: 0x080808,
    islandColor: 0x0a0a0a,
    background: 0x000000,
    shoulderLines: 0x111111,
    brokenLines: 0x333333,
    leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
    rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
    sticks: 0x03b3c3,
  };

  const lightColors = {
    roadColor: 0xe0e0e0,
    islandColor: 0xd8d8d8,
    background: 0xffffff,
    shoulderLines: 0xcccccc,
    brokenLines: 0xbbbbbb,
    leftCars: [0x5227FF, 0x7c5dff],
    rightCars: [0x7df9ff, 0x34d3e0],
    sticks: 0x5227FF,
  };

  const hyperspeedControls = {
    speedUp: (ev: any) => hyperspeedRef.current?.speedUp(ev),
    slowDown: (ev: any) => hyperspeedRef.current?.slowDown(ev),
  };

  return (
    <>
      <CardNav
        logo="https://gold-noemi-47.tiiny.site/6D811A1F-B7F6-4D42-8209-D05157D2FE83.png"
        logoAlt="sAI Logo"
        items={navItems}
        baseColor="#ffffff"
        darkBaseColor="#080808"
        menuColor="#000000"
        darkMenuColor="#ffffff"
        buttonBgColor="#f0f0f0"
        darkButtonBgColor="#222222"
        buttonTextColor="#000000"
        darkButtonTextColor="#ffffff"
        ease="power3.out"
      />
       <Hyperspeed 
          ref={hyperspeedRef}
          key={isDarkMode ? 'dark' : 'light'}
          effectOptions={{
            colors: isDarkMode ? darkColors : lightColors
          }}
        />
      <HyperspeedContext.Provider value={hyperspeedControls}>
        <main>
          <Outlet />
        </main>
      </HyperspeedContext.Provider>
      <Footer />
      <WhatsAppButton />
      <ChatbotController />
    </>
  );
};

export default Layout;
