import React from "react";
import "./ClientTestimonials.scss";
import Testimonial from "../Testimonial/Testimonial";

import emilyImg from "../../assets/images/image-emily.jpg";
import thomasImg from "../../assets/images/image-thomas.jpg";
import jennieImg from "../../assets/images/image-jennie.jpg";

const ClientTestimonials = () => {
  return (
    <section className="testimonials">
      <h1>Client Testimonials</h1>
      <Testimonial
        image={emilyImg}
        name="Emily R."
        position="Marketing director"
      >
        We put our trust in Sunnyside and they delivered, making sure our needs
        were met and deadlines were always hit.
      </Testimonial>
      <Testimonial
        image={thomasImg}
        name="Thomas S."
        position="Chief Operating Officer"
      >
        Sunnyside's enthusiasm coupled with their keen interest in our brand's
        success made it a satisfying and enjoyable experience.
      </Testimonial>
      <Testimonial image={jennieImg} name="Jennie F." position="Business Owner">
        Incredible end result! Our sales increased over 400% when we worked with
        Sunnyside. Highly recommended!
      </Testimonial>
    </section>
  );
};

export default ClientTestimonials;
