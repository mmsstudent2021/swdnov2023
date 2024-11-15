import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Create Product"}
          links={[{ title: "Voucher Module", path: "/dashboard/vouchers" }]}
        />
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
