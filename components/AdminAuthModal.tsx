import React, { useState, useEffect } from "react";
import { productData } from "../utils/sample-data";

const AdminAuthModal = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div className="p-5 font-Montserrat overflow-auto">
        <div className="py-3 space-y-3">
          <input
            type="text"
            required={true}
            className="w-full py-3 outline-none ring-2 rounded-lg p-3"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="password"
            required={true}
            className="w-full py-3 outline-none ring-2 rounded-lg p-3"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-center cursor-pointer text-white">
            Log In
          </div>
        </div>
      </div>
    </>

    // </form>
  );
};

export default AdminAuthModal;
