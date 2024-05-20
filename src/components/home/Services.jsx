import React from "react";

function Services(props) {
  return (
    <section className="our-services">
      <div className="flex-container-2">
        <div className="flex-item">
          <div className="icon-container">
            <img src={`/icons/services-icon.svg`} alt="services" />
          </div>
          <h3>
            our <br /> services
          </h3>
        </div>
        <div className="flex-item">
          <div className="item-container">
            <h6>weddings</h6>
            <p>
              Engagement parties, wedding ceremony, wedding reception,
              proposals, bridal showers
            </p>
          </div>
          <div className="item-container">
            <h6>cooperate event</h6>
            <p>
              Holiday party, conferences, meetings, seminars, galas, school
              banquets
            </p>
          </div>
          <div className="item-container">
            <h6>public events</h6>
            <p>Concerts, art exhibits, fashion shows etc.</p>
          </div>
          <div className="item-container">
            <h6>remote workspace</h6>
            <p> If you are also looking for a quiet workspace</p>
          </div>
          <div className="item-container">
            <h6>life event & and celebrations</h6>
            <p>
              Anniversaries, Quinceanera, Birthdays , Baby showers Graduation
              parties, And so much more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
