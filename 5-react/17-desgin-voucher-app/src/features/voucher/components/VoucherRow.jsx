import React, { useState } from "react";
import {
  HiMiniTrash,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
  HiTrash,
} from "react-icons/hi2";
import { useSWRConfig } from "swr";

import { Link } from "react-router-dom";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import ShowDateTime from "../../../components/ShowDateTime";
import Avatar from "react-avatar";
import { LuArrowRight, LuCalendar } from "react-icons/lu";
import { destroyVoucher } from "../../../services/voucher";

bouncy.register();

const VoucherRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    customer_email,
    sale_date,
    total,
    tax,
    created_at,
    updated_at,
  },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    try {
      setIsDeleting(true);

      const res = await destroyVoucher(id);
      const json = await res.json();

      if (res.ok) {
        toast.success(json.message);
        mutate(import.meta.env.VITE_API_URL + `/vouchers`);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("An error occurred while deleting the product.");
      console.error("Error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
      >
        <p className=" text-gray-950">{voucher_id}</p>
        <span className=" inline-flex gap-1 text-xs items-center">
          {" "}
          <LuCalendar /> {sale_date}
        </span>
      </th>
      <td className="px-6 py-4 ">
        <div className=" flex gap-2">
          <Avatar
            name={customer_name}
            round={true}
            size="40"
            textSizeRatio={2}
          />
          <div className="">
            <p className=" text-gray-950">{customer_name}</p>
            <p className=" text-xs text-gray-500">{customer_email}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-end">{tax}</td>
      <td className="px-6 py-4 text-end">{total}</td>
      <td className="px-6 py-4 text-end">
        <ShowDateTime timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <ShowDateTime timestamp={updated_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            onClick={handleDeleteBtn}
            className="size-10 flex justify-center items-center text-sm font-medium text-red-600 bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            {isDeleting ? (
              <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
            ) : (
              <HiOutlineTrash />
            )}
          </button>

          <Link
            to={`/dashboard/voucher-detail/${id}`}
            className="size-10 flex justify-center items-center text-sm font-medium text-stone-900 bg-white border border-gray-200 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <LuArrowRight />
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default VoucherRow;
