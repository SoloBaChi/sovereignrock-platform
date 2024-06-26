import React from "react";

function Aboutus(props) {
  return (
    <section className="aboutus-section" id="aboutus">
      <div
        className="flex-container-2"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="flex-item">
          <h2>about us</h2>
          <p>
            We are located in the DFW area and our mission is to transform your
            events into lifelong memorable occasions. Our vision is to be a
            top-notch event venue & photo studio that sets an exemplary standard
            through the provision of excellent services that will ensure
            satisfaction of all our clients. We have an event hall and a photo
            studio. We can adapt our venue to suit your specific event and cater
            for your unique needs.
          </p>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/aboutus-hero-img.svg`}
              alt="sovereign rock building"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;
