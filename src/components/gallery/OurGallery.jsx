import React, { useState } from "react";
import "./gallery.css";
import { panelData } from "./galleryData";

function OurGallery(props) {
  const [activePanel, setActivePanel] = useState(null);
  const handleClick = (id) => {
    setActivePanel(id);
  };
  const handleMouseLeave = () => {
    setActivePanel(null);
  };
  return (
    <section className="our-gallery" id="gallery">
      <h2>our gallery</h2>
      <div className="flex-card-container">
        {/* <div
          className="flex-item"
          style={{ backgroundImage: `url(/assets/gallery/img_1.svg)` }}
          onClick={handleClick}
        ></div>
        <div
          className="flex-item"
          style={{ backgroundImage: `url(/assets/gallery/img_2.svg)` }}
        ></div>
        <div
          className="flex-item"
          style={{ backgroundImage: `url(/assets/gallery/img_3.svg)` }}
        ></div>
        <div
          className="flex-item"
          style={{ backgroundImage: `url(/assets/gallery/img_4.svg)` }}
        ></div> */}
        {panelData.map((panel) => (
          <div
            key={panel.id}
            className={`flex-item ${activePanel === panel.id ? "active" : ""} `}
            style={{
              background: `url(${panel.imgSrc}) no-repeat center/cover`,
            }}
            onClick={() => {
              handleClick(panel.id);
            }}
            onMouseOver={() => {
              handleClick(panel.id);
            }}
            onMouseLeave={handleMouseLeave}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default OurGallery;
