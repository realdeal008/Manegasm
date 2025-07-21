import React from 'react';
import '../Component/CartModal.css';
import { useCart } from '../context/useCart';

const CartModal = ({ isOpen, onClose }) => {

    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    const handleQuantityChange = (itemName, quantity) => {
      if (quantity < 1) {
        removeFromCart(itemName);
      } else {
        updateQuantity(itemName, quantity);
      }
    };

    const handleCheckout = () => {
      alert('Proceeding to checkout. Thank you for your purchase!');
      clearCart();
      onClose();
    };





    if (!isOpen) return null;

    // Calculate subtotal
    const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

  return (
    <div id="cart-modal" className={`cart-modal ${isOpen ? 'show' : 'hide'}`}>
      <div className="cart-backdrop" onClick={onClose}></div>

      <div className="cart-panel">
        <div className="cart-content">
          <div className="cart-header">
            <h2 className="cart-title">Your Cart</h2>
            <button className="close-btn" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" className="close-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="cart-items" id="cart-items">
            {cart.length === 0 ? (
              <div className="empty-cart">
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.name} className="cart-item">
                  <div className="item-name">{item.name}</div>
                  <div className="item-quantity">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.name, parseInt(e.target.value))}
                    />
                  </div>
                  <div className="item-price">${(item.price * item.quantity).toFixed(2)}</div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span className="summary-label">Subtotal</span>
              <span id="cart-subtotal" className="summary-value">${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span className="summary-label">Tax (8%)</span>
              <span id="cart-tax" className="summary-value">${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span id="cart-total" className="total-value">${total.toFixed(2)}</span>
            </div>
          </div>

          <button id="checkout-btn" className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
