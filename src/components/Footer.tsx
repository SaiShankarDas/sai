import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: '#', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
  ];

  return (
    <footer className="relative py-16 px-4 bg-gray-100 dark:bg-black/50 backdrop-blur-sm border-t border-gray-200 dark:border-white/10 pointer-events-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                HyperSpeed
              </span>
            </div>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6">
              Pushing the boundaries of digital experiences with cutting-edge technology 
              and innovative design solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-500 dark:text-white/60 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-600 dark:text-white/60">
              <p>Ready to start your hyperspeed journey?</p>
              <button className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-600 dark:text-cyan-300 font-medium py-2 px-4 rounded-lg transition-all duration-200 border border-cyan-400/20 hover:border-cyan-400/40">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-white/50 text-sm">
            © {currentYear} HyperSpeed. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
