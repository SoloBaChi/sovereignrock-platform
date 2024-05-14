import React from "react";
import { Link } from "react-router-dom";
import DateOfEventIcon from "../icons/DateOfEventIcon";
import StudioIcon from "../icons/StudioIcon";

function HeroSection(props) {
  const handleHover = (e) => {
    const target = e.target;
    if (!target.classList.contains("active")) {
      // Remove active class from all items
      document.querySelectorAll("#set-btns-container button").forEach((btn) => {
        btn.classList.remove("active");
      });
      // Add active class to the clicked button
      target.classList.add("active");
      // Update placeholder text based on dataset
      // setPlaceholder(target.dataset.placeholder);
    }
  };
  return (
    <section className="hero-section">
      <h1>
        We Will Make your Dream About your Special Event Become
        <span> a Reality & an Everlasting Memory.</span>
      </h1>
      <div className="flex-container-2">
        <div className="flex-item">
          <button>Sovereign Rock</button>
          <h2>
            Event Center <span style={{ fontFamily: "Poppins" }}> & </span>
            Photo Studio:
          </h2>
          <h3>where dreams come true</h3>
          <div className="set-btns-container" id="set-btns-container">
            <div className="flex-container">
              <Link to="/events">
                <button
                  onMouseOver={handleHover}
                  onFocus={handleHover}
                  className="btn-item active"
                >
                  <div className="flex-wrapper">
                    <div className="icon-container">
                      <DateOfEventIcon />
                    </div>
                    <span>event center</span>
                  </div>
                </button>
              </Link>
              <Link to="/studio">
                <button
                  onMouseOver={handleHover}
                  onFocus={handleHover}
                  className="btn-item"
                >
                  <div className="flex-wrapper">
                    <div className="icon-container">
                      <StudioIcon />
                    </div>
                    <span>photo studio</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-item"></div>
      </div>
    </section>
  );
}

export default HeroSection;
