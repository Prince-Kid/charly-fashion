import React, { useState } from 'react';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      type: 'whatsapp',
      label: 'WhatsApp Chat',
      value: '+250788123456',
      href: 'https://wa.me/250788123456?text=Hello! I\'m interested in your wedding services.',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      type: 'call',
      label: 'Call Us',
      value: '+250 788 123 456',
      href: 'tel:+250788123456',
      icon: Phone,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      type: 'email',
      label: 'Send Email',
      value: 'info@eleganceweddings.rw',
      href: 'mailto:info@eleganceweddings.rw?subject=Wedding Services Inquiry',
      icon: Mail,
      color: 'bg-purple-500 hover:bg-purple-600'
    }
  ];

  return (
    <>
      {/* Contact Options Menu */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 space-y-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <a
                key={option.type}
                href={option.href}
                target={option.type === 'whatsapp' ? '_blank' : undefined}
                rel={option.type === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className={`flex items-center space-x-3 ${option.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span className="pr-2 font-medium">{option.label}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 ${
            isOpen
              ? 'bg-red-500 hover:bg-red-600 rotate-45'
              : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
          }`}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <MessageCircle size={24} className="text-white animate-pulse" />
          )}
        </button>

        {/* Pulse Animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></div>
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Welcome Message */}
      {!isOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-bounce-slow">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm">Need Help?</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Chat with us for instant support about our wedding services!
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 ml-2"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Arrow pointing to button */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg"></div>
        </div>
      )}
    </>
  );
};

// Custom CSS for bounce animation (add to your global CSS if needed)
const styles = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(-5px);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
`;

export default WhatsAppButton;