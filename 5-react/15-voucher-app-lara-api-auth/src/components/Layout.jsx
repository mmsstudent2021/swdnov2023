import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../stores/useUserStore";
import { set } from "lodash";

const Layout = () => {
  const [token] = useCookie("my_token");
  const [userCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <main className=" flex flex-col min-h-screen p-5">
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
