import React from "react";
import HeroSection from "./HeroSection";
import Amenities from "../amenities/Amenities";
import OurServices from "./OurServices";
import OurPhotoStudio from "./OurPhotoStudio";
import OurGallery from "../gallery/OurGallery";
import ScheduleTour from "./ScheduleTour";
import Banner from "../header/Banner";

function Home({ handleItemClick, amenities, banner, services }) {
  return (
    <div className="home-page">
      <Banner banner={banner} />
      <HeroSection handleItemClick={handleItemClick} />
      <Amenities amenities={amenities} />
      <OurServices services={services} />
      <OurGallery />
      <OurPhotoStudio />
      <ScheduleTour />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
