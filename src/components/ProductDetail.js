import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';
import { getStaticProducts, generateSpecifications } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  // In a real app, this would be your PHP backend URL
  const API_BASE_URL = 'http://localhost/api';

  useEffect(() => {
    const getStaticProduct = () => {
      const staticProducts = getStaticProducts();
      const foundProduct = staticProducts.find(p => p.id === parseInt(id));
      
      if (foundProduct) {
        // Add specifications if not present
        if (!foundProduct.specifications) {
          foundProduct.specifications = generateSpecifications(foundProduct);
        }
        return foundProduct;
      }
      
      // Return first product as fallback
      const fallback = staticProducts[0];
      if (!fallback.specifications) {
        fallback.specifications = generateSpecifications(fallback);
      }
      return fallback;
    };

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_BASE_URL}/products.php?id=${id}`);
        const data = await response.json();
        
        if (data.success && data.data.length > 0) {
          setProduct(data.data[0]);
        } else {
          // Fallback to static product data
          setProduct(getStaticProduct());
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        setProduct(getStaticProduct());
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-gray-300">Loading product...</div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
            <p className="text-gray-400 mb-8">The product you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/products')}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center space-x-4">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            <button 
              onClick={() => navigate('/cart')}
              className="text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Product Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Product Image */}
          <div className="mb-6 lg:mb-0">
            <div className="aspect-square bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for product image */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-white text-lg font-medium">Product Image</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Brand & Title */}
            <div>
              <p className="text-red-400 font-semibold text-lg mb-2">{product.brand}</p>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">{product.name}</h1>
            </div>

            {/* Tabs - Mobile */}
            <div className="lg:hidden">
              <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'description'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specification')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === 'specification'
                      ? 'bg-red-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Specification
                </button>
              </div>
            </div>

            {/* Content based on active tab - Mobile */}
            <div className="lg:hidden">
              {activeTab === 'description' ? (
                <div className="text-gray-300 text-sm leading-relaxed">
                  {product.description}
                </div>
              ) : (
                <div className="space-y-3">
                  {product.specifications && typeof product.specifications === 'object' 
                    ? Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                          <span className="text-gray-400 text-sm">{key}</span>
                          <span className="text-white text-sm font-medium">{value}</span>
                        </div>
                      ))
                    : (
                        <div className="text-gray-300 text-sm">
                          {product.specifications || 'No specifications available'}
                        </div>
                      )
                  }
                </div>
              )}
            </div>

            {/* Desktop Content - Always visible */}
            <div className="hidden lg:block space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Description</h3>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications && typeof product.specifications === 'object' 
                    ? Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-700 pb-2">
                          <span className="text-gray-400">{key}</span>
                          <span className="text-white font-medium">{value}</span>
                        </div>
                      ))
                    : (
                        <div className="text-gray-300">
                          {product.specifications || 'No specifications available'}
                        </div>
                      )
                  }
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl lg:text-3xl font-bold text-white">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="text-red-400 text-sm font-semibold">Save {product.discount}</span>
                  )}
                </div>
              </div>

              {/* Quantity Selector - Desktop */}
              <div className="hidden lg:flex items-center justify-between mb-4">
                <span className="text-gray-300">Quantity:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                  >
                    -
                  </button>
                  <span className="text-white font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-gray-600"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-semibold transition duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;