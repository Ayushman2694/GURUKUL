/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { changePassword } from "../services/employe_info";
import { useEmployeeInfo } from "../component/employee_info/useEmployeeInfo";
import { Logout } from "../services/Login";
import { useNavigate } from "react-router-dom";
import { useChangePassword } from "../component/auth/useChangePassword";



export default function Settings() {
  const [token] = useState(localStorage.getItem("token"));
  const { employe_info } = useEmployeeInfo(token);
  const { changePassword, isLoading } = useChangePassword();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    if (data.newPassword != data.confirmPassword) {
      toast.error("Password does not match!");
    } else {
      if (
        data.newPassword === data.confirmPassword &&
        employe_info.password === data.currentPassword
      ) {
        changePassword(
          {
            empId: "MHPL0481",
            oldPassword: data.currentPassword,
            newPassword: data.newPassword,
          },
          {
            onSuccess: () => {
              navigate("/login");
            },
          }
        );
        toast.success("Password Changed Successfully");
        Logout();
        navigate("/login");
      } else {
        toast.error("Incorrect Current Password");
      }
    }

    reset();
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 pb-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="currentPassword"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("currentPassword", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "min 8 characters",
                },
              })}
            />
            {errors.currentPassword && (
              <span className="text-red-500 text-sm">
                {errors.currentPassword.message}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("newPassword", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "min 8 characters",
                },
              })}
            />
            {errors.newPassword && (
              <span className="text-red-500 text-sm">
                {errors.newPassword.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("confirmPassword", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "min 8 characters",
                },
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}