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

        <div className=" h-full">
          <div className="relative wrap overflow-hidden h-full">
            <div
              className="border-2-2 absolute border-opacity-20 left-[50%] border-gray-700 h-full border"
              // style="left: 50%"
            ></div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <img src="/images/order.svg " className="w-16" />
                <h3 className="mt-2 font-bold text-white text-xl">
                  Make Order
                </h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <img src="/images/confirm.svg " className="w-16" />
                <h3 className="mt-2 font-bold text-white text-xl">
                  Confirm Order
                </h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
              </div>
              <div className="order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <img src="/images/production.svg " className="w-16" />
                <h3 className="mt-2 font-bold text-white text-xl">
                  Production
                </h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
              </div>
              <div className="order-1 bg-gradient-to-r from-green-500 via-green-600 text-white to-green-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <img src="/images/testing.svg " className="w-16" />
                <h3 className="mt-2 font-bold text-white text-xl">Testing</h3>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">5</h1>
              </div>
              <div className="order-1 bg-gradient-to-r from-[#0C9FF2] via-[#0C9FF2] text-white to-[#136390] rounded-lg shadow-xl w-5/12 px-6 py-4">
                <img src="/images/shipping.svg " className="w-16" />
                <h3 className="mt-2 font-bold text-white text-xl">Shipping</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
