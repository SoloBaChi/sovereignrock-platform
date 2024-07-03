import React, { useState } from "react";

function OurServices({ services }) {
  const [selectedService, setSelectedService] = useState("wedding reception");
  const handleServiceClick = (service) => {
    setSelectedService(service.title);
  };

  const serviceObj = services.find(
    (service) => service.title === selectedService,
  );
  return (
    <section className="our-services" id="services">
      <div className="flex-container-2">
        <div
          className="flex-item"
          data-aos="fade-up-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2>our services</h2>
          <div className="services-contents">
            {services.map((serviceItem) => (
              <button
                className={`${selectedService === serviceItem.title ? "active" : ""}`}
                key={serviceItem.id}
                onClick={() => {
                  handleServiceClick(serviceItem);
                }}
              >
                {serviceItem.title}
              </button>
            ))}
          </div>
        </div>
        <div
          className="flex-item"
          data-aos="fade-up-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="img-container">
            <img src={serviceObj.imgSrc} alt="services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
