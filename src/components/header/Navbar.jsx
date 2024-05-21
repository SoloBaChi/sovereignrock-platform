import React, { useState } from "react";
import MenuBarIcon from "../icons/MenuBarIcon";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Navbar({handleItemClick}) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <div className="navbar-container">
      <div className="flex-container-2">
        <div className="flex-item">
          <Link to="/" className="logo-container">
            <img
              src={`/launch-assets/images/sovereignrock-simple.png`}
              alt="sovereign rock"
            />
            {/* <img src={`/assets/logo-Image.jpg`} alt="sovereign rock logo" /> */}
          </Link>
        </div>
        <div className="flex-item">
          <span className="togglebar" onClick={handleToggleMenu}>
            <MenuBarIcon />
          </span>
        </div>
        <nav
          className={toggleMenu ? "nav-menu active" : " nav-menu"}
          onClick={handleToggleMenu}
        >
          <Menu handleItemClick={handleItemClick} />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
