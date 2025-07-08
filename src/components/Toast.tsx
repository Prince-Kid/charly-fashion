import React, { useEffect } from 'react';
import { CheckCircle, ShoppingCart, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'info':
        return 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle size={24} />;
      case 'error':
        return <X size={24} />;
      case 'info':
        return <ShoppingCart size={24} />;
      default:
        return <CheckCircle size={24} />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[60] animate-slide-in-right">
      <div className={`${getToastStyles()} rounded-2xl shadow-2xl p-4 pr-12 min-w-[320px] transform transition-all duration-300 hover:scale-105`}>
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg">{message}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 hover:bg-white/20 rounded-full transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default Toast;