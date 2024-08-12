import { RiDeleteBin6Fill } from "react-icons/ri";
import BackButton from "../../Common/Ui/BackButton";

export default function ShowAllAdmin() {
  const adminData = [
    { id: 1, name: "Admin One", email: "admin1@example.com" },
    { id: 2, name: "Admin Two", email: "admin2@example.com" },
    { id: 3, name: "Admin Three", email: "admin3@example.com" },
  ];

  return (
    <>
      <BackButton />
      <div className="min-h-screen w-full bg-white p-4">
        <h1 className="text-3xl font-bold mb-6">Admin List</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 w-2/5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 w-2/5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 w-1/5 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {adminData.map((admin) => (
                <tr key={admin.id}>
                  <td className="px-5 py-3 w-2/5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {admin.name}
                    </p>
                  </td>
                  <td className="px-5 py-3 w-2/5 border-b border-gray-200 bg-white text-sm text-left">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {admin.email}
                    </p>
                  </td>
                  <td className="px-5 py-3 w-1/5 border-b border-gray-200 bg-white text-sm text-center">
                    <div className="flex justify-center">
                      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">
                        <span className="text-xl">
                          <RiDeleteBin6Fill />
                        </span>
                        <span className="font-semibold text-md">Remove</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
