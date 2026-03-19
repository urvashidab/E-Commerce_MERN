import React, { useContext, useState } from "react";
import Line from "../components/Line";
import { ProductContext } from "../context/ProductContext";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const Collection = () => {
  const { products } = useContext(ProductContext);

  const [showFilter, setShowFilter] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // for mobile screens
  function handleFilter() {
    setShowFilter((prev) => !prev);
  }

  // reusable checkbox handler
  function handleCheckboxChange(value, checked, state, setState) {
    if (checked) {
      setState([...state, value]);
    } else {
      setState(state.filter((item) => item !== value));
    }
  }

  function handleCategoryChange(e) {
    handleCheckboxChange(
      e.target.value,
      e.target.checked,
      selectedCategories,
      setSelectedCategories,
    );
  }

  function handleTypeChange(e) {
    handleCheckboxChange(
      e.target.value,
      e.target.checked,
      selectedTypes,
      setSelectedTypes,
    );
  }

  function handleSorting(e) {
    setSortType(e.target.value);
  }

  // filtering
  let filteredProducts = [...products];

  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedCategories.includes(product.category),
    );
  }

  if (selectedTypes.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      selectedTypes.includes(product.subCategory),
    );
  }

  // sorting (safe copy)
  let finalProducts = [...filteredProducts];

  if (sortType === "low-high") {
    finalProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === "high-low") {
    finalProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Line />
      <Title text1="all" text2="collections" className="py-6" />

      {/* for small screens-mobile top bar */}
      <div className="flex justify-between items-center mb-4 lg:hidden">
        {/* left side- button for filter */}
        <button
          onClick={handleFilter}
          className="flex items-center gap-2 border px-4 py-2 rounded-full text-sm"
        >
          FILTERS
          {showFilter ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </button>

        {/* right side- for sorting selection box */}
        <select
          onChange={handleSorting}
          className="text-sm border border-gray-300 px-3 py-2 rounded-full bg-white"
        >
          <option value="relevant">Sort: Relevant</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* FILTERS */}
        <div className="w-full lg:w-1/5 flex flex-col gap-4 text-sm">
          <p className="hidden lg:block text-2xl">FILTERS</p>

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
                {["Men", "Women", "Kids"].map((cat) => (
                  <label
                    key={cat}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={cat}
                      checked={selectedCategories.includes(cat)}
                      onChange={handleCategoryChange}
                    />
                    {cat}
                  </label>
                ))}
              </div>
            </div>

            {/* TYPE */}
            <div className="border border-gray-200 rounded py-4 px-6">
              <p className="font-semibold mb-3">TYPE</p>

              <div className="flex flex-col gap-2">
                {["Topwear", "Bottomwear", "Winterwear"].map((type) => (
                  <label
                    key={type}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedTypes.includes(type)}
                      onChange={handleTypeChange}
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            {/* CLEAR FILTERS */}
            <button
              onClick={() => {
                setSelectedCategories([]);
                setSelectedTypes([]);
              }}
              className="text-xs text-gray-500 underline mt-2 cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="flex-1">
          {/* DESKTOP SORT */}
          <div className="hidden lg:flex justify-end mb-4">
            <select
              onChange={handleSorting}
              className="text-sm border border-gray-300 px-3 py-2 rounded-full bg-white"
            >
              <option value="relevant">Sort: Relevant</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
            </select>
          </div>

          {/* COUNT */}
          <p className="text-sm text-gray-400 mb-3">
            {finalProducts.length} item{finalProducts.length !== 1 && "s"}
          </p>

          {/* GRID */}
          {finalProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {finalProducts.map((item) => (
                <ProductItems
                  key={item._id}
                  _id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 text-md mt-10 text-center lg:text-lg ">
              No products match the selected filters.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Collection;
