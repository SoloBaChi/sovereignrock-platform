import React from "react";
import Navbar from "./Navbar";

function Header({ handleItemClick }) {
  return (
    <div className="header-container">
      <Navbar handleItemClick={handleItemClick} />
    </div>
  );
}

export default Header;
