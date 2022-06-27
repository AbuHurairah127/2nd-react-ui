import React from "react";
import "@fontsource/work-sans";

const Navbar = () => {
  return (
    <div className="container">
      <div className="h-12 xl:h-16 w-screen flex justify-between items-center">
        <div className="left ml-8 xl:ml-10 cursor-pointer">
          <p>Logo</p>
        </div>
        <div className="right ">
          <nav>
            <ul
              className="flex space-x-5 xl:space-x-7 text-[#14171F] mr-5 xl:mr-7 "
              style={{
                fontFamily: "work sans",
              }}
            >
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer">
                Home
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer">
                About Us
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer">
                Projects
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer">
                Services
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer">
                Contact Us
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
