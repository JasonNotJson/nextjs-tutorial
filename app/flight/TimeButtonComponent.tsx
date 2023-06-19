"use client";

import React, { useState } from "react";

const TimeButtonComponent = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const handleClick = () => {
    const nowInJapan = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Tokyo",
    });
    const japanDate = new Date(nowInJapan);
    const hours = String(japanDate.getHours()).padStart(2, "0");
    const minutes = String(japanDate.getMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    setCurrentTime(formattedTime);
    setIsButtonClicked(true);
  };

  return (
    <div>
      {isButtonClicked ? (
        <div>{currentTime} (JST)</div>
      ) : (
        <button onClick={handleClick}>Show Current Time in JST</button>
      )}
    </div>
  );
};

export default TimeButtonComponent;
