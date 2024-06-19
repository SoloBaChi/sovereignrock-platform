import React from "react";
// import Footer from "../footer/Footer";
import HeroSection from "./HeroSection";
import EventAndBooking from "./EventAndBooking";
// import PhotoStudio from "./PhotoStudio";
import Amenities from "../shared/Amenities";
// import Services from "./Services";
import OurServices from "./OurServices";
import OurPhotoStudio from "./OurPhotoStudio";
import OurGallery from "./OurGallery";
import ScheduleTour from "./ScheduleTour";

function Home({ handleItemClick }) {
  return (
    <div className="home-page">
      <HeroSection handleItemClick={handleItemClick} />
      {/* <Services /> */}
      <Amenities />
      <EventAndBooking />
      {/* <PhotoStudio /> */}
      <OurGallery />
      <OurPhotoStudio />
      <ScheduleTour />

      <OurServices />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
