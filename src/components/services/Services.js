import React from "react";
import ServiceCard from "./serviceCard/ServiceCard";
import { servicesData } from "../../constant/Data";

const Services = () => {
  return (
    <div className="w-screen bg-[#F6F8F7] min-h-[500px] xl:min-h-[608px]">
      <h1 className="font-bold text-4xl xl:text-5xl text-center pt-5 text-[#292E3D]">
        Services
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {servicesData.map((item, i) => (
          <ServiceCard
            key={i}
            data={item}
            textColor={i % 2 == 0 ? "#2947A9" : "#FFFFFF"}
            backgroundColor={!(i % 2 === 0) ? "#2947A9" : "#FFFFFF"}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
