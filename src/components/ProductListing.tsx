import React, { useState, forwardRef } from 'react';
import { Filter, Search, Heart, Eye } from 'lucide-react';

const ProductListing = forwardRef<HTMLDivElement, { onProductSelect: (product: any) => void }>(({ onProductSelect }, ref) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Items', count: 45 },
    { id: 'gowns', name: 'Bridal Gowns', count: 15 },
    { id: 'suits', name: 'Formal Suits', count: 12 },
    { id: 'imishanana', name: 'Imishanana', count: 18 },
    { id: 'decorations', name: 'Decorations', count: 25 }
  ];

  const products = [
    {
      id: 1,
      name: 'Royal Elegance Gown',
      category: 'gowns',
      price: 'RWF 150,000',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 23,
      features: ['Lace Details', 'Train Included', 'Custom Fit']
    },
    {
      id: 2,
      name: 'Classic Tuxedo',
      category: 'suits',
      price: 'RWF 80,000',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 18,
      features: ['Premium Fabric', 'Bow Tie Included', 'Tailored Fit']
    },
    {
      id: 3,
      name: 'Traditional Imishanana',
      category: 'imishanana',
      price: 'RWF 120,000',
      image: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 31,
      features: ['Authentic Design', 'Handcrafted', 'Cultural Heritage']
    },
    {
      id: 4,
      name: 'Princess Ball Gown',
      category: 'gowns',
      price: 'RWF 200,000',
      image: 'https://images.pexels.com/photos/1702306/pexels-photo-1702306.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 27,
      features: ['Beaded Details', 'Cathedral Train', 'Premium Satin']
    },
    {
      id: 5,
      name: 'Modern Slim Suit',
      category: 'suits',
      price: 'RWF 70,000',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      reviews: 15,
      features: ['Contemporary Cut', 'Versatile Style', 'Complete Set']
    },
    {
      id: 6,
      name: 'Elegant Imishanana Set',
      category: 'imishanana',
      price: 'RWF 140,000',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 22,
      features: ['Complete Ensemble', 'Traditional Colors', 'Modern Styling']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="rentals" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Premium
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Rental Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our curated collection of wedding attire, event decorations, and formal wear 
            for rent. Perfect for weddings, graduations, bridal showers, and special occasions.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  data-category={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors">
                    <Heart size={20} className="text-pink-500" />
                  </button>
                  <button 
                    onClick={() => onProductSelect(product)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Eye size={20} className="text-gray-700" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < product.rating ? 'text-yellow-400' : 'text-gray-300'}>★</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                  <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                    Reserve Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
});

ProductListing.displayName = 'ProductListing';

export default ProductListing;