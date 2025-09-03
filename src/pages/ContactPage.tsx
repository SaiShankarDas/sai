import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="relative z-10 pointer-events-auto py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
          We're here to help you revolutionize your business. Whether you have a question about our products, need a demo, or want to discuss a custom solution, our team is ready to answer all your questions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center bg-cyan-500/10 rounded-full w-12 h-12 mb-4">
              <Mail className="text-cyan-500 dark:text-cyan-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">The fastest way to get a response.</p>
            <a href="mailto:info@sai.company" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors">
              info@sai.company
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center bg-purple-500/10 rounded-full w-12 h-12 mb-4">
              <Phone className="text-purple-500 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Call Us</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Speak directly with our team.</p>
            <a href="tel:+1234567890" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 transition-colors">
              +1 (234) 567-890
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center bg-pink-500/10 rounded-full w-12 h-12 mb-4">
              <MapPin className="text-pink-500 dark:text-pink-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our HQ</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">123 AI Avenue, Tech City, 90210</p>
            <a href="#" className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition-colors">
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
