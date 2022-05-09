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
          {/* <div className="flex flex-col ">
            <button
              onClick={() => {
                setOpen(!open);

                setComp(<OrderModal />);
              }}
              className="  bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center  w-max   px-6 py-2  rounded-full cursor-pointer text-white"
            >
              Make Order
            </button>
            <div className="flex pt-5 md:pt-0  flex-row  items-center space-x-2 md:space-x-2 ">
              <img src="/images/profile.jpg" className="w-14 rounded-md" />
              <div>
                <p>0x5ffdsef..455fad</p>
                <p>User</p>
              </div>
            </div>
          </div> */}
          <Orders />
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        {comp}
      </Modal>
    </div>
  );
};

export default Admin;
