import React from "react";
import GeneralBooking from "./GeneralBooking";

function EventAndBooking(props) {
  return (
    <section className="event-and-booking">
      <div className="flex-container-2">
        <div className="flex-item">
          <h3>event center</h3>
          <p>
            Discover the epitome of elegance and versatility at our premier
            event center in Dallas Fort Worth area! Whether you're planning a
            corporate gala, wedding reception, or special celebration, our
            state-of-the-art facilities and dedicated team ensure your event is
            nothing short of extraordinary. Book with us and let your
            imagination unfold in the heart of Dallas Fort Worth area vibrant
            atmosphere!
          </p>
        </div>
        <div className="flex-item">
          <GeneralBooking />
        </div>
      </div>
    </section>
  );
}

export default EventAndBooking;
