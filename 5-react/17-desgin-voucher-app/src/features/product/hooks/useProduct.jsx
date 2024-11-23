import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import { fetchProducts } from "../../../services/product";
import { urlToParamObject } from "../../../utils/url";

const useProduct = () => {
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
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/products?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
    }
  }, 500);

  const clearSearchInput = () => {
    searchRef.current.value = "";
    setParams({});
    setFetchUrl(`${import.meta.env.VITE_API_URL}/products`);
  };

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
    clearSearchInput,
    updateFetchUrl,
    handleSort,
  };
};

export default useProduct;
