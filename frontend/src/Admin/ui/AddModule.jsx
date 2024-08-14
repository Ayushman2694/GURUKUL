/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import FormError from "../../Common/Ui/FormError";
import { useState } from "react";
import AddVideo from "./AddVideo";

export default function AddModule() {
  const [noOfVideos, satNoOfVideos] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div className="w-full shadow-lg p-4 rounded-lg bg-gray-100 border">
      <h2 className="w-full text-lg font-semibold bold mb-1 px-1 ">
        Add New Module
      </h2>
      <form className="w-full mb-2" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.title && <FormError error={errors.title.message} />}
            </div>
          </div>
          <div className="w-2/12 px-1 flex justify-center items-center">
            <div
              className={`${"bg-green-600"} text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer`}
              onClick={() => satNoOfVideos((valve) => valve + 1)}
            >
              Add Video
            </div>
          </div>
        </div>
      </form>
      <div className="py-2">
        {Array.from({ length: noOfVideos }, (_, index) => (
          <div key={index} className="mb-2">
            <AddVideo />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end px-4">
        <div className="bg-blue-600 text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer">
          Upload Module
        </div>
      </div>
    </div>
  );
}
