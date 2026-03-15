import React from "react";
import { products } from "../assets/frontend_assets/assets";

const BestSeller = () => {
  // to find bestsellers from whole data
  const bestSellers = products
    .filter((item) => item.bestseller === true)
    .slice(0, 5);
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10 ">
      {/* heading best sellers */}
      <div className="flex gap-2  justify-start items-center m-4 ">
        <h1 className="uppercase text-3xl text-gray-500 font-medium ">
          best <span className="text-black">sellers</span>
        </h1>
        <span className="linedesign"></span>
      </div>

      {/* small details one line p tag */}
      <p>Discover our most popular products loved by customers.</p>

      {/* grid for photos */}

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4  ">
          {bestSellers.map((item, id) => (
            <div key={id} className="flex flex-col gap-2 justify-start ">
              {/* image */}
              <img
                className="rounded overflow-hidden hover:scale-103 transition-transform duration-200"
                src={item.image}
                alt={item.name}
              ></img>

              {/* name of product */}
              <p className="text-sm">${item.name}</p>

              {/* price od product */}
              <p className="text-sm font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
