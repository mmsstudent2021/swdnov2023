import React, { useState } from "react";

import {
  HiComputerDesktop,
  HiMiniTrash,
  HiOutlineArrowLongLeft,
  HiOutlineArrowLongRight,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";

import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

bouncy.register();
const VoucherListRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    total,
    sale_date,
    created_at,
  },
}) => {
  // console.log(id);

  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);

    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher deleted successfully");
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
  };
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4 text-nowrap">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white flex flex-col"
      >
        <span className=" text-stone-600">{customer_name}</span>
        <span className=" text-sm ">{customer_email}</span>
      </th>

      <td className="px-6 py-4 text-end">{total}</td>
      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex  rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
          <Link
            to={`/voucher/detail/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <HiOutlineArrowLongRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
