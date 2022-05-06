import { ClipboardListIcon, ReplyIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row w-full">
        <div className="bg-gradient-to-b space-y-10 flex p-4 flex-col text-center items-center from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  h-screen">
          <img src={"/images/logo.svg"} className="w-24" />
          <div className="">
            <ClipboardListIcon className="h-10 text-white" />
          </div>
          <div className="">
            <ReplyIcon className="h-8 text-white" />
          </div>
        </div>
        <div className="bg-green-500 w-full h-screen">fsdfsdf</div>
      </div>
    </div>
  );
};

export default Admin;
