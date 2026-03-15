import React from "react";
import Line from "../components/Line";
import { products } from "../assets/frontend_assets/assets";

const Collection = () => {
  return (
    <>
      <Line />
      <div className="flex gap-2 items-center justify-start py-10">
        <h1 className="uppercase text-2xl text-gray-500 font-medium ">
          all <span className="text-black">collections</span>
        </h1>
        <span className="linedesign"></span>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col  justify-start ">
              {/* image */}
              <div className="overflow-hidden rounded">
                <img
                  loading="lazy"
                  className="  hover:scale-105 transition-transform duration-200"
                  src={item.image}
                  alt="product image"
                />
              </div>
              <p>{item.name}</p>
              <p className="font-semibold text-sm">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
