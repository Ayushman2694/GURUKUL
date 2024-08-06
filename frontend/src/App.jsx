import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearnerDashboard from "./pages/LearnerDashboard";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<LearnerDashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
