import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import Navigation from './Navigation';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart, discount } = useCart();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add a small delay to ensure cart context is loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    region: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderNotes, setOrderNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate order number
    const orderNum = 'PB' + Date.now().toString().slice(-6);
    setOrderNumber(orderNum);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Send order confirmation email using FormSubmit.co
    try {
      const orderMessage = `
Order Details:
Order Number: ${orderNum}
Customer: ${customerInfo.firstName} ${customerInfo.lastName}
Email: ${customerInfo.email}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}, ${customerInfo.city}, ${customerInfo.region} ${customerInfo.zipCode}

Items Ordered:
${cartItems.map(item => `- ${item.name} (Qty: ${item.quantity}) - ₱${(item.price * item.quantity).toLocaleString()}`).join('\n')}

Subtotal: ₱${cartTotal.toLocaleString()}
Discount: ${discount > 0 ? `₱${(cartTotal * discount).toLocaleString()} (${discount * 100}%)` : 'None'}
Total: ₱${(cartTotal * (1 - discount)).toLocaleString()}

Payment Method: ${paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod}

${orderNotes ? `Order Notes: ${orderNotes}` : ''}
      `;

      const formData_submit = new FormData();
      formData_submit.append('name', `${customerInfo.firstName} ${customerInfo.lastName}`);
      formData_submit.append('email', customerInfo.email);
      formData_submit.append('subject', `New Order Confirmation - ${orderNum}`);
      formData_submit.append('message', orderMessage);
      formData_submit.append('_next', window.location.href);
      formData_submit.append('_captcha', 'false');
      formData_submit.append('_template', 'table');

      await fetch('https://formsubmit.co/vionneulrichp@gmail.com', {
        method: 'POST',
        body: formData_submit
      });
    } catch (error) {
      console.error('Failed to send order email:', error);
    }

    setIsSubmitting(false);
    setOrderComplete(true);
    clearCart();
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-white text-xl">Loading checkout...</div>
        </div>
      </div>
    );
  }

  // Debug: Check if cart context is available
  if (!cartItems) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-white text-xl">Cart context not available. Please refresh the page.</div>
        </div>
      </div>
    );
  }

  // Order complete state
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-600 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-300 mb-6">Thank you for your order!</p>
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">Order Number</h3>
              <p className="text-2xl font-bold text-red-500">{orderNumber}</p>
            </div>
            <p className="text-gray-300 mb-8">
              We've sent a confirmation email to <span className="text-red-400">{customerInfo.email}</span>.
              You'll receive another email when your order ships.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => window.location.href = '/products'}
                className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navigation />
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-gray-300 mb-8">Add some items to your cart before checking out.</p>
            <button
              onClick={() => window.location.href = '/products'}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Shop Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center">Checkout</h1>
          <p className="text-xl text-red-100 text-center mt-4">Complete your order</p>
        </div>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmitOrder} className="grid lg:grid-cols-3 gap-12">
            
            {/* Customer Information */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Contact Information */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={customerInfo.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Region *
                      </label>
                      <select
                        name="region"
                        value={customerInfo.region}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        <option value="">Select Region</option>
                        <option value="NCR">NCR</option>
                        <option value="Region I">Region I</option>
                        <option value="Region II">Region II</option>
                        <option value="Region III">Region III</option>
                        <option value="Region IV-A">Region IV-A</option>
                        <option value="Region IV-B">Region IV-B</option>
                        <option value="Region V">Region V</option>
                        <option value="Region VI">Region VI</option>
                        <option value="Region VII">Region VII</option>
                        <option value="Region VIII">Region VIII</option>
                        <option value="Region IX">Region IX</option>
                        <option value="Region X">Region X</option>
                        <option value="Region XI">Region XI</option>
                        <option value="Region XII">Region XII</option>
                        <option value="Region XIII">Region XIII</option>
                        <option value="BARMM">BARMM</option>
                        <option value="CAR">CAR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={customerInfo.zipCode}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 focus:ring-red-500"
                    />
                    <label htmlFor="cod" className="ml-3 text-gray-300">
                      Cash on Delivery (COD)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="gcash"
                      name="payment"
                      value="gcash"
                      checked={paymentMethod === 'gcash'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 focus:ring-red-500"
                    />
                    <label htmlFor="gcash" className="ml-3 text-gray-300">
                      GCash
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bank"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === 'bank'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-red-600 bg-gray-700 border-gray-600 focus:ring-red-500"
                    />
                    <label htmlFor="bank" className="ml-3 text-gray-300">
                      Bank Transfer
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Notes */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">Order Notes (Optional)</h2>
                <textarea
                  name="orderNotes"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  rows="4"
                  placeholder="Special instructions, installation preferences, etc."
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                {/* Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-white font-medium">{item.name}</h4>
                        <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-white font-medium">
                        ₱{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>₱{cartTotal.toLocaleString()}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-400">
                      <span>Discount ({(discount * 100)}%)</span>
                      <span>-₱{(cartTotal * discount).toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t border-gray-700 pt-2 flex justify-between text-xl font-bold text-white">
                    <span>Total</span>
                    <span>₱{(cartTotal * (1 - discount)).toLocaleString()}</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-6 py-3 px-4 rounded-lg font-semibold transition duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed' 
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {isSubmitting ? 'Processing Order...' : 'Place Order'}
                </button>

                <p className="text-gray-400 text-sm text-center mt-4">
                  By placing your order, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;