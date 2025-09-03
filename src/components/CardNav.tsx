import React, { useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './CardNav.css';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  darkBaseColor?: string;
  menuColor?: string;
  darkMenuColor?: string;
  buttonBgColor?: string;
  darkButtonBgColor?: string;
  buttonTextColor?: string;
  darkButtonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#ffffff',
  darkBaseColor = '#111111',
  menuColor = '#000000',
  darkMenuColor = '#ffffff',
  buttonBgColor = '#111111',
  darkButtonBgColor = '#ffffff',
  buttonTextColor = '#ffffff',
  darkButtonTextColor = '#000000',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    return () => observer.disconnect();
  }, []);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const topBarHeight = 60;
    if (isMobile) {
      return navEl.scrollHeight;
    }
    return 260;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, { y: 30, opacity: 0 });
      tlRef.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => setIsExpanded(false),
      })
        .to(navRef.current, {
          height: calculateHeight,
          duration: 0.5,
          ease,
        })
        .to(cardsRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease,
          stagger: 0.08,
        }, '-=0.3');
    }, navRef);

    return () => ctx.revert();
  }, [ease, items]);

  const toggleMenu = () => {
    if (!tlRef.current) return;
    if (isExpanded) {
      tlRef.current.reverse();
    } else {
      setIsExpanded(true);
      gsap.set(navRef.current, { height: 60 });
      tlRef.current.play(0);
    }
  };

  const currentBaseColor = isDarkMode ? darkBaseColor : baseColor;
  const currentMenuColor = isDarkMode ? darkMenuColor : menuColor;

  return (
    <div className={`card-nav-container ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: currentBaseColor, height: 60 }}>
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isExpanded ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
          >
            <div className="hamburger-line" style={{ backgroundColor: currentMenuColor }} />
            <div className="hamburger-line" style={{ backgroundColor: currentMenuColor }} />
          </div>

          <div className="logo-container">
            <img src={logo} alt={logoAlt} className="logo" />
          </div>

          <ThemeToggle 
            buttonBgColor={isDarkMode ? darkButtonBgColor : buttonBgColor}
            buttonTextColor={isDarkMode ? darkButtonTextColor : buttonTextColor}
          />
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={el => cardsRef.current[idx] = el}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => {
                  const isExternal = lnk.href.startsWith('http') || lnk.href.startsWith('mailto');
                  if (isExternal) {
                    return (
                      <a key={`${lnk.label}-${i}`} className="nav-card-link" href={lnk.href} aria-label={lnk.ariaLabel} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                        {lnk.label}
                      </a>
                    );
                  }
                  return (
                    <Link key={`${lnk.label}-${i}`} to={lnk.href} className="nav-card-link" aria-label={lnk.ariaLabel} onClick={() => isExpanded && toggleMenu()}>
                      <ArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                      {lnk.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
