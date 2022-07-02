import React from "react";
import HappyClientsIcon from "./../../../assets/statsData/HappyClientsIcon.svg";
import ProjectsCompleted from "./../../../assets/statsData/ProjectsCompleted.svg";
import AwardsWinIcon from "./../../../assets/statsData/AwardsWinIcon.svg";
import YearsInBusiness from "./../../../assets/statsData/YearsInBusiness.svg";

const StatsCard = () => {
  return (
    <div className=" md:h-[45vh] lg:h-[80vw]">
      {" "}
      <div className="cards md:max-w-[60vw] ">
        {/* 1st card (Happy Clients) */}
        <div className="md:relative md:bottom-10 md:left-80 z-50">
          <div className="icon">
            <img
              src={HappyClientsIcon}
              alt=""
              className="w-20 md:relative md:left-56 md:top-8"
            />
          </div>
          <div className="left">
            <div
              className="1stCard flex flex-col justify-evenly items-start"
              style={{
                padding: "30px",
                width: "280px",
                height: "155px",
                background: "#FFFFFF",
                border: "1px solid #FFFFFF",
                boxShadow:
                  "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
                borderRadius: "4px",
              }}
            >
              <h1
                className="text-[#292E3D] text-4xl font-bold"
                style={{
                  fontFamily: "work sans",
                }}
              >
                84
              </h1>
              <div className="flex space-x-5 items-center">
                <div className="w-1.5 h-5 bg-[#F9995D]"></div>
                <h4
                  className="text-[#667299] text-xl"
                  style={{
                    fontFamily: "work sans",
                  }}
                >
                  Happy Clients
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* 1st card End (Happy Clients) */}
        {/* 2nd card (Projects Completed) */}
        <div className="md:relative md:bottom-44 md:left-8">
          <img
            src={ProjectsCompleted}
            alt=""
            className="relative top-8 right-6 w-16"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flexStart",
              padding: "30px",
              gap: "2px",

              width: "361px",
              height: "155px",

              background: "#FFFFFF",
              border: "1px solid #FFFFFF",
              boxShadow:
                "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
              borderRadius: "4px",
            }}
          >
            <h1
              className="text-[#292E3D] text-4xl font-bold"
              style={{
                fontFamily: "work sans",
              }}
            >
              123
            </h1>
            <div className="flex space-x-5 items-center">
              <div className="w-1.5 h-5 bg-[#F9995D]"></div>
              <h4
                className="text-[#667299] text-xl"
                style={{
                  fontFamily: "work sans",
                }}
              >
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
        {/* 2nd card End (Projects Completed) */}
        {/* 3rd card  (Awards Win) */}
        <div className="md:relative md:bottom-64 md:left-72 z-30">
          <img
            src={AwardsWinIcon}
            alt=""
            className="relative top-8 left-56 w-16"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flexStart",
              padding: "30px",
              gap: "2px",

              width: "276px",
              height: "155px",

              background: "#FFFFFF",
              border: "1px solid #FFFFFF",
              boxShadow:
                "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
              borderRadius: "4px",
            }}
          >
            <h1
              className="text-[#292E3D] text-4xl font-bold"
              style={{
                fontFamily: "work sans",
              }}
            >
              37
            </h1>
            <div className="flex space-x-5 items-center">
              <div className="w-1.5 h-5 bg-[#F9995D]"></div>
              <h4
                className="text-[#667299] text-xl"
                style={{
                  fontFamily: "work sans",
                }}
              >
                Awards Win
              </h4>
            </div>
          </div>
        </div>
        {/* 3rd card End (Awards Win) */}
        {/* 4th card (Years in Business) */}
        <div className="md:relative md:bottom-96 md:left-20">
          <img
            src={YearsInBusiness}
            alt=""
            className="relative top-44 left-72 w-16"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flexStart",
              padding: "30px",
              gap: "2px",

              width: "333px",
              height: "155px",

              background: "#FFFFFF",
              border: "1px solid #FFFFFF",
              boxShadow:
                "0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)",
              borderRadius: "4px",
            }}
          >
            <h1
              className="text-[#292E3D] text-4xl font-bold"
              style={{
                fontFamily: "work sans",
              }}
            >
              30
            </h1>
            <div className="flex space-x-5 items-center">
              <div className="w-1.5 h-5 bg-[#F9995D]"></div>
              <h4
                className="text-[#667299] text-xl"
                style={{
                  fontFamily: "work sans",
                }}
              >
                Years in Business
              </h4>
            </div>
          </div>
        </div>
        {/* 4th Card End(Years In Business) */}
      </div>
    </div>
  );
};

export default StatsCard;
