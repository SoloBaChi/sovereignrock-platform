import React from "react";

function PhotoStudioForm(props) {
  return (
    <section className="studio-booking-section" id="booking-form">
      <div className="form-container booking-form photo-studio">
        <h3>
          book <br /> photo studio
        </h3>
        <form className="form-wrapper">
          <div className="double">
            <div className="form-field">
              <label htmlFor="firstname">first name</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Joe"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="lastname">last name</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="cellphone">phone number</label>
              <input
                type="number"
                id="cellphone"
                name="cellphone"
                placeholder="+634 405 987"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
          </div>
          <div className="double">
            <div className="form-field">
              <label htmlFor="start-date">date</label>
              <input type="date" id="start-date" name="start-date" required />
            </div>
            <div className="form-field">
              <label htmlFor="noOfShoots">anticipated number of shootss</label>
              <input type="number" id="noOfShoots" name="noOfShoots" required />
            </div>
          </div>

          <div className="cta-btn-container">
            <button className="cta-btn" type="submit">
              book photo studio
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PhotoStudioForm;
