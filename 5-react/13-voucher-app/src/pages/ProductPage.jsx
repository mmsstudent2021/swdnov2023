import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/BreadCrumb";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb currentPageTitle={"Product Module"}  />

        <ProductList />
      </Container>
    </section>
  );
};

export default ProductPage;
