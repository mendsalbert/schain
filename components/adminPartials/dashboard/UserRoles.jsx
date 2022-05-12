import { EyeIcon } from "@heroicons/react/outline";
import React from "react";
import Link from "next/link";
function UserRoles() {
  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg w-full rounded-md border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100 flex flex-row items-center space-x-4">
        <h2 className="font-semibold text-slate-800">Assign Roles</h2>
        <h2 className="font-semibold text-sm italic text-red-500">
          Already assigned roles will be overided
        </h2>
      </header>
      <div className="px-5 py-4 grid grid-cols-3 gap-4 ">
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="0x0..fab3e"
        />
        <div className="relative">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option>Select Role</option>
            <option>Manager</option>
            <option>Manufacturer</option>
            <option>Tester</option>
            <option>Transpoter</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="w-max">
          <div className="bg-gradient-to-r w-full from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white">
            Assign Role
          </div>
        </div>
        {/* <button>add role</button> */}
      </div>
    </div>
  );
}

export default UserRoles;
