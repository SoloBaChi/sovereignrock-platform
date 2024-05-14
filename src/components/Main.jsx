import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LaunchCountDown from './LaunchCountDown';
import Home from "./home/Home";
import Header from "./header/Header";

const NotFound = () => {
  return (
    <div>
      <h4>page not found!</h4>
    </div>
  );
};

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <LaunchCountDown/> */}

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;
