import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../shared/Gallery";
import Amenities from "../shared/Amenities";
import OurStudio from "./OurStudio";
import PhotoStudioForm from "./PhotoStudioForm";

function PhotoStudio(props) {
  return (
    <div className="photo-studio-page">
      <Gallery
        img1={`/photo-studio/img-1.svg`}
        img2={`/photo-studio/img-2.svg`}
        img3={`/photo-studio/img-3.svg`}
        img4={`/photo-studio/img-4.svg`}
        alt={"studio label"}
      />
      <OurStudio />
      <PhotoStudioForm />
      <Amenities />
      <Link to="/">
        <span>&larr;</span> Go back
      </Link>
    </div>
  );
}

export default PhotoStudio;
