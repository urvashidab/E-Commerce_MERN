import React from "react";
import Line from "../components/Line";
import { products } from "../assets/frontend_assets/assets";
import Title from "../components/Title";

const Collection = () => {
  return (
    <>
      <Line />
      <Title text1="all" text2="collections" className="py-10" />

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
