import React from "react";
import Navbar from "./Navbar";

function Header({ banner }) {
  return (
    <header className="header-container">
      <Navbar />
      {/* <Banner banner={banner} /> */}
    </header>
  );
}

export default Header;
