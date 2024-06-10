import React from "react";
// import Footer from "../footer/Footer";
import HeroSection from "./HeroSection";
import Aboutus from "./Aboutus";
import EventAndBooking from "./EventAndBooking";
import PhotoStudio from "./PhotoStudio";
import Amenities from "../shared/Amenities";
// import Services from "./Services";
import Rentals from "./Rentals";
import OurServices from "./OurServices";

function Home(props) {
  return (
    <div className="home-page">
      <HeroSection />
      <Aboutus />
      {/* <Services /> */}
      <Amenities />
      <EventAndBooking />
      <PhotoStudio />
      <Rentals />
      <OurServices />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
