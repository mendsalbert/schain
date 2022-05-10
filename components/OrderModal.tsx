import React, { useState, useEffect } from "react";

const OrderModal = (props) => {
  const [formInput, updateFormInput] = useState({
    title: "",
    description: "",
    category: "",
    targetAmount: "",
    endDate: "",
  });

  return (
    // <div className="p-5 font-Montserrat overflow-auto">
    //   <p className="text-center text-gray-500 text-lg">Add Order</p>
    //   <div className="py-3 space-y-3">
    //     <input
    //       type="text"
    //       required={true}
    //       onChange={(e) =>
    //         updateFormInput({ ...formInput, title: e.target.value })
    //       }
    //       className="w-full py-3 outline-none ring-2 rounded-lg p-3"
    //       placeholder="Enter title "
    //     />
    //     <input
    //       type="text"
    //       required={true}
    //       onChange={(e) =>
    //         updateFormInput({ ...formInput, description: e.target.value })
    //       }
    //       className="w-full py-3 outline-none ring-2 rounded-lg p-3"
    //       placeholder="Enter description"
    //     />
    //     <input
    //       type="number"
    //       onChange={(e) =>
    //         updateFormInput({ ...formInput, targetAmount: e.target.value })
    //       }
    //       className="w-full py-3 outline-none ring-2 rounded-lg p-3"
    //       placeholder="Targeted Amount (ETH)"
    //       required={true}
    //     />
    //     <div>
    //       <label className="mt-6">Select category</label>
    //       <select
    //         placeholder="Select description"
    //         required={true}
    //         onChange={(e) =>
    //           updateFormInput({ ...formInput, category: e.target.value })
    //         }
    //         className="w-full py-3 outline-none ring-2 rounded-lg p-3"
    //       >
    //         <option value="education"></option>
    //         <option value="education">Education</option>
    //         <option value="disaster">Disaster</option>
    //         <option value="health">Health</option>
    //         <option value="famine">Famine</option>
    //       </select>
    //     </div>
    //     <div className="">
    //       <label className="mt-6">End date</label>
    //       <input
    //         required={true}
    //         type="date"
    //         onChange={(e) =>
    //           updateFormInput({ ...formInput, endDate: e.target.value })
    //         }
    //         className="w-full py-3 outline-none ring-2 rounded-lg p-3"
    //         placeholder="Enter amount manually"
    //       />
    //     </div>

    //     <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white">
    //       Continue
    //     </div>
    //   </div>
    // </div>

    <form className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Password
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="password"
            placeholder="******************"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="text"
            placeholder="Albuquerque"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            State
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
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
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Zip
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-zip"
            type="text"
            placeholder="90210"
          />
        </div>
      </div>
    </form>
  );
};

export default OrderModal;
