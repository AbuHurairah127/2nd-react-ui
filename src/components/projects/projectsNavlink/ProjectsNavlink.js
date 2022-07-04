import React from "react";

const ProjectsNavlink = (props) => {
  return (
    <div className="flex space-x-3 xl:space-x-5 cursor-pointer items-center">
      <p
        className="font-bold tracking-wider mt-3 border-l-4 rounded-sm border-l-[#C2C7D6] text-[#C2C7D6] hover:font-bold hover:border-l-[#2947A9] hover:text-[#2947A9] active:bg-[#2947A9]  pl-3 ml-3 xl:text-xl"
        style={{
          fontFamily: "work sans",
        }}
      >
        {props.item}
      </p>
    </div>
  );
};

export default ProjectsNavlink;
