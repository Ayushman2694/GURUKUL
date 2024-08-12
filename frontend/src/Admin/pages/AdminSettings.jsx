import Container from "../components/settings/Container";
import { useNavigate } from "react-router-dom";

export default function AddUserAdmin() {
  const navigate = useNavigate();

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
      </div>
    </div>
  );
}
