import React from "react";
import EventCenterForm from "./EventCenterForm";
import GeneralBanner from "../shared/GeneralBanner";

function EventCenter() {
  return (
    <div className="event-page">
      <div className="event-banner">
        <GeneralBanner title="event center" />
      </div>
      <section className="event-section page-section">
        <div className="flex-container-2">
          <div className="flex-item">
            <h2>book an event</h2>
            <p>
              Discover the epitome of elegance and versatility at our premier
              event center in Dallas fort worth area! Whether you're planning a
              corporate gala, wedding reception, or special celebration, our
              state-of-the-art facilities and dedicated team ensure your event
              is nothing short of extraordinary. Book with us and let your
              imagination unfold in the heart of Dallas's vibrant atmosphere!
            </p>
          </div>
          <div className="flex-item">
            <EventCenterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventCenter;
