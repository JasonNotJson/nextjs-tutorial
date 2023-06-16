"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen overflow-hidden">
      <div className="text-center p-4 m-4">
        {/* Title and image container */}
        <div className="flex justify-center items-center space-x-4 pl-7 m-2">
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-extrabold">
            早稲田大学航空部
          </h1>
          <div className="flex ml-5 pl-5">
            <div className="relative w-52 h-52 z-0">
              <Image
                src="/Group 2.png"
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Subtitle and button container */}
        <div className="mt-2 flex flex-col items-center">
          <p className="text-lg sm:text-2xl md:text-4xl text-black-100 font-light mt-5">
            デザインアイディアが必要です
          </p>
          <CustomButton
            title="助けてください"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
