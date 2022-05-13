import React, { useState, useRef, useEffect } from "react";

import Sidebar from "../../../components/adminPartials/Sidebar";
import Header from "../../../components/adminPartials/Header";
import WelcomeBanner from "../../../components/adminPartials/dashboard/WelcomeBanner";
import Orders from "../../../components/adminPartials/dashboard/Orders";
import OrdersCard from "../../../components/adminPartials/dashboard/OdersCards";
import OrdersPendingCard from "../../../components/adminPartials/dashboard/OrdersPendingCard";
import OrderCancelCard from "../../../components/adminPartials/dashboard/OrderCancelCard";
import Modal from "../../../components/Modal";
import OrderModal from "../../../components/OrderModal.jsx";
import AdminAuthModal from "../../../components/AdminAuthModal.jsx";
import UsersCard from "../../../components/adminPartials/dashboard/UsersCard";
import UserRoles from "../../../components/adminPartials/dashboard/UserRoles";
import ApproveOrder from "../../../components/adminPartials/dashboard/ApproveOrder";
import ConfrimOrders from "../../../components/adminPartials/dashboard/ConfirmOrders";
import OrdersProduced from "../../../components/adminPartials/dashboard/OrdersProduced";
import OrdersToTest from "../../../components/adminPartials/dashboard/OrdersToTest";
import OrderToTransport from "../../../components/adminPartials/dashboard/OrderToTransport";
import { useRouter } from "next/router";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");
  const router = useRouter();

  useEffect(() => {
    let manufactureAddr = localStorage.getItem("manufactureAddr");
    if (manufactureAddr !== "0x0") {
      router.push("/");
    }
  }, []);

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
                type="Transpoter"
                message="Here are some order to transport"
              />
              {/* Cards */}

              <div className="grid grid-cols-12 gap-6">
                {/* <O /> */}
                {/* <OrdersPendingCard /> */}
                {/* <ConfrimOrders /> */}
                {/* <ApproveOrder /> */}
                {/* <OrdersProduced /> */}
                {/* <OrdersToTest /> */}
                <OrderToTransport />
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
