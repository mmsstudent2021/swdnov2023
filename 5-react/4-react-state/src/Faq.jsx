import React, { useState } from "react";

const Faq = ({ faq: { id, question, answer, isOpen }, toggleQuestion }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => {
  //   console.log("open answer");
  //   setOpen(true);
  // };

  const handleToggle = () => {
    // setOpen(!open);
    toggleQuestion(id);
  };
  return (
    <div className="">
      <div
        onClick={handleToggle}
        className="flex justify-between items-center select-none active:scale-90 duration-200 border border-black p-5"
      >
        <h1 className={` text-xl ${isOpen === false ? "" : " font-bold"}`}>
          {question}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 duration-300 ${
            isOpen === false ? "" : "rotate-180"
          } `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </div>
      <p className={` bg-gray-200 p-5 ${isOpen === false ? "hidden" : ""}`}>
        {answer}
      </p>
    </div>
  );
};

export default Faq;
