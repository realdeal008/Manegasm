import React from 'react';
import "../Component/Portfolio.css";
import { four, One, six, three, two, wax } from '../assets/assets';

const portfolioItems = [
  {
    title: "Spikey Med Pixie",
    description: "Client transformation featuring wet wax",
    image:wax,
  },
  {
    title: "Retwist Loc",
    description: "Maintenance & Designer Styles",
    image:One,
  },
  {
    title: "Textured Crop",
    description: "Custom Red Pixie And Soft Waves",
    image:two,
  },
  {
    title: "Pin Curl or Take Out",
    description: "Soft, ethereal styling for wedding days",
    image:four, 
  },
  {
    title: "Silk Press",
    description: "Trim or Smooth Style",
    image:three,

 },
  {
    title: "Soft Mohawk With Blonde Highlights",
    description: "Seamless transition from dark to light",
    image:six,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="portfolio-header">
          <h2>Our Portfolio</h2>
          <p>Browse our gallery of transformations and editorial work</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.image} alt={item.title} className="portfolio-img" />
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
