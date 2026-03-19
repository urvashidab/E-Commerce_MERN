import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find(function (item) {
      return item._id === id;
    });

    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="px-4 md:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT - IMAGE */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded"
          />
        </div>

        {/* RIGHT - DETAILS */}
        <div className="flex-1 flex flex-col gap-4">
          {/* TITLE */}
          <h1 className="text-2xl font-semibold">{product.name}</h1>

          {/* RATING */}
          <p className="text-yellow-500">⭐⭐⭐⭐☆ (4.2)</p>

          {/* PRICE */}
          <p className="text-xl font-bold">${product.price}</p>

          {/* DESCRIPTION */}
          <p className="text-gray-600">
            {product.description || "No description available."}
          </p>

          {/* SIZE */}
          <div>
            <p className="font-semibold mb-2">Select Size</p>

            <div className="flex gap-2">
              {product.sizes?.map(function (size) {
                return (
                  <button
                    key={size}
                    onClick={function () {
                      setSelectedSize(size);
                    }}
                    className={`border px-3 py-1 ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* BUTTON */}
          <button className="bg-black text-white py-3 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
