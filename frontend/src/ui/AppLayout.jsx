import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function AppLayout() {
  return (
    <div className="flex w-full h-screen items-center justify-center">
      <div className="w-3/12">
        <SideBar />
      </div>
      <div className="w-9/12"></div>
      <Outlet />
    </div>
  );
}
