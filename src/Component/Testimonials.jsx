import React from 'react';
import '../Component/Testimonials.css';

const testimonials = [
  {
    name: 'Jessica W.',
    title: 'Actress & Model',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e1e24589-5c81-4804-a00b-7447a1ed0a3c.png',
    quote:
      '"Manegasm transformed my look for the Oscars and I\'ve never received so many compliments. The attention to detail is unparalleled."',
  },
  {
    name: 'Marcus T.',
    title: 'TV Host',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6c0aab32-6401-4e0c-aff9-3b287bb08dae.png',
    quote:
      '"I\'ve been to hairstylists all over the world, but the team at Manegasm consistently delivers the best cuts I\'ve ever had."',
  },
  {
    name: 'Sophia L.',
    title: 'Fashion Designer',
    image:
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d78e57ec-e756-4698-a208-8cf83cba8211.png',
    quote:
      '"Their ability to translate my vague ideas into stunning reality is why I keep coming back season after season for my shows."',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="title">Client Testimonials</h2>
          <p className="subtitle">
            What our celebrity clients have to say
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-user">
                <div className="avatar">
                  <img src={t.image} alt={`Photo of ${t.name}`} />
                </div>
                <div>
                  <h4 className="name">{t.name}</h4>
                  <p className="title">{t.title}</p>
                </div>
              </div>
              <p className="quote">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
