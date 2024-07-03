import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LaunchCountDown from './LaunchCountDown';
import Home from "./home/Home";
import Header from "./header/Header";
import EventCenter from "./event-center/EventCenter";
import PhotoStudio from "./photo-studio/PhotoStudio";
import Footer from "./footer/Footer";
import SucessfulSubmit from "./shared/SucessfulSubmit";
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

function Main({ data }) {
  console.log(data);
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header banner={data[0].banner} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                amenities={data[0].amenities}
                banner={data[0].banner}
                services={data[0].services}
              />
            }
          />
          <Route path="/events" element={<EventCenter />} />
          <Route
            path="/photo-studio"
            element={<PhotoStudio banner={data[0].banner} />}
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
