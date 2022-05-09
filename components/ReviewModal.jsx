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
      <p className="text-center text-gray-500 text-lg">
        Review and suggestions
      </p>
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

        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white">
          Submit
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
