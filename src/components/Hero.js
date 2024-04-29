import React from 'react';
import hero from '../assets/reserve.gif';

const Hero = () => {
  return (
    <section className="section-background">
      <div id="hero">
        <div id="hero-info">
          <h1 id="yellow-text">Little Lemon Chicago
          </h1>
          <h3 className="section-text" id="hero-subheading">
            Try out our traditional dishes
          </h3>
          <article className="section-text">
            A cozy Chicago eatery offering a delightful fusion of Mediterranean flavors. From zesty salads to savory mains, savor fresh, locally sourced ingredients expertly crafted into culinary masterpieces.

          </article>
          <div className="reserve-button-container">
            <button id="reserve-button">Reserve a table</button>
          </div>
        </div>
        {/* <div> */}
        <img src={hero} alt="hero" id="hero-image" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
