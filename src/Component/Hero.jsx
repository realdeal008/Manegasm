import React from 'react';
import "../Component/Hero.css"
import { Man } from '../assets/assets';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* Hero Background */}
      <div className="hero-bg" />

      {/* Image Div */}
      <div className="hero-image">
        <img
          src={Man}alt="Stylist working on a celebrity client's hair"
          className="image-cover"
        />
      </div>

      {/* Text Div */}
      <div className="hero-text">
        <h1>
          Healthy Hair Is Yours With <span className="logo">MANEGASM</span>
        </h1>
        <p>
          Celebrity-inspired hair artistry and modeling services for the modern elite
        </p>
        <div className="hero-buttons">
          <a href="#booking" className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-secondary">
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
