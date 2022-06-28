import React from "react";

const NavLink = (props) => {
  return (
    <div>
      <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
        {props.label}
      </li>
    </div>
  );
};

export default NavLink;
