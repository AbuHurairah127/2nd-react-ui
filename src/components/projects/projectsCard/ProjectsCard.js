import React from "react";

const ProjectsCard = () => {
  return (
    <div className="w-[25vw] h-[22vw] bg-red-100">
      <div className="w-full h-[16vw] ">image</div>
      <div className="bg-[#2947A9] w-full h-[6vw]">
        <p
          className="building-name px-2 text-white text-xl font-semibold tracking-wide"
          style={{
            fontFamily: "work sans",
          }}
        >
          building name
        </p>
        <p
          className="building-address px-2 text-white text-base tracking-wide"
          style={{ fontFamily: "work sans" }}
        >
          building address
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
