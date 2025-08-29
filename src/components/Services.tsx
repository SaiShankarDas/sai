import React from 'react';
import { Monitor, Smartphone, Globe, Code } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and cutting-edge technologies.',
      features: ['React & TypeScript', 'WebGL Integration', 'Performance Optimization', 'Responsive Design']
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['React Native', 'Flutter Development', 'iOS & Android', 'Progressive Web Apps']
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Digital Experiences',
      description: 'Immersive digital environments and interactive experiences that captivate users.',
      features: ['3D Visualizations', 'Interactive Demos', 'VR/AR Solutions', 'Game Development']
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Custom Solutions',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: ['API Development', 'Database Design', 'Cloud Integration', 'DevOps & CI/CD']
    }
  ];

  return (
    <section id="services" className="py-20 px-4 relative pointer-events-auto bg-gray-50 dark:bg-black/70">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/80 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive digital solutions that combine innovation with reliability, 
            helping you build the future of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:bg-white dark:hover:bg-white/10 group hover:transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              <div className="text-cyan-500 dark:text-cyan-400 mb-6 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="text-sm text-gray-500 dark:text-white/60 flex items-center"
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors duration-300" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
