import React, { useState } from "react";
import {
  AdjustmentsIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardListIcon,
  RefreshIcon,
  SparklesIcon,
  TruckIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import Modal from "../../components/Modal";
import ReviewModal from "../../components/ReviewModal";
function Orders() {
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");
  return (
    <div className=" col-span-full xl:col-span-12 bg-white shadow-lg w-full rounded-md border border-slate-200 p-3">
      <div className="w-full">
        <div className="py-4 flex flex-row  text-gray-600 items-center space-x-2">
          <p className="text-xl font-medium">Milo </p>
          <div className="cursor-pointer font-medium text-sm bg-green-500 w-max text-white rounded-full text-center  hover:text-gray-200 flex justify-center  items-center py-1 px-3">
            Recieved
          </div>
          <div className="cursor-pointer font-medium text-sm bg-red-500 w-max text-white rounded-full text-center  hover:text-gray-200 flex justify-center  items-center py-1 px-3">
            Cancel
          </div>
          <div
            onClick={() => {
              setOpen(!open);

              setComp(<ReviewModal />);
            }}
            className="cursor-pointer font-medium text-sm bg-blue-500 w-max text-white rounded-full text-center  hover:text-gray-200 flex justify-center  items-center py-1 px-3"
          >
            Review
          </div>
          {/* <XCircleIcon className="w-8" /> */}
        </div>
        <ol className="items-center sm:flex">
          <li className="relative mb-6  sm:mb-0">
            <div className="flex items-center">
              <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                <ClipboardListIcon className="h-8 text-white" />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
            </div>
            <div className="mt-3 group sm:pr-8">
              <div className="flex  flex-row items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900 ">Order</h3>
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

      {/* <div>
        <div className="py-4 flex flex-row text-gray-600 items-center space-x-2">
          <p className="text-xl font-medium">Order 2</p>
          <XCircleIcon className="w-8" />
        </div>
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
                <h3 className="text-lg font-semibold text-gray-900 ">Order</h3>
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
              <div className="flex z-10 justify-center items-center w-max h-max p-2 bg-green-400 rounded-full ring-0 ring-white ">
                <SparklesIcon className="h-8 text-white" />
              </div>
              <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <div className="flex flex-row items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  Production
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

      </div> */}

      <Modal open={open} onClose={() => setOpen(false)}>
        {comp}
      </Modal>
    </div>
  );
}

export default Orders;
