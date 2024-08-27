import { useNavigate } from "react-router-dom";
import AdminDashboardPercent from "../components/dashboard/AdminDashboardPercent";
export default function Tracking() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Tracking</h1>
      </div>

      <div className="bg-gray-50 h-auto shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-6">Track by username</h1>
          <div className="space-x-4 text-sm bg-blue-600 flex mt-0 px-4 py-2 rounded-full">
            <button className="text-white flex items-center">
              {/* <FaPlusCircle className="mr-2" /> */}
              Download Report
            </button>
          </div>
        </div>
        <div className="m-2 border  rounded-full">
          <input
            type="search"
            placeholder="Search Quiz"
            className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AdminDashboardPercent
            percent="52"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="44"
            description="currently using the course"
          />
          <AdminDashboardPercent
            percent="98"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="24"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="39"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="75"
            description="completed the course"
          />
        </div>
      </div>
      <div className="bg-gray-50 h-auto shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-6">Track by Course</h1>
          <div className="space-x-4 text-sm bg-blue-600 flex mt-0 px-4 py-2 rounded-full">
            <button className="text-white flex items-center">
              {/* <FaPlusCircle className="mr-2" /> */}
              Download Report
            </button>
          </div>
        </div>
        <div className="m-2 border  rounded-full">
          <input
            type="search"
            placeholder="Search Quiz"
            className="shadow my-1 appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AdminDashboardPercent
            percent="52"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="44"
            description="currently using the course"
          />
          <AdminDashboardPercent
            percent="98"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="24"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="39"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="75"
            description="completed the course"
          />
        </div>
      </div>
      <div className="bg-gray-50 h-auto shadow-md rounded-lg p-4 pb-14">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-6">Track by Department</h1>
          <div className="space-x-4 text-sm bg-blue-600 flex mt-0 px-4 py-2 rounded-full">
            <button className="text-white flex items-center">
              {/* <FaPlusCircle className="mr-2" /> */}
              Download Report
            </button>
          </div>
        </div>
        <div className="m-2 border  rounded-full">
          <input
            type="search"
            placeholder="Search Quiz"
            className="w-full h-10 border-slate-800 rounded-full px-3"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <AdminDashboardPercent
            percent="52"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="44"
            description="currently using the course"
          />
          <AdminDashboardPercent
            percent="98"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="24"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="39"
            description="completed the course"
          />
          <AdminDashboardPercent
            percent="75"
            description="completed the course"
          />
        </div>
      </div>
    </div>
  );
}
