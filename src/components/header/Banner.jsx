import React from "react";
import Slider from "react-slick";

function Banner({ banner }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 500,
    pauseOnHover: false,
    cssEase: "linear",
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
    <div className="banner-section">
      <Slider {...settings}>
        {banner.map((slideCard) => (
          <div key={slideCard.id}>
            <div className="img-container">
              <img src={slideCard.imgSrc} alt="banner title" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
