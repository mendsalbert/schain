import { ClipboardListIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const Admin = (props: Props) => {
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row w-full">
        <div className="bg-gradient-to-b flex flex-col text-center items-center from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  h-screen">
          {/* <img src={"/images/logo.svg"} /> */}
          <div className="">
            <ClipboardListIcon className="h-10 text-white" />
            <p>Orders</p>
          </div>
        </div>
        <div className="bg-green-500 w-full h-screen">fsdfsdf</div>
      </div>
    </div>
  );
};

export default Admin;
