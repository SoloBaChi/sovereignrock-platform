import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="menu-container">
      <ul className="list-menu">
        <div className="close-icon">
          <span>close</span>
        </div>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">amenitie</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/">amenitie</Link>
        </li>
        <li>
          <Link to="/">about</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
