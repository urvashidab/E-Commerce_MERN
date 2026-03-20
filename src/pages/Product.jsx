import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Line from "../components/Line";
import Title from "../components/Title";
import ProductItems from "../components/ProductItems";

export default function Product() {
  const { products, currency } = useContext(ProductContext);
  const { productID } = useParams();
  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productID);
    setProductData(foundProduct);
  }, [productID, products]);

  // to scrolls to up
  useEffect(
    () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
    [productID],
  );
  //console.log(productID);

  // loading product
  if (!productData) {
    return <p className="text-center text-lg mt-10">Loading</p>;
  }

  // related product functionality
  const relatedProduct = products
    .filter((item) => {
      return (
        item._id !== productID &&
        item.category === productData.category &&
        item.subCategory === productData.subCategory
      );
    })
    .slice(0, 4);

  // ensure if image is an array
  const imagesArr = Array.isArray(productData.image)
    ? productData.image
    : [productData.image];

  return (
    <>
      <Line />

      {/* outer layer- top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-8 ">
        {/* left side-- images */}
        <div className="flex flex-col lg:flex-row gap-6  ">
          {/* small images */}
          <div className="flex  lg:flex-col sm:flex-row gap-4">
            {imagesArr.map((item, index) => (
              <img
                className={`w-24 sm:w-28 lg:w-36 aspect-square object-cover border cursor-pointer 
  ${selectedImage === index ? "border-black" : "border-gray-300 hover:border-black"}
`}
                onClick={() => setSelectedImage(index)}
                key={index}
                alt="product"
                src={item}
              ></img>
            ))}
          </div>

          {/* main image */}

          <img
            className="w-full object-cover  "
            src={imagesArr[selectedImage]}
            alt={productData.name}
          ></img>
        </div>
        {/* right side- product details */}
        <div className="flex flex-col gap-7 justify-start  py-4 ">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          {/*  rating -static for now */}
          <p className="text-yellow-500">
            ⭐⭐⭐⭐☆ <span className="text-gray-500">(1331)</span>
          </p>

          {/* price */}
          <p className="text-2xl font-semibold">
            {currency}
            {productData.price}
          </p>

          {/* description */}
          <p className="text-gray-500 text-md  max-w-lg leading-7">
            {productData.description || "No description available."}
          </p>
          {/* div for size */}

          {productData.sizes && (
            <div>
              <p className="text-md font-medium mb-4">Select Size</p>
              <div className="flex gap-4 ">
                {productData.sizes.map((size) => (
                  <button
                    onClick={() => setSelectedSize(size)}
                    className={`cursor-pointer py-2 px-4 text-center  ${selectedSize === size ? "bg-black border-black text-white" : "bg-gray-100 border-gray-300"}`}
                    key={size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* add to cart button */}
          <button className="w-full lg:w-1/2 border  bg-black text-white cursor-pointer py-2 px-3 mt-4">
            Add to cart
          </button>
          {/* line */}
          <Line></Line>
          <div className="flex flex-col gap-0.5 text-gray-400 text-sm ">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>

        {/* right side- ends */}
      </div>

      {/* related products  */}

      {/* <Title text1="related" text2="products" className="py-10" />  */}

      <div className="mt-8 ">
        <p className="text-2xl font-medium mb-4">Related Products</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
          {relatedProduct.map((item) => (
            <ProductItems
              key={item._id}
              _id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

      {/* related product ends */}
    </>
  );
}
