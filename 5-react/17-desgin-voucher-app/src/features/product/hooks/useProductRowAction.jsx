import { useState } from "react";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { destroyProduct } from "../../../services/product";

const useProductRowAction = (productId) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const deleteProduct = async () => {
    try {
      setIsDeleting(true);

      const res = await destroyProduct(productId);
      const json = await res.json();

      if (res.ok) {
        toast.success(json.message);
        mutate(import.meta.env.VITE_API_URL + `/products`);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the product.");
      console.error("Error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    isDeleting,
    deleteProduct,
  };
};

export default useProductRowAction;
