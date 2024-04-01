import React from "react";
import shoe_image from '../images/shoe_image.png'
import shops from '../images/shops.png'

const ShoesDetails = () => {
  return (
    <main className="main">
      <div className="div-1">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="buttons">
        <button>Shop Now</button>
        <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
        <p>Also Available on</p>

        <div className="shopping-items">
          <img src={shops} alt="shops"/>
        </div>
        </div>

        
      </div>

      <div className="div-2">
        <img src={shoe_image} alt="shoes"/>
      </div>
    </main>
  );
};

export default ShoesDetails;
