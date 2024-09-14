import React from "react";
import Breadcrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const SalePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Sale Module"}  />
      </Container>
    </section>
  );
};

export default SalePage;
