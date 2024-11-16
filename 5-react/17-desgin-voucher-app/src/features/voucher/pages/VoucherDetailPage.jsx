import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";

const VoucherDetailPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Voucher Detail"}
          links={[{ title: "Voucher Module", path: "/vouchers" }]}
        />
      </Container>
    </section>
  );
};

export default VoucherDetailPage;
