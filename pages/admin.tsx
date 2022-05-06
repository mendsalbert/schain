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
        <div className="w-full p-4 mt-6 h-screen">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center space-x-2 ">
              <div className="bg-gray-500 rounded-md h-10 w-10"></div>
              <div>
                <p>0x5ffdsef..455fad</p>
                <p>User</p>
              </div>
            </div>
            <div className="bg-gradient-to-r  from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-6 py-2  rounded-lg cursor-pointer text-white">
              Make Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
