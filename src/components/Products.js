import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useCart } from '../context/CartContext';
import { getStaticProducts } from '../data/products';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('brands'); // 'brands' or 'categories'
  const { addToCart } = useCart();

  // In a real app, this would be your PHP backend URL
  const API_BASE_URL = 'http://localhost/api'; // Adjust this to your PHP server

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      let url = `${API_BASE_URL}/products.php`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setProducts(data.data);
      } else {
        console.error('Failed to fetch products:', data.message);
        // Fallback to static data if API fails
        setProducts(getProductsData());
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      // Fallback to static data if API fails
      setProducts(getProductsData());
    } finally {
      setLoading(false);
    }
  }, [API_BASE_URL]);

  const filterProducts = useCallback(() => {
    console.log('Filtering products:', { 
      totalProducts: products.length, 
      selectedCategory, 
      searchTerm,
      filterType,
      productBrands: products.map(p => p.brand)
    });
    
    let filtered = products;

    // Filter by brand or category based on filterType
    if (selectedCategory !== 'all') {
      if (filterType === 'brands') {
        filtered = filtered.filter(product => 
          product.brand && product.brand.toLowerCase() === selectedCategory.toLowerCase()
        );
      } else {
        filtered = filtered.filter(product => 
          product.category && product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      }
      console.log(`After ${filterType} filtering:`, filtered.length, 'products for:', selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log('After search filtering:', filtered.length, 'products for term:', searchTerm);
    }

    console.log('Final filtered products:', filtered.length);
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm, filterType]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    // Always apply filtering (including search) regardless of selected brand
    filterProducts();
  }, [filterProducts]);

  // Use shared product data
  const getProductsData = () => {
    return getStaticProducts();
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add a toast notification here later
    console.log(`Added ${product.name} to cart`);
  };

  // Reset to 'all' when switching filter types
  const handleFilterTypeChange = (newFilterType) => {
    setFilterType(newFilterType);
    setSelectedCategory('all');
  };

  // Get unique brands from products
  const getBrandFilters = () => {
    const uniqueBrands = [...new Set(products.map(product => product.brand).filter(Boolean))];
    return [
      { id: 'all', name: 'All Brands' },
      ...uniqueBrands.sort().map(brand => ({ id: brand, name: brand }))
    ];
  };

  // Get unique categories from products
  const getCategoryFilters = () => {
    const uniqueCategories = [...new Set(products.map(product => product.category).filter(Boolean))];
    return [
      { id: 'all', name: 'All Categories' },
      ...uniqueCategories.sort().map(category => ({ id: category, name: category }))
    ];
  };

  // Get current filter options based on filterType
  const getCurrentFilters = () => {
    return filterType === 'brands' ? getBrandFilters() : getCategoryFilters();
  };

  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₱${price.toLocaleString()}`;
    }
    return price;
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <Navigation showSearch={true} onSearchChange={handleSearchChange} />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-xl text-red-100">Browse our extensive collection by top automotive brands</p>
          </div>
        </div>
      </section>

      {/* Filter Toggle & Filters */}
      <section className="py-8 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Type Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-700 rounded-lg p-1 flex">
              <button
                onClick={() => handleFilterTypeChange('brands')}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  filterType === 'brands'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Filter by Brands
              </button>
              <button
                onClick={() => handleFilterTypeChange('categories')}
                className={`px-6 py-2 rounded-md font-medium transition duration-300 ${
                  filterType === 'categories'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-600'
                }`}
              >
                <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                </svg>
                Filter by Categories
              </button>
            </div>
          </div>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {getCurrentFilters().map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  console.log(`${filterType} button clicked:`, filter.id, filter.name);
                  setSelectedCategory(filter.id);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 ${
                  selectedCategory === filter.id
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white hover:shadow-md'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-gray-300">Loading products...</div>
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500">Product Image</span>
                  </div>
                  <div className="p-6">
                    {/* Brand */}
                    {product.brand && (
                      <div className="mb-2">
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {product.brand}
                        </span>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-start mb-2">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="text-xl font-semibold text-white hover:text-red-400 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-red-400">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <div className="text-gray-500 line-through text-sm">{formatPrice(product.originalPrice)}</div>
                        )}
                      </div>
                    </div>
                    <p className="text-red-400 text-sm font-medium mb-2">{product.category}</p>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                    <button 
                      onClick={() => handleAddToCart(product)}
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-white mb-4">No products found</h3>
              <p className="text-gray-400">
                {searchTerm 
                  ? `No products match "${searchTerm}". Try a different search term.`
                  : 'No products available in this category.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
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

export default Products;