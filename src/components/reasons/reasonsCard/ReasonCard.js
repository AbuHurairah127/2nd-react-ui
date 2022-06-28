import React from "react";
import "@fontsource/work-sans";

const ReasonCard = (props) => {
  return (
    <div className=" mt-8 min-h-[197px] w-[292px] xl:min-h-[220px] border-2 border-[#E0E3EB] rounded xl:rounded-md flex flex-col">
      <div className="icon py-4 px-4 xl:py-5 xl:px-5">
        <img src={props.data.icon} alt="" width={50} height={40} />
      </div>
      <div className="header">
        <h1 className="font-bold text-2xl xl:text-3xl px-3 py-0 my-0 text-[#3D445C]">
          {props.data.heading}
        </h1>
      </div>
      <div
        className="description px-3 pt-3 xl:text-xl xl:pt-5 text-[#858EAD]"
        style={{
          fontFamily: "work sans",
        }}
      >
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};

export default ReasonCard;
