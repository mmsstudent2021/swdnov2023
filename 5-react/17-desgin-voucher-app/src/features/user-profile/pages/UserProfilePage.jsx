
import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import UserProfileCard from "../components/UserProfileCard";

const UserProfilePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb currentPageTitle={"User Profile"} />
        <UserProfileCard />
      </Container>
    </section>
  );
};

export default UserProfilePage;
