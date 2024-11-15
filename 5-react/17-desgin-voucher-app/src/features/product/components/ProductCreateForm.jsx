import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { tailspin } from "ldrs";
import toast from "react-hot-toast";
import { storeProduct } from "../../../services/product";
import LoadingButton from "../../../components/LoadingButton";

tailspin.register();

// Default values shown

const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    console.log(data);
    try {
      const res = await storeProduct(data.product_name, data.price);
      const json = await res.json();

      if (res.status !== 201) {
        toast.error(json.message);
        return;
      }

      toast.success("Product created successfully");

      reset();

      if (data.back_to_product_list) {
        navigate("/dashboard/products");
      }
    } catch (error) {
      toast.error("An error occurred while creating the product.");
      console.error("Error:", error);
    } finally {
      console.log("send");
    }
  };

  return (
    <div className="  rounded-lg w-full md:w-1/2">
      <h1 className=" text-3xl font-bold mb-3">Create New Product</h1>
      <p className=" mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className=" mb-5">
          <label
            htmlFor="first_name"
            className={`block mb-2 text-sm font-medium ${
              errors.product_name ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            New Product Name
          </label>
          <input
            type="text"
            {...register("product_name", {
              required: true,
              minLength: 3,
              maxLength: 30,
            })}
            className={`bg-gray-50 border ${
              errors.product_name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. apple"
          />
          {errors.product_name?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name is required
            </p>
          )}
          {errors.product_name?.type === "minLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name must be greater than 3 characters
            </p>
          )}
          {errors.product_name?.type === "maxLength" && (
            <p className=" text-red-500 text-sm mt-1">
              Product name must be less than 10 characters
            </p>
          )}
        </div>
        <div className=" mb-8">
          <label
            htmlFor="last_name"
            className={`block mb-2 text-sm font-medium ${
              errors.price ? "text-red-500" : "text-gray-900"
            } dark:text-white`}
          >
            Product Price
          </label>
          <input
            type="number"
            {...register("price", {
              required: true,
              min: 100,
              max: 10000,
            })}
            className={`bg-gray-50 border ${
              errors.price
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            } text-gray-900 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="eg. 500"
          />
          {errors.price?.type === "required" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price is required
            </p>
          )}
          {errors.price?.type === "min" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price must be greater than 100 characters
            </p>
          )}
          {errors.price?.type === "max" && (
            <p className=" text-red-500 text-sm mt-1">
              Product price must be less than 10000 characters
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct")}
            required
            id="all-correct"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all field are correct
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="back-to-product-list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to Product List after saving
          </label>
        </div>

        <Link
          to="/dashboard/products"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white bg-blue-700 disabled:opacity-80 disabled:pointer-events-none inline-flex gap-3 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Save Product</span>
          {isSubmitting && <LoadingButton />}
        </button>
      </form>
    </div>
  );
};

export default ProductCreateForm;
