import React from "react";
import { NavLink } from "react-router-dom";

import img1 from "../../assets/images/top1.webp";
import img2 from "../../assets/images/top2.webp";
import img3 from "../../assets/images/top3.webp";
import img4 from "../../assets/images/top4.webp";

import './Offers.styles.css'

function Offers() {
  return (
    <>
      <h1 className="title">Check out this Week’s Offers</h1>
      <div className="offers">
        <div className="offer">
          <img className="baner" src={img1} alt="Offer1" />
          <NavLink to="/products" className="shop">
            Shop Now
          </NavLink>
        </div>
        <div className="offer">
          <img className="baner" src={img2} alt="Offer1" />
          <NavLink to="/products" className="shop">
            Shop Now
          </NavLink>
        </div>
        <div className="offer">
          <img className="baner" src={img3} alt="Offer1" />
          <NavLink to="/products" className="shop">
            Shop Now
          </NavLink>
        </div>
        <div className="offer">
          <img  className="baner" src={img4} alt="Offer1" />
          <NavLink to="/products" className="shop">
            Shop Now
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Offers;
