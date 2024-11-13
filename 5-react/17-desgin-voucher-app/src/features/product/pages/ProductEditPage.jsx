import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductEditForm from "../components/ProductEditForm";

const ProductEditPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Edit Product"}
          links={[{ title: "Product Module", path: "/dashboard/products" }]}
        />
        <ProductEditForm />
      </Container>
    </section>
  );
};

export default ProductEditPage;
