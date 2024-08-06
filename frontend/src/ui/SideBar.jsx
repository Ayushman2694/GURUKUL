import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  return (
    <div className="bg-blue-600 h-full border-t-2 flex justify-center">
      <div>
        <SideBarItem icon={<FaHome />} title="Dashboard" link="dashboard" />
        <SideBarItem icon={<IoIosPeople />} title="Profile" link="profile" />
        <SideBarItem icon={<FaBook />} title="Courses" link="courses" />
        <SideBarItem icon={<IoMdSettings />} title="Settings" link="settings" />
        <SideBarItem icon={<IoIosLogOut />} title="Logout" link="" />
      </div>
    </div>
  );
}
