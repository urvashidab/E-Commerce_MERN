import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Line from "../components/Line";

export default function Cart() {
  const { products, currency, deliveryFees, cartItems } =
    useContext(ProductContext);

  return (
    <>
      <Line />
      <div></div>
    </>
  );
}
