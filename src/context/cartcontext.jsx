import React, { useState, useEffect } from 'react';
import { CartContext } from './cartContextObject';

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load cart from local storage if available
    const savedCart = localStorage.getItem('manegasm-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save cart to local storage whenever it changes
    localStorage.setItem('manegasm-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemName) => {
    setCart((prevCart) => prevCart.filter(item => item.name !== itemName));
  };

  const updateQuantity = (itemName, quantity) => {
    setCart((prevCart) => {
      return prevCart.map(item =>
        item.name === itemName ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
