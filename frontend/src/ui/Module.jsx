/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Dropdown.js
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Module = ({ videos, moduleName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <button onClick={toggleDropdown} className="w-full  border-b-2">
        <div className=" flex justify-center items-center py-3">
          <span className="text-lg font-bold">{moduleName} </span>
          <span className="text-3xl font-extrabold">
            {isOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
          </span>
        </div>
      </button>

      {isOpen &&
        videos.map((name, index) => (
          <div
            key={index}
            className="w-full p-2 flex items-center border-b-2 cursor-pointer"
          >
            <span className="text-2xl font-extrabold">
              <MdOutlineCheckBoxOutlineBlank />
            </span>
            <span className="text-md font-semibold px-2">{name}</span>
          </div>
        ))}
    </div>
  );
};

export default Module;
