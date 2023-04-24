import React from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";

import arrowDown from "../../assets/images/icon-arrow-down.svg";

const Header = () => {
  return (
    <div className="headerWrapper">
      <Navigation />
      <h1 className="heading">We are creatives</h1>
      <img className="arrow" src={arrowDown} alt="arrow down" />
    </div>
  );
};

export default Header;
