import Link from "next/link";
import React from "react";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  return json;
};

const Page = async () => {
  const products = await fetchProducts();

  return (
    <div className=" border mt-5 p-5 ">
      <h1 className="text-3xl font-bold">Product Page</h1>
      <div className="">
        {products.map((product) => (
          <div key={product.id} className=" border mt-5 p-5 ">
            <h2 className="text-xl mb-3 font-bold">{product.title}</h2>
            <div className=" flex justify-start gap-3 items-center">
              <p className="border bg-black text-white">{product.price}</p>
              <Link
                href={`/products/${product.id}`}
                className=" text-blue-500 underline"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
