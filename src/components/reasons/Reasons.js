import React from "react";
import "@fontsource/work-sans";
import ReasonCard from "./reasonsCard/ReasonCard";
import { reasonsData } from "../../constant/Data";
const Reasons = () => {
  return (
    <>
      <div className="heading">
        <h1
          className="text-3xl pt-8 text-center xl:text-4xl text-[#292E3D]"
          style={{
            fontWeight: 700,
          }}
        >
          Our Reputation
        </h1>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {reasonsData.map((item, index) => (
          <ReasonCard data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Reasons;
