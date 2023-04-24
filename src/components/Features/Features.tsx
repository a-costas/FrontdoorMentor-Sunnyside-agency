import React from "react";
import "./Features.scss";

import transformImage from "../../assets/images/mobile/image-transform.jpg";
import standoutImage from "../../assets/images/mobile/image-stand-out.jpg";

const Features = () => {
  return (
    <section className="featuresWrapper">
      <div className="feature">
        <img src={transformImage} alt="Transform your brand" />
        <div className="featureContent">
          <h1 className="title">Transform your brand</h1>
          <p className="featureText">
            We are a full-service creative agency speacializing in helping
            brands grow fast. Engage your clients through compelling visuals
            that do most of the marketing for you.
          </p>
          <button className="transformBtn">Learn More</button>
        </div>
      </div>
      <div className="feature">
        <img src={standoutImage} alt="Stand out to the right audience" />
        <div className="featureContent">
          <h1 className="title">Stand out to the right audience</h1>
          <p className="featureText">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <button className="standoutBtn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Features;
