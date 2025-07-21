import React from 'react';
import "./Services.css"

const Services = () => {
  return (
    <section id="services" className="section-padding-bg">
      <div className="custom-container ">
        <div className="custom-text-block">
          <h2 className="custom-H">Premium Services</h2>
          <p className="custom-paragraph">Transformative hair artistry that makes you look and feel extraordinary</p>
        </div>
        <div className="custom-grid ">
          <div className="service-card">
            <div className="custom-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="my-class" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="signature-cut-style">Signature Cut & Style</h3>
            <p className="custom-style">Our signature service featuring precision cutting and personalized styling consultation.</p>
            <div className="flex-between-center">
              <span className="custom-text">$250+</span>
              <button className="add-to-cart" data-name="Signature Cut & Style" data-price="250">Add to Cart</button>
            </div>
          </div>
          <div className="service-card">
            <div className="custom-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="my-class" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="signature-cut-style">Color Transformation</h3>
            <p className="custom-style">Expert color services using premium products for vibrant, healthy-looking hair.</p>
            <div className="flex-between-center">
              <span className="custom-text">$350+</span>
              <button className="add-to-cart" data-name="Color Transformation" data-price="350">Add to Cart</button>
            </div>
          </div>
          <div className="service-card">
            <div className="custom-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="my-class" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="signature-cut-style">Bridal Package</h3>
            <p className="custom-style">Complete bridal hair and makeup package including trial sessions and day-of styling.</p>
            <div className="flex-between-center">
              <span className="custom-text">$950+</span>
              <button className="add-to-cart" data-name="Bridal Package" data-price="950">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
