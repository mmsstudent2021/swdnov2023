import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <main className=" flex flex-col min-h-screen p-5">
      <Header />

      <Suspense fallback={<div>Loading Page ...</div>}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
