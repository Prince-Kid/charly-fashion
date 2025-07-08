import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Calendar, User, MessageCircle, CheckCircle, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    budget: '',
    guests: '',
    venue: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      console.log('Form submitted:', formData);
    }, 2000);
  };

  const services = [
    'Complete Wedding Package',
    'Wedding Decorations',
    'Bridal Gown Rental',
    'Groom Suit Rental', 
    'Imishanana Collection',
    'Event Planning',
    'Photography & Videography',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under 500,000 RWF',
    '500,000 - 1,000,000 RWF',
    '1,000,000 - 2,000,000 RWF',
    '2,000,000 - 5,000,000 RWF',
    'Above 5,000,000 RWF'
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Your consultation request has been received. We'll contact you within 24 hours to discuss your wedding plans.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-r from-yellow-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Plan Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Perfect Wedding
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to turn your wedding dreams into reality? Get in touch with our expert team 
            for a personalized consultation and detailed quote.
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-semibold">500+ Happy Couples</span>
            </div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-gray-600 font-semibold">24hr Response Time</div>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="text-gray-600 font-semibold">Free Consultation</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information - Enhanced */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 p-3 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Phone size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+250788123456" className="text-orange-600 hover:text-orange-700 font-medium block">
                      +250 788 123 456
                    </a>
                    <a href="tel:+250722987654" className="text-orange-600 hover:text-orange-700 font-medium block">
                      +250 722 987 654
                    </a>
                    <span className="text-sm text-gray-500">Available 24/7</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 p-3 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:info@charlyfashion.rw" className="text-orange-600 hover:text-orange-700 font-medium block">
                      info@charlyfashion.rw
                    </a>
                    <a href="mailto:bookings@charlyfashion.rw" className="text-orange-600 hover:text-orange-700 font-medium block">
                      bookings@charlyfashion.rw
                    </a>
                    <span className="text-sm text-gray-500">Response within 2 hours</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 p-3 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Our Showroom</h4>
                    <p className="text-gray-600">KG 123 St, Gasabo District</p>
                    <p className="text-gray-600">Kigali, Rwanda</p>
                    <span className="text-sm text-gray-500">By appointment preferred</span>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 p-3 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                    <Clock size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">By Appointment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/250788123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-300"
                >
                  <MessageCircle className="mr-2" size={18} />
                  WhatsApp Chat
                </a>
                <a
                  href="tel:+250788123456"
                  className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-300"
                >
                  <Phone className="mr-2" size={18} />
                  Call Now
                </a>
                <button className="flex items-center justify-center w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded-xl font-semibold transition-colors duration-300">
                  <Calendar className="mr-2" size={18} />
                  Schedule Visit
                </button>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-3xl shadow-xl p-6 text-white">
              <h4 className="font-bold mb-4">Why Choose Charly Fashion?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>5+ Years of Excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>500+ Successful Weddings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>Free Consultation & Quote</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>Quality Guaranteed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>Flexible Payment Plans</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Consultation</h3>
              <p className="text-gray-600 mb-8">Fill out this form and we'll create a personalized wedding package for you.</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                          placeholder="+250 7XX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Wedding Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className="pl-10 w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Wedding Details */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Wedding Details</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Service Needed *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select primary service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        Expected Number of Guests
                      </label>
                      <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="e.g., 150"
                        min="1"
                      />
                    </div>

                    <div>
                      <label htmlFor="venue" className="block text-sm font-medium text-gray-700 mb-2">
                        Venue (if decided)
                      </label>
                      <input
                        type="text"
                        id="venue"
                        name="venue"
                        value={formData.venue}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                        placeholder="e.g., Serena Hotel Kigali"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell Us About Your Dream Wedding
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Share your vision, special requests, color themes, style preferences, or any other details that will help us create the perfect wedding for you..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 hover:shadow-2xl hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Request
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to receive communication from Charly Fashion about your wedding planning needs.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-16">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 p-8 md:p-12 text-white">
                <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
                <p className="text-xl mb-6 text-white/90">
                  Our wedding consultants are standing by to help you with any questions or urgent requests.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="mr-3" size={20} />
                    <span>Quick 15-minute phone consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="mr-3" size={20} />
                    <span>Instant quote for standard packages</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="mr-3" size={20} />
                    <span>Personalized recommendations</span>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Multiple Ways to Connect</h4>
                <div className="space-y-4">
                  <a
                    href="tel:+250788123456"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Phone className="mr-2" size={20} />
                    Call: +250 788 123 456
                  </a>
                  <a
                    href="https://wa.me/250788123456"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp Chat
                  </a>
                  <a
                    href="mailto:info@charlyfashion.rw"
                    className="flex items-center justify-center w-full border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  >
                    <Mail className="mr-2" size={20} />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;