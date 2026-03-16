import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContext";

const BestSeller = () => {
  // to find bestsellers from whole data
  const { products, currency } = useContext(ProductContext);
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
      <p className="max-w-xl">
        Discover our most popular products loved by customers.
      </p>

      {/* grid for photos */}

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  ">
          {bestSellers.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 justify-start cursor-pointer"
            >
              {/* image */}
              <div className="overflow-hidden rounded">
                <img
                  loading="lazy"
                  className="hover:scale-105 transition-transform duration-200"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              {/* name of product */}
              <p className="text-sm">{item.name}</p>

              {/* price of product */}
              <p className="text-sm font-semibold">
                {currency}
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
