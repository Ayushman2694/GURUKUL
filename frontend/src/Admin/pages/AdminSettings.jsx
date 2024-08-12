import Container from "../components/settings/Container";
import { useNavigate } from "react-router-dom";
import ConfirmDelete from "../ui/ConfirmDelete";
import { useState } from "react";

export default function AddUserAdmin() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`w-full p-4`}>
      <div className="w-full">
        <h1 className="text-3xl font-bold ">Admin Settings</h1>
      </div>
      <div className="w-full pt-6 min-h-screen">
        <Container
          title="Department"
          addButtonClickHandler={() => navigate("/admin/addDetertment")}
          showMoreButtonClickHandler
        />
        <Container
          title="Admin"
          addButtonClickHandler={() => navigate("/admin/SignUp")}
          showMoreButtonClickHandler={() => navigate("/admin/showAllAdmin")}
        />

        <Container
          title="Employee"
          addButtonClickHandler={() => navigate("/admin/employeeSignUp")}
          showMoreButtonClickHandler
        />
      </div>

      {confirmDelete && <ConfirmDelete close={setConfirmDelete} />}
    </div>
  );
}
