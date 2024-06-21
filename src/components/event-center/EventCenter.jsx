import React from "react";
import { Link } from "react-router-dom";
import Gallery from "../shared/Gallery";
import Amenities from "../amenities/Amenities";
import EventCenterForm from "./EventCenterForm";
import OurEvent from "./OurEvent";

function EventCenter({ handleItemClick }) {
  return (
    <div className="event-center-page">
      {/* The Rotating Circle Code goes here */}
      <Gallery
        img1={`/events/img-1.svg`}
        img2={`/events/img-2.svg`}
        img3={`/events/img-3.svg`}
        img4={`/events/img-4.svg`}
        alt={"event label"}
      />
      <OurEvent handleItemClick={handleItemClick} />
      <EventCenterForm />
      <Amenities />

      <Link to="/">
        <span>&larr;</span> Go back
      </Link>
    </div>
  );
}

export default EventCenter;
