import React from "react";
import { CustomIconProps } from "@/types";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen justify-center text-center w-16 m-0 flex flex-col dark:bg-stone-800 text-white shadow-lg">
      <NavBarIcon text={"構"} />
      <NavBarIcon text={"築"} />
      <NavBarIcon text={"中"} />
    </div>
  );
};

const NavBarIcon = ({ text }: CustomIconProps) => (
  <button className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-primary-button hover:bg-hover-button rounded hover:rounded-lg">
    {text}
  </button>
);
export default Navbar;
