/* eslint-disable react/prop-types */
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { useVideoByVideoId } from "../../../Admin/components/courses/useVideoByVideoId";

export default function Video({ id, setVideoDiscription, setVideoLink }) {
  const { isLoading, video } = useVideoByVideoId(id);

  if (isLoading) return null;
  return (
    <div
      className="w-full p-2 flex items-center border-b-2 cursor-pointer"
      onClick={() => {
        setVideoDiscription(video.videoDiscription);
        setVideoLink(video.videoLink);
      }}
    >
      <span className="text-2xl font-extrabold">
        <MdOutlineCheckBoxOutlineBlank />
      </span>
      <span className="text-md font-semibold px-2">{video.videoTitle}</span>
    </div>
  );
}
