import { lazy, Suspense } from "react";
import PageLoading from "../components/PageLoading";

const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"));

const authRoute = [
  {
    path: "login",
    element: (
      <Suspense fallback={<PageLoading />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<PageLoading />}>
        <RegisterPage />
      </Suspense>
    ),
  },
];

export default authRoute;
