/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import FormError from "../../Common/Ui/FormError";
import BackButton from "../../Common/Ui/BackButton";
import SpinnerMini from "../../Common/Ui/SpinnerMini";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import { MdAddAPhoto } from "react-icons/md";
import { useAddCourse } from "../components/courses/useAddCourse";
import { useQuery } from "@tanstack/react-query";
import AddModule from "../ui/AddModule";

export default function AddDetertment() {
  const [image, setImage] = useState();
  const [imageUpload, setImageUpload] = useState();
  const { addCourse, isLoading: addingCourse } = useAddCourse();
  const [courseUploaded, setCourseUploaded] = useState(true);
  const [noOfModule, setNoOfModule] = useState(1);

  //   function useCourse(courseId) {
  //     const {
  //       data: course,
  //       isLoading,
  //       error,
  //     } = useQuery(["course", courseId], {
  //       enabled: !!courseId, // only fetch if courseId exists
  //       // The queryFn is not needed because we're using cached data.
  //       // If you want to fetch from the API if the data is not available in the cache, you can define the queryFn here.
  //     });

  //     return { course, isLoading, error };
  //   }

  //   const { course, isLoading, error } = useCourse();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    const formData = new FormData();
    formData.append("courseTitle", data.title);
    formData.append("courseDescription", data.description);
    formData.append("courseDepartment", data.department);
    formData.append("thumbnail", imageUpload);
    if (!imageUpload) return null;
    addCourse(formData, { onSuccess: () => setCourseUploaded(false) });
  }

  const handleImageChange = async (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      try {
        const options = {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        };
        const compressedFile = await imageCompression(file, options);
        setImageUpload(compressedFile);

        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result);
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.error("Error compressing image:", error);
        toast.error("Failed to compress image.");
      }
    } else {
      setImage(null);
      setImageUpload(null);
      toast.error("Please upload a valid image file.");
    }
  };

  return (
    <>
      {courseUploaded ? (
        <div className="h-full w-full flex items-center justify-center bg-gray-200 pb-20 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Add New Course
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="empid"
              >
                Thumbnail
              </label>
              <label htmlFor="image" className="relative cursor-pointer">
                <span className="flex justify-center max-h-[50.2vh]  w-full bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-300 focus:outline-none focus:border-blue-500 focus:bg-blue-100 overflow-y-scroll">
                  <div className="flex justify-center">
                    {image ? (
                      <div className="max-h-[50vh] min-h-[42.1vh]">
                        <img src={image} alt="Selected" className="h-full" />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center h-[30vh]">
                        <MdAddAPhoto className="text-8xl" />
                      </div>
                    )}
                  </div>
                </span>
                <input
                  type="file"
                  id="image"
                  disabled={addingCourse}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  // disabled={isPosting || isEditing}
                  onChange={handleImageChange}
                />
              </label>
              <div className="mb-4 mt-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="empid"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  disabled={addingCourse}
                  placeholder="Course Title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("title", {
                    required: "This field is required",
                  })}
                />
                {errors.title && <FormError error={errors.title.message} />}
              </div>
              <div className="mb-4 mt-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="empid"
                >
                  Department
                </label>
                <input
                  type="text"
                  id="department"
                  disabled={addingCourse}
                  placeholder="Course Department"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("department", {
                    required: "This field is required",
                  })}
                />
                {errors.department && (
                  <FormError error={errors.department.message} />
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="empid"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="description"
                  placeholder="Course Description"
                  disabled={addingCourse}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("description", {
                    required: "This field is required",
                  })}
                />
                {errors.description && (
                  <FormError error={errors.description.message} />
                )}
              </div>

              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  disabled={addingCourse}
                  className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {addingCourse ? <SpinnerMini /> : "Add Course"}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full  m-4">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-center">Adding Moudule</h2>
            <button
              className="bg-blue-600 text-md font-semibold text-white py-1 px-2 rounded-md cursor-pointer"
              onClick={() => setNoOfModule((valve) => valve + 1)}
            >
              Add Module
            </button>
          </div>

          {Array.from({ length: noOfModule }, (_, index) => (
            <div key={index} className="mt-4">
              <AddModule />
            </div>
          ))}
        </div>
      )}
    </>
  );
}