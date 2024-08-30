import Container from "../components/settings/Container";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { useBulkEmployess } from "../components/settings/useBulkEmployee";

export default function AddUserAdmin() {
  const navigate = useNavigate();
  const { bulkEmployees, isLoading } = useBulkEmployess();

  return (
    <div className={`w-full p-4`}>
      <div className="w-full">
        <h1 className="text-3xl font-bold ">Admin Settings</h1>
      </div>
      <div className="w-full pt-6 min-h-screen">
        <Container
          title="Department"
          addButtonClickHandler={() => navigate("/admin/addDepartment")}
          showMoreButtonClickHandler={() =>
            navigate("/admin/showAllDepartment")
          }
        />
        <Container
          title="Admin"
          addButtonClickHandler={() => navigate("/admin/SignUp")}
          showMoreButtonClickHandler={() => navigate("/admin/showAllAdmin")}
        />

        <Container
          title="Employee"
          addButtonClickHandler={() => navigate("/admin/employeeSignUp")}
          showMoreButtonClickHandler={() => navigate("/admin/showAllEmployee")}
        />
        <div className="mb-2 rounded shadow-md">
          <div className="flex justify-between items-center w-full rounded py-4 px-6 bg-gray-100 h-13">
            <h2 className="text-xl font-bold">Add Bulk Employees</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  navigate("/admin/setting/upload-bulk");
                }}
                className="bg-blue-600 text-white px-10 mx-1 py-1 h-10 text-sm font-bold rounded-full hover:bg-blue-700 hover:scale-110"
              >
                <div className=" flex justify-center items-center">
                  <MdAdd />
                  <span className="px-1">Upload CSV</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-2 rounded shadow-md">
          <div className="flex justify-between items-center w-full rounded py-4 px-6 bg-gray-100 h-13">
            <h2 className="text-xl font-bold">Certificate Background</h2>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  navigate("/admin/setting/certificate-image");
                }}
                className="bg-blue-600 text-white px-3 mx-1 py-1 h-10 text-sm font-bold rounded-full hover:bg-blue-700 hover:scale-110"
              >
                <div className=" flex justify-center items-center">
                  <MdAdd />
                  <span className="px-1">Change Background</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-2 rounded shadow-md">
          <div className="flex justify-between items-center w-full rounded py-4 px-6 bg-gray-100 h-13">
            <h2 className="text-xl font-bold">Change Password</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  navigate("/admin/setting/changepassword");
                }}
                className="bg-blue-600 text-white px-7 mx-1 py-1 h-10 text-sm font-bold rounded-full hover:bg-blue-700 hover:scale-110"
              >
                <div className=" flex justify-center items-center">
                  <span className="px-1">Change password</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
