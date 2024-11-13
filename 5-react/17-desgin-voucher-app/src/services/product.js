import { getCookie } from "react-use-cookie";

export const storeProduct = (product_name, price) => {
  return fetch(import.meta.env.VITE_API_URL + "/products", {
    method: "POST",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

export const destroyProduct = (id) => {
  return fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

export const updateProduct = (id, product_name, price) => {
  return fetch(import.meta.env.VITE_API_URL + "/products/" + id, {
    method: "PUT",
    body: JSON.stringify({
      product_name: product_name,
      price: price,
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  });
};

export const fetchProducts = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${getCookie("my_token")}`,
    },
  }).then((res) => res.json());
