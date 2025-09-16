import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { countryCodes } from '../data/countryCodes';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    countryCode: '+91',
    phone: '',
    email: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxR4MMeOIxlgxtVXQXbmNe9ei4I7FIlA70IL6zNKvIFGsNeyHZpWH6OnHSGMY5TGRp/exec";

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setError(null);

    if (SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL") {
        setError("Form submission is not configured. Please add a valid Google Apps Script URL.");
        setStatus('error');
        return;
    }

    const scriptForm = new FormData();
    scriptForm.append('name', formData.name);
    scriptForm.append('phone', `${formData.countryCode}${formData.phone}`);
    scriptForm.append('email', formData.email);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: scriptForm,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', countryCode: '+91', phone: '', email: '' });
      } else {
        const result = await response.json();
        setError(result.error || 'An unknown error occurred.');
        setStatus('error');
      }
    } catch (err) {
      setError('Failed to send data. Please check your connection.');
      setStatus('error');
    }
  };

  const isOtherCountry = formData.countryCode === '';

  if (status === 'success') {
    return (
      <div className="text-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-green-400">
          ✅ Thank you! We’ll reach out soon.
        </h3>
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto p-8 bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-gray-700/50 shadow-2xl shadow-black/10">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get in Touch with Us
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Phone / WhatsApp Number
          </label>
          <div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:border-cyan-500 transition-all duration-300 overflow-hidden">
            <select
              name="countryCode"
              id="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="px-3 py-3 bg-white/50 dark:bg-gray-900/50 border-r border-gray-300 dark:border-gray-600 outline-none text-gray-900 dark:text-white"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.dial_code}>
                  {country.code === 'OTHER' ? 'Other' : `${country.code} ${country.dial_code}`}
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 outline-none text-gray-900 dark:text-white"
              placeholder={isOtherCountry ? "+1234567890" : "8280565127"}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-900/50 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all duration-300 text-gray-900 dark:text-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-gradient-to-r from-whatsapp-start to-whatsapp-end rounded-xl shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Inquiry'
            )}
          </button>
        </div>
        {status === 'error' && error && (
          <p className="text-center text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
