import React from "react";
import Contactus from "../shared/Contactus";
import InstagramIcon from "../icons/InstagramIcon";
import FbIcon from "../icons/FbIcon";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Footer(props) {
  // const navigate = useNavigate();
  return (
    <footer className="footer-container">
      <section className="footer-section">
        <div className="flex-container-4">
          <div className="flex-item">
            <div className="social-media-links">
              <div className="flex-container">
                <div className="flex-item">
                  <Link
                    to="https://www.instagram.com/sovereignrock_eventcenter?igsh=cDFjdmNlY3V2ZmRi"
                    target="_blank"
                    className="icon-container"
                  >
                    <InstagramIcon />
                  </Link>
                </div>
                <div className="flex-item">
                  <div className="icon-container">
                    <FbIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-item">
            <div className="contactus-container" id="tour">
              <h4>contact us / schedule a tour</h4>
              <Contactus />
            </div>
          </div>
          <div className="flex-item">
            <div className="flex-item-section">
              <h5>reach us</h5>
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
            <div className="flex-item-section">
              <h5>location</h5>
              <p>
                5000 Western Center Blvd Suite 340 <br />
                Haltom City, Texas. 76137
              </p>
            </div>
          </div>
          {/* <div className="flex-item">
            <h4>schedule a tour</h4>
            <Contactus />
          </div> */}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
