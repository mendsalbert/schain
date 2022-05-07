import React, { useState } from "react";
import AdminSideNav from "../components/Admin/adminSideNav";
import Orders from "../components/Admin/Orders";
import Modal from "../components/Modal";
import OrderModal from "../components/OrderModal";

type Props = {};

const Admin = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("") as any;
  return (
    <div className="font-Montserrat  w-full">
      <div className="flex flex-row  w-full">
        <AdminSideNav />
        <div className="w-full px-10 mt-10 h-screen">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row justify-center items-center space-x-2 ">
              <img src="/images/profile.jpg" className="w-14 rounded-md" />
              <div>
                <p>0x5ffdsef..455fad</p>
                <p>User</p>
              </div>
            </div>
            <button
              onClick={() => {
                setOpen(!open);

                setComp(<OrderModal />);
              }}
              className="bg-gradient-to-r active:outline-none active:border-none from-[#0469A1] via-[#0469A1]  to-[#0C9FF2]  text-center w-max   px-6 py-2  rounded-lg cursor-pointer text-white"
            >
              Make Order
            </button>
          </div>
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
