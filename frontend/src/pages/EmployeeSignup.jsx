/* eslint-disable no-unused-vars */
import React from "react";

import { useForm } from "react-hook-form";

export default function EmployeeSignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    // toast.success("Employee added successfully");
    reset();
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-200 pb-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="empid"
            >
              Employee ID
            </label>
            <input
              type="text"
              id="empid"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("empid", {
                required: "This field is required",
              })}
            />
            {errors.empid && (
              <span className="text-red-500 text-sm">
                {errors.empid.message}
              </span>
            )}
          </div>
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", {
                required: "This field is required",
              })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="department"
            >
              Department
            </label>
            <input
              type="text"
              id="department"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("department", {
                required: "This field is required",
              })}
            />
            {errors.department && (
              <span className="text-red-500 text-sm">
                {errors.department.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              type="text"
              id="designation"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("designation", {
                required: "This field is required",
              })}
            />
            {errors.designation && (
              <span className="text-red-500 text-sm">
                {errors.designation.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="joiningDate"
            >
              Joining Date
            </label>
            <input
              type="date"
              id="joiningDate"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("joiningDate", {
                required: "This field is required",
              })}
            />
            {errors.joiningDate && (
              <span className="text-red-500 text-sm">
                {errors.joiningDate.message}
              </span>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
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
