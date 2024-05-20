import React from "react";

function Amenities(props) {
  return (
    <section className="amenities">
      <h3>amenities</h3>
      <div className="flex-wrapper">
        <div className="grid-container-3">
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/clothing-rack.svg`} alt="clothing rack" />
              </div>
              <figcaption>
                <h5>clothing rack</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/projector.svg`} alt="projector" />
              </div>
              <figcaption>
                <h5>projector</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/kitchen.svg`} alt="kitchen" />
              </div>
              <figcaption>
                <h5>kitchen</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/furniture.svg`} alt="furniture" />
              </div>
              <figcaption>
                <h5>furniture</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/light-box.svg`} alt="light box" />
              </div>
              <figcaption>
                <h5>lighting</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/backdrop.svg`} alt="backdrop" />
              </div>
              <figcaption>
                <h5>backdrop</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/rentals.svg`} alt="rentals" />
              </div>
              <figcaption>
                <h5>rentals</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/change-room.svg`} alt="change room" />
              </div>
              <figcaption>
                <h5>changing rooms</h5>
              </figcaption>
            </figure>
          </div>
          <div className="grid-item">
            <figure>
              <div className="icon-container">
                <img src={`/amenities/photo-studio.svg`} alt="studio" />
              </div>
              <figcaption>
                <h5>photo studio</h5>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
