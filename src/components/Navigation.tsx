import React from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

type Theme = 'light' | 'dark';

interface NavigationProps {
  isOpen: boolean;
  toggleNav: () => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, toggleNav, theme, setTheme }) => {
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-white/10 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                HyperSpeed
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle theme={theme} setTheme={setTheme} />
              <button
                onClick={toggleNav}
                className="text-gray-800 dark:text-white p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-black/90 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 font-medium"
                  onClick={toggleNav}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
