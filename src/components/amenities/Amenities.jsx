import React from "react";
import Slider from "react-slick";
import AmenityCard from "./AmenityCard";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <span className="icon">
          <LeftArrow />
        </span>
      </button>
    </div>
  );
};
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <span className="icon">
          <RightArrow />
        </span>
      </button>
    </div>
  );
};

function Amenities({ amenities }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section className="amenities" id="amenities">
      <h2>our amenities</h2>
      <Slider {...settings}>
        {amenities.map((slideCard) => (
          <div className="card-container" key={slideCard.id}>
            <AmenityCard img={slideCard.imgSrc} title={slideCard.title} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Amenities;
