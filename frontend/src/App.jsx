import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import EmployeeInfo from "./pages/Employee_Info";
import Courses from "./pages/Courses";
import Settings from "./pages/Settings";
import PrivateRoute from "./component/PrivateRoute";
import Course from "./pages/Course";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <PrivateRoute>
                <AppLayout />
              </PrivateRoute>
            }
          >
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<EmployeeInfo />} />
            <Route path="course" element={<Course />} />
            <Route path="courses" element={<Courses />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
        <Toaster
          position="bottom-right"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              margin: "0 50px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-0)",
              color: "black",
            },
          }}
        />
      </BrowserRouter>
    </QueryClientProvider>
  );
}
