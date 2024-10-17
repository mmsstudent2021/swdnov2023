import React from "react";
import { HiArrowLeft, HiArrowLongLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = ({
  links: { prev, next },
  meta: { total, to, from },
  updateFetchUrl,
}) => {
  const handleNextBtn = async () => {
    updateFetchUrl(next);
  };

  const handlePrevBtn = async () => {
    updateFetchUrl(prev);
  };

  return (
    <div className="flex justify-between items-center px-6">
      {/* Help text */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      {/* Buttons */}
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={!prev}
          onClick={handlePrevBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowLeft />
        </button>
        <button
          disabled={!next}
          onClick={handleNextBtn}
          className="flex items-center justify-center size-10 text-sm font-medium text-stone-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
        >
          <HiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
