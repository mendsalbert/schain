import { ClipboardListIcon, ReplyIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row  w-full">
        <div className="bg-gradient-to-b  space-y-10 flex p-4 flex-col text-center items-center from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  h-screen">
          <img src={"/images/logo.svg"} className="w-28 mt-6" />
          <div className="bg-[#ffffff81] p-4 rounded-lg">
            <ClipboardListIcon className="h-10 text-white" />
          </div>
          <div className="">
            <ReplyIcon className="h-8 text-white" />
          </div>
        </div>
        <div className="w-full px-10 mt-10 h-screen">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center space-x-2 ">
              <div className="bg-gray-500 rounded-md h-10 w-10"></div>
              <div>
                <p>0x5ffdsef..455fad</p>
                <p>User</p>
              </div>
            </div>
            <button className="bg-gradient-to-r  from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-6 py-2  rounded-lg cursor-pointer text-white">
              Make Order
            </button>
          </div>

          <div>
            <ol className="items-center sm:flex">
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.0.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 2, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.2.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on December 23, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
              <li className="relative mb-6 sm:mb-0">
                <div className="flex items-center">
                  <div className="flex z-10 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                    <svg
                      className="w-3 h-3 text-blue-600 dark:text-blue-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-3 sm:pr-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Flowbite Library v1.3.0
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Released on January 5, 2022
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Get started with dozens of web components and interactive
                    elements.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
