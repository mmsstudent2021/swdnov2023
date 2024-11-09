import Container from "../../../components/Container";
import useUserStore from "../../../stores/useUserStore";

const Header = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <header className=" mb-5">
      <Container>
        <div className=" flex justify-between items-center">
          <div className="">
            <h1 className="text-3xl font-bold">Voucher App</h1>
            <p className=" text-stone-500">MMS Software</p>
          </div>
          <div className=" flex gap-3 items-center">
            <img
              src={
                profile_image
                  ? profile_image
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="user photo"
              className="border-2 border-white shadow-sm size-12 rounded-full object-cover object-top"
            />
            <div>
              <h1 className="text-lg font-bold">{name}</h1>
              <p className=" text-sm text-stone-500">{email}</p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
