/* eslint-disable react/prop-types */
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useVideoByVideoId } from "../../../Admin/components/courses/useVideoByVideoId";
import { MdOutlineCheckBox } from "react-icons/md";
import { useEmployeeInfo } from "../employee_info/useEmployeeInfo";
import { useState } from "react";

export default function Video({
  id,
  setVideoDiscription,
  setVideoLink,
  setVideoId,
}) {
  const { isLoading, video } = useVideoByVideoId(id);
  const [token] = useState(localStorage.getItem("token"));
  const { isLoading: loadingEmployee, employe_info } = useEmployeeInfo(token);

  if (isLoading || loadingEmployee) return null;
  return (
    <div
      className="w-full p-2 flex items-center border-b-2 cursor-pointer"
      onClick={() => {
        setVideoDiscription(video.videoDescription);
        setVideoLink(video.videoLink);
        setVideoId(video._id);
      }}
    >
      <span className="text-2xl font-extrabold">
        {video?.watchedBy.includes(employe_info.empId) ? (
          <MdOutlineCheckBox />
        ) : (
          <MdOutlineCheckBoxOutlineBlank />
        )}
      </span>
      <span className="text-md font-semibold px-2">{video.videoTitle}</span>
    </div>
  );
}
