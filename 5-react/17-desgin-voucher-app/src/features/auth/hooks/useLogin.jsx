import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import toast from "react-hot-toast";
import { login } from "../../../services/auth";

const useLogin = () => {
  const navigate = useNavigate();
  const [token, setToken] = useCookie("my_token");
  const [userCookie, setUserCookie] = useCookie("user");

  const handleLogin = async (data) => {
    try {
      const res = await login(data);
      const json = await res.json();

      if (res.status === 200) {
        toast.success("Login Successfully");
        setToken(json.token);
        setUserCookie(JSON.stringify(json.user));
        navigate("/dashboard");
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("An error occurred during login.");
      console.error(error);
    }
  };

  return {
    handleLogin,
  };
};

export default useLogin;
