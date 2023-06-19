"use client";

import React, { useState } from "react";

interface TimeButtonProps {
  text: string;
  onTimeChange: (time: string) => void;
}

const TimeButtonComponent: React.FC<TimeButtonProps> = ({
  text,
  onTimeChange,
}) => {
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

  const baseClasses =
    "justify-center items-center mt-1  outline-none bg-primary-button text-white rounded-lg select-none text-sm";
  const hoverClass = isButtonClicked ? "" : "hover:bg-hover-button";

  return (
    <div className={`${baseClasses} ${hoverClass}`}>
      {isButtonClicked ? (
        <div className="py-2 px-3">{currentTime}</div>
      ) : (
        <button onClick={handleClick} className="py-2 px-3 w-full">
          {text}
        </button>
      )}
    </div>
  );
};

export default TimeButtonComponent;
