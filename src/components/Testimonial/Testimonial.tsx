import React, { ReactNode } from "react";
import { FC } from "react";

import "./Testimonial.scss";

interface TestimonialProps {
  image: string;
  name: string;
  position: string;
  children: ReactNode;
}

const Testimonial: FC<TestimonialProps> = ({
  image,
  name,
  position,
  children,
}) => {
  return (
    <div className="testimonial">
      <img src={image} alt={`${name} Profile`} />
      <p className="blurb">{children}</p>
      <div className="identifier">
        <h1>{name}</h1>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Testimonial;
