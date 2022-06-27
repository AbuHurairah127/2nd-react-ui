import React from "react";
import carouselBG from "./../../assets/carouselBG.jpg";
import "@fontsource/work-sans";
const CarouselSlider = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${carouselBG})`,
        backgroundSize: "100% 100%",
        fontFamily: "work sans",
      }}
      className="max-w-screen lg:bg-contain h-[300px] sm:h-[400px] lg:h-[525px] xl:h-[600px] 2xl:h-[646px] flex pt-8  justify-between"
    >
      <h1
        className="text-4xl xl:text-5xl ml-8 md:self-center justify-self-start"
        style={{
          fontWeight: 900,
        }}
      >
        Building things <br /> is our mission.
      </h1>
      {/* Carousel Controls */}
      <div className="carouselControls bg-[#3559C7]  h-[190px] w-[419px] self-end flex flex-col justify-between">
        <div>
          <p
            className="text-white font-bold text-3xl text-center pt-3 tracking-wide"
            style={{
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Feature Projects
          </p>
        </div>
        <div>
          <p className="text-white text-2xl text-center self-center">
            The National University of Architecture
          </p>
        </div>
        <div className="w-full">
          <button className="previous w-1/2 h-9 bg-[#292E3D] border-r-[1px] border-[#858EAD] text-white text-xl">
            <span className="pr-3">&#8592;</span>
            Previous
          </button>
          <button className="next w-1/2 h-9 bg-[#292E3D] border-l-[1px] border-[#858EAD] text-white text-xl">
            Next
            <span className="pl-3">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlider;
