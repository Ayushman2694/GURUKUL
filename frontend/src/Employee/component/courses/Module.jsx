/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Dropdown.js
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdKeyboardArrowUp } from "react-icons/md";
import Video from "./Video";

const Module = ({ videos, moduleName, setVideoDiscription, setVideoLink }) => {
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

      {videos.map((id) => (
        <Video
          key={id}
          id={id}
          setVideoLink={setVideoLink}
          setVideoDiscription={setVideoDiscription}
        />
      ))}
    </div>
  );
};

export default Module;
