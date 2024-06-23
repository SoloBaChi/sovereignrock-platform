import React from "react";
import Navbar from "./Navbar";

function Header({ handleItemClick, banner }) {
  return (
    <header className="header-container">
      <Navbar handleItemClick={handleItemClick} />
      {/* <Banner banner={banner} /> */}
    </header>
  );
}

export default Header;
