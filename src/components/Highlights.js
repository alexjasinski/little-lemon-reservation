import React from 'react';
import Special1 from './Special1';
import Special2 from './Special2';
import Special3 from './Special3';

const Highlights = () => {
  return (
    <section className="section-no-background">
      <div id="highlights-specials-container">
        <div id="highlights-container">
          <h2 id="highlights-text">This week's specials</h2>
          <button aria-label="Go to menu" id="highlights-button">
            Menu
          </button>
        </div>
        <div className="specials-container">
          <Special1 id="special-card" />
          <Special2 id="special-card" />
          <Special3 id="special-card" />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
