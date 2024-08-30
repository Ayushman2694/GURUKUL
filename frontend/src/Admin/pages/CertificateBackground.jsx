import React, { useState } from "react";
// Adjust path as necessary
import { useForm } from "react-hook-form";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import imageCompression from "browser-image-compression";
import { MdAddAPhoto } from "react-icons/md";
import { toast } from "react-hot-toast";
import { useUploadCertificate } from "../components/settings/useUploadCertificate";
import {  useNavigate } from "react-router-dom";
import SpinnerMini from "../../Common/Ui/SpinnerMini";

export default function CertificateBackground() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 pb-14 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Set Certificate Background
        </h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        {selectedImage && (
          <div className="mb-4">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-64 h-64 object-cover rounded shadow-lg"
            />
          </div>
        )}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </div>
    </div>
  );
}
