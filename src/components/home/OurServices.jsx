import React from "react";

function OurServices(props) {
  return (
    <section className="our-services">
      <div className="flex-container-2">
        <div className="flex-item">
          <h2>our services</h2>
          <div className="services-contents">
            <button className="service-btn active">wedding reception</button>
            <button className="service-btn">engagement parties</button>
            <button className="service-btn">proposals</button>
            <button className="service-btn">bridal showers</button>
            <button className="service-btn">holiday party</button>
            <button className="service-btn">meeting</button>
            <button className="service-btn">concerts</button>
            <button className="service-btn">seminars</button>
            <button className="service-btn">school banquets</button>
            <button className="service-btn">anniversaries</button>
            <button className="service-btn">birthdays</button>
            <button className="service-btn">baby showers</button>
            <button className="service-btn">art exhibits</button>
            <button className="service-btn">fashion shows</button>
            <button className="service-btn">graduation parties</button>
            <button className="service-btn">Quinceanera</button>
          </div>
        </div>
        <div className="flex-item">
          <div className="img-container">
            <img
              src={`/assets/images/services-template-img.svg`}
              alt="services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
