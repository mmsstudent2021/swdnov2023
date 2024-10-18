import { Children } from "react";
import Layout from "./components/Layout.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import SalePage from "./pages/SalePage.jsx";
import VoucherPage from "./pages/VoucherPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import ProductCreatePage from "./pages/ProductCreatePage.jsx";
import ProductEditPage from "./pages/ProductEditPage.jsx";
import VoucherDetailPage from "./pages/VoucherDetailPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import UserProfileChangeNamePage from "./pages/UserProfileChangeNamePage.jsx";
import UserProfileChangeImagePage from "./pages/UserProfileChangeImagePage.jsx";
import UserProfileChangePasswordPage from "./pages/UserProfileChangePasswordPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "dashboard",
        element: <Layout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "product",
            element: <ProductPage />,
          },
          {
            path: "product/create",
            element: <ProductCreatePage />,
          },
          {
            path: "product/edit/:id",
            element: <ProductEditPage />,
          },
          {
            path: "sale",
            element: <SalePage />,
          },
          {
            path: "voucher",
            element: <VoucherPage />,
          },
          {
            path: "voucher/detail/:id",
            element: <VoucherDetailPage />,
          },
          {
            path: "user-profile",
            children: [
              {
                index: true,
                element: <UserProfilePage />,
              },
              {
                path: "user-change-name",
                element: <UserProfileChangeNamePage />,
              },
              {
                path: "user-change-image",
                element: <UserProfileChangeImagePage />,
              },
              {
                path: "user-change-password",
                element: <UserProfileChangePasswordPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
