/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function SideBarItem({
  icon,
  title,
  link,
  itemSelected,
  request = 0,
}) {
  return (
    <Link to={`${link}`}>
      <div
        className={`flex justify-center items-center text-xl font-bold py-2 mx-2 my-1 rounded-md hover:scale-90 ${
          itemSelected
            ? "bg-stone-800 text-blue-300"
            : "bg-blue-700 text-slate-200 md:text-blue-700 md:bg-slate-100"
        } `}
      >
        {title ? (
          <>
            <span className="pt-1">{icon}</span>
            <p className="px-2">{title}</p>
            {request !== 0 && (
              <span className=" text-white bg-red-600 rounded-full w-5 h-5 text-sm  font-semibold text-center ">
                {request}
              </span>
            )}
            {itemSelected && (
              <span className="text-3xl justify-end">
                <MdOutlineKeyboardArrowRight />
              </span>
            )}
          </>
        ) : (
          <span className="px-4 text-2xl w-full">{icon}</span>
        )}
      </div>
    </Link>
  );
}
