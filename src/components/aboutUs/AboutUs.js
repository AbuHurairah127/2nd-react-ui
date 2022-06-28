import React from "react";
import companyCEO from "./../../assets/aboutUsData/CompanyCEO.jpg";
import "@fontsource/work-sans";
const AboutUs = () => {
  return (
    <div className="w-screen min-h-[600px] xl:h-[945px]">
      <div className="flex items-center py-8 md:p-10 lg:p-20 xl:p-24">
        <img
          src={companyCEO}
          alt="Company CEO Image"
          className="w-5/6 h-full shadow-2xl hidden lg:inline"
        />
        <div
          className="bg-[#2947A9] shadow-xl shadow-[#2947A9] rounded-md w-screen md:min-w-[350px] h-5/6 lg:relative lg:right-40"
          style={{
            boxShadow:
              "0px 20px 24px -4px rgba(17, 24, 39, 0.1), 0px 8px 8px -4px rgba(17, 24, 39, 0.04)",
          }}
        >
          <h1 className="text-white text-2xl font-bold p-5">About Us</h1>
          <p
            className="px-5 text-white leading-5"
            style={{
              fontFamily: "work sans",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veritatis omnis consequuntur adipisci obcaecati natus ducimus, a
            dolores nostrum itaque, amet ratione quis. Rem, magnam? Architecto
            cumque odit quibusdam possimus?
          </p>
          <p
            className="px-5 text-white leading-5 pt-3"
            style={{
              fontFamily: "work sans",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            veritatis omnis consequuntur adipisci obcaecati natus ducimus, a
            dolores nostrum itaque, amet ratione quis. Rem, magnam?
          </p>
          <button className="bg-white font-semibold text-[#2947A9] py-2 px-3.5 rounded mx-5 my-10">
            More on Our History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
