import React from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineHome,
  MdOutlineArchive,
  MdStar,
  MdDeleteOutline,
} from "react-icons/md";

const Sidebar = () => {
  const getStyles = ({ isActive }) => {
    const commonStyles = "flex gap-1  items-center py-2 px-1 rounded-r-full";
    return isActive
      ? `bg-indigo-800 ${commonStyles} text-white`
      : `hover:bg-indigo-800 hover:text-white ${commonStyles}`;
  };
  return (
    <aside className="flex flex-col gap-3  w-40 h-screen py-3 px-2">
      <NavLink className={getStyles} to="/">
        <MdOutlineHome className="text-2xl" />
        <span className="text-xl">Home</span>
      </NavLink>
      <NavLink className={getStyles} to="/archive">
        <MdOutlineArchive className="text-2xl" />
        <span className="text-xl">Archive</span>
      </NavLink>
      <NavLink to="/important" className={getStyles}>
        <MdStar className="text-xl" />
        Important
      </NavLink>
      <NavLink className={getStyles} to="/bin">
        <MdDeleteOutline className="text-2xl" />
        <span className="text-xl">Bin</span>
      </NavLink>
    </aside>
  );
};

export default Sidebar;
