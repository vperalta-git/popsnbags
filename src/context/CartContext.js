import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }]
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    case 'APPLY_PROMO_CODE':
      const validPromoCodes = {
        'POPS40': { discount: 40, description: '40% off everything' },
        'BAGS30': { discount: 30, description: '30% off your order' },
        'NEWBIE20': { discount: 20, description: '20% off for new customers' },
        'balaqBAGS40': { discount: 40, description: '40% flash sale discount' }
      };
      
      const promo = validPromoCodes[action.payload.code.toUpperCase()];
      if (promo) {
        return {
          ...state,
          promoCode: {
            code: action.payload.code.toUpperCase(),
            discount: promo.discount,
            description: promo.description
          }
        };
      }
      return state;

    case 'REMOVE_PROMO_CODE':
      return {
        ...state,
        promoCode: null
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        promoCode: null
      };

    default:
      return state;
  }
};

const initialState = {
  items: [],
  promoCode: null
};

// Load cart state from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('popsnbags-cart');
    if (savedCart) {
      return JSON.parse(savedCart);
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error);
  }
  return initialState;
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, loadCartFromStorage());

  // Save cart state to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('popsnbags-cart', JSON.stringify(state));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
  };

  const applyPromoCode = (code) => {
    dispatch({ type: 'APPLY_PROMO_CODE', payload: { code } });
  };

  const removePromoCode = () => {
    dispatch({ type: 'REMOVE_PROMO_CODE' });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => {
      const price = typeof item.price === 'number' ? item.price : parseFloat(item.price.replace(/[₱,]/g, ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getDiscountAmount = () => {
    if (!state.promoCode) return 0;
    return (getCartTotal() * state.promoCode.discount) / 100;
  };

  const getFinalTotal = () => {
    return getCartTotal() - getDiscountAmount();
  };

  const getCartItemCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const value = {
    items: state.items,
    promoCode: state.promoCode,
    addToCart,
    updateQuantity,
    removeFromCart,
    applyPromoCode,
    removePromoCode,
    clearCart,
    getCartTotal,
    getDiscountAmount,
    getFinalTotal,
    getCartItemCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};