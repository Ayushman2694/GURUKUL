import SpinnerMini from "../../Common/Ui/SpinnerMini";
import FormError from "../../Common/Ui/FormError";

import Toggle from "react-toggle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-toggle/style.css";
import "react-toastify/dist/ReactToastify.css";

import { useLogin } from "../component/auth/useLogin";
import { useAdminLogin } from "../component/auth/useAdminLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isEmployee, setIsEmployee] = useState(true);
  const { login, isLoading: UserLoginLoading } = useLogin();
  const { adminLogin, isLoading } = useAdminLogin();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsEmployee((prevState) => {
      reset(); // Reset the form when toggling
      return !prevState;
    });
  };

  function onSubmit(data) {
    if (isEmployee) {
      login(
        { empId: data.empId, password: data.password },
        {
          onSuccess: () => {
            navigate("/employee/dashboard");
          },
        }
      );
    } else {
      adminLogin({ adminEmail: data.email, password: data.password });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Welcome to Mediversal Gurukul
      </h1>
      <div
        className="bg-white p-6 rounded-lg shadow-lg flex w-3/4 max-w-4xl"
        style={{ minHeight: "470px" }}
      >
        <div
          className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-md flex flex-col justify-center"
          style={{ height: "400px" }}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Login As</h2>
          <div className="flex justify-center items-center mb-4">
            <span
              className={`mr-4 ${isEmployee ? "text-black" : "text-gray-500"}`}
            >
              Employee
            </span>
            <Toggle
              defaultChecked={!isEmployee}
              icons={false}
              onChange={handleToggle}
            />
            <span
              className={`ml-4 ${!isEmployee ? "text-black" : "text-gray-500"}`}
            >
              Admin
            </span>
          </div>
          <hr className="mb-4" />
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col justify-between h-full"
          >
            <label className=" font-semibold py-2">
              {!isEmployee ? "Email" : "Employee ID"}
            </label>
            <input
              name="empId"
              id={`${!isEmployee ? "email" : "empId"}`}
              type="text"
              placeholder={!isEmployee ? "Email" : "Employee Id"}
              className="w-full p-2 mb-1 border rounded"
              disabled={isLoading || UserLoginLoading}
              {...register(`${!isEmployee ? "email" : "empId"}`, {
                required: "This field is required",
                pattern: !isEmployee
                  ? {
                      value: /\S+@\S+\.\S+/,
                      message: "Email not valid",
                    }
                  : undefined,
              })}
            />
            {errors.email && <FormError error={errors.email.message} />}
            {errors.empId && <FormError error={errors.empId.message} />}
            <label className=" font-semibold py-2">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              placeholder="Password"
              className="w-full p-2 mb-1 border rounded"
              disabled={isLoading || UserLoginLoading}
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 8,
                  message: "min 8 characters",
                },
              })}
            />
            {errors.password && <FormError error={errors.password.message} />}
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 my-4 rounded w-full"
              disabled={isLoading || UserLoginLoading}
            >
              {isLoading || UserLoginLoading ? <SpinnerMini /> : "Login"}
            </button>
          </form>
        </div>
        <div
          className="hidden md:flex md:w-1/2 p-6 items-center"
          style={{ height: "300px" }}
        >
          <img
            src="/loginImage.webp"
            alt="Reception"
            className="rounded-lg shadow-lg mx-auto mt-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
