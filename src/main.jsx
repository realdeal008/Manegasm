
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Assuming CartProvider is the context provider for useCart
import { CartProvider } from './context/cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your App component with the CartProvider */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
