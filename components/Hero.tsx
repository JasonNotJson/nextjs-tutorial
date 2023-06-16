"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative">
      <div className="flex-1 pt-36 padding-x flex flex-col">
        {/* Title and image container */}
        <div className="flex items-center mb-2">
          <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold whitespace-nowrap">
            早稲田大学航空部
          </h1>
          <div className="flex justify-center items-center ml-4 pl-4">
            <div className="relative w-[200px] h-[200px] z-0">
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
        <div className="mt-2">
          <p className="text-[27px] text-black-100 font-light mt-5">
            デザインアイディアが必要です
          </p>
          <CustomButton
            title="助けて"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
