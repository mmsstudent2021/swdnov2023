import {
  HiEnvelope,
  HiLockOpen,
  HiPencil,
  HiPencilSquare,
  HiUser,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import useUserStore from "../../../stores/useUserStore";

const UserProfileCard = () => {
  const {
    user: { name, email, profile_image },
  } = useUserStore();

  return (
    <div className=" grid grid-cols-12 pt-10">
      <div className=" col-span-6  flex gap-5 flex-col ">
        <div className="flex items-end space-x-4">
          <div className=" relative">
            <img
              className=" size-32 rounded-lg"
              src={
                profile_image
                  ? profile_image
                  : "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              }
              alt="user photo"
            />

            <Link
              to={"user-change-image"}
              className=" absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 size-6 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-200"
            >
              <HiPencilSquare size={10} />
            </Link>
          </div>
          <div>
            <span className="mb-2 inline-block rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              Your Name
            </span>
            <div className=" flex gap-3 items-center">
              <h2 className="flex items-center text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-2xl">
                {name}
              </h2>
              <Link
                to="change-name"
                className=" size-6 flex justify-center items-center rounded-full bg-blue-600 text-white hover:bg-blue-200"
              >
                <HiPencilSquare size={10} />
              </Link>
            </div>
          </div>
        </div>
        <dl>
          <dt className="font-semibold text-gray-900 dark:text-white">
            Email Address
          </dt>
          <dd className="text-gray-500 dark:text-gray-400">{email}</dd>
        </dl>

        <button
          type="button"
          className=" w-1/2 flex gap-3 text-nowrap items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
        >
          <HiLockOpen /> Change Password
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
