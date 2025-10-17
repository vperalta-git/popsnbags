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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <Navigation />

      {/* Mobile Header */}
      <header className="lg:hidden bg-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="text-white p-2 -ml-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold">My Shopping Cart</h1>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      {/* Desktop Page Title */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="bg-gray-800 rounded-lg p-12">
            <svg className="w-20 h-20 text-gray-500 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Start shopping to add items to your cart</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>
      ) : (

        /* Cart Content */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4 mb-6 lg:mb-0">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-700 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">IMG</span>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm lg:text-base truncate">
                      {item.name}
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base">
                      {formatPrice(item.price)}
                    </p>
                    {item.brand && (
                      <p className="text-gray-400 text-xs">{item.brand}</p>
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center transition duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>

                    <span className="w-8 text-center font-semibold text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center justify-center transition duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-400 p-1 lg:p-2 transition duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
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
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2">
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