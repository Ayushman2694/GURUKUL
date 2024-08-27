/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Dropdown.js
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdKeyboardArrowUp } from "react-icons/md";
import Video from "./Video";
import Spinner from "../../../Common/Ui/Spinner";
import { useQuizesByModuleId } from "../../../Admin/components/quiz/useQuizesByModuleId";
import { TbBulb } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Module = ({
  videos,
  moduleId,
  moduleName,
  setVideoDiscription,
  setVideoLink,
  setVideoId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const { isLoading, quiz } = useQuizesByModuleId(moduleId);
  const navigate = useNavigate();

  if (isLoading) return <Spinner />;
  console.log(quiz);

  return (
    <div className="w-full">
      <button onClick={() => toggleDropdown()} className="w-full  border-b-2">
        <div className=" flex justify-center items-center py-3">
          <span className="text-lg font-bold">{moduleName} </span>
          <span className="text-3xl font-extrabold">
            {isOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
          </span>
        </div>
      </button>

      {isOpen && (
        <>
          {videos.map((id) => (
            <Video
              key={id}
              id={id}
              setVideoLink={setVideoLink}
              setVideoDiscription={setVideoDiscription}
              setVideoId={setVideoId}
            />
          ))}
          {quiz.length !== 0 && (
            <div
              className="w-full p-2 flex items-center border-b-2 cursor-pointer"
              onClick={() => {
                navigate(`/employee/quiz/${quiz[0]?._id}`);
              }}
            >
              <span className="text-2xl">
                <TbBulb />
              </span>
              <p className="text-md font-semibold px-2">{quiz[0]?.title}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Module;
