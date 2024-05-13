import React, { useState, useEffect } from 'react';
// import "../styles/Launch.css"

const LaunchCountDown = () => {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    let countDownDate = new Date("may 25, 2024 00:00:00").getTime();

    const interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    //   update the countdown object
      setCountdown(prev => ({...prev,days, hours, minutes, seconds }));

      if (distance < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
<img src={`/launch-assets/images/sovereignrock-simple.png`} className="logo" alt="sovereign rock logo"/>
<h1 className="company-name">Sovereign Rock Event Centers</h1>

<div className="content">
<p>website is under construction</p>
<h1>We are <span>launching</span> soon</h1>
<div className="launch-time">
  <div>
      <p id="days">{countdown.days}</p>
      <span>Days</span>
  </div>
  <div>
      <p id="hours">{countdown.hours}</p>
      <span>Hours</span>
  </div>
  <div>
      <p id="minutes">{countdown.minutes}</p>
      <span>Minutes</span>
  </div>
  <div>
      <p id="seconds">{countdown.seconds}</p>
      <span>Seconds</span>
  </div>
</div>
<button>learn more
  <img src={`/launch-assets/images/triangle.png`} alt='triangle'/>
</button>
</div>

<img src={`/launch-assets/images/rocket.png`} className="rocket" alt='rocket'/>
</div>
 );
};

export default LaunchCountDown;
