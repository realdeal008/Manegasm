import React from 'react';
import '../Component/products.css';
import { useCart } from '../context/useCart';

const Products = () => {
  const { addToCart } = useCart();

  const products = [
    {
      name: 'Signature Shampoo',
      price: 35,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03c5a4cb-9aec-4342-b1db-78663b7714e6.png',
      description: 'Sulfate-free gentle cleansing for all hair types',
    },
    {
      name: 'Repair Mask',
      price: 48,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/27474687-ba15-43ad-82a1-45a3f11ecf88.png',
      description: 'Intensive moisture treatment for damaged hair',
    },
    {
      name: 'Texture Spray',
      price: 28,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3da9a528-1991-4b2b-8ef9-eb664a3e507e.png',
      description: 'Lightweight hold with natural-looking texture',
    },
    {
      name: 'Shine Serum',
      price: 42,
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/91ebc898-e73b-42a5-8c5f-2206943871ff.png',
      description: 'Weightless gloss enhancer with UV protection',
    },
  ];

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-header">
          <h2 className="products-title">Professional Products</h2>
          <p className="products-subtitle">
            Shop our exclusive line of salon-grade hair care
          </p>
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.name} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="products-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
