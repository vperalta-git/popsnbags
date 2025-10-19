import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';
import { getStaticProducts } from '../data/products';

const FlashSale = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState(null);
  const { addToCart } = useCart();

  // In a real app, this would be your PHP backend URL
  const API_BASE_URL = 'http://localhost/api'; // Adjust this to your PHP server

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products.php?featured=true`);
        const data = await response.json();
        
        if (data.success) {
          setSaleProducts(data.data);
        } else {
          // Fallback to static data if API fails
          setSaleProducts(getStaticSaleProducts());
        }
      } catch (error) {
        console.error('Error fetching featured products:', error);
        // Fallback to static data if API fails
        setSaleProducts(getStaticSaleProducts());
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, [API_BASE_URL]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotificationProduct(product);
    setShowNotification(true);
    console.log(`Added ${product.name} to cart`);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  // Fallback static data
  const getStaticSaleProducts = () => {
    // Get actual products from our data file and apply discounts
    const allProducts = getStaticProducts();
    const saleProducts = allProducts.slice(0, 12).map(product => ({
      ...product,
      originalPrice: Math.round(product.price * 1.67), // Calculate original price (40% discount)
      discount: 40
    }));
    
    return saleProducts;
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(saleProducts.length / 4));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(saleProducts.length / 4)) % Math.ceil(saleProducts.length / 4));
  };

  const currentProducts = saleProducts.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Flash Sale Header */}
      <div className="relative bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-orange-500/15 rounded-full blur-xl animate-bounce"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Flash Sale Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2 mb-6">
              <svg className="w-5 h-5 text-yellow-300 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-white font-semibold text-sm">LIMITED TIME OFFER</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-4 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent animate-pulse">
              FLASH SALE
            </h2>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4 animate-bounce">
              UP TO 40% OFF!!!
            </div>
            <p className="text-red-100 text-xl font-medium">⚡ Don't miss out - Limited stock available! ⚡</p>
            
            {/* Countdown Timer Effect */}
            <div className="mt-8 flex justify-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-xs text-red-200">HOURS</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <div className="text-2xl font-bold text-white">59</div>
                <div className="text-xs text-red-200">MINS</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-red-200">SECS</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid with Carousel */}
      <div className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="border border-red-500/20"></div>
            ))}
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">🔥 Hot Deals 🔥</h3>
            <p className="text-gray-300 text-lg">Premium car parts at unbeatable prices</p>
          </div>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 
                         bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600
                         text-white w-14 h-14 rounded-full flex items-center justify-center 
                         transition-all duration-300 shadow-lg shadow-red-500/25
                         hover:scale-110 active:scale-95
                         border-2 border-white/20 backdrop-blur-sm"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10
                         bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600
                         text-white w-14 h-14 rounded-full flex items-center justify-center 
                         transition-all duration-300 shadow-lg shadow-red-500/25
                         hover:scale-110 active:scale-95
                         border-2 border-white/20 backdrop-blur-sm"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-16 auto-rows-fr">
              {loading ? (
                <div className="col-span-full flex justify-center items-center py-20">
                  <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent mb-4"></div>
                    <div className="text-gray-300 text-lg">Loading amazing deals...</div>
                  </div>
                </div>
              ) : (
                currentProducts.map((product, index) => (
                  <div key={product.id} 
                       className="group relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl 
                                 overflow-hidden shadow-2xl shadow-red-500/10 
                                 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20
                                 transition-all duration-500 transform animate-fade-in-up flex flex-col h-full"
                       style={{ animationDelay: `${index * 100}ms` }}>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 rounded-3xl 
                                   blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                    
                    {/* Discount Badge */}
                    {product.discount && (
                      <div className="absolute top-4 left-4 z-20">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-bold 
                                       px-3 py-2 rounded-full shadow-lg animate-pulse border border-green-400/50">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            -{product.discount}%
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Wishlist Heart */}
                    <button className="absolute top-4 right-4 z-20 text-gray-400 hover:text-red-500 
                                     transition-all duration-300 transform hover:scale-125 active:scale-110
                                     bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Product Image */}
                    <div className="relative h-56 bg-gradient-to-br from-gray-600/30 to-gray-700/30 overflow-hidden">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="w-full h-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center"
                           style={{ display: product.image ? 'none' : 'flex' }}>
                        <span className="text-white text-lg font-bold">
                          {product.brand || 'PRODUCT'}
                        </span>
                      </div>
                      
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                     opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Product Info - Using flex to ensure button alignment */}
                    <div className="relative p-6 flex flex-col flex-grow">
                      {/* Brand */}
                      {product.brand && (
                        <div className="mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                                         bg-gradient-to-r from-red-500/20 to-red-700/20 text-red-300 border border-red-500/30">
                            {product.brand}
                          </span>
                        </div>
                      )}

                      {/* Product Name */}
                      <h3 className="text-white font-bold text-lg mb-4 leading-tight group-hover:text-red-100 transition-colors duration-300 min-h-[3.5rem] flex items-start">
                        {product.name}
                      </h3>

                      {/* Price - Taking up available space */}
                      <div className="flex items-center justify-between mb-6 flex-grow">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl font-black bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm font-medium">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Add to Cart Button - Always at bottom */}
                      <div className="mt-auto">
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-full group/btn relative bg-gradient-to-r from-red-600 to-red-700 
                                   hover:from-red-500 hover:to-red-600 text-white py-3 px-6 
                                   rounded-2xl font-bold transition-all duration-300 
                                   transform hover:scale-105 active:scale-95
                                   shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/40
                                   border border-red-500/30 hover:border-red-400/50
                                   overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center space-x-2">
                            <svg className="w-5 h-5 group-hover/btn:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                            </svg>
                            <span>Add to Cart</span>
                          </span>
                          
                          {/* Button Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                                         transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full 
                                         transition-transform duration-700"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(saleProducts.length / 4) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition duration-300 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Pops & Bags</h3>
            <p className="text-gray-400 mb-4">Your trusted partner for quality car parts</p>
            <p className="text-gray-500">&copy; 2025 Pops & Bags. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add to Cart Notification */}
      {showNotification && notificationProduct && (
        <div 
          className="fixed top-20 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-pulse"
          style={{
            position: 'fixed',
            top: '80px',
            right: '16px',
            zIndex: 9999,
            backgroundColor: '#10B981',
            color: 'white',
            padding: '16px 24px',
            borderRadius: '8px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'
          }}
        >
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <p className="font-bold">Added to Cart!</p>
              <p className="text-sm">{notificationProduct.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashSale;