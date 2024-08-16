import React from 'react';
import { FaPlusCircle, FaUserPlus, FaQuestionCircle } from 'react-icons/fa';
import AdminDashboardCard from '../components/dashboard/AdminDashboardCard';
import AdminDashboardPercent from '../components/dashboard/AdminDashboardPercent';
import AdminDashboardBar from '../components/dashboard/AdminDashboardBar';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="space-x-4 text-sm flex mt-0 pt-0 ">

          <button className='text-blue-600 flex items-center'>
              <FaPlusCircle className="mr-2" /> Add Course
          </button>
          <button onClick={() => navigate("/admin/employeeSignUp")} className='text-green-600 flex items-center'>
          <FaUserPlus className="mr-2" /> Add Employee
          </button>
          <button className='text-purple-600 flex items-center'>
          <FaQuestionCircle className="mr-2" /> Add Quiz
          </button>         
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <AdminDashboardCard
          title="Total Courses"
          number="20"
        />
        <AdminDashboardCard
          title="Assigned Courses"
          number="5"
        />
        <AdminDashboardCard
          title="Total users"
          number="80"
        />
        
      </div>
      <div className="bg-gray-50 shadow-md rounded-lg p-4 mb-6">
        <select className="w-full p-2 border border-gray-300 rounded-lg mb-4">
          <option>Select Course</option>
          <option>course 1</option>
          <option>course 2</option>
          <option>course 3</option>
          <option>course 4</option>
        </select>

      </div>
      <div className='bg-gray-50 h-auto shadow-md rounded-lg p-4 mb-6'>
      <h1 className="text-xl font-semibold mb-6">Compliance Matrics</h1>
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
        <div className="bg-gray-100 h-auto mb-4 py-2 px-2 rounded-lg">
          {/* Placeholder for the bar chart */}
          <AdminDashboardBar percent="52" />
          <AdminDashboardBar percent="44" />
          <AdminDashboardBar percent="98" />
          <AdminDashboardBar percent="24" />
          <AdminDashboardBar percent="39" />
          <AdminDashboardBar percent="75" />
          <button className="bg-blue-600 mb-14 text-white w-full py-2 rounded-full hover:bg-blue-700">
            Download Metrics
          </button>
        </div>
       
      </div>
    </div>
  );
}
