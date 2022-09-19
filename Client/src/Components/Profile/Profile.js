import React from "react";

import AuthService from "../../services/auth.service";

import "./Profile.style.css";

import img from "../../assets/images/user.png";
import background from "../../assets/images/s.jpg";
import { NavLink } from "react-router-dom";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="head">
    <div className="container">
      <div className="infoU">
        <img src={img} alt="Profile Img" className="imgP" />
        <h3 className="nameU"> 
          {currentUser.username}
        </h3>
      <p className="emailU"> {currentUser.email}
      </p>
      </div>
      <div className="header">
        <img src={background} alt="Background" className="backgroundU" />
      </div>
      <div className="btnP">
      <NavLink to="/products" className="shopNow" style={{ textDecoration: "none" }}>
        Shop Now
      </NavLink>
      <NavLink to="/cart" className="goCart"  style={{ textDecoration: "none" }}>
        Go to Cart
      </NavLink>
      </div>
    </div>
    </div>
  );
};

export default Profile;
