import { useContext } from "react";
import Line from "../components/Line";
import { ProductContext } from "../context/ProductContext";

export default function PlaceOrder() {
  const { currency } = useContext(ProductContext);
  return (
    <>
      <Line />

      {/* top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16   py-10 ">
        {/* left side----- delivery information---  */}
        <div className="flex flex-col gap-6  justify-start ">
          {/* title */}
          <h1 className="font-bold  text-lg md:text-xl lg:text-2xl  tracking-wider">
            SHIPPING ADDRESS
          </h1>

          {/* form */}
          <form action="" className="flex flex-col gap-4  mt-4">
            {/* name */}
            <input
              type="text"
              required
              placeholder="NAME"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
            ></input>

            {/* email */}
            <input
              type="email"
              required
              placeholder="E-MAIL"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
            ></input>
            {/* address */}
            <input
              type="text"
              required
              placeholder="ADDRESS"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
            ></input>
            <input
              type="text"
              placeholder="LANDMARK (Optional)"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
            ></input>
            {/* city state */}
            <div className=" flex  gap-8">
              <input
                type="text"
                required
                placeholder="CITY"
                className="w-1/2 border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
              ></input>
              <input
                type="text"
                required
                placeholder="STATE"
                className="w-1/2 border-b  mb-2 border-gray-400  py-2 px-2 outline-none  placeholder:text-gray-300"
              ></input>
            </div>
            {/* country */}
            <div className=" flex gap-8">
              <input
                type="text"
                required
                placeholder="POSTAL CODE"
                className="w-1/2 border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300"
              ></input>
              <input
                type="text"
                required
                placeholder="COUNTRY"
                className="w-1/2 border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
              ></input>
            </div>
            {/* phone */}
            <input
              type="number"
              required
              placeholder="TELEPHONE"
              className="border-b  mb-2 border-gray-400  py-2 px-2 outline-none placeholder:text-gray-300 "
            ></input>
          </form>

          {/* left side ends */}
        </div>

        {/* right side-- cart details */}
        {/* right side-- order summary */}
        <div className="flex flex-col gap-6 justify-start">
          {/* title */}
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl tracking-wider">
            ORDER SUMMARY
          </h1>

          {/* summary details */}
          <div className="flex flex-col gap-3 text-sm md:text-base">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{currency} 1000</p>
            </div>

            <div className="flex justify-between">
              <p>Delivery</p>
              <p>{currency} 10</p>
            </div>
            <p className="text-xs text-gray-500">
              Estimated delivery: 3–5 business days
            </p>

            <div className="flex justify-between">
              <p>Tax</p>
              <p>{currency} 22</p>
            </div>

            <hr className="border-gray-300 my-2" />

            <div className="flex justify-between font-semibold text-base md:text-lg">
              <p>Total</p>
              <p>{currency} 300</p>
            </div>
          </div>
          <hr className="border-gray-300 mt-2" />

          {/* payment section */}
          <div className="flex flex-col gap-3 mt-4">
            <p className="font-semibold tracking-wide">PAYMENT METHOD</p>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="accent-black cursor-pointer"
              />
              <span>UPI</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="accent-black cursor-pointer"
              />
              <span>Debit Card</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="accent-black cursor-pointer"
              />
              <span>Credit Card</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                className="accent-black cursor-pointer"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>

          {/* place order button */}
          <button className="w-fit self-start border border-black bg-black text-white cursor-pointer hover:bg-white hover:text-black transition py-3 px-12 mt-6 tracking-wide">
            PLACE ORDER
          </button>
        </div>
      </div>
    </>
  );
}
