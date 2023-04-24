import React, { FC } from "react";
import "./Sidenav.scss";

interface SidenavProps {
  isPopMenuOpen: Boolean;
  isTransitioned: Boolean;
}

const Sidenav: FC<SidenavProps> = ({ isPopMenuOpen, isTransitioned }) => {
  return (
    <ul
      className={`sidenav ${isTransitioned && "in"} ${
        isPopMenuOpen && "visible"
      }`}
    >
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
      <li className="contactBtn">Contact</li>
    </ul>
  );
};

export default Sidenav;
