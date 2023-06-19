"use-client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  url,
}: CustomButtonProps & {
  url?: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const onButtonClick = () => {
    if (url) {
      window.open(url, "_blank");
    } else if (handleClick) {
      handleClick(event);
    }
  };
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={onButtonClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
