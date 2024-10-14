import React from "react";
import Container from "../components/Container";
import Breadcrumb from "../components/BreadCrumb";
import ProductCreateCard from "../components/ProductCreateCard";

const ProductCreatePage = () => {
  return (
    <section>
      <Container>
        <Breadcrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Product Module", path: "/product" }]}
        />
        <ProductCreateCard />
      </Container>
    </section>
  );
};

export default ProductCreatePage;
