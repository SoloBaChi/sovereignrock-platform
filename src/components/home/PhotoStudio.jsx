import React from "react";
import StudioIconLg from "../icons/StudioIconLg";
import { Link } from "react-router-dom";

function PhotoStudio(props) {
  return (
    <section className="photo-studio">
      <div className="flex-container-2">
        <div className="flex-item">
          <div className="img-container">
            <img src={`/assets/photo-studio-img.svg`} alt="studio view" />
          </div>
        </div>
        <div className="flex-item">
          <div className="inner-flex">
            <div className="icon-container">
              <StudioIconLg />
            </div>
            <h3>Photo Studio</h3>
          </div>
          <p>
            Our photo studio is well equipped to transform your imaginations and
            dreams into everlasting memories.
          </p>
          <br />
          <p>
            Our photo studio is adaptable for a variety of purposes including
            professional photos, casual photos, video shoots, advertisements,
            streaming content, online forums, chat rooms and any other form of
            media content.
          </p>
          <div className="cta-btn-container">
            <div className="flex-container-2">
              <div className="flex-item">
                <Link className="cta-btn  active" to="/events">
                  gallery
                </Link>
              </div>
              <div className="flex-item">
                <Link className="cta-btn" to="/studio">
                  photo studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoStudio;
