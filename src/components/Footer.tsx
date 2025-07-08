import React, { useState } from 'react';
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, Send, Star, ChevronUp, Award, Shield, Users } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Rentals', href: '#rentals' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Wedding Decorations',
    'Bridal Gowns',
    'Groom Suits',
    'Imishanana Collection',
    'Event Planning',
    'Photography & Videography'
  ];

  const rentalCategories = [
    'Traditional Attire',
    'Modern Wedding Gowns',
    'Formal Suits',
    'Party Decorations',
    'Ceremony Essentials',
    'Audio & Lighting'
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-400', bg: 'hover:bg-blue-500/10' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400', bg: 'hover:bg-pink-500/10' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-300', bg: 'hover:bg-blue-400/10' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400', bg: 'hover:bg-red-500/10' }
  ];

  const trustBadges = [
    { icon: Users, text: '500+ Happy Couples', color: 'text-orange-400' },
    { icon: Award, text: '5+ Years Excellence', color: 'text-red-400' },
    { icon: Shield, text: '100% Satisfaction', color: 'text-yellow-400' },
    { icon: Star, text: '5.0 Rating', color: 'text-orange-400' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info - Enhanced */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 p-2 rounded-xl">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400">
                  Charly Fashion
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                Creating magical wedding moments across Rwanda with premium rental services, 
                elegant attire, and unforgettable experiences. Your dream wedding is our passion.
              </p>
              
              {/* Enhanced Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <a href="tel:+250788123456" className="text-gray-300 hover:text-orange-400 transition-colors font-medium">
                      +250 788 123 456
                    </a>
                    <p className="text-sm text-gray-500">Available 24/7</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="bg-gradient-to-r from-red-500 to-yellow-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <a href="mailto:info@charlyfashion.rw" className="text-gray-300 hover:text-red-400 transition-colors font-medium">
                      info@charlyfashion.rw
                    </a>
                    <p className="text-sm text-gray-500">Quick response</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={16} className="text-white mt-1" />
                  </div>
                  <div>
                    <span className="text-gray-300 font-medium">KG 123 St, Gasabo District</span>
                    <br />
                    <span className="text-gray-300">Kigali, Rwanda</span>
                    <p className="text-sm text-gray-500">Showroom visits by appointment</p>
                  </div>
                </div>
              </div>

              {/* Social Links - Enhanced */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gradient bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Follow Our Journey
                </h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className={`group relative p-3 rounded-xl bg-gray-800 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110`}
                        aria-label={social.name}
                      >
                        <Icon size={20} />
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                          {social.name}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quick Links - Enhanced */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 flex items-center group"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services - Enhanced */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-red-400 transition-all duration-300 flex items-center group cursor-pointer">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 mr-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-150"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Hours & Rental Categories */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Business Hours
              </h3>
              <div className="bg-gray-800/50 rounded-xl p-4 mb-6 border border-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg">
                    <Clock size={16} className="text-white" />
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between text-gray-300">
                      <span>Mon - Fri:</span>
                      <span className="font-medium text-white">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Saturday:</span>
                      <span className="font-medium text-white">9:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span>Sunday:</span>
                      <span className="font-medium text-yellow-400">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-4 text-gray-200">Rental Categories</h4>
              <ul className="space-y-2">
                {rentalCategories.slice(0, 4).map((category, index) => (
                  <li key={category}>
                    <span className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm cursor-pointer">
                      • {category}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Section */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Stay in the Loop
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Get exclusive wedding tips, latest trends, special offers, and be the first to see our new collections
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex rounded-full overflow-hidden shadow-2xl">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 border-0 focus:outline-none text-gray-900 placeholder-gray-500"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 font-semibold transition-all duration-300 flex items-center hover:scale-105"
                >
                  {isSubscribed ? (
                    <>
                      <span className="text-green-400">✓</span>
                      <span className="ml-2">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span className="ml-2 hidden sm:inline">Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-center text-white/70 text-sm mt-3">
                Join 1,000+ couples who trust our expertise
              </p>
            </form>
          </div>
        </div>

        {/* Trust Badges - Enhanced */}
        <div className="bg-gray-800/50 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center justify-center space-x-3 group">
                    <div className={`${badge.color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-gray-300 font-medium text-sm lg:text-base group-hover:text-white transition-colors">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar - Enhanced */}
        <div className="bg-gray-900 border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 font-semibold">Charly Fashion Rwanda</span>. All rights reserved. | Made with ❤️ in Rwanda
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Rental Agreement
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Cancellation Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 z-40 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;