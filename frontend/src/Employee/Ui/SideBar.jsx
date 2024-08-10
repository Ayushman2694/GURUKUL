/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SideBarItem from "../../Common/Ui/SideBarItem";

import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Logout } from "../../Common/service/auth";

export default function SideBar() {
  const [itemSelected, setItemSelected] = useState("dashboard");
  const navigate = useNavigate();

  return (
    <div className="bg-blue-700 h-full w-full border-t-2 pt-1 flex justify-center">
      <div className="w-full">
        <div
          onClick={() => {
            setItemSelected("dashboard");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<FaHome />}
            title="Dashboard"
            link="employee/dashboard"
            itemSelected={itemSelected === "dashboard"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("profile");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<CgProfile />}
            title="Profile"
            link="employee/profile"
            itemSelected={itemSelected === "profile"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("courses");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<FaBook />}
            title="Courses"
            link="employee/courses"
            itemSelected={itemSelected === "courses"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("settings");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<IoMdSettings />}
            title="Settings"
            link="employee/settings"
            itemSelected={itemSelected === "settings"}
          />
        </div>

        <div
          onClick={() => {
            Logout();
            navigate("/login");
          }}
        >
          <SideBarItem icon={<IoIosLogOut />} title="Logout" />
        </div>
      </div>
    </div>
  );
}
