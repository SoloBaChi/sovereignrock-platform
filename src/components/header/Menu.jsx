import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

function Menu(props) {
  const handleItemClick = (sectionId) => {
    // scroll to the corresponding section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <div className="close-icon">
          <span>
            <RiCloseLine />
          </span>
        </div>
        <li>
          <Link onClick={() => handleItemClick("aboutus")} to="/">
            about us
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("services")} to="/">
            our services
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("amenities")} to="/">
            amenities
          </Link>
        </li>
        <li>
          <Link to="/">gallery</Link>
        </li>
        <li>
          <Link to="/">shedule a tour</Link>
        </li>
        <li>
          <Link to="/">contact us for questions / inquires</Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("bookings")} to="/">
            for booking
          </Link>
        </li>
        <li>
          <Link to="/">photo studio</Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("rentals")} to="/">
            rentals
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
