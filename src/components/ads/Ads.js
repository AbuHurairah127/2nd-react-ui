import React from "react";
import "./Ads.css";
const Ads = () => {
  return (
    <div className="ads-container h-[300px] flex flex-wrap justify-center md:justify-evenly items-center">
      <div className="flex flex-col">
        <h1 className="text-white text-center md:text-left opacity text-3xl font-bold">
          Free consultation with exceptional quality.
        </h1>
        <p className="text-center md:text-left ads-text">
          Just one call away: +92 320 7443537
        </p>
      </div>
      <div className="btn-container">
        <button className="button">Get your consultation</button>
      </div>
    </div>
  );
};

export default Ads;
