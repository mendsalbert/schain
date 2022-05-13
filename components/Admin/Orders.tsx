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
import Modal from "../Modal";
import ReviewModal from "../ReviewModal";
import { timeConverter } from "../../lib/utilities";
function Orders({ order }) {
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("") as any;

  type orderType = {
    product?: string;
    orderdate?: any;
    confirmed?: boolean;
    confirmdate?: any;
    produced?: any;
    producedate?: any;
    tested?: any;
    testdate?: any;
    transported?: any;
    transportdate?: any;
  };
  // console.log(order);
  return (
    <div className=" col-span-full xl:col-span-12 bg-white shadow-lg w-full rounded-md border border-slate-200 p-3">
      <div className="w-full">
        {order.map((order: orderType) => (
          <>
            <div className="py-4 flex md:flex-row flex-col  text-gray-600 md:items-center md:space-x-2 space-y-2 md:space-y-0">
              <p className="text-xl font-medium">Milo </p>
              <div className="cursor-pointer font-medium text-sm bg-green-500 w-max text-white rounded-full text-center  hover:text-gray-200 flex justify-center  items-center py-1 px-3">
                Recieve order
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
                  <div
                    className={`flex z-10 justify-center items-center w-max h-max p-2 ${
                      order.orderdate.toString() > 1
                        ? "bg-green-400"
                        : "bg-gray-400"
                    } rounded-full ring-0 ring-white`}
                  >
                    <ClipboardListIcon className="h-8 text-white" />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                </div>
                <div className="mt-3 group sm:pr-8">
                  <div className="flex  flex-row items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900 ">
                      Order
                    </h3>
                    {order.orderdate.toString() > 1 ? (
                      <CheckCircleIcon className="h-6" />
                    ) : (
                      <RefreshIcon className="h-6" />
                    )}
                  </div>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Order made on {timeConverter(order.orderdate.toString())}
                  </time>
                </div>
              </li>
              <li className="relative mb-6  sm:mb-0">
                <div className="flex items-center">
                  <div
                    className={`flex z-10 justify-center items-center w-max h-max p-2 ${
                      order.confirmed ? "bg-green-400" : "bg-gray-400"
                    } rounded-full ring-0 ring-white`}
                  >
                    <CheckCircleIcon className="h-8 text-white" />
                  </div>
                  <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                </div>
                <div className="mt-3 group sm:pr-8">
                  <div className="flex  flex-row items-center space-x-2">
                    <h3 className="text-lg font-semibold text-gray-900 ">
                      Approved
                    </h3>
                    {order.confirmed ? (
                      <CheckCircleIcon className="h-6" />
                    ) : (
                      <RefreshIcon className="h-6" />
                    )}
                  </div>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {order.confirmed
                      ? `Order made on ${timeConverter(
                          order.confirmdate.toString()
                        )}`
                      : ""}
                  </time>
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
                </div>
              </li>
            </ol>
          </>
        ))}
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        {comp}
      </Modal>
    </div>
  );
}

export default Orders;
