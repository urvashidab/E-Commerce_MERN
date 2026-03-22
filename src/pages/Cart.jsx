import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Line from "../components/Line";
import Title from "../components/Title";

export default function Cart() {
  const { products, currency, deliveryFees, cartItems, tax } =
    useContext(ProductContext);

  // to find total number of items in cart
  let totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Line />
      {/* top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10  ">
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
          {cartItems.map((item) => {
            <div key={item._id}>
              <p>{item.name}</p>
            </div>;
          })}
          {/* left side end */}
        </div>

        {/* right side--width span-1-- order summery */}

        <div className="col-span-1 flex flex-col gap-4 bg-gray-50  border p-6 rounded-lg shadow-sm h-fit">
          {/* title */}
          <h1 className="font-bold  text-xl  tracking-wide">ORDER SUMMARY</h1>
          {/* 1: items total with price------- */}
          <div className="flex  justify-between mt-4">
            {/* total items */}
            <div className="flex gap-2">
              <span>{totalItems}</span>
              <p>{totalItems === 1 ? "item" : "items"}</p>
            </div>

            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>1000</p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
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
