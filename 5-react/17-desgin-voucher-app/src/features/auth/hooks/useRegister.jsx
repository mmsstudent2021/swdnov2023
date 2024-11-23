import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { register as accountRegister } from "../../../services/auth";

const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    console.log(data);

    const res = await accountRegister(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Register Successfully");
      // console.log(json)
      navigate("/login");
    } else {
      toast.error(json.message);
    }
  };

  return {
    register,
    handleSubmit,
    handleRegister,
    isSubmitting,
  };
};

export default useRegister;
