import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:info@sai.company', label: 'Email' },
  ];

  const pageLinks = [
    { label: 'Home', href: '/' },
    { label: 'Our Products', href: '/products' },
    { label: 'ImageGen', href: 'https://imagegen.example.com', isExternal: true },
    { label: 'Contact', href: '/contact' },
  ];

  const featuredLinks = [
    { label: 'AI Calling Agent', href: '/products' },
    { label: 'SEO Genie', href: '/products' },
    { label: 'Cold Email Generator', href: '/products' },
    { label: 'WhatsApp Bot', href: '/products' },
  ];

  const renderLink = (link: { label: string; href: string; isExternal?: boolean }) => {
    if (link.isExternal) {
      return (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          {link.label}
        </a>
      );
    }
    return (
      <Link
        to={link.href}
        className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      >
        {link.label}
      </Link>
    );
  };

  return (
    <footer className="relative py-16 px-4 bg-gray-100 dark:bg-black/50 backdrop-blur-sm border-t border-gray-200 dark:border-white/10 pointer-events-auto z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://gold-noemi-47.tiiny.site/6D811A1F-B7F6-4D42-8209-D05157D2FE83.png" 
                alt="sAI Logo" 
                className="w-8 h-8 object-contain"
              />
              <div className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  sAI
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6 max-w-md">
              Pioneering the future of artificial intelligence with innovative solutions that 
              transform businesses and unlock new possibilities through intelligent technology.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 tracking-wider uppercase text-sm">Pages</h3>
            <ul className="space-y-3">
              {pageLinks.map((link, index) => (
                <li key={index}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>

          {/* Featured */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4 tracking-wider uppercase text-sm">Featured</h3>
            <ul className="space-y-3">
              {featuredLinks.map((link, index) => (
                <li key={index}>{renderLink(link)}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-white/50 text-sm">
            © {currentYear} sAI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-white/60 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
