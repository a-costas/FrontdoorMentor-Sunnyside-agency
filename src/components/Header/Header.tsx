import React, { useState } from "react";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";
import useMountTransition from "../../hooks/useMountTransition";

import arrowDown from "../../assets/images/icon-arrow-down.svg";
import Sidenav from "../Sidenav/Sidenav";

const Header = () => {
  const [isPopMenuOpen, setIsPopMenuOpen] = useState<Boolean>(false);
  const hasTransitionedIn = useMountTransition(isPopMenuOpen, 1000);

  return (
    <div className="headerWrapper">
      <Navigation
        isPopMenuOpen={isPopMenuOpen}
        setIsPopMenuOpen={setIsPopMenuOpen}
      />
      {(hasTransitionedIn || isPopMenuOpen) && (
        <Sidenav
          isPopMenuOpen={isPopMenuOpen}
          isTransitioned={hasTransitionedIn}
        />
      )}
      <h1 className="heading">We are creatives</h1>
      <img className="arrow" src={arrowDown} alt="arrow down" />
    </div>
  );
};

export default Header;
