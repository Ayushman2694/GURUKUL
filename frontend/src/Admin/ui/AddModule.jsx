/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import FormError from "../../Common/Ui/FormError";
import { useState } from "react";
import AddVideo from "./AddVideo";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdFileUpload } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

export default function AddModule({ noOfModule }) {
  const [showVideos, setShowVideos] = useState(true);
  const [noOfVideos, setNoOfVideos] = useState(1);
  const [videoNoList, setVideoNoList] = useState([0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function addVideo() {
    setNoOfVideos((prevValue) => prevValue + 1);
    setVideoNoList((prevVideoNoList) => [...prevVideoNoList, noOfVideos]);
  }

  function removeVideo() {
    if (noOfVideos === 1) return null;
    setNoOfVideos((prevValue) => prevValue - 1);
    setVideoNoList((list) => [...list.slice(0, -1)]);
  }

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="w-full shadow-lg p-4 rounded-lg bg-gray-100 border">
      <div className="flex w-full justify-between pb-4">
        <h2 className="text-xl font-extrabold bold mb-1 px-1 ">
          Module {noOfModule}
        </h2>
        <div>
          <div className="flex">
            <div>
              <button
                className="bg-red-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => removeVideo()}
              >
                <IoIosRemoveCircleOutline />
                Remove Video
              </button>
            </div>
            <div>
              <button
                className="bg-blue-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => addVideo()}
              >
                <IoIosAddCircleOutline />
                Add Video
              </button>
            </div>
            <div>
              <button
                className="bg-gray-500 text-lg font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => setShowVideos((value) => !value)}
              >
                {showVideos ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-10/12 px-1">
            <div className="">
              {/* <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label> */}
              <input
                type="text"
                id="title"
                placeholder="Video Title"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("title", {
                  required: "This field is required",
                })}
              />
            </div>
          </div>
          <div className="w-2/12 px-1 flex justify-center items-center">
            <div
              className={`${"bg-green-600"} text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer`}
              onClick={handleSubmit(onSubmit)}
            >
              <div className="flex justify-center items-center">
                <MdFileUpload />
                Upload Module
              </div>
            </div>
          </div>
        </div>
        <div>{errors.title && <FormError error={errors.title.message} />}</div>
      </form>
      {showVideos && (
        <div className="py-2">
          {videoNoList.map((videoNo) => (
            <div key={videoNo} className="mt-2">
              <AddVideo videosNo={videoNo + 1} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
