/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import FormError from "../../Common/Ui/FormError";
import { MdFileUpload } from "react-icons/md";
import { useAddModule } from "../components/courses/useAddModule";

import AddVideos from "./AddVideos";

export default function AddModule({ moduleNo, courseId }) {
  const [moduleStates, setModuleStates] = useState({
    [`showVideos${moduleNo}`]: true,
    [`noOfVideos${moduleNo}`]: 1,
    [`videoNoList${moduleNo}`]: [0],
    [`videoArray${moduleNo}`]: [],
    [`moduleUploaded${moduleNo}`]: false,
  });

  const { addModule, isLoading } = useAddModule();

  console.log(moduleStates);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function addVideo() {
    const filteredArray = moduleStates[`videoArray${moduleNo}`].filter(
      (video) => video !== undefined
    );
    const arrayLength = filteredArray.length;

    if (arrayLength === moduleStates[`noOfVideos${moduleNo}`]) {
      setModuleStates((prevState) => ({
        ...prevState,
        [`noOfVideos${moduleNo}`]: prevState[`noOfVideos${moduleNo}`] + 1,
        [`videoNoList${moduleNo}`]: [
          ...prevState[`videoNoList${moduleNo}`],
          prevState[`noOfVideos${moduleNo}`] + 1,
        ],
      }));
    } else {
      toast.error(
        `Upload Video No ${arrayLength + 1} In Module No ${moduleNo} First`
      );
    }
  }

  function removeVideo() {
    const filteredArray = moduleStates[`videoArray${moduleNo}`].filter(
      (video) => video !== undefined
    );
    const arrayLength = filteredArray.length;

    if (moduleStates[`noOfVideos${moduleNo}`] === arrayLength) {
      toast.error(
        `Video No ${arrayLength} In Module No ${moduleNo} Already Uploaded`
      );
    } else {
      setModuleStates((prevState) => ({
        ...prevState,
        [`noOfVideos${moduleNo}`]: prevState[`noOfVideos${moduleNo}`] - 1,
        [`videoNoList${moduleNo}`]: prevState[`videoNoList${moduleNo}`].slice(
          0,
          -1
        ),
      }));
    }
  }

  function onSubmit(data) {
    const filteredArray = moduleStates[`videoArray${moduleNo}`].filter(
      (video) => video !== undefined
    );
    const arrayLength = filteredArray.length;

    if (arrayLength !== moduleStates[`noOfVideos${moduleNo}`]) {
      toast.error(`Please Upload All Videos In Module No ${moduleNo}`);
    } else {
      addModule(
        {
          moduleName: data.title,
          course: courseId._id,
          moduleNo: moduleNo,
          video: filteredArray,
        },
        {
          onSuccess: () => {
            setModuleStates((prevState) => ({
              ...prevState,
              [`moduleUploaded${moduleNo}`]: true,
              [`showVideos${moduleNo}`]: false,
            }));
          },
        }
      );
    }
  }

  return (
    <div className="w-full shadow-lg p-4 rounded-lg bg-gray-100 border">
      <div className="flex w-full justify-between pb-4">
        <h2 className="text-xl font-extrabold bold mb-1 px-1 ">
          Module {moduleNo}
        </h2>
        <div>
          <div className="flex">
            <div>
              <button
                className="bg-red-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => removeVideo()}
                disabled={moduleStates[`moduleUploaded${moduleNo}`]}
              >
                <IoIosRemoveCircleOutline />
                Remove Video
              </button>
            </div>
            <div>
              <button
                className="bg-blue-600 text-sm font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() => addVideo()}
                disabled={moduleStates[`moduleUploaded${moduleNo}`]}
              >
                <IoIosAddCircleOutline />
                Add Video
              </button>
            </div>
            <div>
              <button
                className="bg-gray-500 text-lg font-semibold text-white py-1 px-2 mx-1 rounded-md cursor-pointer flex justify-center items-center"
                onClick={() =>
                  setModuleStates((prevState) => ({
                    ...prevState,
                    [`showVideos${moduleNo}`]:
                      !prevState[`showVideos${moduleNo}`],
                  }))
                }
              >
                {moduleStates[`showVideos${moduleNo}`] ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
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
                disabled={
                  isLoading || moduleStates[`moduleUploaded${moduleNo}`]
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("title", {
                  required: "This field is required",
                })}
              />
            </div>
          </div>
          <div className="w-2/12 px-1 flex justify-center items-center">
            <button
              className={`${"bg-green-600"} text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer`}
              onClick={handleSubmit(onSubmit)}
              disabled={isLoading || moduleStates[`moduleUploaded${moduleNo}`]}
            >
              <div className="flex justify-center items-center">
                <MdFileUpload />
                Upload Module
              </div>
            </button>
          </div>
        </div>
        <div>{errors.title && <FormError error={errors.title.message} />}</div>
      </form>
      {moduleStates[`showVideos${moduleNo}`] && (
        <div className="py-2">
          {moduleStates[`videoNoList${moduleNo}`].map((videoNo) => (
            <div key={videoNo} className="mt-2">
              <AddVideos
                videosNo={moduleStates[`noOfVideos${moduleNo}`] + 1}
                setVideoArray={(newArray) =>
                  setModuleStates((prevState) => ({
                    ...prevState,
                    [`videoArray${moduleNo}`]: newArray,
                  }))
                }
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
