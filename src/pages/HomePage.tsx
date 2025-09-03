import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';
import { useHyperspeed } from '../contexts/HyperspeedContext';
import { Zap } from 'lucide-react';

const stats = [
  { value: "50K+", label: "Businesses Automated" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "AI Support" },
  { value: "150+", label: "Countries Served" },
];

const cardStyles = [
  { gradient: 'from-purple-500/80 to-pink-500/80', shadow: 'hover:shadow-purple-500/20' },
  { gradient: 'from-cyan-500/80 to-blue-500/80', shadow: 'hover:shadow-cyan-500/20' },
  { gradient: 'from-green-500/80 to-teal-500/80', shadow: 'hover:shadow-green-500/20' },
  { gradient: 'from-orange-500/80 to-red-500/80', shadow: 'hover:shadow-orange-500/20' }
];

export default function HomePage() {
  const { speedUp, slowDown } = useHyperspeed();

  return (
    <div className="relative z-10 pointer-events-auto pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        {/* Hero Section */}
        <div className="text-center">
          
          <div className="mb-8 animate-fade-in">
            <div class="backdrop-blur-md bg-white/10 border border-white/20 text-cyan-300 font-semibold px-6 py-2 rounded-full shadow-lg">
  ✨ Welcome to sAI
</div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 animate-slide-up tracking-tighter">
            Leading the Charge in <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Business Automation
            </span>
          </h1>

          <p className="text-base md:text-lg font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-[0.3em] mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            INTELLIGENT, EFFICIENT, AND ALWAYS ON.
          </p>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Empower your business with our suite of AI-powered solutions. From marketing automation to intelligent customer engagement, sAI is your partner in unlocking next-level growth and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="relative">Explore Products</span>
            </Link>
            
            <div 
              className="group relative inline-flex items-center justify-center p-0.5 rounded-lg bg-gray-200 dark:bg-gray-800 cursor-pointer select-none transform transition-transform duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto"
              onMouseDown={speedUp}
              onMouseUp={slowDown}
              onMouseLeave={slowDown}
              onTouchStart={speedUp}
              onTouchEnd={slowDown}
            >
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-75 blur transition-all duration-300 -z-10"></div>
              <div className="relative flex items-center gap-3 px-8 py-3 text-lg font-bold bg-white dark:bg-gray-900 rounded-lg transition-colors duration-300 w-full justify-center">
                <Zap size={22} className="text-cyan-500 dark:text-cyan-300" />
                <span className="text-gray-900 dark:text-white">Engage Hyperdrive</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
          <div className="relative max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 text-center bg-white dark:bg-black px-4">
            {stats.map((stat, index) => (
              <div key={index} className="px-2">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured AI Solutions</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">A glimpse into our most powerful tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className={`group relative bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${cardStyles[index % 4].shadow} animate-fade-in`}
                style={{ animationDelay: `${1.2 + index * 0.15}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cardStyles[index % 4].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                
                <div className="relative h-full flex flex-col">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                    {product.description}
                  </p>
                  <Link to="/products" className="mt-auto inline-block w-fit px-5 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-gray-800 dark:text-white font-medium rounded-lg group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
