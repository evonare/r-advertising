import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link href="#" className="flex items-center">
            {/* <img src="" className="h-6 mr-3 sm:h-9" alt="" /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ">
              R | Advertising
            </span>
          </Link>
        </div>
      </nav>
      <nav className=" bg-gray-50 dark:bg-gray-700 bg-gradient-to-r from-indigo-500 to-purple-500">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium ">
              <li>
                <Link href="/" className="text-white " aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link href="../about" className="text-white ">
                  About
                </Link>
              </li>
              <li>
                <Link href="../contact" className="text-white ">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar2;
