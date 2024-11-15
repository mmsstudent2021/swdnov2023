import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import productRoute from "./productRoute";
import saleRoute from "./saleRoute";
import voucherRoute from "./voucherRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...productRoute,
      ...voucherRoute,
      ...saleRoute
    ],
  },
];

export default dashboardRoute;
