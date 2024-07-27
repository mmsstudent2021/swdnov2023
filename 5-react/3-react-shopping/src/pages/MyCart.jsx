import React from "react";
import { Container } from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import CartSection from "../components/CartSection";

const MyCart = () => {
  return (
    <Container className="flex-grow">
      <BreadCrumb currentPageTitle="My Cart" />
      <CartSection />
    </Container>
  );
};

export default MyCart;
