import React, { useState } from 'react';
import { Filter, Search, Heart, Eye, ShoppingBag, Star, Grid, List } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  rating: number;
  reviews: number;
  features: string[];
  description?: string;
  inStock?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

interface ProductsPageProps {
  onAddToCart: (item: any) => void;
  onProductSelect: (product: Product | null) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onAddToCart, onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'All Items', count: 24 },
    { id: 'gowns', name: 'Bridal Gowns', count: 8 },
    { id: 'suits', name: 'Formal Suits', count: 6 },
    { id: 'imishanana', name: 'Imishanana', count: 6 },
    { id: 'decorations', name: 'Decorations', count: 4 }
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Royal Elegance Gown',
      category: 'gowns',
      price: 'RWF 150,000',
      image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 23,
      features: ['Lace Details', 'Train Included', 'Custom Fit'],
      description: 'A stunning royal elegance gown perfect for your special day.',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 2,
      name: 'Classic Black Tuxedo',
      category: 'suits',
      price: 'RWF 80,000',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 18,
      features: ['Premium Fabric', 'Bow Tie Included', 'Tailored Fit'],
      description: 'Classic black tuxedo for formal occasions.',
      inStock: true,
      isNew: false,
      isFeatured: false
    },
    {
      id: 3,
      name: 'Traditional Imishanana Set',
      category: 'imishanana',
      price: 'RWF 120,000',
      image: 'https://images.pexels.com/photos/8148580/pexels-photo-8148580.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 31,
      features: ['Authentic Design', 'Handcrafted', 'Cultural Heritage'],
      description: 'Authentic traditional Rwandan wedding attire.',
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: 4,
      name: 'Princess Ball Gown',
      category: 'gowns',
      price: 'RWF 200,000',
      image: 'https://images.pexels.com/photos/1702306/pexels-photo-1702306.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 5,
      reviews: 27,
      features: ['Beaded Details', 'Cathedral Train', 'Premium Satin'],
      description: 'Luxurious princess ball gown with intricate beading.',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 5,
      name: 'Modern Slim Suit',
      category: 'suits',
      price: 'RWF 70,000',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      reviews: 15,
      features: ['Contemporary Cut', 'Versatile Style', 'Complete Set'],
      description: 'Modern slim-fit suit perfect for various occasions.',
      inStock: false,
      isNew: false,
      isFeatured: false
    },
    {
      id: 6,
      name: 'Elegant Imishanana Deluxe',
      category: 'imishanana',
      price: 'RWF 140,000',
      image: 'https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 22,
      features: ['Complete Ensemble', 'Traditional Colors', 'Modern Styling'],
      description: 'Deluxe Imishanana set with modern styling.',
      inStock: true,
      isNew: true,
      isFeatured: false
    },
    {
      id: 7,
      name: 'Wedding Venue Decoration Package',
      category: 'decorations',
      price: 'RWF 300,000',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      reviews: 12,
      features: ['Full Venue Setup', 'Floral Arrangements', 'Lighting Design'],
      description: 'Complete wedding venue decoration package.',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: 8,
      name: 'Vintage Lace Gown',
      category: 'gowns',
      price: 'RWF 180,000',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4,
      reviews: 19,
      features: ['Vintage Style', 'Delicate Lace', 'Classic Cut'],
      description: 'Beautiful vintage-inspired lace wedding gown.',
      inStock: true,
      isNew: false,
      isFeatured: false
    }
  ];

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, ''));
        case 'price-high':
          return parseInt(b.price.replace(/[^0-9]/g, '')) - parseInt(a.price.replace(/[^0-9]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
          return b.reviews - a.reviews;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 font-serif italic">
              Collection
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive collection of wedding attire, event decorations, and formal wear. 
            Each piece is carefully curated to make your special moments unforgettable.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-3xl shadow-xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Search and Sort Controls */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
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

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="popular">Most Popular</option>
              </select>

              <div className="flex bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-md' : 'hover:bg-gray-200'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
          : 'space-y-6'
        }>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group ${
                viewMode === 'list' ? 'flex items-center space-x-6 p-6' : ''
              }`}
            >
              <div className={`relative ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : ''}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'h-48 rounded-xl' : 'h-80'
                  }`}
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      NEW
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                  {!product.inStock && (
                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      OUT OF STOCK
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => toggleFavorite(product.id)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Heart 
                      size={20} 
                      className={favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-600'} 
                    />
                  </button>
                  <button 
                    onClick={() => onProductSelect(product)}
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                  >
                    <Eye size={20} className="text-gray-700" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === product.category)?.name}
                  </span>
                </div>
              </div>

              <div className={viewMode === 'list' ? 'flex-1' : 'p-6'}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < product.rating ? 'fill-current' : 'text-gray-300'} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">({product.reviews} reviews)</span>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{product.price}</div>
                  <div className="space-x-2">
                    <button 
                      onClick={() => onProductSelect(product)}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto text-gray-400 mb-4" size={64} />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredProducts.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300">
              Load More Products
            </button>
          </div>
        )}
      </div>

      {/* Product Modal */}
    </div>
  );
};

export default ProductsPage;
