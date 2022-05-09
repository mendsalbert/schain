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

          <div className=" my-8 elative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Apple MacBook Pro 17"
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
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
