import React from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import useRecordStore from "../stores/useRecordStore";

const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleForm = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products?limit=100",
    fetcher
  );

  const { register, handleSubmit, reset } = useForm();

  const { addRecord, changeQuantity, records } = useRecordStore();

  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;

    const isExited = records.find(
      ({ product: { id } }) => currentProductId === id
    );

    // console.log(isExited);

    if (isExited) {
      changeQuantity(isExited.product_id, data.quantity);
    } else {
      addRecord({
        product: currentProduct,
        product_id: currentProduct.id,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };


  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;  

  console.log(data)

  return (
    <div className=" bg-white p-5 rounded-lg border mb-5">
      <form action="#" id="recordForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-2">
            <label
              htmlFor="productSelect"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Your Product
            </label>
            <select
              id="productSelect"
              {...register("product")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
              <option value="">Select a product</option>
              {!isLoading &&
                data.data.map((product) => (
                  <option key={product.id} value={JSON.stringify(product)}>
                    {product.product_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantityInput"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Quantity
            </label>
            <input
              type="number"
              id="quantityInput"
              {...register("quantity")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="text-blue-700 w-full h-full flex justify-center items-center hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleForm;
