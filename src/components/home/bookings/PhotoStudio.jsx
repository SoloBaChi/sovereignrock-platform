import React from "react";

function PhotoStudio(props) {
  return (
    <div className="form-container contact-us photo-studio">
      <form className="form-wrapper">
        <div className="double">
          <div className="form-field">
            <label htmlFor="firstname">first name</label>
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="form-field">
            <label htmlFor="lastname">first name</label>
            <input type="text" id="lastname" name="lastname" />
          </div>
        </div>
        <div className="single">
          <div className="form-field">
            <label htmlFor="cellphone">cell phone</label>
            <input type="number" id="cellphone" name="cellphone" />
          </div>
        </div>
        <div className="text-area">
          <div className="form-field">
            <label htmlFor="msg"></label>
            <textarea
              name="msg"
              id="msg"
              cols="24"
              rows="4"
              placeholder="Type Your Question/Message Here"
            ></textarea>
          </div>
        </div>
        <div className="cta-btn-container">
          <button className="cta-btn" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PhotoStudio;
