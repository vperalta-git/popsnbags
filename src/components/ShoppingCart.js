import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const {
    items: cartItems,
    promoCode,
    updateQuantity,
    removeFromCart,
    applyPromoCode,
    removePromoCode,
    getCartTotal,
    getDiscountAmount,
    getFinalTotal
  } = useCart();

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  const handleApplyPromoCode = () => {
    if (!promoCodeInput.trim()) {
      setPromoError('Please enter a promo code');
      return;
    }

    applyPromoCode(promoCodeInput);
    
    setTimeout(() => {
      setPromoError('');
      setPromoCodeInput('');
    }, 100);
  };

  const handleRemovePromoCode = () => {
    removePromoCode();
    setPromoError('');
  };

  const subtotal = getCartTotal();
  const discountAmount = getDiscountAmount();
  const total = getFinalTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Mobile Header */}
      <header className="lg:hidden bg-white/5 backdrop-blur-lg border-b border-white/10 px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2 hover:bg-white/10 rounded-xl transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
            My Shopping Cart
          </h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Desktop Page Title */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent mb-4">
            Shopping Cart
          </h1>
          <p className="text-gray-300 text-lg">Review your selected items and proceed to checkout</p>
        </div>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-16 
                        shadow-2xl shadow-red-500/10 animate-fade-in-up">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-3xl blur-xl"></div>
            
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-gray-600 to-gray-700 rounded-3xl 
                            flex items-center justify-center mx-auto mb-8 shadow-lg
                            animate-float">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">Your cart is empty</h2>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-md mx-auto">
                Discover amazing car parts and start building your dream ride
              </p>
              <button
                onClick={() => navigate('/products')}
                className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 
                         rounded-2xl font-bold text-lg hover:from-red-500 hover:to-red-600 
                         hover:scale-105 hover:shadow-lg hover:shadow-red-500/25
                         transition-all duration-300 transform active:scale-95
                         before:absolute before:inset-0 before:rounded-2xl before:bg-white/10 
                         before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                         overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Shop Now
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" 
                       fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (

        /* Cart Content */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6 mb-8 lg:mb-0">
              {cartItems.map((item, index) => (
                <div key={item.id} 
                     className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 
                               hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/10
                               transition-all duration-500 animate-fade-in-up"
                     style={{ animationDelay: `${index * 100}ms` }}>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-3xl 
                                blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                  
                  <div className="relative flex items-center space-x-6">
                    {/* Product Image */}
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-gray-600/50 to-gray-700/50 
                                  rounded-2xl flex-shrink-0 overflow-hidden
                                  group-hover:bg-gradient-to-br group-hover:from-red-600/20 group-hover:to-red-700/20
                                  transition-all duration-500 shadow-lg">
                      {item.image ? (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.querySelector('.fallback-icon').style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="fallback-icon w-full h-full bg-gradient-to-r from-red-500 to-red-700 rounded-xl 
                                    flex items-center justify-center shadow-lg shadow-red-500/30
                                    group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                           style={{ display: item.image ? 'none' : 'flex' }}>
                        <span className="text-white text-xs font-bold">
                          {item.brand || 'PART'}
                        </span>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-lg lg:text-xl mb-2 group-hover:text-red-100 transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                          {formatPrice(item.price)}
                        </p>
                        {item.brand && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold
                                         bg-gradient-to-r from-red-500/20 to-red-700/20 text-red-300 border border-red-500/30">
                            {item.brand}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-green-300 flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        In Stock
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-white/10">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-10 h-10 bg-gray-600/50 hover:bg-red-600 text-white rounded-xl 
                                 flex items-center justify-center transition-all duration-300 hover:scale-110
                                 group/btn"
                      >
                        <svg className="w-4 h-4 group-hover/btn:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>

                      <div className="w-16 text-center">
                        <span className="text-xl font-bold text-white bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                          {item.quantity}
                        </span>
                      </div>

                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 
                                 text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110
                                 group/btn shadow-lg shadow-red-500/25"
                      >
                        <svg className="w-4 h-4 group-hover/btn:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-400 p-3 rounded-xl hover:bg-red-500/10 
                               transition-all duration-300 hover:scale-110 group/remove"
                    >
                      <svg className="w-6 h-6 group-hover/remove:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-4 lg:p-6 space-y-4 lg:space-y-6">
                {/* Free Shipping Notice */}
                <div className="text-center">
                  <p className="text-gray-300 text-sm">Your cart qualifies for free shipping</p>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  {promoCode ? (
                    <div className="bg-green-700 rounded-lg p-3 flex justify-between items-center">
                      <div>
                        <p className="text-white font-semibold">{promoCode.code}</p>
                        <p className="text-green-200 text-sm">{promoCode.description}</p>
                      </div>
                      <button
                        onClick={handleRemovePromoCode}
                        className="text-green-200 hover:text-white"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="Enter promo code (try: POPS40)"
                        onKeyPress={(e) => e.key === 'Enter' && handleApplyPromoCode()}
                      />
                      <button
                        onClick={handleApplyPromoCode}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition duration-200"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {promoError && (
                    <p className="text-red-400 text-sm">{promoError}</p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 border-t border-gray-700 pt-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  {promoCode && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({promoCode.discount}%):</span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white border-t border-gray-700 pt-3">
                    <span>Total:</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Checkout</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Continue Shopping */}
                <button 
                  onClick={() => navigate('/products')}
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-6 rounded-lg font-medium transition duration-300"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;