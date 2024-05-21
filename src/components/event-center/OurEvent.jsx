import React from "react";
import DateOfEventIcon from "../icons/DateOfEventIcon";
import { Link } from "react-router-dom";

function OurEvent({ handleItemClick }) {
  return (
    <section className="our-event">
      <div className="img-container">
        <DateOfEventIcon />
      </div>
      <h3>our event center</h3>

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
              book event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurEvent;
