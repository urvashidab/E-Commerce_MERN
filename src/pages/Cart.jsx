import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Line from "../components/Line";
import Title from "../components/Title";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Cart() {
  const { products, currency, deliveryFees, cartItems, tax } =
    useContext(ProductContext);

  // to find total number of items in cart
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log(cartItems);
  return (
    <>
      <Line />
      {/* top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-10  ">
        {/* left side -- width span-2 --cart items- product details*/}
        <div className="col-span-2 flex   flex-col gap-4 justify-start ">
          {/* title */}
          <div className="flex gap-3 items-end">
            <h1 className="font-bold  text-2xl md:text-3xl lg:text-4xl  tracking-wider">
              YOUR BAG
            </h1>
            <p className="text-2xl text-gray-500">
              {`( ${totalItems} `}
              {totalItems === 1 ? "item" : "items )"}
            </p>
          </div>

          {/* cart items */}

          {cartItems.map((item) => (
            <div
              key={item._id + item.size}
              className="flex justify-between items-start border-b py-4 border-gray-200"
            >
              {/* cart items--- left side -- product details*/}
              <div className="flex gap-4">
                {/* product image */}
                <img
                  src={item.image[0]}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded"
                />

                {/* product details */}
                <div className="flex flex-col gap-1">
                  <p className="font-medium max-w-xs leading-snug">
                    {item.name}
                  </p>

                  {/* size */}
                  {item.size && (
                    <p className="text-gray-500 text-sm">Size: {item.size}</p>
                  )}

                  {/* quantity */}
                  <div className="flex items-center gap-8 mt-2">
                    <div className="flex items-center gap-3 ">
                      <button className="border px-2 py-1 rounded border-gray-300 cursor-pointer hover:bg-gray-200">
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button className="border px-2 py-1 rounded border-gray-300 cursor-pointer hover:bg-gray-200">
                        +
                      </button>
                    </div>
                    {/* remove button */}
                    <button className="text-lg text-red-500 cursor-pointer hover:bg-gray-200 hover:border hover:border-black max-w-fit p-2 text-left hover:text-black">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>

              {/* cart items--- right side -- price */}
              <div className="font-semibold">
                {currency}
                {item.price * item.quantity}
              </div>
            </div>
          ))}

          {/* left side ends */}
        </div>

        {/* right side--width span-1-- order summery */}

        <div className="col-span-1 flex flex-col gap-4 bg-gray-50  border p-6 rounded-lg shadow-sm h-fit">
          {/* title */}
          <h1 className="font-bold  text-xl  tracking-wide">ORDER SUMMARY</h1>

          {/* 2: Total ----------- */}
          <div className="flex justify-between">
            <p>Total</p>
            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>1000</p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* 3: deliver ------- */}
          <div className="flex justify-between">
            <p>Delivery</p>
            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>{deliveryFees}</p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* 4: tax 8%------ */}
          <div className="flex justify-between">
            <p>Tax</p>
            {/* total */}
            <div className="flex gap-1">
              <p>{tax}</p>
              <span>%</span>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* 5: total------ */}
          <div className="flex justify-between text-lg font-semibold">
            <p>Grand total</p>
            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>1000</p>
            </div>
          </div>
          {/* button */}
          <button className="w-full border bg-black text-white cursor-pointer hover:bg-gray-700 py-2 px-3 mt-4">
            CHECKOUT
          </button>
          {/* right side end */}
        </div>
      </div>
    </>
  );
}
