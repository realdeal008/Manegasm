import React, { useState } from 'react';
import '../Component/Navbar.css'

const Navbar = ({ toggleCart, cartCount }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Products', href: '#products' },
    { name: 'Book Now', href: '#booking' },
  ];

  return (
    <nav className="main-navbar ">
      <div className="container-wrapper">
        <div className="nav-inner">
          <div className="logo-container">
            <h1 className="logo-text">
              MANEGASM
            </h1>
          </div>
          <div className="responsive-show">
            <div className="nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link">
                  {link.name}
                </a>
              ))}
              <button
                id="cart-toggle"
                className="nav-item"
                onClick={toggleCart}
                aria-label="Toggle Cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-size"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="notification-badge">
                  {cartCount}
                </span>
              </button>
            </div>
          </div>
          <div className="mobile-toggle">
            <button
              id="mobile-menu-button"
              className="nav-button "
              onClick={handleMobileMenuToggle}
              aria-label="Toggle Mobile Menu"
            >
              <svg
                className="icon-size"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu">
            <div className="menu-padding ">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="custom-btn" onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="navbar-buttons"
                onClick={() => {
                  toggleCart();
                  setMobileMenuOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-small"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
