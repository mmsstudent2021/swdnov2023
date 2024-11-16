import Container from "../../../components/Container";
import BreadCrumb from "../../../components/BreadCrumb";
import VoucherTable from "../components/VoucherTable";

const VoucherListPage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"Voucher Module"} />
        <VoucherTable />
      </Container>
    </section>
  );
};

export default VoucherListPage;
