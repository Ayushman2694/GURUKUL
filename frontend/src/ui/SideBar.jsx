import { FaHome } from "react-icons/fa";

import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import SideBarItem from "./SideBarItem";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";

export default function SideBar() {
  const [itemSelected, setItemSelected] = useState("dashboard");
  console.log(itemSelected);
  return (
    <div className="bg-blue-700 h-full w-full border-t-2 pt-1 flex justify-center">
      <div className="w-full">
        <div
          onClick={() => {
            setItemSelected("dashboard");
          }}
        >
          <SideBarItem
            icon={<FaHome />}
            title="Dashboard"
            link="dashboard"
            itemSelected={itemSelected === "dashboard"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("profile");
          }}
        >
          <SideBarItem
            icon={<CgProfile />}
            title="Profile"
            link="profile"
            itemSelected={itemSelected === "profile"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("courses");
          }}
        >
          <SideBarItem
            icon={<FaBook />}
            title="Courses"
            link="courses"
            itemSelected={itemSelected === "courses"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("settings");
          }}
        >
          <SideBarItem
            icon={<IoMdSettings />}
            title="Settings"
            link="settings"
            itemSelected={itemSelected === "settings"}
          />
        </div>

        <SideBarItem icon={<IoIosLogOut />} title="Logout" />
      </div>
    </div>
  );
}
