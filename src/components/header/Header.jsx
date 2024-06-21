import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

function Header({ handleItemClick, banner }) {

  return (
    <header className="header-container">
      <Navbar handleItemClick={handleItemClick} />
      <Banner banner={banner} />
    </header>
  );
}

export default Header;
