import React from 'react';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';
import Testimonial3 from './Testimonial3';
import Testimonial4 from './Testimonial4';

const Testimonials = () => {
  return (
    <div className="section-background">
      <div id="testimonials-container">
          <h2 id="testimonials-text">What our customers say...</h2>
        <div id="testimonials">
          <Testimonial1 />
          <Testimonial2 />
          <Testimonial3 />
          <Testimonial4 />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
