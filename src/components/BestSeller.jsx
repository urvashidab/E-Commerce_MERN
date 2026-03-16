import React, { useContext } from "react";

import { ProductContext } from "../context/ProductContext";
import Title from "./Title";
import ProductItems from "./ProductItems";

const BestSeller = () => {
  // to find bestsellers from whole data
  const { products, currency } = useContext(ProductContext);
  const bestSellers = products
    .filter((item) => item.bestseller === true)
    .slice(0, 5);
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-10 ">
      {/* heading best sellers */}
      <Title className="mt-4" text1="best" text2="sellers" />

      {/* small details one line p tag */}
      <p className="max-w-xl">
        Discover our most popular products loved by customers.
      </p>

      {/* grid for photos */}

      <div className="container mx-auto py-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  ">
          {bestSellers.map((item) => (
            <ProductItems
              key={item._id}
              _id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
