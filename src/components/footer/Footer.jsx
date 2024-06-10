import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
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
                        <Link to="#">services</Link>
                      </li>
                      <li>
                        <Link to="#">amenities</Link>
                      </li>
                      <li>
                        <Link to="#">gallery</Link>
                      </li>
                      <li>
                        <Link to="#">photo studio</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item">
                    <Link to="#">company</Link>
                    <ul className="nested-list-menu">
                      <li>
                        <Link>about us</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="list-item">
                    <Link to="#">support</Link>
                    <ul className="nested-list-menu">
                      <li>
                        <Link>contact us</Link>
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
              <Link to="#" className="icon-container">
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
