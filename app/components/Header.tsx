import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import ButtonVTB from "./ButtonVTB";

export default function Header() {
  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b
       border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="flex md:order-2 items-center justify-between">
            <button
              type="button"
              className="flex  text-btnVtb border-2 border-btnVtb  hover:bg-[#dde2ed]
              focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-[14px] px-4 py-[5px] text-center 
              mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800 h-[34px] w-[157px] "
            >
                 <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-btnVtb mr-2"
          >
            <path
              d="M10.3 7.7C9.91 8.09 9.91 8.71 10.3 9.1L12.2 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H12.2L10.3 14.9C9.91 15.29 9.91 15.91 10.3 16.3C10.69 16.69 11.31 16.69 11.7 16.3L15.29 12.71C15.68 12.32 15.68 11.69 15.29 11.3L11.7 7.7C11.31 7.31 10.69 7.31 10.3 7.7ZM20 19H13C12.45 19 12 19.45 12 20C12 20.55 12.45 21 13 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13C12.45 3 12 3.45 12 4C12 4.55 12.45 5 13 5H20V19Z"
              fill="currentColor"
            ></path>
          </svg>
              ВТБ ОНЛАЙН
            </button>
            {/* <ButtonVTB/> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg> */}
            </button>
          </div>
          <div
            className="items-start border-b-[1px] justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 mr-36 text-[13px] font-medium border border-gray-100 rounded-lg
             bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800
              md:dark:bg-gray-900 dark:border-gray-700">
              <li className="text-[#adb2c1]">
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Частным лицам
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#adb2c1] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Самозанятым
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#adb2c1] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Малый и средний бизнес
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 pl-3 pr-4 text-[#adb2c1] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Крупный бизнес
                </Link>
              </li>
            </ul>

          </div>
    {/* <div className="border-b-[1px]  w-[100%] text-lineVtb "></div> */}
        </div>
    <div className="border-b-[1px]  w-[100%] text-lineVtb "></div>

      </nav>
    </>
  );
}
