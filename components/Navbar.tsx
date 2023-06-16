import React from "react";
import { CustomIconProps } from "@/types";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen justify-center text-center w-16 m-0 flex flex-col bg-primary-blue text-white shadow-lg">
      <NavBarIcon text={"構"} />
      <NavBarIcon text={"築"} />
      <NavBarIcon text={"中"} />
    </nav>
  );
};

const NavBarIcon = ({ text }: CustomIconProps) => (
  <button className="relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg bg-indigo-700 text-white rounded">
    {text}
  </button>
);
export default Navbar;
