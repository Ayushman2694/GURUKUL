/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export default function Container({ title, addButtonLabel }) {
  const navigate = useNavigate();

  function clickHandler() {
    if (title === "Admin") {
      navigate("/admin/SignUp");
    } else {
      navigate("/admin/employeeSignUp");
    }
  }

  return (
    <div className="mb-8 rounded">
      <div className="flex justify-between items-center w-full rounded py-4 px-6 bg-gray-100 h-13">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={clickHandler}
            className="bg-blue-600 text-white px-4 py-2 h-10 rounded-full hover:bg-blue-700"
          >
            {addButtonLabel}
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 h-10 rounded-full hover:bg-yellow-400 ">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}
