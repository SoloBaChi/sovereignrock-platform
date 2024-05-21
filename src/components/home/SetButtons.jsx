"use client";
import React from "react";

function SetButtons({ text1, text2 }) {
  // Event handler for button click
  const handleClick = (e) => {
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
    <div className="set-btns-container" id="set-btns-container">
      <div className="flex-container-2">
        <button className="active" onClick={handleClick}>
          {text1}
        </button>
        <button onClick={handleClick}>{text2}</button>
      </div>
    </div>
  );
}

export default SetButtons;
