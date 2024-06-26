import React from "react";
import Slider from "react-slick";
import GeneralBanner from "../shared/GeneralBanner";
import PhotoStudioForm from "./PhotoStudioForm";
import "./photostudiostyles.css";

function PhotoStudio({ banner }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="studio-page">
      <div className="studio-banner">
        <GeneralBanner title="welcome to photo studio" />
      </div>
      <section className="studio-section page-section">
        <div className="flex-container-2">
          <div
            className="flex-item"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <h2>
              book a photo <br />
              studio session
            </h2>
            <p>
              Booking a session is easy! Simply fill out the form below with
              your personal information and session details. Let us know the
              type of session you’re interested in, your preferred date and
              time, and any specific equipment or additional requests you may
              have. Our team will review your application and get in touch with
              you to confirm your booking and discuss any further details.
            </p>
          </div>
          <div
            className="flex-item"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div className="studio-form-container">
              <PhotoStudioForm />
            </div>
          </div>
        </div>
      </section>
      <section className="carousel-container page-section">
        <h2>created in</h2>
        {
          <Slider {...settings}>
            {banner.map((item) => (
              <div key={item.id}>
                <div
                  className="img-container"
                  style={{ padding: "0.5rem", borderRadius: "16px" }}
                >
                  <img src={item.imgSrc} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        }
        <h2>our studio</h2>
      </section>
    </div>
  );
}

export default PhotoStudio;
