import React from "react";

const ProjectsCard = (props) => {
  const { image, buildingName, buildingAddress } = props;
  return (
    <div className=" md:w-[35vw] md:h-[32vw] lg:w-[25vw] lg:min-h-[22vw]">
      <div className="w-full min-h-[16vw] ">
        <img src={image} alt="" />
      </div>
      <div className="bg-[#2947A9] w-full h-[15vw] md:h-[10vw]  lg:min-h-[6vw] flex flex-col justify-evenly">
        <p
          className="building-name px-2 text-white text-base font-semibold tracking-wide"
          style={{
            fontFamily: "work sans",
          }}
        >
          {buildingName}
        </p>
        <p
          className="building-address px-2 text-white text-md tracking-wide"
          style={{ fontFamily: "work sans" }}
        >
          {buildingAddress}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCard;
