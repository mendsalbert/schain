import React, { useState, useEffect, useContext } from "react";

import Sidebar from "../../../components/adminPartials/Sidebar";
import Header from "../../../components/adminPartials/Header";
import WelcomeBanner from "../../../components/adminPartials/dashboard/WelcomeBanner";
import Modal from "../../../components/Modal";
import OrdersProduced from "../../../components/adminPartials/dashboard/OrdersProduced";
import { AuthContext } from "../../../utils/AuthProvider";
import { useRouter } from "next/router";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");
  const router = useRouter();
  const { address } = useContext(AuthContext);
  if (address) {
    if (typeof window !== "undefined") {
      let manufactureAddr = localStorage.getItem("manufactureAddr");
      if (manufactureAddr !== address) {
        router.push("/");
      } else {
      }
    }
  } else {
  }

  return (
    <>
      <div className="flex h-screen overflow-hidden font-Montserrat">
        {/* Sidebar */}

        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              {/* Welcome banner */}
              <WelcomeBanner
                type="Manufacturer"
                message="Here are some order to work on:"
              />
              {/* Cards */}

              <div className="grid grid-cols-12 gap-6">
                {/* <O /> */}
                {/* <OrdersPendingCard /> */}
                {/* <ConfrimOrders /> */}
                {/* <ApproveOrder /> */}
                <OrdersProduced />
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* if not authenticated? return false else setOpen is true */}
      <Modal open={open} onClose={() => setOpen(!auth ? true : false)}>
        {comp}
      </Modal>
    </>
  );
}

export default Dashboard;
