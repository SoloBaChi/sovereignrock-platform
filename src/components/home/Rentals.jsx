import React from "react";
import { Link } from "react-router-dom";

function Rentals(props) {
  return (
    <section className="rentals" id="rentals">
      <h3>rentals</h3>
      <p>
        We also rent out tables, chairs, linens, plates, cups, silverware,
        charger plates and much more...
      </p>
      <Link
        style={{ color: "var(--purple)", textDecoration: "underline" }}
        to="tel:(682) 403 7456"
      >
        Kindly contact us for more details
      </Link>
    </section>
  );
}

export default Rentals;
