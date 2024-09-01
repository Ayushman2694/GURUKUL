/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaBook } from "react-icons/fa";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import SideBarItem from "../../Common/Ui/SideBarItem";
import { Logout } from "../../Common/service/auth";

export default function SideBar() {
  const [itemSelected, setItemSelected] = useState(
    localStorage.getItem("sidebar-selected") || "dashboard"
  );
  const [isRendered, setIsRendered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("sidebar-selected", itemSelected);
  }, [itemSelected]);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const getItemStyle = (index) => ({
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateX(0) scale(1)"
      : "translateX(-500px) scale(1)",
    transition: "transform .5s",
    transitionDelay: isRendered ? `${index}s` : "0s", // Different delay for each item
  });

  return (
    <div
      className="bg-blue-700 h-full w-full border-t-2 pt-1 flex justify-center"
      style={{
        opacity: isRendered ? 1 : 0,
        transform: isRendered
          ? "translateX(0) scale(1)"
          : "translateX(-300px) scale(1)",
        transition: "transform .5s",
      }}
    >
      <div className="w-full">
        <div
          onClick={() => {
            setItemSelected("dashboard");
            // setSideBar(false);
          }}
          style={getItemStyle(0)}
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
          style={getItemStyle(0.2)}
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
          style={getItemStyle(0.4)}
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
          style={getItemStyle(0.6)}
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
          style={getItemStyle(0.8)}
        >
          <SideBarItem icon={<IoIosLogOut />} title="Logout" />
        </div>
      </div>
    </div>
  );
}
