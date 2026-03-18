import React, { useContext, useState } from "react";
import Line from "../components/Line";
import { ProductContext } from "../context/ProductContext";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Collection = () => {
  const { products } = useContext(ProductContext);

  const [showFilter, setShowFilter] = useState(false);

  function handleFilter() {
    setShowFilter((prev) => !prev);
  }

  return (
    <>
      <Line />
      <Title text1="all" text2="collections" className="py-6" />

      {/* MOBILE TOP BAR */}
      <div className="flex justify-between items-center mb-4 lg:hidden">
        {/* FILTER BUTTON */}
        <button
          onClick={handleFilter}
          className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm"
        >
          FILTERS
          {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>

        {/* SORT */}
        <select className="text-sm border border-gray-300 px-3 py-2 rounded-full bg-white">
          <option value="relevant">Sort</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* FILTERS */}
        <div className="w-full lg:w-1/5 flex flex-col gap-4 text-sm">
          <h1 className="hidden lg:block text-2xl">FILTERS</h1>

          <div
            className={`
              ${showFilter ? "block" : "hidden"}
              lg:block
              flex flex-col gap-4
            `}
          >
            {/* CATEGORY */}
            <div className="border border-gray-200 rounded py-4 px-6">
              <p className="font-semibold mb-3">CATEGORIES</p>

              <div className="flex flex-col gap-2">
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

            {/* TYPE */}
            <div className="border border-gray-200 rounded py-4 px-6">
              <p className="font-semibold mb-3">TYPE</p>

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
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="flex-1">
          {/* DESKTOP SORT */}
          <div className="hidden lg:flex justify-end mb-4">
            <select className="text-sm border border-gray-300 px-3 py-2 rounded-full bg-white">
              <option value="relevant">Sort: Relevant</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      </div>
    </>
  );
};

export default Collection;
