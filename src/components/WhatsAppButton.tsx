import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '918280565127';
  const message = "Hi, I'm interested. Please share more information.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-[60px] h-[60px] bg-[#25D366] rounded-full border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center p-3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/15707/15707820.png"
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
};

export default WhatsAppButton;
