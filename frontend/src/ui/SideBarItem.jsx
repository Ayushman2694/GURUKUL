/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

export default function SideBarItem({ icon, title, link }) {
  return (
    <Link to={link}>
      <div className="flex text-xl font-bold py-2 text-slate-50">
        <span className="pt-1">{icon}</span>
        <p className="px-2">{title}</p>
      </div>
    </Link>
  );
}
