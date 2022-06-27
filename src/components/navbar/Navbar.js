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
              className="lg:flex space-x-5 xl:space-x-7 text-[#14171F] mr-5 "
              style={{
                fontFamily: "work sans",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.20)",
              }}
            >
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
                Home
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
                About Us
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
                Projects
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
                Services
              </li>
              <li className="hover:text-[#F9995D] active:text-[#F9995D]  cursor-pointer xl:text-xl 2xl:text-2xl">
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
