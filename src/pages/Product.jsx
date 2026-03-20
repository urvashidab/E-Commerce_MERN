import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function Product() {
  const { productID } = useParams();
  const { products } = useContext(ProductContext);

  return <div></div>;
}
