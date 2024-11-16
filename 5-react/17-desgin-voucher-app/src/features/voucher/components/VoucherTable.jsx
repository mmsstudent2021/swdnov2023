import { useEffect, useRef, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import useSWR from "swr";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import ProductLoader from "./VoucherLoader";
import ProductEmptyStage from "./VoucherEmptyStage";
import ProductRow from "./VoucherRow";
import { fetchProducts } from "../../../services/product";
import Pagination from "../../../components/Pagination";
import { urlToParamObject } from "../../../utils/url";
import Sortable from "../../../components/Sortable";
import VoucherLoader from "./VoucherLoader";
import VoucherEmptyStage from "./VoucherEmptyStage";
import VoucherRow from "./VoucherRow";
import { fetchVouchers } from "../../../services/voucher";
import { LuMonitor } from "react-icons/lu";

const VoucherTable = () => {
  const [params, setParams] = useSearchParams();

  const location = useLocation();

  const searchRef = useRef();

  useEffect(() => {
    if (params.get("q")) {
      searchRef.current.value = params.get("q");
    }
  }, []);

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers" + location.search
  );

  const { data, isLoading, error } = useSWR(fetchUrl, fetchVouchers);

  const handleSearchInput = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        `${import.meta.env.VITE_API_URL}/vouchers?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers`);
    }
  }, 500);

  const clearSearchInput = () => {
    setCurrentSearchValue("");
  };

  const updateFetchUrl = (url) => {
    setFetchUrl(url);
    setParams(urlToParamObject(url));
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    console.log(sortData);
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(`${import.meta.env.VITE_API_URL}/vouchers?${sortParams}`);
  };

  // if (isLoading) {
  //   return <ProductLoader />;
  // }

  // console.log(data);

  return (
    <div>
      <div className=" flex justify-between mb-3">
        <div className="">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
              onChange={handleSearchInput}
              ref={searchRef}
            />
          </div>
        </div>
        <div className="">
          <Link
            to="/dashboard/product-create"
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Sale
            <LuMonitor />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
        <table className="w-full text-sm text-left rtl:text-right text-stone-500 dark:text-stone-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-stone-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`voucher_id`}>
                  # ID
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by={`customer_name`}>
                  Customer
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-3">
                <Sortable
                  handleSort={handleSort}
                  sort_by={`tax`}
                  align={"right"}
                >
                  Tax
                </Sortable>
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                <Sortable
                  handleSort={handleSort}
                  sort_by={`total`}
                  align={"right"}
                >
                  Total
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Created
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <VoucherLoader />
            ) : data?.data?.length === 0 ? (
              <VoucherEmptyStage />
            ) : (
              data?.data?.map((voucher) => (
                <VoucherRow voucher={voucher} key={voucher.id} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {
        <Pagination
          links={data?.links}
          meta={data?.meta}
          updateFetchUrl={updateFetchUrl}
        />
      }
    </div>
  );
};

export default VoucherTable;
