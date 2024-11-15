import React from "react";
import { useSearchParams } from "react-router-dom";

const VoucherLoader = () => {
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;
  const numbers = [...Array(Number(currentLimit))];
  return numbers.map((_, i) => (
    <tr
      key={i}
      className="animate-pulse odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
    >
      <td className="px-6 py-4">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-20 "></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 mt-2 "></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="flex gap-1">
          <div className="size-10 rounded-full bg-gray-200  dark:bg-gray-700  "></div>

          <div className="">
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-20 "></div>
            <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 mt-2 "></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-20 ml-auto"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 mt-2 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-20 ml-auto"></div>
        <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-16 mt-2 ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex">
          <div className="h-8 w-8 bg-gray-200 rounded dark:bg-gray-700 mr-2"></div>
          <div className="h-8 w-8 bg-gray-200 rounded dark:bg-gray-700"></div>
        </div>
      </td>
    </tr>
  ));
};

export default VoucherLoader;
