import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <div className="flex-container-2">
          <div className="flex-item inner-flex">
            <div className="inner-flex-item">
              <div className="logo-container">
                <img src={`/assets/images/logo.svg`} alt="logo" />
              </div>
            </div>
            <div className="inner-flex-item">
              <div className="nav-container">
                <ul className="footer-list-menu">
                  <li className="list-item">
                    <Link>Explore</Link>
                    <ul className="nested-list-menu">
                      <li className="list-item">
                        <Link to="/#services">services</Link>
                      </li>
                      <li>
                        <Link to="/#amenities">amenities</Link>
                      </li>
                      <li>
                        <Link to="/#gallery">gallery</Link>
                      </li>
                      <li>
                        <Link to="/photo-studio">photo studio</Link>
                      </li>
                      <li>
                        <Link to="/">
                          <span>&larr;</span> Go back
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item">
                    <Link to="/events">company</Link>
                    <ul className="nested-list-menu">
                      <li>
                        <Link to="/#aboutus">about us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item">
                    <Link to="#">support</Link>
                    <ul className="nested-list-menu">
                      <li>
                        <Link to="/contactus">contact us</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <Link
              className="mail"
              to="maito:sovereignrockeventcenter@gmail.com"
              target="_blank"
            >
              sovereignrockeventcenter@gmail.com
            </Link>
            <Link className="tel" to="tel:(682) 403 7456" target="_blank">
              (682) 403 7456
            </Link>
          </div>
        </div>
        <address>
          5000 Western Center Blvd, Suite 340, Haltom City, Texas 76137
        </address>
        <div className="hr-line">
          <hr />
        </div>
        <div className="footer-bottom flex-2">
          <div className="inner-flex">
            <div className="flex-item">
              <Link
                className="icon-container"
                to="https://www.instagram.com/sovereignrock_eventcenter?igsh=cDFjdmNlY3V2ZmRi"
                target="_blank"
              >
                <img src={`/assets/icons/instagram.svg`} alt="instagram" />
              </Link>
            </div>
            <div className="flex-item">
              <Link to="https://www.facebook.com/profile.php?id=61562591473862" target="_blank" className="icon-container">
                <img src={`/assets/icons/facebook.svg`} alt="facebook" />
              </Link>
            </div>
          </div>
          <p className="copy-right">
            &copy; Copyright {year} SovereignRock. All Rights Revserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
