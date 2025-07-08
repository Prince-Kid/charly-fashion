import React, { useState } from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, Mail, User, Phone, MapPin, Calendar, Send } from 'lucide-react';

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

interface CartProps {
  cartItems: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (cartId: number, newQuantity: number) => void;
  onRemoveItem: (cartId: number) => void;
  onClearCart: () => void;
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
}

const Cart: React.FC<CartProps> = ({ 
  cartItems, 
  onClose, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  showToast 
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    eventDate: '',
    eventType: 'wedding',
    specialRequests: ''
  });
  const [orderSent, setOrderSent] = useState(false);

  const totalAmount = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);

  const durations = {
    '1': '1 Day',
    '3': '3 Days',
    '7': '1 Week',
    '14': '2 Weeks'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const sendOrderEmail = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    const orderDetails = {
      customer: customerInfo,
      items: cartItems,
      totalAmount,
      orderDate: new Date().toISOString(),
      orderId: `CDR-${Date.now()}`
    };

    // Create email content
    const emailSubject = `New Rental Order - ${orderDetails.orderId}`;
    const emailBody = `
New Rental Order Received!

Order ID: ${orderDetails.orderId}
Order Date: ${new Date().toLocaleDateString()}

CUSTOMER INFORMATION:
Name: ${customerInfo.name}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}
Event Date: ${customerInfo.eventDate}
Event Type: ${customerInfo.eventType}

ITEMS ORDERED:
${cartItems.map(item => `
- ${item.name}
  Size: ${item.selectedSize}
  Duration: ${durations[item.rentalDuration as keyof typeof durations]}
  Quantity: ${item.quantity}
  Price: RWF ${item.totalPrice.toLocaleString()}
`).join('')}

TOTAL AMOUNT: RWF ${totalAmount.toLocaleString()}

Special Requests:
${customerInfo.specialRequests || 'None'}

Please contact the customer within 24 hours to confirm the order and arrange fitting/delivery.
    `;

    // In a real application, you would send this to your backend
    // For demo purposes, we'll use mailto
    const mailtoLink = `mailto:ndayishimiyecharlotte64@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    setOrderSent(true);
    showToast('Order sent successfully! Check your email for confirmation.', 'success');
    
    // Clear cart after successful order
    setTimeout(() => {
      onClearCart();
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingBag size={28} />
            <h2 className="text-2xl font-bold">
              {isCheckingOut ? 'Checkout' : 'Shopping Cart'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content - Make this scrollable */}
        <div className="overflow-y-auto max-h-[calc(95vh-120px)] custom-scrollbar">
          {cartItems.length === 0 ? (
            <div className="p-8 text-center">
              <ShoppingBag size={64} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-6">Add some items to get started!</p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {!isCheckingOut ? (
                <>
                  {/* Cart Items */}
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.cartId} className="bg-gray-50 rounded-2xl p-4 flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">
                            Size: {item.selectedSize} • Duration: {durations[item.rentalDuration as keyof typeof durations]}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => onUpdateQuantity(item.cartId, Math.max(1, item.quantity - 1))}
                                className="bg-white rounded-full p-1 hover:bg-gray-100 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
                                className="bg-white rounded-full p-1 hover:bg-gray-100 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">
                                RWF {item.totalPrice.toLocaleString()}
                              </div>
                              <button
                                onClick={() => {
                                  onRemoveItem(item.cartId);
                                  showToast('Item removed from cart', 'info');
                                }}
                                className="text-red-500 hover:text-red-700 transition-colors"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Summary */}
                  <div className="bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Total</h3>
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        RWF {totalAmount.toLocaleString()}
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => {
                          onClearCart();
                          showToast('Cart cleared successfully', 'info');
                        }}
                        className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={() => setIsCheckingOut(true)}
                        className="flex-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Checkout Form */
                <div className="space-y-6">
                  {!orderSent ? (
                    <>
                      <div className="bg-gradient-to-r from-orange-50 via-red-50 to-yellow-50 rounded-2xl p-6 border border-orange-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                        <div className="space-y-2">
                          {cartItems.map((item) => (
                            <div key={item.cartId} className="flex justify-between text-sm">
                              <span>{item.name} ({item.quantity}x)</span>
                              <span>RWF {item.totalPrice.toLocaleString()}</span>
                            </div>
                          ))}
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span>RWF {totalAmount.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={customerInfo.name}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Email *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={customerInfo.email}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone *
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={customerInfo.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Event Date
                            </label>
                            <input
                              type="date"
                              name="eventDate"
                              value={customerInfo.eventDate}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Address
                            </label>
                            <input
                              type="text"
                              name="address"
                              value={customerInfo.address}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Event Type
                            </label>
                            <select
                              name="eventType"
                              value={customerInfo.eventType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            >
                              <option value="wedding">Wedding</option>
                              <option value="engagement">Engagement</option>
                              <option value="graduation">Graduation</option>
                              <option value="business">Business Event</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Special Requests
                            </label>
                            <textarea
                              name="specialRequests"
                              value={customerInfo.specialRequests}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Any special requests or notes..."
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <button
                          onClick={() => setIsCheckingOut(false)}
                          className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-full font-semibold hover:bg-gray-300 transition-colors"
                        >
                          Back to Cart
                        </button>
                        <button
                          onClick={sendOrderEmail}
                          className="flex-1 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white py-3 px-6 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                        >
                          <Send className="mr-2" size={20} />
                          Send Order
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Order Confirmation */
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="text-green-600" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Order Sent Successfully!</h3>
                      <p className="text-gray-600 mb-4">
                        Your order has been sent to our team. We'll contact you within 24 hours to confirm details and arrange fitting/delivery.
                      </p>
                      <p className="text-sm text-gray-500">
                        Order ID: CDR-{Date.now()}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;