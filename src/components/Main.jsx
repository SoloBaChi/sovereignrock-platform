import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LaunchCountDown from './LaunchCountDown';
import Home from "./home/Home";
import Header from "./header/Header";

function Main(props) {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <LaunchCountDown/> */}
        </Routes>
      </Router>
    </>
  );
}

export default Main;
