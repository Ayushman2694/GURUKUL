/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

export default function Navbar({ setSideBar }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const flashUpStyle = {
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateY(0) scale(1)"
      : "translateY(-100px) scale(0.9)",
    transition: "opacity .5s ease-out, transform .5s ease-out",
  };

  return (
    <div
      className="flex bg-blue-700 text-lg md:text-3xl font-bold text-slate-50 p-3 w-full justify-between items-center"
      style={flashUpStyle}
    >
      <div className="px-4 flex items-center">
        <FaGraduationCap />
        <p className="px-2 md:text-3xl text-xl">Mediversal Gurukul</p>
      </div>
      <div
        className="px-4 text-4xl hidden md:flex"
        onClick={() => {
          setSideBar((value) => !value);
        }}
      >
        <IoReorderThree />
      </div>
    </div>
  );
}
