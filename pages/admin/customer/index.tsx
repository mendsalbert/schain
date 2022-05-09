import React, { useState } from "react";
import AdminSideNav from "../../../components/Admin/adminSideNav";
import Orders from "../../../components/Admin/Orders";
import Modal from "../../../components/Modal";
import OrderModal from "../../../components/OrderModal";

type Props = {};

const Admin = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("") as any;
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row  w-full">
        <AdminSideNav />
        <div className="w-full px-4 md:px-16 mt-10 h-screen">
          <div className="flex flex-col-reverse  md:flex-row md:items-center md:justify-between">
            <div className="flex bg-gradient-to-r  from-pink-500 to-yellow-500 rounded-lg py-8 px-4 mt-5 md:mt-0 text-white   flex-row  items-center space-x-2 md:space-x-2 ">
              <img
                src="/images/profile.jpg"
                className="w-14 h-14 rounded-full"
              />
              <div>
                <p className="font-bold text-xl">0x5ffdsef..455fad</p>
                <p>User</p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(!open);

                setComp(<OrderModal />);
              }}
              className="  bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-6 py-2  rounded-full cursor-pointer text-white"
            >
              Make Order
            </button>
          </div>

          {/* <Orders /> */}

          <div className="sm:px-6 w-full">
            <div className="px-4 md:px-10 py-4 md:py-7">
              <div className="flex items-center justify-between">
                <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 ">
                  Tasks
                </p>
                <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600   bg-gray-200   hover:bg-gray-300     cursor-pointer rounded">
                  <p>Sort By:</p>
                  <select
                    aria-label="select"
                    className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1"
                  >
                    <option className="text-sm text-indigo-800">Latest</option>
                    <option className="text-sm text-indigo-800">Oldest</option>
                    <option className="text-sm text-indigo-800">Latest</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg ring-[1px] rounded-md ring-gray-200 py-4 md:py-7  ">
              <div className="sm:flex items-center justify-between">
                <div className="flex items-center">
                  <a
                    className="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800"
                    href=" javascript:void(0)"
                  >
                    <div className="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full">
                      <p>All</p>
                    </div>
                  </a>
                  <a
                    className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                    href="javascript:void(0)"
                  >
                    <div className="py-2 px-8 text-gray-600   hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                      <p>Done</p>
                    </div>
                  </a>
                  <a
                    className="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8"
                    href="javascript:void(0)"
                  >
                    <div className="py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full ">
                      <p>Pending</p>
                    </div>
                  </a>
                </div>
                <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                  <p className="text-sm font-medium leading-none text-white">
                    Add Task
                  </p>
                </button>
              </div>
              <div className="mt-7 overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <tbody>
                    <tr className="focus:outline-none h-16 border border-gray-100 dark:border-gray-600  rounded">
                      <td>
                        <div className="ml-5">
                          <div className="bg-gray-200 dark:bg-gray-800  rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                            <input
                              placeholder="checkbox"
                              type="checkbox"
                              className="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"
                            />
                            <div className="check-icon hidden bg-indigo-700 text-white rounded-sm">
                              <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg7.svg"
                                alt="check-icon"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div className="flex items-center pl-5">
                          <p className="text-base font-medium leading-none text-gray-700 dark:text-white  mr-2">
                            Marketing Keynote Presentation
                          </p>
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg1.svg"
                            alt="clip"
                          />
                        </div>
                      </td>
                      <td className="pl-24">
                        <div className="flex items-center">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg2.svg"
                            alt="tag"
                          />
                          <p className="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">
                            Urgent
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg3.svg"
                            alt="list"
                          />
                          <p className="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">
                            04/07
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg4.svg"
                            alt="chat"
                          />
                          <p className="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">
                            23
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <div className="flex items-center">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg5.svg"
                            alt="paper clip"
                          />
                          <p className="text-sm leading-none text-gray-600 dark:text-gray-200  ml-2">
                            04/07
                          </p>
                        </div>
                      </td>
                      <td className="pl-5">
                        <button className="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">
                          Due today at 18:00
                        </button>
                      </td>
                      <td className="pl-4">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 dark:text-gray-200  py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 dark:hover:bg-gray-700   dark:bg-gray-800  focus:outline-none">
                          View
                        </button>
                      </td>
                      <td>
                        <div className="relative px-5 pt-2">
                          <button
                            className="focus:ring-2 rounded-md focus:outline-none"
                            role="button"
                            aria-label="option"
                          >
                            <img
                              className="dropbtn"
                              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/tasks-svg6.svg"
                              alt="dropdown"
                            />
                          </button>
                          <div className="dropdown-content bg-white shadow w-24 absolute z-30 right-0 mr-6 hidden">
                            <div className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Edit</p>
                            </div>
                            <div className="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white">
                              <p>Delete</p>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="h-3"></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {comp}
      </Modal>
    </div>
  );
};

export default Admin;
