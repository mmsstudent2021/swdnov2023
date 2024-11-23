import { Link } from "react-router-dom";
import ButtonSpinner from "../../../components/ButtonSpinner";
import { useCreateProduct } from "../hooks/useCreateProduct";

const ProductCreateForm = () => {
  const { createProduct, register, handleSubmit, isSubmitting, errors } =
    useCreateProduct();

  return (
    <div className="rounded-lg w-full md:w-1/2">
      <h1 className="text-3xl font-bold mb-3">Create New Product</h1>
      <p className="mb-10 text-stone-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias
        necessitatibus quos earum itaque.
      </p>
      <form onSubmit={handleSubmit(createProduct)}>
        <div className="mb-5">
          <label
            htmlFor="product_name"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
            placeholder="e.g., apple"
          />
          {errors.product_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.product_name.type === "required"
                ? "Product name is required"
                : errors.product_name.type === "minLength"
                ? "Product name must be greater than 3 characters"
                : "Product name must be less than 30 characters"}
            </p>
          )}
        </div>
        <div className="mb-8">
          <label
            htmlFor="price"
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
            } text-gray-900 text-sm rounded-lg block w-full p-2.5`}
            placeholder="e.g., 500"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">
              {errors.price.type === "required"
                ? "Product price is required"
                : errors.price.type === "min"
                ? "Product price must be at least 100"
                : "Product price must be less than 10000"}
            </p>
          )}
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("all_correct")}
            required
            id="all-correct"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="all-correct"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Make sure all fields are correct
          </label>
        </div>

        <div className="flex items-center mb-4">
          <input
            {...register("back_to_product_list")}
            id="back-to-product-list"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="back-to-product-list"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Back to Product List after saving
          </label>
        </div>

        <Link
          to="/product"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white bg-blue-700 disabled:pointer-events-none disabled:opacity-80 inline-flex items-center justify-center gap-3 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5"
        >
          <span>Save Product</span>
          {isSubmitting && <ButtonSpinner />}
        </button>
      </form>
    </div>
  );
};

export default ProductCreateForm;
