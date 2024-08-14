/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormError from "../../Common/Ui/FormError";
import { MdFileUpload } from "react-icons/md";
import { useAddVideo } from "../components/courses/useAddVideo";
import SpinnerMini from "../../Common/Ui/SpinnerMini";

export default function AddVideo() {
  const { addVideo, isLoading } = useAddVideo();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("videoTitle", data.title);
    formData.append("videoDescription", data.description);
    formData.append("videoLink", selectedFile);

    addVideo(formData, {
      onSuccess: () => {
        setUploaded(true);
      },
    });
  }

  function handleFileChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  return (
    <div className="w-full shadow-lg p-4 rounded-lg bg-gray-100 border">
      <h2 className="w-full text-lg font-semibold bold mb-1 px-1 ">
        Add New Video To Module
      </h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-3/12 px-1">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
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
          <div className="w-5/12 px-1">
            <div className="">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Course Description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("description", {
                  required: "This field is required",
                })}
              />
              {errors.description && (
                <FormError error={errors.description.message} />
              )}
            </div>
          </div>
          <div className="w-3/12 px-1">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Add Video
            </label>
            <label htmlFor="video" className="relative ">
              {!selectedFile ? (
                <div className="w-full flex justify-center items-center bg-blue-600 text-white font-semibold py-1 rounded-md  cursor-pointer">
                  Select Video
                </div>
              ) : (
                <div className="w-full flex justify-center items-center bg-gray-300 text-white font-semibold py-1 rounded-md  cursor-not-allowed">
                  Video Selected
                </div>
              )}
            </label>
            <input
              type="file"
              className="hidden"
              id="video"
              {...register("video", {
                required: "No Video Selected",
              })}
              onChange={handleFileChange}
            />
            {errors.video && <FormError error={errors.video.message} />}
          </div>
          <div className="w-1/12 px-1 flex justify-center items-center">
            <button
              disabled={isLoading}
              className={`${
                uploaded ? "bg-gray-400 cursor-not-allowed" : "bg-green-600"
              } text-md font-semibold text-white py-1 px-2 rounded-md`}
            >
              {isLoading ? (
                <SpinnerMini />
              ) : uploaded ? (
                "Uploaded"
              ) : (
                <div className="flex justify-center items-center">
                  <MdFileUpload />
                  Upload
                </div>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
