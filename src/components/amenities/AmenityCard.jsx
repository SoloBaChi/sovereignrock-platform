import React from "react";
import "./amenitycard.css";
function AmenityCard({ img, title }) {
  return (
    <figure className="amenity-card">
      <div className="img-container">
        <img src={img} alt="wifi" />
      </div>
      <figcaption>
        <p className="title">{title}</p>
      </figcaption>
    </figure>
  );
}

export default AmenityCard;
