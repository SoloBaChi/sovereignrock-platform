import React from "react";

function Aboutus(props) {
  return (
    <section className="aboutus-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/banner-image.jpg`}
              alt="sovereign rock building"
            />
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flex">
            <div className="icon-container">
              <img src={`/icons/aboutus-avatar.svg`} alt="about us" />
            </div>
            <h3>about us</h3>
          </div>
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
      </div>
    </section>
  );
}

export default Aboutus;
