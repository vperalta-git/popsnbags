import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = ({ showSearch = false, onSearchChange = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchChange) {
      onSearchChange(value);
    }
  };

  return (
    <nav className="bg-gray-900/80 backdrop-blur-lg border-b border-white/10 shadow-2xl shadow-red-500/10 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="group flex items-center space-x-2">
              <div className="text-3xl font-black bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent 
                            group-hover:from-red-400 group-hover:to-red-600 transition-all duration-300">
                Pops & Bags
              </div>
              <div className="w-2 h-2 bg-red-500 rounded-full group-hover:scale-150 group-hover:bg-red-400 transition-all duration-300"></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <Link
                to="/"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">Home</span>
              </Link>
              <Link
                to="/products"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">Products</span>
              </Link>
              <Link
                to="/flash-sale"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                          after:absolute after:-top-1 after:-right-1 after:bg-red-500 after:text-white after:text-xs after:px-1 after:py-0.5 after:rounded after:animate-pulse"
                data-flash="🔥"
              >
                <span className="relative z-10">Flash Sale</span>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded animate-pulse">🔥</span>
              </Link>
              <Link
                to="/diy-tutorials"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">DIY Tutorials</span>
              </Link>
              <Link
                to="/about"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">About</span>
              </Link>
              <Link
                to="/contact"
                className="relative group text-gray-300 hover:text-white px-4 py-2 rounded-xl text-sm font-semibold 
                          transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <span className="relative z-10">Contact</span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="hidden md:block flex-1 max-w-md mx-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-2xl px-6 py-3 pl-12 
                            focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 focus:bg-white/10
                            placeholder-gray-400 transition-all duration-300 hover:bg-white/10"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 group-focus-within:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative group text-gray-300 hover:text-white p-3 rounded-2xl transition-all duration-300 
                        hover:bg-white/5 hover:backdrop-blur-sm hover:scale-110
                        before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
            >
              <svg className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h8.5" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs 
                              rounded-full h-6 w-6 flex items-center justify-center font-bold
                              animate-pulse shadow-lg shadow-red-500/50">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-3 rounded-2xl transition-all duration-300 
                          hover:bg-white/5 hover:backdrop-blur-sm
                          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-red-500/20 before:to-red-700/20 
                          before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300"
              >
                <svg className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl mt-4 mb-4
                        shadow-2xl shadow-red-500/10">
            {showSearch && (
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full bg-white/5 backdrop-blur-sm text-white border border-white/10 rounded-xl px-4 py-3 
                            focus:ring-2 focus:ring-red-500/50 focus:border-red-500/50 focus:bg-white/10
                            placeholder-gray-400 transition-all duration-300"
                />
              </div>
            )}
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/flash-sale"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2 relative"
              onClick={() => setIsOpen(false)}
            >
              Flash Sale
              <span className="absolute right-4 top-3 bg-red-500 text-white text-xs px-2 py-1 rounded animate-pulse">🔥</span>
            </Link>
            <Link
              to="/diy-tutorials"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              DIY Tutorials
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-4 py-3 rounded-xl text-base font-semibold
                        transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm
                        hover:border-l-4 hover:border-red-500 hover:translate-x-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;