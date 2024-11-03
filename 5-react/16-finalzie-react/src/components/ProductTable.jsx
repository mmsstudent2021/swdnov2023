import React, { useEffect, useState } from "react";

// setup function ✅
// clean up function ✅
// dependencies array

const ProductTable = () => {
  const [data, setData] = useState(null);
  const [limit, setLimit] = useState(10); // to 3
  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");

  console.log("Product Table Render");

  console.log("data", data);

  const fetchProducts = async () => {
    const res = await fetch(
      import.meta.env.VITE_API_URL +
        "/products" +
        `?limit=${limit}&page=${page}${q && `&q=${q}`}`
    );
    const json = await res.json();
    setData(json);
  };

  const handleResize = () => {
    console.log("window resize", window.innerWidth);
  };

  useEffect(() => {
    console.log("Product Table Mounted");
    // fetch(import.meta.env.VITE_API_URL + "/products")
    //   .then((res) => res.json())
    //   .then((json) => setData(json));
    fetchProducts();

    // window.addEventListener("resize", handleResize);
    return () => {
      //   window.removeEventListener("resize", handleResize);
      console.log("Product Table UnMounted");
    };
  }, [limit,page,q]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Product Table</h1>

      <ul>
        {data?.data?.map((product) => (
          <li key={product.id}>{product.product_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductTable;
