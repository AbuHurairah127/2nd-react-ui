import React from "react";
import ProjectsNavlink from "./projectsNavlink/ProjectsNavlink";
import { projectNavlinkData } from "../../constant/Data";
import ProjectsCard from "./projectsCard/ProjectsCard";
const Project = () => {
  return (
    <div className="h-[100vh] min-w-[30vw] flex justify-between">
      <div className="left">
        <h1 className="project-heading text-2xl font-bold xl:text-3xl">
          Project
        </h1>
        {projectNavlinkData.map((item, index) => (
          <ProjectsNavlink key={index} item={item.title} />
        ))}
        <ProjectsNavlink />
      </div>
      <div className="right w-[60vw] flex flex-wrap">
        <ProjectsCard />
      </div>
    </div>
  );
};

export default Project;
