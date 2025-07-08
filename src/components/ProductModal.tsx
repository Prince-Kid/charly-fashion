import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Star, Heart, ShoppingBag, Ruler, Calendar, Plus, Minus, Shield, Truck, Clock, Award, ZoomIn, ZoomOut } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  features: string[];
}

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  selectedSize: string;
  rentalDuration: string;
  quantity: number;
  totalPrice: number;
  cartId: number;
  category: string;
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart, showToast }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [rentalDuration, setRentalDuration] = useState('3');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  if (!product) return null;

  // Sample additional images for the product
  const productImages = [
    product.image,
    'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1702306/pexels-photo-1702306.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const durations = [
    { value: '1', label: '1 Day', price: 'Base Price', multiplier: 1 },
    { value: '3', label: '3 Days', price: '+20%', multiplier: 1.2 },
    { value: '7', label: '1 Week', price: '+35%', multiplier: 1.35 },
    { value: '14', label: '2 Weeks', price: '+50%', multiplier: 1.5 }
  ];

  const calculatePrice = () => {
    const basePrice = parseInt(product.price.replace(/[^0-9]/g, ''));
    const duration = durations.find(d => d.value === rentalDuration);
    return Math.round(basePrice * (duration?.multiplier || 1) * quantity);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const addToCart = (isReservation = false) => {
    if (!selectedSize) {
      showToast('Please select a size first', 'error');
      return;
    }
    
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      selectedSize,
      rentalDuration,
      quantity,
      totalPrice: calculatePrice(),
      cartId: Date.now() + Math.random() // Unique ID
    };
    
    onAddToCart(cartItem);
    
    if (isReservation) {
      showToast(`${product.name} reserved successfully!`, 'success');
    } else {
      showToast(`${product.name} added to cart!`, 'success');
    }
  };

  const handleAddToCart = () => {
    addToCart(false);
  };

  const handleReserve = () => {
    addToCart(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        <div className="grid lg:grid-cols-2 h-full max-h-[95vh]">
          {/* Enhanced Image Section */}
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-white/95 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <X size={24} />
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-6 left-6 z-10 bg-white/95 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Heart size={24} className={isFavorite ? 'text-red-500 fill-current' : 'text-gray-600'} />
            </button>

            <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center p-6 overflow-hidden">
              <img
                src={productImages[currentImageIndex]}
                alt={product.name}
                className="max-w-full max-h-[450px] object-contain rounded-2xl transition-transform duration-300 cursor-pointer"
                style={{
                  transform: `scale(${imageZoom}) translate(${imagePosition.x}px, ${imagePosition.y}px)`,
                }}
                onClick={() => setImageZoom(imageZoom === 1 ? 2 : 1)}
                onMouseMove={(e) => {
                  if (imageZoom > 1) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
                    const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
                    setImagePosition({ x: -x, y: -y });
                  }
                }}
                onMouseLeave={() => {
                  if (imageZoom > 1) {
                    setImagePosition({ x: 0, y: 0 });
                  }
                }}
              />
              
              {/* Zoom Controls */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <button
                  onClick={() => setImageZoom(Math.max(1, imageZoom - 0.5))}
                  className="bg-white/95 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ZoomOut size={20} />
                </button>
                <div className="bg-white/95 rounded-full px-3 py-2 shadow-lg text-sm font-medium">
                  {Math.round(imageZoom * 100)}%
                </div>
                <button
                  onClick={() => setImageZoom(Math.min(3, imageZoom + 0.5))}
                  className="bg-white/95 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <ZoomIn size={20} />
                </button>
              </div>
              
              {/* Navigation Buttons */}
              {productImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white shadow-lg scale-125' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details Section - Make it scrollable */}
          <div className="overflow-y-auto bg-gradient-to-br from-white to-gray-50 max-h-[95vh] custom-scrollbar">
            <div className="p-6 lg:p-8 space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {product.category === 'gowns' ? 'Bridal Gown' : 
                     product.category === 'suits' ? 'Formal Suit' : 
                     product.category === 'imishanana' ? 'Imishanana' : 'Decoration'}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Award className="text-yellow-500" size={20} />
                    <span className="text-sm font-medium text-gray-600">Premium Quality</span>
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    RWF {calculatePrice().toLocaleString()}
                  </div>
                  {rentalDuration !== '1' && (
                    <div className="text-sm text-gray-500">
                      Base: {product.price}
                    </div>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < product.rating ? 'fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{product.rating}.0</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Shield className="mr-2 text-orange-500" size={18} />
                  Features & Benefits
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-2">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-2 flex-shrink-0"></div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Ruler className="mr-2 text-orange-500" size={18} />
                  Select Size
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-2 px-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-orange-500 bg-orange-50 text-orange-700 scale-105 shadow-lg'
                          : 'border-gray-300 hover:border-gray-400 hover:scale-105'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-xl font-bold text-gray-900 min-w-[2rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* Rental Duration */}
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Calendar className="mr-2 text-orange-500" size={18} />
                  Rental Duration
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {durations.map((duration) => (
                    <label key={duration.value} className="relative cursor-pointer">
                      <input
                        type="radio"
                        name="duration"
                        value={duration.value}
                        checked={rentalDuration === duration.value}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-3 border-2 rounded-lg transition-all duration-300 ${
                        rentalDuration === duration.value
                          ? 'border-orange-500 bg-orange-50 shadow-lg'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900 text-sm">{duration.label}</span>
                          <span className="text-xs text-orange-600 font-medium">{duration.price}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  This exquisite piece combines traditional craftsmanship with modern elegance. 
                  Perfect for your special day, featuring premium materials and meticulous attention 
                  to detail. Each piece is carefully maintained and professionally cleaned between rentals.
                </p>
              </div>

              {/* Rental Terms */}
              <div className="bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Truck className="mr-2 text-orange-500" size={20} />
                  Rental Terms & Services
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-3 text-orange-500" size={16} />
                    <span>Professional fitting included</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield className="mr-3 text-orange-500" size={16} />
                    <span>Damage protection available</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Truck className="mr-3 text-orange-500" size={16} />
                    <span>Free delivery & pickup</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="mr-3 text-orange-500" size={16} />
                    <span>48-hour cancellation policy</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!selectedSize}
                    className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center border-2 ${
                      selectedSize
                        ? 'border-orange-500 text-orange-600 hover:bg-orange-50 hover:scale-105'
                        : 'border-gray-300 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingBag className="mr-2" size={20} />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={handleReserve}
                    disabled={!selectedSize}
                    className={`py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                      selectedSize
                        ? 'bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white hover:shadow-2xl hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Reserve Now
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+250727955120"
                    className="bg-blue-100 text-blue-700 py-3 px-6 rounded-2xl font-semibold text-center hover:bg-blue-200 transition-colors flex items-center justify-center"
                  >
                    📞 Call Us
                  </a>
                  <a
                    href="https://wa.me/250727955120"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-100 text-green-700 py-3 px-6 rounded-2xl font-semibold text-center hover:bg-green-200 transition-colors flex items-center justify-center"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;