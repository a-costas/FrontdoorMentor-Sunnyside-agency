import React from "react";
import "./Gallery.scss";

import milkBottleImg from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeImg from "../../assets/images/mobile/image-gallery-orange.jpg";
import coneImg from "../../assets/images/mobile/image-gallery-cone.jpg";
import sugarImg from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <img src={milkBottleImg} alt="Milk bottles" />
      <img src={orangeImg} alt="Orange fruit" />
      <img src={coneImg} alt="Empty icecream cone" />
      <img src={sugarImg} alt="Stacked sugar cubes" />
    </section>
  );
};

export default Gallery;
