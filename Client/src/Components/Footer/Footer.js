import React from "react";
import "./Footer.style.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa";
export default function Footer() {
    return (
      <>
      <nav>
            <div className="footer">
            <div>
              <h3>Help</h3>
            </div>
            <div>
              <h3>Privacy Policy</h3>
            </div>
            <div>
              <h3>Contact</h3>
            </div>
            <div>
              <FaFacebookSquare className="icons"/>
            </div>
            <div>
              <FaInstagramSquare className="icons"/>
            </div>
            <div>
              <FaTwitterSquare className="icons"/>
            </div>
          </div>
      </nav>
      <nav className="right">
        <div className="footerR">
      <h6>© 2022 All rights reserved</h6>
      <h6> IM ITC Yerevan</h6>
      </div>
      </nav>
      </>
    );
  }
  