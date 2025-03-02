import React from 'react';
import './Brands.css';

// Sample brand logo images. You can replace these with actual image URLs or imports.
import logo1 from '../assets/Canva/E2.png'; 
import logo2 from '../assets/Canva/E1.png'; 
// Add more logos as needed

const Brands = () => {
  return (
    <section>
      <div className="brandsCarousel">
        <div className="carouselTrack">
          <div className="brandLogo">
            <img src={logo1} alt="Brand 1" />
          </div>
          <div className="brandLogo">
            <img src={logo2} alt="Brand 2" />
          </div>
          {/* Add more logos here */}
        </div>
      </div>
    </section>
  );
};

export default Brands;
