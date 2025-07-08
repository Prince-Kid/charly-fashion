import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Jean-Claude',
      wedding: 'Garden Wedding, Kigali',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Elegance Weddings made our dream wedding come true! From the stunning decorations to the perfect dress, everything was absolutely magical. The team was professional, attentive, and truly understood our vision.',
      service: 'Full Wedding Package'
    },
    {
      id: 2,
      name: 'Marie & David',
      wedding: 'Traditional Ceremony, Musanze',
      image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'The Imishanana collection is exceptional! They helped us honor our cultural traditions while adding modern elegance. Our families were so impressed with the attention to detail and quality.',
      service: 'Imishanana Collection'
    },
    {
      id: 3,
      name: 'Grace & Patrick',
      wedding: 'Beach Wedding, Lake Kivu',
      image: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Outstanding service from start to finish! The bridal gown was stunning and the decorations transformed our venue into paradise. We couldn\'t have asked for a more perfect day.',
      service: 'Bridal Gown & Decorations'
    },
    {
      id: 4,
      name: 'Immaculée & Robert',
      wedding: 'Church Wedding, Butare',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 5,
      text: 'Professional, reliable, and creative! The team at Elegance Weddings exceeded all our expectations. The suit was perfectly tailored and the overall coordination was flawless.',
      service: 'Groom Package'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Couples
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-500 font-serif italic">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy couples have to say 
            about their wedding experience with Elegance Weddings.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-pink-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-pink-200">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? 'fill-current' : ''}
                    />
                  ))}
                </div>
                <span className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.service}
                </span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.wedding}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500 to-green-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Happy Couples</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-white/90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/90">5-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Couples?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            Let us make your wedding day as special as you've always dreamed.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300">
            Get Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;