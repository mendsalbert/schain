import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      {/* layout */}
      <div className="font-Montserrat mx-6 relative">
        <div className="fixed w-full left-0 -top-2">
          <img src={"/images/navector.svg"} className="w-full " />
          <div className="absolute px-6 py-5 top-0 w-full flex flex-row justify-between items-center">
            <img src={"/images/logo.svg"} className="w-24" />
            <div
              onClick={() => {}}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-center w-max   px-6 py-2 rounded-full cursor-pointer text-white"
            >
              Connect
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
