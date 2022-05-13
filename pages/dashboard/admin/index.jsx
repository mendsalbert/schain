import React, { useState, useRef, useEffect, useContext } from "react";

import Sidebar from "../../../components/adminPartials/Sidebar";
import Header from "../../../components/adminPartials/Header";
import WelcomeBanner from "../../../components/adminPartials/dashboard/WelcomeBanner";
import Orders from "../../../components/adminPartials/dashboard/Orders.tsx";
import OrdersCard from "../../../components/adminPartials/dashboard/OdersCards";
import OrdersPendingCard from "../../../components/adminPartials/dashboard/OrdersPendingCard";
import OrderCancelCard from "../../../components/adminPartials/dashboard/OrderCancelCard";
import Modal from "../../../components/Modal";
import { AuthContext } from "../../../utils/AuthProvider";
import AdminAuthModal from "../../../components/AdminAuthModal.jsx";
import UsersCard from "../../../components/adminPartials/dashboard/UsersCard";
import UserRoles from "../../../components/adminPartials/dashboard/UserRoles";
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState("");
  const { address, signer } = useContext(AuthContext);
  const [customers, setcustomers] = useState([]);
  const [orders, setorders] = useState([]);
  const [pending, setpending] = useState([]);
  const [returned, setreturned] = useState([]);

  useEffect(() => {
    if (address) {
      const loadOrders = async () => {
        const data = await signer.fetchOrderItems();
        let customers = data.filter(
          (v, i, a) => a.findIndex((v2) => v2.owner === v.owner) === i
        );
        const pending = data.filter((p) => p.pending === true);
        const returned = data.filter((r) => r.returned === true);
        const allOrders = await signer.fetchOrderItems();
        setcustomers(customers);
        setorders(allOrders);
        setreturned(returned);
        setpending(pending);

        // console.log(customers);
        // console.log(items);
      };
      loadOrders();
    }
  }, [signer]);

  console.log(returned.length);
  useEffect(() => {
    let auth = localStorage.getItem("auth");
    console.log(auth);
    if (!auth || auth === "false") {
      setOpen(true);
      setComp(<AdminAuthModal />);
    } else {
      setOpen(false);
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
              <WelcomeBanner />
              {/* Cards */}

              <div className="grid grid-cols-12 gap-6">
                <UsersCard users={customers.length} />
                <OrdersCard allorders={orders.length} />
                <OrdersPendingCard allpending={pending.length} />
                <OrderCancelCard allreturned={returned.length} />
                <UserRoles />
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
