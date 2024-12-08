import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const json = await res.json();

  return (
    <div className=" border mt-5 p-5 ">
      {/* <h1 className="text-3xl font-bold">Product Detail - {id}</h1> */}
      <h3 className=" text-3xl font-bold">{json.title}</h3>

      <Image src={json.image} height={200} width={200} alt={json.title} />

      <p className=" mb-5">{json.description}</p>
      <p className=" ">{json.price}</p>
      <hr />
      <Link href={`/products`} className=" text-blue-500 underline">
        Back
      </Link>
    </div>
  );
};

export default Page;
