import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'rw', name: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'sw', name: 'Kiswahili', flag: '🇹🇿' }
  ];

  const translations = {
    en: {
      nav: [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Styles', href: '#products' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
      ],
      bookNow: 'Book Now',
      tagline: 'Premium Rwandan Wedding Services'
    },
    rw: {
      nav: [
        { name: 'Ahabanza', href: '#home' },
        { name: 'Serivisi', href: '#services' },
        { name: 'Ubukode', href: '#products' },
        { name: 'Amafoto', href: '#gallery' },
        { name: 'Dutubabarire', href: '#contact' }
      ],
      bookNow: 'Gutumiza',
      tagline: 'Ubukode bwa Kinyarwanda'
    },
    fr: {
      nav: [
        { name: 'Accueil', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Locations', href: '#products' },
        { name: 'Galerie', href: '#gallery' },
        { name: 'Contact', href: '#contact' }
      ],
      bookNow: 'Réserver',
      tagline: 'Services de Mariage Premium du Rwanda'
    },
    sw: {
      nav: [
        { name: 'Nyumbani', href: '#home' },
        { name: 'Huduma', href: '#services' },
        { name: 'Ukodishaji', href: '#products' },
        { name: 'Picha', href: '#gallery' },
        { name: 'Mawasiliano', href: '#contact' }
      ],
      bookNow: 'Hifadhi',
      tagline: 'Huduma za Harusi za Kiwango cha Juu Rwanda'
    }
  };

  const navItems = translations[currentLanguage].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/98 backdrop-blur-md shadow-xl' : 'bg-white/95 backdrop-blur-sm shadow-sm'
    }`}>
      {/* Top bar */}
      {/* <div className="bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 py-3 px-4 border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6 text-gray-700">
            <div className="flex items-center space-x-2 hover:text-orange-600 transition-colors">
              <Phone size={16} className="text-orange-500" />
              <span className="font-medium">+250 727 955 120</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-orange-600 transition-colors">
              <Mail size={16} className="text-orange-500" />
              <span className="font-medium">ndayishimiyecharlotte64@gmail.com</span>
            </div>
            <div className="hidden lg:flex items-center space-x-2 text-gray-600">
              <MapPin size={16} className="text-orange-500" />
              <span>Kigali, Rwanda</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-gray-700">
            <Clock size={16} className="text-orange-500" />
            <span className="font-medium">{translations[currentLanguage].tagline}</span>
          </div>
        </div>
      </div> */}

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Heart className="h-10 w-10 text-orange-500" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                Charly Fashion
              </span>
              <span className="text-xs text-gray-500 font-medium">Rwandan Wedding Specialist</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                <Globe size={18} />
                <span>{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
              </button>
              
              {showLanguageMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 min-w-[150px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-orange-50 transition-colors flex items-center space-x-3 ${
                        currentLanguage === lang.code ? 'bg-orange-50 text-orange-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a 
  href="#contact"
  className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold overflow-hidden group inline-block"
>
  <span className="relative z-10">{translations[currentLanguage].bookNow}</span>
  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="py-2">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLanguage(lang.code)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                        currentLanguage === lang.code 
                          ? 'bg-orange-100 text-orange-600' 
                          : 'bg-gray-100 text-gray-600 hover:bg-orange-50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <a href='#contact' className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-6 py-3 rounded-full font-semibold mt-4">
                {translations[currentLanguage].bookNow}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;