import { BrowserRouter, Route, Routes } from "react-router-dom";


import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import EmployeeInfo from "./pages/Employee_Info";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Courses from "./pages/Courses";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<EmployeeInfo />} />
          <Route path="courses" element={<Courses />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
