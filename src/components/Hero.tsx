import React from 'react';
import { ArrowDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 bg-gray-100 dark:bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-cyan-500 dark:text-cyan-300 border border-gray-200 dark:border-cyan-400/20">
            <Zap size={16} />
            Experience the Future
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Welcome to
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            HyperSpeed
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Journey through a digital universe where speed meets innovation. 
          Hold down to accelerate through the neon-lit highways of tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 pointer-events-auto">
            Start Journey
          </button>
          
          <button className="border border-gray-300 dark:border-white/30 hover:border-gray-400 dark:hover:border-white/60 text-gray-800 dark:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-white/10 pointer-events-auto">
            Learn More
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-500 dark:text-white/60" size={24} />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white dark:from-black/50 dark:via-transparent dark:to-black pointer-events-none" />
    </section>
  );
};

export default Hero;
