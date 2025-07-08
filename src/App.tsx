import React, { useState, useRef, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ProductListing from './components/ProductListing';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import ProductsPage from './components/ProductsPage';
import Toast from './components/Toast';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

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

interface ToastType {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info';
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartHighlighted, setIsCartHighlighted] = useState(false);
  const [toasts, setToasts] = useState<ToastType[]>([]);
  const productListingRef = useRef<HTMLDivElement>(null);

  // Toast functions
  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    const toast = {
      id: Date.now(),
      message,
      type
    };
    setToasts(prev => [...prev, toast]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  // Cart functions
  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => 
        cartItem.id === item.id && 
        cartItem.selectedSize === item.selectedSize &&
        cartItem.rentalDuration === item.rentalDuration
      );
      
      if (existingItem) {
        return prev.map(cartItem =>
          cartItem.cartId === existingItem.cartId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity, totalPrice: cartItem.totalPrice + item.totalPrice }
            : cartItem
        );
      }
      
      return [...prev, item];
    });
  };

  const updateQuantity = (cartId: number, newQuantity: number) => {
    setCartItems(prev => 
      prev.map(item => {
        if (item.cartId === cartId) {
          const basePrice = parseInt(item.price.replace(/[^0-9]/g, ''));
          const duration = item.rentalDuration;
          const multiplier = duration === '1' ? 1 : duration === '3' ? 1.2 : duration === '7' ? 1.35 : 1.5;
          const newTotalPrice = Math.round(basePrice * multiplier * newQuantity);
          return { ...item, quantity: newQuantity, totalPrice: newTotalPrice };
        }
        return item;
      })
    );
  };

  const removeItem = (cartId: number) => {
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  // Intersection Observer for cart highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCartHighlighted(true);
            setTimeout(() => setIsCartHighlighted(false), 2000);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (productListingRef.current) {
      observer.observe(productListingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Navigation Pills */}
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              currentPage === 'home'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-orange-500'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('products')}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              currentPage === 'products'
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                : 'text-gray-600 hover:text-orange-500'
            }`}
          >
            All Products
          </button>
        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
          isCartHighlighted ? 'animate-pulse ring-4 ring-orange-300' : ''
        }`}
      >
        <ShoppingCart size={24} />
        {cartItems.length > 0 && (
          <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {cartItems.length}
          </div>
        )}
      </button>

      {/* Page Content */}
      {currentPage === 'home' ? (
        <>
          <Hero />
          <Services />
          <ProductListing
            ref={productListingRef}
            onProductSelect={setSelectedProduct}
          />
          <Gallery  />
          <Testimonials />
          <Contact />
          <Footer />
          
        </>
      ) : (
        <ProductsPage onProductSelect={setSelectedProduct} />
      )}

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
          showToast={showToast}
        />
      )}

      {/* Cart Modal */}
      {isCartOpen && (
        <Cart
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onClearCart={clearCart}
          showToast={showToast}
        />
      )}

      {/* Toast Notifications */}
      <div className="fixed top-4 right-4 z-[60] space-y-2">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;