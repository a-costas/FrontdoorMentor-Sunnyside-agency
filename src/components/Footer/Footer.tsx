import React from "react";
import "./Footer.scss";

// import { ReactComponent as Logo } from "../../assets/images/logo-editable.svg";
import logo from "../../assets/images/logo-green.svg";
import facebookIcon from "../../assets/images/icon-facebook.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logoContainer">
        <img className="logo" src={logo} alt="Sunnyside" />
      </div>
      <ul className="links">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="icons">
        <img src={facebookIcon} alt="Facebook" />
        <img src={instagramIcon} alt="Instagram" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={pinterestIcon} alt="Pinterest" />
      </div>
    </footer>
  );
};

export default Footer;
