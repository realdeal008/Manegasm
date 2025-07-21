import React from 'react';
import '../Component/Booking.css';

const Booking = () => {
  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">
        <div className="booking-wrapper">
          <div className="booking-info">
            <h2 className="booking-title">Book Your Transformation</h2>
            <p className="booking-subtitle">
              Ready to experience celebrity-level styling? Schedule your consultation today.
            </p>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <div className="feature-text">
                  <p className="feature-title">Consultation</p>
                  <p className="feature-description">15-minute complimentary consultation to discuss your vision</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="feature-text">
                  <p className="feature-title">Flexible Hours</p>
                  <p className="feature-description">Extended salon hours to accommodate busy schedules</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="feature-text">
                  <p className="feature-title">Premium Experience</p>
                  <p className="feature-description">Enjoy luxury amenities during your service</p>
                </div>
              </div>
            </div>
          </div>

          <div className="booking-form-wrapper">
            <form id="booking-form" className="booking-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" id="name" name="name" required className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" required className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" id="phone" name="phone" required className="form-input" />
              </div>
              <div className="form-group">
                <label htmlFor="service" className="form-label">Service</label>
                <select id="service" name="service" className="form-input">
                  <option>Signature Cut & Style</option>
                  <option>Color Transformation</option>
                  <option>Bridal Package</option>
                  <option>Extensions</option>
                  <option>Makeup Application</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date" className="form-label">Preferred Date</label>
                <input type="date" id="date" name="date" required className="form-input" />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">Book Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
