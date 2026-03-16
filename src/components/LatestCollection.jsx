import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Title from "./Title";

const LatestCollection = () => {
  const { products, currency } = useContext(ProductContext);
  const latestCollections = [...products]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 10);

  return (
    <div className="flex flex-col gap-4 items-center justify-center py-4 ">
      {/* heading best sellers */}
      <Title text1="latest" text2="collections" />

      {/* small details one line p tag */}
      <p className="max-w-xl">
        Explore our newest arrivals, crafted to keep your style fresh.
      </p>

      {/* grid for photos */}

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  ">
          {latestCollections.map((item) => (
            <div
              key={item._id}
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

              {/* price od product */}
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

export default LatestCollection;
