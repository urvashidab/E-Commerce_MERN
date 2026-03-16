import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

export default function ProductItems({ _id, image, name, price }) {
  const { currency } = useContext(ProductContext);

  return (
    <Link
      to={`/product/${_id}`}
      className="flex flex-col gap-2 justify-start cursor-pointer"
    >
      {/* image */}
      <div className="overflow-hidden rounded">
        <img
          loading="lazy"
          className="hover:scale-105 transition-transform duration-200"
          src={image[0]}
          alt={name}
        />
      </div>

      {/* name of product */}
      <p className="text-sm">{name}</p>

      {/* price od product */}
      <p className="text-sm font-semibold">
        {currency}
        {price}
      </p>
    </Link>
  );
}
