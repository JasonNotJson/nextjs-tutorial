import React from "react";
import Link from "next/link";
import { CustomIconProps } from "@/types";
import {
  FaClipboardList,
  FaCopy,
  FaDatabase,
  FaHome,
  FaMap,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen flex flex-col text-center w-16 m-0 dark:bg-dark-nav-bg text-white shadow-xl z-40">
      <div className="spacer flex-grow"></div>
      <div className="center-section flex flex-col items-center">
        <NavBarIcon icon={FaHome} text={"Home"} href={"/"} />
        <NavBarIcon icon={FaClipboardList} text={"Note"} href={"/note"} />
        <NavBarIcon icon={FaUsers} text={"Team Advice"} href={"/advice"} />
        <NavBarIcon icon={FaCopy} text={"Docs"} />
        <NavBarIcon icon={FaMap} text={"Map"} />
        <NavBarIcon icon={FaDatabase} text={"Flight Records"} />
      </div>
      <div className="spacer flex-grow"></div>
      <div className="bottom-section flex flex-col items-center mb-4">
        <NavBarIcon icon={FaUser} text={"User"} />
      </div>
    </div>
  );
};

const NavBarIcon = ({ icon, text, href }: CustomIconProps) => (
  <Link href={href || "#"} className="navbar-icon group">
    <>
      {icon && React.createElement(icon)}
      <span className="navbar-tooltip group-hover:scale-100">{text}</span>
    </>
  </Link>
);
export default Navbar;
