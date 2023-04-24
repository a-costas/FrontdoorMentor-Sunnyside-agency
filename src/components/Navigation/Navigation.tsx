import React from "react";
import { FC } from "react";
import "./Navigation.scss";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

interface NavProps {
  isPopMenuOpen: Boolean;
  setIsPopMenuOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}

const Navigation: FC<NavProps> = ({ isPopMenuOpen, setIsPopMenuOpen }) => {
  return (
    <div className="navWrapper">
      <img src={logo} alt="Sunnyside logo" />
      <div className="navMenu">
        <button onClick={() => setIsPopMenuOpen(!isPopMenuOpen)}>
          <img
            className={`${isPopMenuOpen && "focused"}`}
            src={hamburger}
            alt="Hamburger menu"
          />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
