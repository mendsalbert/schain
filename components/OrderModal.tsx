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
    <div className="p-5 font-Montserrat overflow-auto">
      <p className="text-center text-gray-500 text-lg">Add Order</p>
      <div className="py-3 space-y-3">
        <input
          type="text"
          required={true}
          onChange={(e) =>
            updateFormInput({ ...formInput, title: e.target.value })
          }
          className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          placeholder="Enter title "
        />
        <input
          type="text"
          required={true}
          onChange={(e) =>
            updateFormInput({ ...formInput, description: e.target.value })
          }
          className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          placeholder="Enter description"
        />
        <input
          type="number"
          onChange={(e) =>
            updateFormInput({ ...formInput, targetAmount: e.target.value })
          }
          className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          placeholder="Targeted Amount (ETH)"
          required={true}
        />
        <div>
          <label className="mt-6">Select category</label>
          <select
            placeholder="Select description"
            required={true}
            onChange={(e) =>
              updateFormInput({ ...formInput, category: e.target.value })
            }
            className="w-full py-3 outline-none ring-2 rounded-lg p-3"
          >
            <option value="education"></option>
            <option value="education">Education</option>
            <option value="disaster">Disaster</option>
            <option value="health">Health</option>
            <option value="famine">Famine</option>
          </select>
        </div>
        <div className="">
          <label className="mt-6">End date</label>
          <input
            required={true}
            type="date"
            onChange={(e) =>
              updateFormInput({ ...formInput, endDate: e.target.value })
            }
            className="w-full py-3 outline-none ring-2 rounded-lg p-3"
            placeholder="Enter amount manually"
          />
        </div>

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white">
          Continue
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
