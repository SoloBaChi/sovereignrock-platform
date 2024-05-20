import React from "react";

function GeneralBooking(props) {
  return (
    <div className="form-container contact-us event-center">
      <form className="form-wrapper">
        <div className="double one">
          <div className="form-field">
            <label htmlFor="firstname">first name</label>
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="form-field">
            <label htmlFor="lastname">last name</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
        </div>
        <div className="single">
          <div className="form-field">
            <label htmlFor="event">event</label>
            <input type="text" id="event" name="event" />
          </div>
        </div>
        <div className="double two">
          <div className="form-field">
            <label htmlFor="date">date of event</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className="form-field">
            <label htmlFor="noOfGuest">anticipated number of guest</label>
            <input type="number" id="noOfGuest" name="noOfGuest" />
          </div>
        </div>
        <div className="double">
          <div className="form-field">
            <label htmlFor="email">email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-field">
            <label htmlFor="phone">phone</label>
            <input type="text" id="phone" name="phone" />
          </div>
        </div>
        <div className="text-area">
          <div className="form-field">
            <label htmlFor="msg">message</label>
            <textarea name="msg" id="msg" cols="20" rows="3"></textarea>
          </div>
        </div>
        <div className="cta-btn-container">
          <button type="submit">book us today</button>
        </div>
      </form>
    </div>
  );
}

export default GeneralBooking;
