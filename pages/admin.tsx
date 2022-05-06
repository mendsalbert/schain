import {
  AdjustmentsIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardListIcon,
  RefreshIcon,
  ReplyIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/outline";
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

          <div className="mt-16">
            <div>
              <p className="text-xl py-4 font-medium">Order 1</p>
              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                      <ClipboardListIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Order
                      </h3>
                      <CheckCircleIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                      <CheckIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Approved
                      </h3>
                      <CheckCircleIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <SparklesIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Production
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <AdjustmentsIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Testing
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <TruckIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Shipping
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div>
              <p className="text-xl py-4 font-medium">Order 1</p>
              <ol className="items-center sm:flex">
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                      <ClipboardListIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Order
                      </h3>
                      <CheckCircleIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                      <CheckIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Approved
                      </h3>
                      <CheckCircleIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <SparklesIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Production
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <AdjustmentsIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Testing
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
                <li className="relative mb-6 sm:mb-0">
                  <div className="flex items-center">
                    <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-gray-400 rounded-full ring-0 ring-white ">
                      <TruckIcon className="h-8 text-white" />
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                  </div>
                  <div className="mt-3 sm:pr-8">
                    <div className="flex flex-row items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 ">
                        Shipping
                      </h3>
                      <RefreshIcon className="h-6" />
                    </div>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      Order made on December 2, 2021 8:00PM
                    </time>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Order description
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
