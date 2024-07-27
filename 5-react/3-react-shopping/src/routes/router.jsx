import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCart />,
      },
      {
        path: "product-detail",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
