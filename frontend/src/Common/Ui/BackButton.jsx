import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <div
      className="absolute top-0 right-0 text-xl m-6 mt-20 rounded-lg font-samibold px-3 py-1  bg-blue-800 text-slate-50 cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <div className="flex justify-center items-center">
        <IoChevronBackOutline />
        Back
      </div>
    </div>
  );
}
