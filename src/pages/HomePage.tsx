import { Link } from 'react-router-dom';
import { useHyperspeed } from '../contexts/HyperspeedContext';
import { Zap } from 'lucide-react';
import ElectricBorder from '../components/ElectricBorder';

export default function HomePage() {
  const { speedUp, slowDown } = useHyperspeed();

  return (
    <div
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 pointer-events-auto"
      onMouseDown={speedUp}
      onMouseUp={slowDown}
      onTouchStart={speedUp}
      onTouchEnd={slowDown}
    >
      <div className="mb-8 animate-fade-in inline-block">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.5}
          thickness={1.5}
          style={{ borderRadius: '9999px' }}
          className="group"
        >
          <div className="backdrop-blur-sm bg-black/20 group-hover:bg-black/40 transition-colors duration-300 text-cyan-300 font-semibold px-6 py-2 rounded-full flex items-center gap-2">
            Welcome to sAI
          </div>
        </ElectricBorder>
      </div>

      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up tracking-tighter">
        Leading the Charge in <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Business Automation
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        Empower your business with our suite of AI-powered solutions. From marketing automation to intelligent customer engagement, sAI is your partner in unlocking next-level growth and efficiency.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Link
          to="/products"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative">Explore Our Products</span>
        </Link>
        <Link
          to="/contact"
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-800 dark:text-white bg-white/50 dark:bg-black/20 backdrop-blur-sm border border-gray-300 dark:border-white/20 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          <span className="absolute inset-0 bg-white dark:bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          <span className="relative">Contact Us</span>
        </Link>
      </div>
    </div>
  );
}
