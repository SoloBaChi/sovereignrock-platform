import React from "react";

function GeneralBanner({ title }) {
  return (
    <div className="general-banner">
      <div className="banner-container">
        <div className="banner-wrapper">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default GeneralBanner;
