import React from 'react';
import rating from '../assets/logo-pure-green.png';
import user1 from '../assets/user1.png';

const Testimonial1 = () => {
  return (
    <div className="testimonial-card">
      <div className="rating-container">
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
        <div className="rating-box">
          <img src={rating} id="lemon-rating-icon" alt="Lemon rating" />
        </div>
      </div>
      <div className="user-container">
        <div id="user-image-container">
          <img src={user1} id="user1" alt="user 1 profile" />
        </div>
        <div className="user-id">
          <div className="user-info">
            <h6 id="user-info-text">Jon Do</h6>
          </div>
          <div id="user-name">
            <h7 id="user-name-text">Johnny_Utah</h7>
          </div>
        </div>
      </div>
      <article className="user-comment">
        "We had such a great time celebrating my grandmother's birthday"
      </article>
    </div>
  );
};

export default Testimonial1;
