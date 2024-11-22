import { useEffect, useRef, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import useSWR from "swr";
import { debounce } from "lodash";
import { urlToParamObject } from "../../../utils/url";
import { fetchProducts } from "../../../services/product";

export const useProductHook = () => {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const searchRef = useRef();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/products" + location.search
  );

  useEffect(() => {
    if (params.get("q")) {
      searchRef.current.value = params.get("q");
    }
  }, [params]);

  const { data, isLoading, error } = useSWR(fetchUrl, fetchProducts);

  const handleSearchInput = debounce((e) => {
    const query = e.target.value;
    if (query) {
      setParams({ q: query });
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products?q=${query}`);
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, 500);

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
    setParams(urlToParamObject(url));
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products?${sortParams}`);
  };

  return {
    searchRef,
    data,
    isLoading,
    error,
    handleSearchInput,
    updateFetchUrl,
    handleSort,
  };
};
