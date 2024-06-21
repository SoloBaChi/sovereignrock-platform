import React from "react";
import HeroSection from "./HeroSection";
import Amenities from "../amenities/Amenities";
import OurServices from "./OurServices";
import OurPhotoStudio from "./OurPhotoStudio";
import OurGallery from "./OurGallery";
import ScheduleTour from "./ScheduleTour";

function Home({ handleItemClick, amenities, banner }) {
  return (
    <div className="home-page">
      <HeroSection handleItemClick={handleItemClick} />
      <Amenities amenities={amenities} />
      <OurServices />
      <OurGallery />
      <OurPhotoStudio />
      <ScheduleTour />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
