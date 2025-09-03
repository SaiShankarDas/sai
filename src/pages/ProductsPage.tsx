import ElectricBorder from '../components/ElectricBorder';
import { allProducts } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="relative z-10 pointer-events-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            All AI Products
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in">
            Discover our complete suite of AI-powered tools designed to revolutionize your business operations.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProducts.map((product, index) => (
            <ElectricBorder
              key={product.id}
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}
              className="h-full animate-fade-in"
            >
              <div 
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 h-full flex flex-col justify-between hover:bg-gray-50/80 dark:hover:bg-gray-700/80 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="text-3xl mb-4">{product.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <button className="mt-6 w-full py-2 px-4 bg-cyan-400/10 dark:bg-gradient-to-r from-electric/20 to-primary/20 border border-cyan-400/30 dark:border-electric/30 text-cyan-600 dark:text-electric font-medium rounded-lg hover:bg-cyan-400/20 dark:hover:from-electric/30 dark:hover:to-primary/30 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </div>
    </div>
  );
}
