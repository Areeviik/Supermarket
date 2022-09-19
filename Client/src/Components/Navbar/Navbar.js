import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../assets/images/s2.png";
import "./Navbar.style.css";
import cart from "../../assets/images/shopping-cart.png";
import me from "../../assets/images/user.png";

function Navbar(props) {
  const { logOut, currentUser } = props;
  return (
    <nav className="navMenu">
      <div className="navbar">
        <div className="navLogo">
          <NavLink
            to="/home"
            style={{ textDecoration: "none", display: "flex" }}
          >
            <img src={img} alt="Logo" />
            <h1 >SUPERMARKET</h1>
          </NavLink>
          <div className="menu">
          <div className="left-sidebar">
          <NavLink
            className="navelems"
            style={({ isActive }) => ({
              color: isActive ? '#ffc107' : '#39971c',
              textDecoration: "none"
            })}
            to="/home"
          >
            Home
          </NavLink>
          <p> | </p>
          <NavLink
            className="navelems"
            style={({ isActive }) => ({
              color: isActive ? '#ffc107' : '#39971c',
              textDecoration: "none"
            })}
            to="/about"
          >
            About Us
          </NavLink>
          <p> | </p>
          <NavLink
            className="navelems"
            style={({ isActive }) => ({
              color: isActive ? '#ffc107' : '#39971c',
              textDecoration: "none"
            })}
            to="/products"
          >
            Products
          </NavLink>
        </div>
        </div>
          <div className="right-sidebar">
            <NavLink
              className="navelemsCart"
              style={{ textDecoration: "none" }}
              to="/cart"
            >
              <img src={cart} className="cartLogo" alt="cart" />
            </NavLink>
          </div>

          {currentUser ? (
            <div className="profile">
              <NavLink
                to={"/me"}
                style={{ textDecoration: "none" }}
                className="account"
              >
                <img src={me}   className="me" alt="Profile picture" />
              </NavLink>

              <div className="login">
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none" }}
                  className="navLink"
                  onClick={logOut}
                >
                  LogOut
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="login">
              <NavLink
                to={"/login"}
                style={{ textDecoration: "none" }}
                className="navLink"
              >
                Login
              </NavLink>
              <NavLink
                to={"/register"}
                style={{ textDecoration: "none" }}
                className="signUP"
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>

      
    </nav>
  );
}

export default Navbar;
