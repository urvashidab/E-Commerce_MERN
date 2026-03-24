import { useContext } from "react";
import Line from "../components/Line";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const OrderConfirmation = () => {
  const { currency, deliveryFees, orderItems, tax, orderID } =
    useContext(ProductContext);

  // date
  const orderDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const totalPrice = orderItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );

  // free delivery above 2000
  const finalDeliveryFees = totalPrice >= 2000 ? 0 : deliveryFees;

  const deliveryAmount =
    totalPrice >= 2000 ? "FREE" : `${currency}${deliveryFees}`;

  const taxFees = (totalPrice * tax) / 100;

  const grandTotal = taxFees + totalPrice + finalDeliveryFees;
  const totalItems = orderItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <>
      <Line />

      {/* top bar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10    py-10   ">
        {/* left side */}

        <div className="col-span-2 flex flex-col  justify-start gap-6 ">
          {/* thank you */}
          <h1 className="font-bold text-center text-xl md:text-3xl lg:text-4xl tracking-wider">
            Thank you for your order
          </h1>

          <p className="text-sm">
            Your order has been confirmed and you will receive an order
            confirmation email shortly.
          </p>
          <p className=" text-sm">Estimated delivery: 3–5 business days</p>

          {/* details */}
          <div className="flex flex-col gap-2 w-full lg:w-1/3 text-sm ">
            <div className="flex justify-between font-bold text-red-500 ">
              <p>Order Number</p>
              <p>{orderID}</p>
            </div>
            {/* date */}
            <div className="flex justify-between ">
              <p>Order Date</p>
              <p>{orderDate}</p>
            </div>
          </div>

          {/* address */}
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-bold">Shipping Address:</p>
            <p>John Doe</p>
            <p>Patiala, Punjab</p>
            <p>India</p>
          </div>

          {/* payment selected */}
          <div className="flex gap-6 font-bold">
            <p>Payment Method:</p>
            <p>UPI</p>
          </div>

          {/* items-details */}
          <div className="flex flex-col gap-4 border p-2 rounded border-gray-200">
            <div className="flex gap-6 font-bold">
              <p className="font-semibold">
                <span>Total </span>
                {`${totalItems}`}
                {totalItems === 1 ? " item" : " items "}
              </p>
            </div>
            {/* items-photo */}
            {orderItems.map((item) => (
              <div
                key={item._id + item.size}
                className="flex gap-4 text-gray-500 text-sm "
              >
                <img className="w-20 h-20" src={item.image[0]}></img>
                <div className="flex flex-col">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.size}</p>
                  <p>{item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* help */}
          <div className="flex justify-between text-sm ">
            <div className="flex gap-1">
              <p className="text-gray-400 ">Need Help?</p>
              <NavLink to="/contact">
                <p className="text-blue-600 underline">Contact Us</p>
              </NavLink>
            </div>
            {/* button for continue shopping */}
            <NavLink to="/collection">
              <button className=" border border-black bg-black text-white cursor-pointer hover:bg-white hover:text-black transition py-3 px-12  tracking-wide">
                Continue Shopping
              </button>
            </NavLink>
          </div>

          {/* left side ends */}
        </div>

        {/* -------- */}
        {/* right side */}
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
              <p>{taxFees.toFixed(2)}</p>
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

          {/* right side end */}
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
