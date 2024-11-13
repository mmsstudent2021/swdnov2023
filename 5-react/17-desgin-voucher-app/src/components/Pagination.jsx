import React from "react";
import { HiArrowLeft, HiArrowLongLeft, HiArrowRight } from "react-icons/hi2";

const Pagination = ({
  links: { prev, next },
  meta: { total, to, from, links },
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
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        {links.map((link) => {
          return (
            <button
              key={link.label}
              disabled={!link.url}
              onClick={() => updateFetchUrl(link.url)}
              className={`${
                link.active
                  ? "bg-blue-700 text-white !hover:bg-blue-700"
                  : "bg-white "
              }
                flex items-center justify-center size-10 text-sm font-medium  border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
            >
              {link.label === "&laquo; Previous" ? (
                <HiArrowLeft />
              ) : link.label === "Next &raquo;" ? (
                <HiArrowRight />
              ) : (
                link.label
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
