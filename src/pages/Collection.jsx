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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product, id) => (
            <div
              key={id}
              className="flex flex-col gap-2 items-center justify-start"
            >
              <img src={product.image} alt="product image" />
              <p>{product.name}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collection;
