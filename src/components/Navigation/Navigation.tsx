import React from "react";
import "./Navigation.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

const Navigation = () => {
  return (
    <div className="navWrapper">
      <img src={logo} alt="Sunnyside logo" />
      <div className="navMenu">
        <img src={hamburger} alt="Hamburger menu" />
      </div>
    </div>
  );
};

export default Navigation;
