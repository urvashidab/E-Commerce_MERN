import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Policy = () => {
  return (
    <div className=" gap-6 grid grid-cols-1 md:grid-cols-3 mt-20 ">
      {/* left side */}
      <div className="flex flex-col gap-4 justify-center items-center px-10 py-8  ">
        <img src={assets.exchange_icon} alt="exchange icon" className="w-10" />
        <h2 className="font-bold">Easy Exchange Policy</h2>
        <p className="text-gray-500">We offer hassle free exchange policy</p>
      </div>

      {/* middle part */}
      <div className="flex flex-col gap-4 justify-center items-center px-10 py-8  ">
        <img src={assets.quality_icon} alt="quality icon" className="w-10" />
        <h2 className="font-bold">7 Days Return Policy</h2>
        <p className="text-gray-500">We provide 7 days free return policy</p>
      </div>

      {/* left part */}
      <div className="flex flex-col gap-4 justify-center items-center px-10 py-8   ">
        <img src={assets.support_img} alt="support icon" className="w-10" />
        <h2 className="font-bold">Best customer support</h2>
        <p className="text-gray-500">we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policy;
