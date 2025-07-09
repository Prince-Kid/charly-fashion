import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Jean-Claude',
      wedding: 'Garden Wedding, Kigali',
      image: 'https://i.pinimg.com/736x/d0/0c/3b/d00c3b35aaaaa66d3f46a596eddd3a4f.jpg',
      rating: 5,
      text: 'Charly Fashion made our dream wedding come true! From the stunning decorations to the perfect Imishanana, everything was absolutely magical. The team was professional, attentive, and truly understood our vision. We couldn\'t have asked for a more perfect day!',
      service: 'Full Wedding Package',
      date: 'March 2024',
      highlight: 'Exceeded all expectations',
      category: 'wedding'
    },
    {
      id: 2,
      name: 'Marie & David',
      wedding: 'Traditional Ceremony, Musanze',
      image: 'https://i.pinimg.com/736x/40/9c/44/409c44156a27a94eaf46d07100409d2f.jpg',
      rating: 5,
      text: 'The Imishanana collection is exceptional! They helped us honor our cultural traditions while adding modern elegance. Our families were so impressed with the attention to detail and quality. The rental process was smooth and professional.',
      service: 'Imishanana Collection',
      date: 'February 2024',
      highlight: 'Cultural authenticity with modern touch',
      category: 'imishanana'
    },
    {
      id: 3,
      name: 'Grace & Patrick',
      wedding: 'Beach Wedding, Lake Kivu',
      image: 'https://i.pinimg.com/736x/10/00/80/10008027dd8283766f7c80a0b618be9f.jpg',
      rating: 5,
      text: 'Outstanding service from start to finish! The bridal gown was stunning and the decorations transformed our venue into paradise. The team\'s creativity and professionalism made our special day unforgettable.',
      service: 'Bridal Gown & Decorations',
      date: 'January 2024',
      highlight: 'Transformed venue into paradise',
      category: 'gown'
    },
    {
      id: 4,
      name: 'Immaculée & Robert',
      wedding: 'Church Wedding, Butare',
      image: 'https://i.pinimg.com/736x/a6/ac/15/a6ac1507478eddd83ac29b1310a606f1.jpg',
      rating: 5,
      text: 'Professional, reliable, and creative! The team at Charly Fashion exceeded all our expectations. The suit was perfectly tailored and the overall coordination was flawless. Highly recommend for any formal event!',
      service: 'Groom Package',
      date: 'December 2023',
      highlight: 'Perfectly tailored and coordinated',
      category: 'suit'
    },
    {
      id: 5,
      name: 'Aline & Eric',
      wedding: 'Modern Ceremony, Nyanza',
      image: 'https://i.pinimg.com/736x/12/56/58/125658d0dd39111dc25bf45ea4137179.jpg',
      rating: 5,
      text: 'Amazing experience with Charly Fashion! They provided beautiful decorations for our engagement party and the quality was top-notch. The rental prices are very reasonable and the service is exceptional.',
      service: 'Event Decorations',
      date: 'April 2024',
      highlight: 'Top-notch quality and service',
      category: 'decoration'
    },
    {
      id: 6,
      name: 'Claudine & Emmanuel',
      wedding: 'Traditional & Modern Fusion, Kigali',
      image: 'https://i.pinimg.com/736x/bd/e5/93/bde593ae194eb33a76ce3cd244dd3f0d.jpg',
      rating: 5,
      text: 'Perfect blend of traditional and modern! Charly Fashion helped us create a unique celebration that honored our heritage while embracing contemporary style. The attention to detail was remarkable.',
      service: 'Custom Package',
      date: 'May 2024',
      highlight: 'Perfect traditional-modern fusion',
      category: 'custom'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getCategoryColor = (category) => {
    const colors = {
      wedding: 'from-orange-500 to-red-500',
      imishanana: 'from-red-500 to-yellow-500',
      gown: 'from-pink-500 to-purple-500',
      suit: 'from-blue-500 to-indigo-500',
      decoration: 'from-green-500 to-teal-500',
      custom: 'from-purple-500 to-pink-500'
    };
    return colors[category] || 'from-orange-500 to-red-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-red-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Happy
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Real stories from real couples who chose Charly Fashion for their special moments. 
            See why we're Rwanda's most trusted wedding and event rental service.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-6 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">5.0 Rating</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-gray-600 font-semibold">500+ Happy Clients</div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-gray-600 font-semibold">100% Satisfaction</div>
          </div>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 min-h-[500px]">
              {/* Image Side */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                <div className="relative">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-64 h-64 rounded-full object-cover shadow-2xl border-8 border-white"
                  />
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-3 rounded-full shadow-lg">
                    <Quote size={24} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <span className="text-sm font-semibold text-orange-600">
                    {testimonials[activeTestimonial].date}
                  </span>
                </div>
                <div className={`absolute bottom-8 right-8 bg-gradient-to-r ${getCategoryColor(testimonials[activeTestimonial].category)} text-white rounded-full px-4 py-2 shadow-lg`}>
                  <span className="text-sm font-semibold">
                    {testimonials[activeTestimonial].service}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <button
                      onClick={toggleAutoPlay}
                      className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                      title={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                    >
                      {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {testimonials[activeTestimonial].wedding}
                  </p>
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3 mb-6">
                    <p className="text-orange-700 font-semibold text-sm">
                      ✨ {testimonials[activeTestimonial].highlight}
                    </p>
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg lg:text-xl leading-relaxed italic mb-8 relative">
                  <span className="text-4xl text-orange-200 absolute -top-2 -left-2">"</span>
                  {testimonials[activeTestimonial].text}
                  <span className="text-4xl text-orange-200 absolute -bottom-4 right-0">"</span>
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-semibold">5.0 out of 5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`transition-all duration-300 ${
                index === activeTestimonial
                  ? 'w-12 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            More Happy Stories
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3 mb-3">
                  "{testimonial.text}"
                </p>
                <div className={`bg-gradient-to-r ${getCategoryColor(testimonial.category)} text-white px-3 py-1 rounded-full text-xs font-semibold inline-block`}>
                  {testimonial.service}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Couples Across Rwanda
            </h3>
            <p className="text-gray-600">Numbers that speak for our quality and dedication</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <div className="text-gray-900 font-semibold">Happy Couples</div>
              <div className="text-gray-600 text-sm">Served with excellence</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <div className="text-gray-900 font-semibold">Years Experience</div>
              <div className="text-gray-600 text-sm">In wedding industry</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <div className="text-gray-900 font-semibold">Satisfaction Rate</div>
              <div className="text-gray-600 text-sm">Client happiness guaranteed</div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <div className="text-gray-900 font-semibold">Support Available</div>
              <div className="text-gray-600 text-sm">Always here for you</div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Ready to Create Your Own Love Story?
              </h3>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of happy couples who trusted us with their special day. 
                Let's make your wedding dreams come true!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href='#contact' className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                  Get Your Free Consultation
                </a>
                <a href='#services' className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                  View Our Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;