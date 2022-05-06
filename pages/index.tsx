import React from "react";

type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      {/* layout */}
      <div className="font-Montserrat mx-6 relative">
        <div className="fixed top-0 left-0">
          <img src={"/images/navector.svg"} className="w-full " />
          <div className="fixed mx-6 py-4 top-0 flex flex-row justify-between">
            <img src={"/images/logo.svg"} className="w-24" />
            <div
              onClick={() => {}}
              className="  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-center w-full   px-6 py-3 rounded-full cursor-pointer text-white"
            >
              Connect
            </div>
            {/* <p>fdsdf</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
