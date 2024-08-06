import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

import Navbar from "./Navbar";
import { useState } from "react";

export default function AppLayout() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <div className="w-full h-screen">
        <Navbar setSideBar={setSideBar} />
        <div className="flex">
          {sideBar && (
            <div className="w-full md:w-3/12">
              <SideBar />
            </div>
          )}
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
