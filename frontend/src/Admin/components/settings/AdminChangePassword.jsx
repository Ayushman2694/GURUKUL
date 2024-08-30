import React from "react";
import Changepassword from "../../../Common/Ui/Changepassword";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function AdminChangePassword() {
//     const [token] = useState(localStorage.getItem("token"));
//     const { employe_info } = useEmployeeInfo(token);
//     const { changePassword, isLoading } = useChangePassword();
//     const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function onSubmit(data) {
    console.log(data);
    if (data.newPassword != data.confirmPassword) {
      toast.error("Password does not match!");
    } else {
      if (data.newPassword === data.confirmPassword) {
        toast.success("Password Changed");
      } else {
        toast.error("Incorrect Current Password");
      }
    }

    reset();
  }
  return (
    <div className="h-full w-full flex items-center p-2 justify-center bg-gray-200 pb-20">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Changepassword register={register} errors={errors} />
        </form>
      </div>
    </div>
  );
}
