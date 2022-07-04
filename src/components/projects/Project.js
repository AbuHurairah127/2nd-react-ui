import React from "react";
import ProjectsNavlink from "./projectsNavlink/ProjectsNavlink";
import { projectNavlinkData } from "../../constant/Data";
import { projectsCardData } from "./../../constant/Data";
import ProjectsCard from "./projectsCard/ProjectsCard";
const Project = () => {
  return (
    <div className="h-[100vh] min-w-[30vw] flex flex-col lg:flex-row justify-between mt-8 xl:mt-12">
      <div className="left flex flex-col items-center lg:w-[30vw]">
        <h1 className="project-heading text-2xl font-bold xl:text-3xl ">
          Project
        </h1>
        <div className="flex flex-row lg:flex-col justify-evenly flex-wrap md:flex-nowrap ">
          {projectNavlinkData.map((item, index) => (
            <ProjectsNavlink key={index} item={item.title} />
          ))}
        </div>
      </div>
      <div className="right h-full w-screen lg:w-[60vw] flex flex-wrap justify-center md:justify-evenly mt-12 space-y-8 md:space-y-0">
        {projectsCardData.map((item, index) => (
          <ProjectsCard
            key={index}
            image={item.img}
            buildingName={item.buildingName}
            buildingAddress={item.buildingAddress}
          />
        ))}
        <div className=" min-h-10 mt-5 lg:mt-0 md:h-10 w-full flex flex-col md:flex-row justify-center md:justify-between flex-wrap md:flex-nowrap items-center space-y-2 ">
          <button className="py-2 px-12 w-[50vw] md:w-[30vw] lg:w-[20vw] md:mx-3 md:ml-8 xl:ml-10  bg-blue-800 text-white xl:text-lg">
            <span className="pr-3 text-xl">&#8592;</span>
            Previous
          </button>
          <div className="h-3 flex justify-evenly w-[50vw] md:w-[15vw] lg:w-[10vw]">
            <div className="w-3 h-3 bg-[#C2C7D6] hover:bg-[#2947A9] active:bg-[#2947A9] cursor-pointer rounded-full"></div>
            <div className="w-3 h-3 bg-[#C2C7D6] hover:bg-[#2947A9] active:bg-[#2947A9] cursor-pointer rounded-full"></div>
            <div className="w-3 h-3 bg-[#C2C7D6] hover:bg-[#2947A9] active:bg-[#2947A9] cursor-pointer rounded-full"></div>
            <div className="w-3 h-3 bg-[#C2C7D6] hover:bg-[#2947A9] active:bg-[#2947A9] cursor-pointer rounded-full"></div>
          </div>
          <button className="py-2 px-12  w-[50vw] md:w-[30vw] lg:w-[20vw] md:mx-3 md:mr-8 xl:mr-12  bg-blue-800 text-white xl:text-lg">
            Next
            <span className="pl-3 text-xs">&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
