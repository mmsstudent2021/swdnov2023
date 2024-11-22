import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { register as accountRegister } from "../../../services/auth";

const useRegister = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const res = await accountRegister(data);
      const json = await res.json();

      if (res.status === 200) {
        toast.success("Register Successfully");
        navigate("/login");
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("An error occurred during registration.");
      console.error(error);
    }
  };

  return {
    handleRegister,
  };
};

export default useRegister;
