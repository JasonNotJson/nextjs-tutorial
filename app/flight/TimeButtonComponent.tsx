"use client";

import React, { useState } from "react";

interface TimeButtonProps {
  text: string;
}

const TimeButtonComponent: React.FC<TimeButtonProps> = ({ text }) => {
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
        <div>{currentTime}</div>
      ) : (
        <button onClick={handleClick}>{text}</button>
      )}
    </div>
  );
};

export default TimeButtonComponent;
