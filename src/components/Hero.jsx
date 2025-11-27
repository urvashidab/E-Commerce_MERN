import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row  border border-gray-500 ">
      {/* left side */}
      <div className="flex py-10 md:py-0 gap-6  items-center justify-center w-full md:w-1/2">
        <div>
          <div className="flex gap-2 items-center">
            <span className="w-10 h-0.5 bg-gray-600"></span>
            <p className=" font-medium uppercase">our bestsellers</p>
          </div>
          <h1 className="lg:text-6xl text-2xl md:text-4xl fontCursive leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex gap-2 justify-start items-center">
            <p className=" font-medium uppercase">shop now</p>
            <span className="w-10 h-0.5 bg-gray-600"></span>
          </div>
        </div>
      </div>

      {/* right side */}
      <img
        src={assets.hero_img}
        alt="Hero section image"
        className="md:w-1/2 w-full "
      ></img>
    </div>
  );
};

export default Hero;
