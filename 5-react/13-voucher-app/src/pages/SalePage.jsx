import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import VoucherInfo from "../components/VoucherInfo";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"} />
        <VoucherInfo />
      </Container>
    </section>
  );
};

export default SalePage;
