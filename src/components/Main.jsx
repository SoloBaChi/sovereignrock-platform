import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LaunchCountDown from './LaunchCountDown';
import Home from "./home/Home";
import Header from "./header/Header";
import EventCenter from "./event-center/EventCenter";
import PhotoStudio from "./photo-studio/PhotoStudio";
import Footer from "./footer/Footer";
import SucessfulSubmit from "./shared/SucessfulSubmit";

const NotFound = () => {
  return (
    <section>
      <h4>page not found!</h4>
      <Link to="/">
        <span>&larr;</span> Go back
      </Link>
    </section>
  );
};

function Main(props) {
  const handleItemClick = (sectionId) => {
    // scroll to the corresponding section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Router>
        <Header handleItemClick={handleItemClick} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="events"
            element={<EventCenter handleItemClick={handleItemClick} />}
          />
          <Route
            path="studio"
            element={<PhotoStudio handleItemClick={handleItemClick} />}
          />
          <Route path="successful-submit" element={<SucessfulSubmit />} />
          {/* <LaunchCountDown/> */}

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Main;
