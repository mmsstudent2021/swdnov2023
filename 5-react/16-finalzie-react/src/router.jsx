import { lazy } from "react";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter } from "react-router-dom";

const DashboardPage = lazy(() => import("./pages/DashboardPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.jsx"));
const SalePage = lazy(() => import("./pages/SalePage.jsx"));
const VoucherPage = lazy(() => import("./pages/VoucherPage.jsx"));
const ProductCreatePage = lazy(() => import("./pages/ProductCreatePage.jsx"));
const ProductEditPage = lazy(() => import("./pages/ProductEditPage.jsx"));
const VoucherDetailPage = lazy(() => import("./pages/VoucherDetailPage.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/product/create",
        element: <ProductCreatePage />,
      },
      {
        path: "/product/edit/:id",
        element: <ProductEditPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
      {
        path: "/voucher/detail/:id",
        element: <VoucherDetailPage />,
      },
    ],
  },
]);

export default router;
