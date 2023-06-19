"use client";

import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex flex-col gap-5 items-center justify-center  overflow-hidden pl-16">
      <div className="text-center p-4 m-4">
        {/* Title and image container */}
        <div className="flex justify-center items-center space-x-4 m-2">
          <h1 className="text-black dark:text-white text-2xl sm:text-4xl md:text-7xl xl:text-8xl font-extrabold">
            早稲田大学航空部
          </h1>
          <div className="flex">
            <div className="relative w-52 h-52 z-0">
              <Image
                src="/diamond_logo_big.svg"
                alt="image"
                fill
                className="object-contain hover:animate-spin animation-duration[0.1s] animation-timing-linear animation-iteration-count[infinite] ml-2"
              />
            </div>
          </div>
        </div>

        {/* Subtitle and button container */}
        <div className="mt-2 flex flex-col items-center">
          <p className="text-lg sm:text-2xl md:text-4xl text-light-text dark:text-white font-light mt-5">
            統合チーム管理ツール
          </p>
          <CustomButton
            title="ログイン"
            containerStyles="bg-primary-button text-white hover:bg-hover-button rounded-full mt-10"
            handleClick={handleScroll}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
