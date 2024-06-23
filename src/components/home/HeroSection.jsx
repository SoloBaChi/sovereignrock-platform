import React from "react";
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";

function HeroSection({ handleItemClick }) {
  const handleHover = (e) => {
    const target = e.target;
    if (!target.classList.contains("active")) {
      // Remove active class from all items
      document.querySelectorAll("#set-btns-container button").forEach((btn) => {
        btn.classList.remove("active");
      });
      // Add active class to the clicked button
      target.classList.add("active");
      // Update placeholder text based on dataset
      // setPlaceholder(target.dataset.placeholder);
    }
  };
  return (
    // <section className="hero-section">
    //   <h1>
    //     We Will Make your Dream About your Special Event
    //     <span> Become a Reality & an Everlasting Memory.</span>
    //   </h1>
    //   <div className="flex-container-2">
    //     <div className="flex-item">
    //       <button>Sovereign Rock</button>
    //       <h2>
    //         Event Center <span style={{ fontFamily: "Poppins" }}> & </span>
    //         Photo Studio:
    //       </h2>
    //       <h3>where dreams come true !</h3>
    //       <div className="set-btns-container" id="set-btns-container">
    //         <div className="flex-container">
    //           <Link to="/events">
    //             <button onMouseEnter={handleHover} className="btn-item active">
    //               <div className="flex-wrapper">
    //                 <div className="icon-container">
    //                   <DateOfEventIcon />
    //                 </div>
    //                 <span>event center</span>
    //               </div>
    //             </button>
    //           </Link>
    //           <Link to="/studio">
    //             <button onMouseEnter={handleHover} className="btn-item">
    //               <div className="flex-wrapper">
    //                 <div className="icon-container">
    //                   <StudioIcon />
    //                   {/* <img src={`/assets/studio-icon.svg`} alt="event icon" /> */}
    //                 </div>
    //                 <span>photo studio</span>
    //               </div>
    //             </button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex-item">
    //       <div className="grid-container">
    //         <div className="grid-item">
    //           <img src={`/assets/hero-grid-img-1.svg`} alt="birthday dog" />
    //         </div>
    //         <div className="grid-item">
    //           <img src={`/assets/hero-grid-img-2.svg`} alt="wedding couple" />
    //         </div>
    //         <div className="grid-item">
    //           <img src={`/assets/hero-grid-img-3.svg`} alt="bride" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="hero-section">
      <div className="flex-container-2">
        <div className="flex-item">
          <h1>Sovereign Rock Event Center and Photo Studio.</h1>
          <h3>where dreams come true</h3>
        </div>
        <div className="flex-item">
          <h5>
            We will make your dream about your special event become a reality
            and an everlasting memory.
          </h5>
        </div>
      </div>
      <div className="cta-btn-container">
        <div className="inner-flex">
          <div className="flex-item">
            <Link to="/events">
              <button
                // onClick={() => {
                //   handleItemClick("book-event");
                // }}
                className="active btn"
              >
                <span>Book an event</span>
              </button>
            </Link>
          </div>
          <div className="flex-item">
            <Link to="/photo-studio">
              <button className="btn">
                <span>Photo studio</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Aboutus />
    </section>
  );
}

export default HeroSection;
