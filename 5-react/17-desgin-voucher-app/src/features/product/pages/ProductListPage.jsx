import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductTable from "../components/ProductTable";

const ProductListPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Product Module"} />
        <ProductTable />
      </Container>
    </section>
  );
};

export default ProductListPage;
