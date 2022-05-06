import { ClipboardListIcon, ReplyIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row  w-full">
        <div className="bg-gradient-to-b space-y-10 flex p-4 flex-col text-center items-center from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  h-screen">
          <img src={"/images/logo.svg"} className="w-28" />
          <div className="bg-[#ffffff81] p-4 rounded-lg">
            <ClipboardListIcon className="h-10 text-white" />
          </div>
          <div className="">
            <ReplyIcon className="h-8 text-white" />
          </div>
        </div>
        <div className="bg-green-500 w-full p-4 h-screen">fsdfsdf</div>
      </div>
    </div>
  );
};

export default Admin;
