import React from "react";
import { Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

function Menu({ handleItemClick }) {
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <div className="close-icon">
          <span>
            <RiCloseLine />
          </span>
        </div>
        <li>
          <Link onClick={() => handleItemClick("aboutus")} to="#">
            about us
          </Link>
        </li>
        <li>
          <Link to="/events">event center</Link>
        </li>
        <li>
          <Link to="/studio">photo studio</Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("services")} to="#">
            our services
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("amenities")} to="#">
            amenities
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("gallery")} to="#">
            gallery
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("tour")} to="#">
            shedule a tour
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("contactus")} to="#">
            contact us for questions / inquires
          </Link>
        </li>
        <li>
          <Link onClick={() => handleItemClick("bookings")} to="#">
            for booking
          </Link>
        </li>

        <li>
          <Link onClick={() => handleItemClick("rentals")} to="#">
            rentals
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
