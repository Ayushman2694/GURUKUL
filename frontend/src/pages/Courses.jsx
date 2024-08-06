/* eslint-disable no-unused-vars */
import { useState } from "react";
import CourseThumbnail from "../ui/CourseThumbnail";

export default function Courses() {
  // State to track the progress
  const [progress, setProgress] = useState(63); // Example progress value

  return (
    <div className="w-full p-4 h-full">
      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Ongoing Courses</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-12">
        <CourseThumbnail progress={63} />
        <CourseThumbnail progress={93} />
        <CourseThumbnail progress={87} />
        <CourseThumbnail progress={10} />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Not Started</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-12">
        <CourseThumbnail progress={0} />
        <CourseThumbnail progress={0} />
        <CourseThumbnail progress={0} />
        <CourseThumbnail progress={0} />
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-bold px-1">Courses Completed</h1>
      </div>
      <div className="flex flex-wrap pt-4 pb-20">
        <CourseThumbnail progress={100} />
        <CourseThumbnail progress={100} />
      </div>
    </div>
  );
}
