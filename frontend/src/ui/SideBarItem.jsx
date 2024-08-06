/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SideBarItem({ icon, title, link, itemSelected }) {
  return (
    <Link to={link}>
      <div
        className={`flex justify-center items-center text-xl font-bold py-2 mx-2 my-1 rounded-md ${
          itemSelected
            ? "bg-stone-800 text-blue-300"
            : "bg-slate-50 text-blue-600"
        } `}
      >
        <span className="pt-1">{icon}</span>
        <p className="px-2">{title}</p>
        {itemSelected && (
          <span className="text-3xl justify-end">
            <MdOutlineKeyboardArrowRight />
          </span>
        )}
      </div>
    </Link>
  );
}
