import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { storeProduct } from "../../../services/product";

export const useCreateProduct = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm();

  const createProduct = async (data) => {
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
    }
  };

  return { createProduct, register, handleSubmit, isSubmitting, errors };
};
