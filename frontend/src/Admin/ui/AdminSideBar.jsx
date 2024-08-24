/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import SideBarItem from "../../Common/Ui/SideBarItem";

import { FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBook } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";

import { Logout } from "../../Common/service/auth";

export default function AdminSideBar({ setSideBar }) {
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
            title="Admin"
            link="admin/dashboard"
            itemSelected={itemSelected === "dashboard"}
          />
        </div>

        <div
          onClick={() => {
            setItemSelected("Tracking");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<BsGraphUp />}
            title="Tracking"
            link="admin/tracking"
            itemSelected={itemSelected === "Tracking"}
          />
        </div>

        <div
          onClick={() => {
            setItemSelected("Courses");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<FaBook />}
            title="Courses"
            link="admin/courses"
            itemSelected={itemSelected === "Courses"}
          />
        </div>

        <div
          onClick={() => {
            setItemSelected("Quizzes");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<HiLightBulb />}
            title="Quizzes"
            link="admin/quizzes"
            itemSelected={itemSelected === "Quizzes"}
          />
        </div>

        <div
          onClick={() => {
            setItemSelected("Users");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<FaUsers />}
            title="Users"
            link="admin/users"
            itemSelected={itemSelected === "Users"}
          />
        </div>

        <div
          onClick={() => {
            setItemSelected("Settings");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<IoMdSettings />}
            title="Settings"
            link="admin/settings"
            itemSelected={itemSelected === "Settings"}
          />
        </div>
        <div
          onClick={() => {
            setItemSelected("Requests");
            // setSideBar(false);
          }}
        >
          <SideBarItem
            icon={<MdNotificationsActive />}
            title="Requests"
            link="admin/request"
            itemSelected={itemSelected === "Requests"}
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
