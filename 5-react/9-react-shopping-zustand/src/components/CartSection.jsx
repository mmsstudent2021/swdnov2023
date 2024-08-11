import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const price = products.find(({ id }) => id === cv.productId).price;
    const cost = cv.quantity * price;
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <>
      <div className=" flex flex-col gap-5 h-full">
        
        {carts.length === 0 ? (
          <img
            src={emptyCartImg}
            className=" w-[200px] block mx-auto mt-10"
            alt="empty"
          />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}

        <div className=" absolute bottom-10 left-0 w-full bg-white">
          <Container className="px-5">
            <div className=" border-t border-black flex justify-end gap-10 py-3">
              <div className=" text-right">
                <p className=" text-gray-500">Total</p>
                <p className=" font-bold">{total.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Tax(10%)</p>
                <p className=" font-bold">{tax.toFixed(2)}</p>
              </div>
              <div className=" text-right">
                <p className=" text-gray-500">Net Total</p>
                <p className=" text-2xl font-bold">{netTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className=" text-end mb-5">
              <Link className=" border border-black px-4 py-2 ">Order Now</Link>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default CartSection;
