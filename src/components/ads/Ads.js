import React from "react";
import "./Ads.css";
const Ads = () => {
  return (
    <div className="container h-[300px] flex justify-evenly items-center">
      <div className="flex flex-col">
        <h1 className="text-white opacity text-3xl font-bold">
          Free consultation with exceptional quality.
        </h1>
        <p>Just one call away: +92 320 7443537</p>
      </div>
      <div className="btn-container">
        <button className="btn">Get your consultation</button>
      </div>
    </div>
  );
};

export default Ads;
