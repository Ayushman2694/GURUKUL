/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useAddCourse } from "../components/courses/useAddCourse";
import FormError from "../../Common/Ui/FormError";
import SpinnerMini from "../../Common/Ui/SpinnerMini";
import { toast } from "react-toastify";
import imageCompression from "browser-image-compression";
import { MdAddAPhoto } from "react-icons/md";
import { useForm } from "react-hook-form";
import Dropdown from "./DropDown";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export default function AddCourse({ setCourseData }) {
  const [image, setImage] = useState(null);
  const [cropper, setCropper] = useState();
  const [cropData, setCropData] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  console.log(imageUpload);

  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [departmentError, setDepartmentError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      cropper.getCroppedCanvas().toBlob(async (blob) => {
        try {
          const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
          };
          const compressedFile = await imageCompression(blob, options);
          setImageUpload(compressedFile);
          setCropData(URL.createObjectURL(blob));
        } catch (error) {
          console.error("Error compressing image:", error);
          toast.error("Failed to compress image.");
        }
      });
    }
  };

  const onSubmit = (data) => {
    if (!imageUpload) return;
    if (!selectedDepartment) {
      setDepartmentError("Department is required");
      return;
    }

    // const formData = new FormData();
    // formData.append("courseTitle", data.title);
    // formData.append("courseDescription", data.description);
    // formData.append("courseDepartment", selectedDepartment);
    // formData.append("thumbnail", imageUpload);

    setCourseData({
      courseTitle: data.title,
      courseDescription: data.description,
      courseDepartment: selectedDepartment,
      thumbnail: imageUpload,
    });
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 pb-14 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thumbnail"
          >
            Thumbnail
          </label>
          {!image ? (
            <label htmlFor="image" className="relative cursor-pointer">
              <span className="flex justify-center w-full bg-gray-100 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-300 focus:outline-none focus:border-blue-500 focus:bg-blue-100 overflow-y-scroll">
                <div className="flex justify-center items-center h-[30vh]">
                  <MdAddAPhoto className="text-8xl" />
                </div>
              </span>
              <input
                type="file"
                id="image"
                accept="image/*"
                disabled={!!image}
                className="absolute top-0 left-0 w-full h-full opacity-0 "
                onChange={handleImageChange}
              />
            </label>
          ) : !cropData ? (
            <div>
              <div className="flex flex-col items-center">
                <Cropper
                  style={{ height: 400, width: "100%" }}
                  aspectRatio={16 / 9}
                  src={image}
                  viewMode={1}
                  guides={false}
                  scalable={true}
                  cropBoxResizable={true}
                  onInitialized={(instance) => setCropper(instance)}
                />
              </div>
              <div className="flex pt-3">
                <button
                  type="button"
                  onClick={getCropData}
                  className="bg-blue-600 p-1 rounded-md text-md mr-1 font-semibold text-white w-1/2"
                >
                  Crop
                </button>
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="bg-gray-600 p-1 rounded-md text-md ml-1 font-semibold text-white w-1/2"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <img src={cropData} alt="Cropped" />
            </div>
          )}
          {((!image && !cropData) || (image && cropData)) && (
            <>
              <div className="mb-4 mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Course Title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("title", {
                    required: "This field is required",
                  })}
                />
                {errors.title && <FormError error={errors.title.message} />}
              </div>
              <div className="mb-4 mt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Department
                </label>
                <Dropdown
                  selectedOption={selectedDepartment}
                  setSelectedOption={setSelectedDepartment}
                  uploading={true}
                />
                {departmentError && <FormError error={departmentError} />}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
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
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Add Course{" "}
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
