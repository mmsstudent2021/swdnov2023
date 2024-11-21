import { lazy } from "react";
const UserProfilePage = lazy(() =>
  import("../features/user-profile/pages/UserProfilePage")
);
const PasswordChangePage = lazy(() =>
  import("../features/user-profile/pages/PasswordChangePage")
);
const ProfileNameChangePage = lazy(() =>
  import("../features/user-profile/pages/ProfileNameChangePage")
);
const ProfileImageChangePage = lazy(() =>
  import("../features/user-profile/pages/ProfileImageChangePage")
);

const userProfileRoute = [
  {
    path: "user-profile",
    element: <UserProfilePage />,
  },
  {
    path: "user-profile/change-password",
    element: <PasswordChangePage />,
  },
  {
    path: "user-profile/change-name",
    element: <ProfileNameChangePage />,
  },
  {
    path: "user-profile/change-photo",
    element: <ProfileImageChangePage />,
  },
];

export default userProfileRoute;
