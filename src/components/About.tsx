import React from 'react';
import { Cpu, Rocket, Zap } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Experience blazing fast performance with our cutting-edge technology stack.'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI Powered',
      description: 'Advanced algorithms that adapt and optimize your experience in real-time.'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Future Ready',
      description: 'Built for tomorrow with scalable architecture and modern standards.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative pointer-events-auto bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">HyperSpeed</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            We're pushing the boundaries of digital experiences, creating immersive environments 
            that transport you to the future. Our technology blends cutting-edge graphics with 
            intuitive interactions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 group"
            >
              <div className="text-cyan-500 dark:text-cyan-400 mb-4 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Interactive Experience
              </h3>
              <p className="text-gray-700 dark:text-white/80 mb-6 leading-relaxed">
                Click and hold anywhere on the screen to accelerate through our hyperspeed tunnel. 
                Feel the rush as the field of view expands and the world blurs around you.
              </p>
              <div className="flex gap-4">
                <span className="bg-cyan-400/20 text-cyan-600 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                  WebGL
                </span>
                <span className="bg-purple-400/20 text-purple-600 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
                  Three.js
                </span>
                <span className="bg-pink-400/20 text-pink-600 dark:text-pink-300 px-3 py-1 rounded-full text-sm font-medium">
                  React
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  60
                </span>
              </div>
              <p className="text-gray-500 dark:text-white/60">Frames Per Second</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
