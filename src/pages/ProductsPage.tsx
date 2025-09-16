import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ElectricBorder from '../components/ElectricBorder';
import { industries, industryProducts } from '../data/industryProducts';

const ProductsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const products = industryProducts[activeTab] || [];

  return (
    <div className="relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            AI Solutions by Industry
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Discover how our AI products can be tailored to revolutionize your specific field.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`relative px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeTab === industry.id
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {activeTab === industry.id && (
                <motion.div
                  layoutId="active-industry-pill"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{industry.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <ElectricBorder
                key={product.id}
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}
                className="h-full"
              >
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 h-full flex flex-col justify-between hover:bg-gray-50/80 dark:hover:bg-gray-700/80 transition-all duration-300">
                  <div>
                    <div className="mb-4">
                      <img src={product.icon} alt={product.title} className="w-10 h-10 object-contain" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                  
                  <button className="mt-6 w-full py-2 px-4 bg-cyan-400/10 dark:bg-gradient-to-r from-electric/20 to-primary/20 border border-cyan-400/30 dark:border-electric/30 text-cyan-600 dark:text-electric font-medium rounded-lg hover:bg-cyan-400/20 dark:hover:from-electric/30 dark:hover:to-primary/30 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </ElectricBorder>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsPage;
