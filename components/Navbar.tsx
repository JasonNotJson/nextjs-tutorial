import React from "react";
import Link from "next/link";
import { CustomIconProps } from "@/types";
import {
  FaClipboardList,
  FaCopy,
  FaDatabase,
  FaHome,
  FaList,
  FaMap,
  FaPlane,
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
        <NavBarIcon icon={FaList} text={"Team Advice"} href={"/advice"} />
        <NavBarIcon icon={FaCopy} text={"Docs"} href={"/docs"} />
        <NavBarIcon icon={FaMap} text={"Map"} href={"/map"} />
        <NavBarIcon icon={FaPlane} text={"Flight Records"} href={"/flight"} />
        <NavBarIcon icon={FaDatabase} text={"data base"} href={"/data-base"} />
        <NavBarIcon icon={FaUsers} text={"Team Management"} href={"/team"} />
      </div>
      <div className="spacer flex-grow"></div>
      <div className="bottom-section flex flex-col items-center mb-4">
        <NavBarIcon icon={FaUser} text={"User"} href={"/account"} />
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
