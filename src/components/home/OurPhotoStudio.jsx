import React from "react";
import { Link } from "react-router-dom";

function OurPhotoStudio(props) {
  return (
    <section className="photo-studio" id="photo-studio">
      <div className="flex-container-2">
        <div
          className="flex-item"
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <h2>our photo studio</h2>
          <p>
            Our photo studio is well equipped to transform your imaginations and
            dreams into everlasting memories.
          </p>
          <p>
            Our photo studio is adaptable for a variety of purposes including
            professional photos, casual photos, video shoots, advertisements,
            streaming content, online forums, chat rooms and any other form of
            media content.
          </p>
          <div className="cta-btn-container">
            <Link to="/photo-studio">
              <button className="btn">
                <span>Get Started</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPhotoStudio;
