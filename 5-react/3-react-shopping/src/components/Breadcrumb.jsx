import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPageTitle }) => {
  return (
    <div className=" w-full flex gap-3 mb-5">
      <Link to={"/"} className=" text-gray-500">
        Home
      </Link>
      <span className=" text-gray-500">/</span>
      <p>{currentPageTitle}</p>
    </div>
  );
};

export default BreadCrumb;
