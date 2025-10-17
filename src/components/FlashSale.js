import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';

const FlashSale = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [saleProducts, setSaleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
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
    console.log(`Added ${product.name} to cart`);
  };

  // Fallback static data
  const getStaticSaleProducts = () => {
    return [
      {
        id: 1,
        name: 'HKS Freeflow Muffler',
        price: 4450,
        originalPrice: 7417,
        discount: 40,
        image: 'hks-muffler.jpg',
        brand: 'HKS'
      },
      {
        id: 2,
        name: 'Tein H Lowering Springs',
        price: 18250,
        originalPrice: 30417,
        discount: 40,
        image: 'tein-springs.jpg',
        brand: 'TEIN'
      },
      {
        id: 3,
        name: 'Air Force Japan Air Suspension Kit',
        price: 238999,
        originalPrice: 398332,
        discount: 40,
        image: 'air-suspension.jpg',
        brand: 'Air Force Japan'
      },
      {
        id: 4,
        name: 'Rota Wheels JKR 18 x 9.5',
        price: 45000,
        originalPrice: 75000,
        discount: 40,
        image: 'rota-wheels.jpg',
        brand: 'ROTA'
      },
      {
        id: 6,
        name: 'Momo Monte Carlo Wheel',
        price: 18753,
        originalPrice: 31255,
        discount: 40,
        image: 'momo-wheel.jpg',
        brand: 'MOMO'
      },
      {
        id: 8,
        name: 'HKS Super Turbo Muffler Ti',
        price: 145342,
        originalPrice: 242237,
        discount: 40,
        image: 'hks-turbo-muffler.jpg',
        brand: 'HKS'
      }
    ];
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
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Flash Sale Header */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              FLASH SALE UP TO 40% OFF!!!
            </h2>
            <p className="text-gray-300 text-lg">Limited time offer - Don't miss out!</p>
          </div>
        </div>
      </div>

      {/* Products Grid with Carousel */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-600 hover:bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mx-12">
              {loading ? (
                <div className="col-span-full flex justify-center items-center py-20">
                  <div className="text-gray-300">Loading flash sale products...</div>
                </div>
              ) : (
                currentProducts.map((product) => (
                  <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 relative">
                    {/* Wishlist Heart */}
                    <button className="absolute top-3 right-3 z-10 text-gray-400 hover:text-red-500 transition duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Product Image */}
                    <div className="h-48 bg-gray-700 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Product Image</span>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      {/* Brand */}
                      {product.brand && (
                        <div className="mb-2">
                          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                            {product.brand}
                          </span>
                        </div>
                      )}

                      {/* Product Name */}
                      <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-red-400 font-bold text-lg">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{formatPrice(product.originalPrice)}</span>
                        )}
                      </div>

                      {/* Discount Badge */}
                      {product.discount && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                            -{product.discount}%
                          </span>
                        </div>
                      )}

                      {/* Add to Cart Button */}
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition duration-300 text-sm font-semibold"
                      >
                        Add to Cart
                      </button>
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
    </div>
  );
};

export default FlashSale;