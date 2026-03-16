import React, { useContext } from "react";
import Line from "../components/Line";
import { ProductContext } from "../context/ProductContext";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

const Collection = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <Line />

      {/* top container for filter title and sorting */}
      <div className="flex justify-between  py-10">
        <h1 className="text-2xl">FILTERS</h1>
        {/* title */}
        <Title text1="all" text2="collections" />

        {/* sorting dropdown */}
        <select className="border border-gray-400 p-2 rounded">
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      {/* whole container starts */}
      <div className="flex lg:gap-10 justify-between mb-8 ">
        {/* filters start */}
        <div className="w-1/5 flex flex-col gap-4 text-sm ">
          {/* first category starts */}
          <div className="flex flex-col gap-4 justify-start border border-gray-200 rounded py-4 px-6 ">
            <p className="font-semibold">CATEGORIES</p>

            <div className="flex flex-col gap-3  ">
              <label>
                <input type="checkbox" /> Men
              </label>
              <label>
                <input type="checkbox" /> Women
              </label>
              <label>
                <input type="checkbox" /> Kids
              </label>
            </div>
          </div>

          {/* second category starts */}
          <div className="flex flex-col gap-4 border border-gray-200 rounded py-4 px-6">
            <p className=" font-semibold">TYPE</p>

            <div className="flex flex-col gap-2">
              <label>
                <input type="checkbox" /> Topwear
              </label>
              <label>
                <input type="checkbox" /> Bottomwear
              </label>
              <label>
                <input type="checkbox" /> Winterwear
              </label>
            </div>
          </div>

          {/* second category ends */}
        </div>

        {/* filters end */}

        {/* products items for all the products */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
            {products.map((item) => (
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

        {/* container ends */}
      </div>
    </>
  );
};

export default Collection;
