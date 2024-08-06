/* eslint-disable react/prop-types */
import { FaGraduationCap } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";

export default function Navbar({ setSideBar }) {
  return (
    <div className="flex bg-blue-600 text-3xl font-bold text-slate-50 p-3 w-full justify-between items-center">
      <div className="flex items-center">
        <FaGraduationCap />
        <p className="px-2">Mediversal Gurukul</p>
      </div>
      <div
        className="px-4"
        onClick={() => {
          setSideBar((value) => !value);
        }}
      >
        <IoReorderThree />
      </div>
    </div>
  );
}
