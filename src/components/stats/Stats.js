import React from "react";

import StatsCard from "./statsCard/StatsCard";

const Stats = () => {
  return (
    <div className="w-screen  md:max-h-[80vh] flex my-10 justify-center md:justify-between items-center flex-wrap">
      <div className="order-2 lg:order-1 md:mx-16 lg:mx-0">
        <StatsCard />
      </div>
      <div className="m-5 md:mx-16 md:text-center lg:w-[30vw] right order-1 lg:order-2">
        <h1 className="text-3xl xl:text-4xl text-[#2947A9] font-bold tracking-wide">
          30 Years Experience
        </h1>
        <p
          className="text-[#525B7A] mt-8 text-lg leading-6 xl:text-xl"
          style={{
            fontFamily: "work sans",
          }}
        >
          Our company has been the leading provided construction services to
          clients throughout the USA since 1988.
        </p>
        <button className=" mt-8 py-2 px-6 rounded-sm bg-[#2947A9] text-white text-md xl:text-xl cursor">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Stats;
