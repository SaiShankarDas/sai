import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const ThemeToggle = ({
  buttonBgColor,
  buttonTextColor,
}: {
  buttonBgColor?: string;
  buttonTextColor?: string;
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="card-nav-cta-button"
      aria-label={isDarkMode ? 'Activate light mode' : 'Activate dark mode'}
      style={{
        backgroundColor: buttonBgColor,
        color: buttonTextColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        padding: '0',
      }}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
