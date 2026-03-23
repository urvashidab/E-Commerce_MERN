import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Line from "../components/Line";
import Title from "../components/Title";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    currency,
    deleteFromCart,
    deliveryFees,
    cartItems,
    tax,
    updateCartQuantity,
  } = useContext(ProductContext);

  // to find total number of items in cart
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // to find the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const taxAmount = (totalPrice * tax) / 100;

  // free delivery above 2000
  const finalDeliveryFees = totalPrice >= 2000 ? 0 : deliveryFees;

  const deliveryAmount =
    totalPrice >= 2000 ? "FREE" : `${currency}${deliveryFees}`;

  const grandTotal = totalPrice + finalDeliveryFees + taxAmount;

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
              {totalItems === 1 ? "item )" : "items )"}
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
                      <button
                        disabled={item.quantity === 1}
                        onClick={() =>
                          updateCartQuantity(
                            item._id,
                            item.size,
                            item.quantity - 1,
                          )
                        }
                        className="border px-2 py-1 rounded border-gray-300 cursor-pointer hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateCartQuantity(
                            item._id,
                            item.size,
                            item.quantity + 1,
                          )
                        }
                        className="border px-2 py-1 rounded border-gray-300 cursor-pointer hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    {/* remove button */}
                    <button
                      onClick={() => deleteFromCart(item._id, item.size)}
                      className="text-xl text-red-500 cursor-pointer  hover:text-black"
                    >
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
              <p>{totalPrice.toFixed(2)}</p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* {totalPrice < 2000 && (
            <p className="text-sm text-gray-500">
              Add {currency}
              {(2000 - totalPrice).toFixed(2)} more for FREE delivery
            </p>
          )} */}

          {/* 3: deliver ------- */}
          <div className="flex justify-between">
            <p>Delivery</p>
            {/* total */}
            <div className="flex gap-1">
              <p
                className={
                  deliveryAmount === "FREE" ? "text-red-400 font-medium" : ""
                }
              >
                {deliveryAmount}
              </p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* 4: tax 8%------ */}
          <div className="flex justify-between">
            <p>Tax</p>
            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>{taxAmount.toFixed(2)}</p>
            </div>
          </div>
          <hr className="my-2 text-gray-300" />
          {/* 5: total------ */}
          <div className="flex justify-between text-lg font-semibold">
            <p>Grand total</p>
            {/* total */}
            <div className="flex gap-1">
              <span>{currency}</span>
              <p>{grandTotal.toFixed(2)}</p>
            </div>
          </div>
          {/* button */}
          <Link to="/placeorder">
            <button className="w-full border bg-black text-white cursor-pointer hover:bg-gray-700 py-2 px-3 mt-4">
              CHECKOUT
            </button>
          </Link>

          {/* right side end */}
        </div>
      </div>
    </>
  );
}
