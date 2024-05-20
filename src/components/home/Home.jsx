import React from "react";
// import Footer from "../footer/Footer";
import HeroSection from "./HeroSection";
import Aboutus from "./Aboutus";
import EventAndBooking from "./EventAndBooking";
import PhotoStudio from "./PhotoStudio";
import Amenities from "../shared/Amenities";
import Services from "./Services";

function Home(props) {
  return (
    <div className="home-page">
      <HeroSection />
      <Aboutus />
      <Services />
      <Amenities />
      <EventAndBooking />
      <PhotoStudio />
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
