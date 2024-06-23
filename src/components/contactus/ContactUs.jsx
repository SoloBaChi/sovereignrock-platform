import React from "react";
import GeneralBanner from "../shared/GeneralBanner";
import { Link } from "react-router-dom";
import "./contactstyles.css";
import ContactUsForm from "./ContactUsForm";

function ContactUs(props) {
  return (
    <div className="contactus-page">
      <div className="contactus-banner">
        <GeneralBanner title="contact us" />
      </div>
      <section className="contactus-section page-section">
        <div className="flex-container-2">
          <div className="flex-item">
            <h2>submit your request</h2>
            <div className="contact-form">
              <ContactUsForm />
            </div>
          </div>
          <div className="flex-item">
            <p>
              Have questions? Reach out by filling out the inquiry form or
              sending us an email at{" "}
              <Link
                to="mailto:sovereignrockeventcenter@gmail.com"
                target="_blank"
              >
                <span>sovereignrockeventcenter@gmail.com</span>
              </Link>{" "}
              or our mobile phone
              <Link className="tel" to="tel:(682) 403 7456" target="_blank">
                (682) 403 7456
              </Link>
            </p>
            <p>Reach out to us on social media</p>
            <div className="inner-flex">
              <div className="flex-item">
                <Link
                  className="icon-container"
                  to="https://www.instagram.com/sovereignrock_eventcenter?igsh=cDFjdmNlY3V2ZmRi"
                  target="_blank"
                >
                  <img
                    src={`/assets/contactus/instagram-icon.svg`}
                    alt="instagram"
                  />
                </Link>
              </div>
              <div className="flex-item">
                <Link to="#" className="icon-container">
                  <img
                    src={`/assets/contactus/facebook-icon.svg`}
                    alt="facebook"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
