import { EyeIcon } from "@heroicons/react/outline";
import React from "react";

function Orders() {
  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg w-full rounded-md border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex flex-row items-center">
        <h2 className="font-semibold text-slate-800">All Orders</h2>

        <select
          className="form-select appearance-none
      block
      w-max
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Default select example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Type</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Order date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantity</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Price</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm  font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Milo</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Beverage</div>
                </td>
                <td className="p-2">
                  <div className="text-center ">22/05/22</div>
                </td>
                <td className="p-2">
                  <div className="text-center">57</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$3,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">
                    <EyeIcon className="h-5 text-gray-600" />
                  </div>
                </td>
                <td className="p-2">
                  <span className=" px-2 py-2 rounded-full text-green-700 bg-green-100">
                    Recieved
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Milo</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Beverage</div>
                </td>
                <td className="p-2">
                  <div className="text-center ">22/05/22</div>
                </td>
                <td className="p-2">
                  <div className="text-center">57</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$3,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">
                    <EyeIcon className="h-5 text-gray-600" />
                  </div>
                </td>
                <td className="p-2">
                  <span className=" px-2 py-2 rounded-full text-red-700 bg-red-100">
                    Returned{" "}
                  </span>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">Milo</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Beverage</div>
                </td>
                <td className="p-2">
                  <div className="text-center ">22/05/22</div>
                </td>
                <td className="p-2">
                  <div className="text-center">57</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">$3,877</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">
                    <EyeIcon className="h-5 text-gray-600" />
                  </div>
                </td>
                <td className="p-2">
                  <span className=" px-2 py-2 rounded-full text-yellow-700 bg-yellow-100">
                    Pending{" "}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
