import useCookie from "react-use-cookie";
import Container from "../components/Container";
import Breadcrumb from "../components/BreadCrumb";
import {
  HiCamera,
  HiEnvelope,
  HiLockOpen,
  HiPencil,
  HiPencilSquare,
  HiUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Form, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useUserStore from "../stores/useUserStore";
import { useRef } from "react";

const UserProfileChangeImagePage = () => {
  const [userCookie, setUserCookie] = useCookie("user");
  const { name, email, profile_image } = JSON.parse(userCookie);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [token] = useCookie("my_token");

  const { user, setUser } = useUserStore();

  const fileInputRef = useRef(null);

  const handleUpdateImage = async (event) => {
    // console.log(event.target.files[0]);
    const formData = new FormData();
    formData.append("profile_image", event.target.files[0]);

    const res = await fetch(
      import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
      {
        method: "POST",
        body: formData,
        headers: {
          //   "Content-Type": "application/json",
          //   "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const json = await res.json();

    console.log(json);

    if (res.status === 200) {
      toast.success(json.message);
      setUserCookie(JSON.stringify(json.user));
      setUser(json.user);
      reset();
    } else {
      toast.error(json.message);
    }
  };

  const handleImageUploader = () => {
    console.log(fileInputRef.current);
    fileInputRef.current.click();
  };

  return (
    <section>
      <Container>
        <Breadcrumb
          links={[{ title: "User Profile", path: "/dashboard/user-profile" }]}
          currentPageTitle={"Change Photo"}
        />

        <div className="border p-10">
          <div className=" relative inline-block">
            <img
              className=" size-32 rounded-lg mb-5"
              src={
                profile_image
                  ? profile_image
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="user photo"
            />
            <button
              onClick={handleImageUploader}
              className=" absolute  bottom-0 right-0 translate-x-1/2 -translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-200"
            >
              <HiCamera />
            </button>
          </div>

          <form
            // onSubmit={handleSubmit(handleUpdateImage)}
            className=" flex gap-5 items-end "
          >
            <div className=" ">
              {/* <label
                htmlFor="profile_image"
                className={`block mb-2 text-sm font-medium ${
                  errors.profile_image ? "text-red-500" : "text-gray-900"
                } dark:text-white`}
              >
                Update Your Name
              </label> */}

              <input
                onChange={handleUpdateImage}
                ref={fileInputRef}
                // {...register("profile_image", {
                //   required: true,
                // })}
                className=" hidden w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="profile_image"
                type="file"
              />

              {errors.profile_image?.type === "required" && (
                <p className=" text-red-500 text-sm mt-1">
                  Product name is required
                </p>
              )}
            </div>

            {/* <button
              type="submit"
              className="inline-flex gap-3 items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
            >
              Update
            </button> */}
          </form>
        </div>
      </Container>
    </section>
  );
};

export default UserProfileChangeImagePage;
