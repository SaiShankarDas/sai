/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5227FF',
        electric: '#7df9ff',
        'neon-cyan': '#00E5FF',
        'neon-purple': '#9D4EDD',
        'whatsapp-start': '#25D366',
        'whatsapp-end': '#128C7E',
        'chatbot-start': '#4A00E0',
        'chatbot-end': '#8E2DE2',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        slideUp: {
          'from': { 
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        pulseGlow: {
          '0%, 100%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(142, 45, 226, 0.7)' 
          },
          '50%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 20px 10px rgba(142, 45, 226, 0)' 
          },
        }
      },
    },
  },
  plugins: [],
};
