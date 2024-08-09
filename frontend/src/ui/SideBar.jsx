/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaHome } from "react-icons/fa";

import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import SideBarItem from "./SideBarItem";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logout } from "../services/Login";

export default function SideBar({ setSideBar }) {
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
            link="dashboard"
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
            link="profile"
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
            link="courses"
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
            link="settings"
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
