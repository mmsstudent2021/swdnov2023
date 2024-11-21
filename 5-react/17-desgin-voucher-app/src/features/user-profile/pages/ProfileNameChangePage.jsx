import BreadCrumb from "../../../components/BreadCrumb";
import Container from "../../../components/Container";
import ProfileNameChangeCard from "../components/ProfileNameChangeCard";

const ProfileNameChangePage = () => {
  return (
    <section>
      <Container>
        <BreadCrumb
          currentPageTitle={"Change Your Name"}
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
        />
        <ProfileNameChangeCard />
      </Container>
    </section>
  );
};

export default ProfileNameChangePage;
