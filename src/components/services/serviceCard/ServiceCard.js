import React from "react";

const ServiceCard = (props) => {
  return (
    <div
      className="w-2/3 sm:w-1/3 md:w-1/4 h-[25vh] rounded-md m-5 "
      style={{
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className="flex flex-col h-full items-center justify-evenly">
        <div className="flex flex-col">
          <div
            className=""
            style={{
              zIndex: 1,
            }}
          >
            <img src={props.data.icon} alt="" />
          </div>
          <div
            className="z-0 w-5 h-5 bg-[#7595FD] relative bottom-5"
            style={{
              zIndex: 0,
            }}
          ></div>
        </div>
        <div
          className="w-16 h-1 rounded"
          style={{
            backgroundColor: "#E0E3EB",
          }}
        ></div>
        <div
          className="text-2xl font-bold"
          style={{
            color: props.textColor,
          }}
        >
          <h1>{props.data.text}</h1>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
