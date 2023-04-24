import React from "react";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services">
      <div className="service design">
        <h1>Graphic Design</h1>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients' attention.
        </p>
      </div>
      <div className="service photography">
        <h1>Photography</h1>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
};

export default Services;
