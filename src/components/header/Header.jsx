import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

function Header({ handleItemClick }) {
  return (
    <header className="header-container">
      <Navbar handleItemClick={handleItemClick} />
      <Banner />
    </header>
  );
}

export default Header;
