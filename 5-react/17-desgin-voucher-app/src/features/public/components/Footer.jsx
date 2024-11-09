import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-gray-200 antialiased dark:bg-gray-800 mt-auto">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        
        <div className="py-6 md:py-8">
          <div className="gap-4 space-y-5 xl:flex xl:items-center xl:justify-between xl:space-y-0">
            <a href="#" className="block">
              <img
                className="block h-8 w-auto dark:hidden"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
              />
              <img
                className="hidden h-8 w-auto dark:block"
                src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
              />
            </a>
            <ul className="flex flex-wrap items-center gap-4 text-sm text-gray-900 dark:text-white xl:justify-center">
              <li>
                <a href="#" className="font-medium hover:underline">
                  {" "}
                  Flowbite Express{" "}
                </a>
              </li>
              <li>
                <a href="#" className="font-medium hover:underline">
                  {" "}
                  Legal Notice{" "}
                </a>
              </li>
              <li>
                <a href="#" className="font-medium hover:underline">
                  {" "}
                  Product Listing Policy{" "}
                </a>
              </li>
              <li>
                <a href="#" className="font-medium hover:underline">
                  {" "}
                  Terms of Use{" "}
                </a>
              </li>
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2024{" "}
              <a href="#" className="hover:underline">
                Flowbite
              </a>
              , Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
