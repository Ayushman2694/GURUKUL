import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import LearnerDashboard from "./pages/LearnerDashboard";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<LearnerDashboard />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
