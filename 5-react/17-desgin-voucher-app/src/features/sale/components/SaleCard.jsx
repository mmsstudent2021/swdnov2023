import React from "react";
import ProductSelectForm from "./ProductSelectForm";
import SaleProductTable from "./SaleProductTable";
import SaleInformation from "./SaleInformation";

const SaleCard = () => {
  return (
    <div className=" grid grid-cols-4 gap-5">
      <div className=" col-span-3">
        <ProductSelectForm />
        <SaleProductTable />
      </div>
      <div className=" col-span-1">
        <SaleInformation />
      </div>
    </div>
  );
};

export default SaleCard;
