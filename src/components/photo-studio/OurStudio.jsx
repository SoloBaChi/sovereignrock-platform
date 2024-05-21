import React from "react";
import StudioIcon from "../icons/StudioIcon";
import { Link } from "react-router-dom";

function OurStudio({ handleItemClick }) {
  return (
    <section className="our-event our-studio">
      <div className="img-container">
        <StudioIcon />
      </div>
      <h3>our photo studio</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur. Egestas lorem risus sed
        dictumst. Nisl mauris mollis pharetra quam arcu. Praesent nisl morbi sit
        morbi erat dui aliquet. Orci in suspendisse vehicula diam mauris
        feugiat. Enim sit orci egestas at. Rhoncus vestibulum feugiat
        consectetur a egestas felis. Ultricies dui auctor cursus purus at
        sapien. Orci suspendisse tortor felis egestas vitae id. Fames nunc vitae
        tristique morbi nam ultrices sed.
      </p>
      <div className="cta-btn-container">
        <div className="flex-container-2">
          <div className="flex-item">
            <Link
              className="cta-btn  active"
              onClick={() => handleItemClick("tour")}
              to="#"
            >
              shedule a tour
            </Link>
          </div>
          <div className="flex-item">
            <Link
              className="cta-btn"
              onClick={() => handleItemClick("booking-form")}
              to="#"
            >
              book photo studio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStudio;
