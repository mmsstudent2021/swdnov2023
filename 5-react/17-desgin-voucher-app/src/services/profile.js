import { getCookie } from "react-use-cookie";

const token = getCookie("my_token");

export const changeName = (data) => {
  return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
