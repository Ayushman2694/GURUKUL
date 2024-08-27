/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useShowAllRespnse } from "../../../Admin/components/quiz/useShowAllRespnse";
import Spinner from "../../../Common/Ui/Spinner";
import EmployeeName from "../../Ui/EmployeeName";
import { FaEye } from "react-icons/fa";

export default function ShowAllQuizResponse({ quizId }) {
  const navigate = useNavigate();
  const { isLoading, allResponse } = useShowAllRespnse(quizId);
  if (isLoading) return <Spinner />;
  console.log(allResponse);
  return (
    <div>
      <div className="min-h-screen w-full bg-white p-4">
        {/* <div className="flex items-center justify-between w-full text-3xl font-bold mb-6 pr-20">
          <span>Admin List</span>
          <AddButton title="Admin" onClick={() => navigate("/admin/SignUp")} />
        </div> */}

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 w-2/5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Employee Name
                </th>
                <th className="px-5 py-3 w-2/5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Employee Id
                </th>
                <th className="px-5 py-3 w-1/5 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {allResponse.map((response) => (
                <tr key={response._id}>
                  <td className="px-5 py-3 w-2/5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      <EmployeeName empId={response.empId} />
                    </p>
                  </td>
                  <td className="px-5 py-3 w-2/5 border-b border-gray-200 bg-white text-sm text-left">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {response.empId}
                    </p>
                  </td>
                  <td className="px-5 py-3 w-1/5 border-b border-gray-200 bg-white text-sm text-center ">
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          navigate(`/admin/quizzes/ShowAnswers/${response._id}`)
                        }
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full"
                      >
                        <span className="text-xl">
                          <FaEye />
                        </span>
                        <span className="font-semibold text-md">
                          See Answer
                        </span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
