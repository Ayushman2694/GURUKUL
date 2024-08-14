/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import FormError from "../../Common/Ui/FormError";
import { useEmployeeSignup } from "../components/settings/useEmployeeSignup";
import SpinnerMini from "../../Common/Ui/SpinnerMini";
import BackButton from "../../Common/Ui/BackButton";
import Dropdown from "../ui/DropDown";

export default function EmployeeSignup() {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { employeeSignup, isLoading } = useEmployeeSignup();

  function onSubmit(data) {
    if (!selectedDepartment) return null;
    employeeSignup(
      {
        empId: data.empid,
        employeeName: data.name,
        department: selectedDepartment,
        designation: data.designation,
        password: data.password,
        joiningDate: data.joiningDate,
      },
      {
        onSuccess: () => {
          reset();
        },
        onError: () => {
          reset();
        },
      }
    );
  }

  return (
    <>
      <BackButton />
      <div
        className={`h-full w-full flex items-center justify-center bg-gray-200 pb-20 overflow-y-auto ${
          !errors.empid ? "pt-20" : "pt-60"
        }`}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Add New Employee
          </h2>
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
                disabled={isLoading}
                id="empid"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("empid", {
                  required: "This field is required",
                })}
              />
              {errors.empid && <FormError error={errors.empid.message} />}
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
                disabled={isLoading}
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("name", {
                  required: "This field is required",
                })}
              />
              {errors.name && <FormError error={errors.name.message} />}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="department"
              >
                Department
              </label>
              <Dropdown
                selectedOption={selectedDepartment}
                setSelectedOption={setSelectedDepartment}
              />
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
                disabled={isLoading}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("designation", {
                  required: "This field is required",
                })}
              />
              {errors.designation && (
                <FormError error={errors.designation.message} />
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
                disabled={isLoading}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("joiningDate", {
                  required: "This field is required",
                })}
              />
              {errors.joiningDate && (
                <FormError error={errors.joiningDate.message} />
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
                disabled={isLoading}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
              />
              {errors.password && <FormError error={errors.password.message} />}
            </div>

            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                disabled={isLoading}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("confirmPassword", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  },
                })}
              />
              {errors.confirmPassword && (
                <FormError error={errors.confirmPassword.message} />
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {isLoading ? <SpinnerMini /> : "Add Employee"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
