import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className=" border border-black p-5 flex flex-col  items-start gap-5"
    >
      <img src={image} className=" h-40" alt="" />
      <p className=" font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className=" flex justify-between items-end w-full ">
        <p>{price}</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <button className=" text-sm border border-black bg-black text-white px-3 py-1">
            Added
          </button>
        ) : (
          <button className=" text-sm border border-black px-3 py-1">
            Add Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
