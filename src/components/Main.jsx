import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LaunchCountDown from './LaunchCountDown';
import Home from "./home/Home";
import Header from "./header/Header";
import EventCenter from "./event-center/EventCenter";
import PhotoStudio from "./photo-studio/PhotoStudio";
import Footer from "./footer/Footer";
import SucessfulSubmit from "./shared/SucessfulSubmit";
import { Data } from "./shared/Data";
import ContactUs from "./contactus/ContactUs";
import ScrollToTop from "./home/ScrollToTop";

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
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header banner={Data[0].banner} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                amenities={Data[0].amenities}
                banner={Data[0].banner}
                services={Data[0].services}
              />
            }
          />
          <Route path="/events" element={<EventCenter />} />
          <Route
            path="/photo-studio"
            element={<PhotoStudio banner={Data[0].banner} />}
          />
          <Route path="/contactus" element={<ContactUs />} />

          <Route path="/successful-submit" element={<SucessfulSubmit />} />
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
