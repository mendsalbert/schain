import { ClipboardListIcon } from "@heroicons/react/outline";
import React from "react";

function OrdersCard() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <ClipboardListIcon className="h-12 text-slate-800" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          All Orders
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Total number of orders
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">50</div>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default OrdersCard;
