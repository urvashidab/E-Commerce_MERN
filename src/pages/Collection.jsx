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
      <Title text1="all" text2="collections" className="py-10" />

      {/* whole container starts */}
      <div className="flex gap-4 justify-between  ">
        {/* filters start */}

        <div className="w-1/5 flex flex-col gap-4  ">
          {/* <h1>FILTERS</h1> */}

          {/* first category starts */}
          <div className="flex flex-col gap-4 justify-start border border-gray-400 rounded py-4 px-6 ">
            <p>CATEGORIES</p>

            <div className="flex flex-col gap-2 ">
              <label>
                <input type="checkbox" />
                Men
              </label>
              <label>
                <input type="checkbox" />
                Women
              </label>
              <label>
                <input type="checkbox" />
                Kids
              </label>
            </div>
          </div>

          {/* second category starts */}
          <div className="flex flex-col gap-4 border border-gray-400 rounded py-4 px-6">
            <p>TYPE</p>

            <div className="flex flex-col gap-2">
              <label>
                <input type="checkbox" />
                Tops
              </label>
              <label>
                <input type="checkbox" />
                Bottoms
              </label>
              <label>
                <input type="checkbox" />
                Winterwear
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
