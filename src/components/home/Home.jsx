import React from "react";
import Footer from "../footer/Footer";
import HeroSection from "./HeroSection";
import Aboutus from "./Aboutus";

function Home(props) {
  return (
    <div className="home-page">
      <HeroSection />
      <Aboutus />
      <Footer />
    </div>
  );
}

export default Home;
