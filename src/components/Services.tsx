import React from 'react';
import { Sparkles, Crown, Shirt, Gift, ArrowRight, Heart, Users, Palette } from 'lucide-react';

const Services = () => {
  const handleExploreClick = (category) => {
    // Scroll to ProductListing section
    const productSection = document.getElementById('rentals');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
      
      // Trigger category filter after a short delay to allow scrolling
      setTimeout(() => {
        const categoryButton = document.querySelector(`[data-category="${category}"]`);
        if (categoryButton) {
          categoryButton.click();
        }
      }, 800);
    }
  };

  const services = [
    {
      icon: Sparkles,
      title: 'Event Decorations',
      subtitle: 'Weddings • Bridal Showers • Celebrations',
      description: 'Transform any venue into a magical space with our elegant decorations. From intimate bridal showers to grand weddings, we create unforgettable atmospheres.',
      features: ['Wedding Ceremonies', 'Bridal Shower Setups', 'Anniversary Celebrations', 'Cultural Events'],
      highlights: ['Custom Themes', 'Floral Arrangements', 'Lighting Design', 'Venue Styling'],
      color: 'from-orange-400 via-red-400 to-yellow-400',
      bgImage: 'https://i.pinimg.com/originals/83/ed/11/83ed1182b75c8c5582911b1502bf6278.jpg',
      category: 'decorations'
    },
    {
      icon: Crown,
      title: 'Bridal Collections',
      subtitle: 'Gowns • Accessories • Complete Bridal Look',
      description: 'Discover our stunning collection of bridal gowns and accessories. Each piece is carefully selected to make you feel like royalty on your special day.',
      features: ['Designer Wedding Gowns', 'Bridal Accessories', 'Shoes & Jewelry', 'Bridal Packages'],
      highlights: ['Premium Quality', 'Perfect Fitting', 'Style Consultation', 'Alteration Services'],
      color: 'from-pink-400 via-rose-400 to-red-400',
      bgImage: 'https://i.pinimg.com/1200x/ce/55/d2/ce55d241a1abe55a25ff07ee371e591c.jpg',
      category: 'gowns'
    },
    {
      icon: Shirt,
      title: 'Formal Suits Rental',
      subtitle: 'Weddings • Graduations • Business Events',
      description: 'Premium suits for every occasion. Whether it\'s your wedding day, graduation ceremony, or important business event, look your best with our collection.',
      features: ['Wedding Suits', 'Graduation Attire', 'Business Formal', 'Casual Formal Wear'],
      highlights: ['Perfect Tailoring', 'Latest Styles', 'Complete Accessories', 'Flexible Rental'],
      color: 'from-blue-400 via-indigo-400 to-purple-400',
      bgImage: 'https://i.pinimg.com/1200x/20/60/8b/20608be32edef4e7d8db642baa086295.jpg',
      category: 'suits'
    },
    {
      icon: Gift,
      title: 'Imishanana Traditional Wear',
      subtitle: 'Authentic Rwandan Cultural Attire',
      description: 'Honor your heritage with our authentic Imishanana collection. Traditional Rwandan wedding attire that combines cultural authenticity with modern elegance.',
      features: ['Traditional Wedding Sets', 'Cultural Ceremonies', 'Modern Imishanana', 'Custom Designs'],
      highlights: ['Authentic Designs', 'Cultural Heritage', 'Handcrafted Quality', 'Modern Styling'],
      color: 'from-green-400 via-emerald-400 to-teal-400',
      bgImage: 'https://i.pinimg.com/1200x/2a/42/da/2a42da21ff2b692291243e7c23cb9836.jpg',
      category: 'imishanana'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Services & Rentals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate bridal showers to grand wedding celebrations, we provide comprehensive services 
            and premium rental collections for all your special occasions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img 
                    src={service.bgImage} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 lg:p-10">
                  {/* Icon and Title Section */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Users size={16} className="mr-2 text-orange-500" />
                        Services
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600 text-sm">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3 flex-shrink-0`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Palette size={16} className="mr-2 text-orange-500" />
                        Highlights
                      </h4>
                      <ul className="space-y-2">
                        {service.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-center text-gray-600 text-sm">
                            <Heart size={12} className={`mr-3 flex-shrink-0 text-red-400`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <a href='#products'
                    onClick={() => handleExploreClick(service.category)}
                    className={`w-full py-4 px-6 rounded-2xl bg-gradient-to-r ${service.color} text-white font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/btn`}
                  >
                    Explore Collection
                    <ArrowRight size={20} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 rounded-full mb-6">
                <Crown size={40} className="text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready to Create Your Perfect Event?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Whether it's a wedding, bridal shower, graduation, or any special celebration, 
                let's bring your vision to life with our premium services and rental collections.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href='#products'
                  onClick={() => handleExploreClick('all')}
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center"
                >
                  Browse All Collections
                  <ArrowRight size={20} className="ml-2" />
                </a>
                <a href='#contact' className="border-2 border-orange-500 text-orange-500 px-10 py-4 rounded-full font-semibold text-lg hover:bg-orange-500 hover:text-white transition-all duration-300">
                  Book Consultation
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                  <div className="text-gray-600">Events Styled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;