import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import VoucherList from "../components/VoucherList";

const VoucherPage = () => {
  return (
    <section>
      <Breadcrumb currentPageTitle={"Voucher Module"} />
      <VoucherList />
    </section>
  );
};

export default VoucherPage;
