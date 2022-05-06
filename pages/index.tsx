import React from "react";
import {
  AdjustmentsIcon,
  CheckIcon,
  ClipboardListIcon,
  SparklesIcon,
  TruckIcon,
} from "@heroicons/react/outline";
type Props = {};

const Index = (props: Props) => {
  return (
    <div>
      {/* layout */}
      <div className="font-Montserrat mx-4 relative">
        <div className="fixed w-full left-0 -top-2 z-50">
          <img src={"/images/navector.svg"} className="w-full " />
          <div className="absolute px-4 py-5 top-0 w-full flex flex-row justify-between items-center">
            <img src={"/images/logo.svg"} className="w-24" />
            <div
              onClick={() => {}}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-center w-max   px-6 py-2 rounded-full cursor-pointer text-white"
            >
              Connect
            </div>
          </div>
        </div>
        <div className="mt-36">
          <div>
            <img src="/images/landing.svg" className="w-full" />
          </div>
          <p className="text-left font-extrabold text-3xl italic text-[#0469A1]">
            Logistics Supply chain on Blockchain
          </p>
          <div className="bg-gradient-to-r italic from-[#0469A1] via-[#0469A1] mt-2 to-[#0C9FF2]  text-center w-max   px-6 py-2 rounded-full cursor-pointer text-white">
            Read More
          </div>
        </div>

        <div className="mt-10 w-full">
          <div>
            <img src="/images/avatar.svg" className="w-full" />
          </div>
          <p className="text-left font-extrabold text-3xl italic text-[#0469A1]">
            Make an order, sit and watch the supply chain processes
          </p>
          <div className="bg-gradient-to-r italic from-[#0469A1] via-[#0469A1] mt-2 to-[#0C9FF2]  text-center w-max   px-6 py-2 rounded-full cursor-pointer text-white">
            Make Order
          </div>
        </div>

        <div className="mt-16 h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div className="border-2-2 absolute border-opacity-20 left-[50%] border-gray-700 h-full border"></div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 ring-2 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="rounded-tl-full  flex flex-row justify-between items-center space-x-4 rounded-bl-full order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12  p-4">
                <div className="border-2 border-white p-2 rounded-full w-max h-max">
                  <ClipboardListIcon className="h-7" />
                </div>
                <h3 className="mt-2 w-full text-white text-lg">Add Order</h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 ring-2 ring-green-500 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              {/* <div className="order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12  p-4"> */}
              <div className="rounded-r-full  flex flex-row-reverse justify-between items-center   order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12  p-4">
                <div className="border-2 border-white p-2 rounded-full w-max h-max">
                  <CheckIcon className="h-7" />
                </div>

                <h3 className="mt-2 w-full text-white text-lg">
                  Confirm Order
                </h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 ring-2 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="rounded-tl-full  flex flex-row justify-between items-center space-x-4 rounded-bl-full order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12  p-4">
                <div className="border-2 border-white p-2 rounded-full w-max h-max">
                  <SparklesIcon className="h-7" />
                </div>
                <h3 className="mt-2 w-full text-white text-lg">Produce</h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 ring-2 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              {/* <div className="order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12  p-4"> */}
              <div className="rounded-r-full  flex flex-row-reverse justify-between items-center   order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12  p-4">
                <div className="border-2 border-white p-2 rounded-full w-max h-max">
                  <AdjustmentsIcon className="h-7" />
                </div>

                <h3 className="mt-2 w-full text-white text-lg">Testing</h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 ring-2 bg-white shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="rounded-tl-full  flex flex-row justify-between items-center space-x-4 rounded-bl-full order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12  p-4">
                <div className="border-2 border-white p-2 rounded-full w-max h-max">
                  <TruckIcon className="h-7" />
                </div>
                <h3 className="mt-2 w-full text-white text-lg">Ship</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 h-full">
          <p className="text-center font-extrabold text-2xl italic text-[#0469A1]">
            About
          </p>
          <p className="text-center  text-xl mt-6 text-[#0469A1]">
            Make an order, sit and watch the supply chain processes Make an
            order, sit and watch the supply chain processes
          </p>
        </div>

        <footer>
          <div className="mt-28 text-center w-full py-4 flex flex-col justify-center items-center">
            <p className="text-lg text-gray-500 ">Connet with us</p>
            <div className="flex flex-row space-x-4 cursor-pointer">
              <img src="/images/twitter.svg" className="w-7" />
              <img src="/images/discord.svg" className="w-10" />
              <img src="/images/instagram.svg" className="w-7" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
