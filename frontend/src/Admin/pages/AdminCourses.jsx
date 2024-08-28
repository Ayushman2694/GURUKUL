import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import Spinner from "../../Common/Ui/Spinner";
import { FaPlayCircle } from "react-icons/fa";
import AddButton from "../ui/AddButton";
import { useNavigate } from "react-router-dom";
import { useAllCourse } from "../components/courses/useAllCourse";
// import { useState } from "react";
import ShowMoreShowLess from "../../Common/Ui/ShowMoreShowLess";
import { useDeleteCourse } from "../components/courses/useDeleteCourse";
import SpinnerMini from "../../Common/Ui/SpinnerMini";

export default function AdminCourses() {
  const navigate = useNavigate();
  const { isLoading, allCourse } = useAllCourse();
  const { removeCourse, isLoading: deleteCourseLoading } = useDeleteCourse();
  if (isLoading) return <Spinner />;
  // const [readmore, setReadmore]= useState(false);
  //   function readMoreHandler(){
  //     setReadmore(!readmore);
  //     // console.log("I am clicked");
  // }

  return (
    <div className="min-h-screen w-full bg-white p-4 ">
      <div className="flex items-center justify-between w-full text-3xl font-bold mb-3">
        <h1 className="text-3xl font-bold mb-3">Course</h1>

        <AddButton
          title="Course"
          onClick={() => {
            navigate("/admin/addCourse");
          }}
        />
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden pb-20">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-2 py-3 w-1/12 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Thumbnail
              </th>
              <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Course Title
              </th>
              <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Department
              </th>
              <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Module
              </th>
              <th className="px-5 py-3 w-3/12 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allCourse.map((course) => (
              <tr key={course._id}>
                <td className="px-1 py-1 w-1/12 border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    <img src={course?.thumbnail} />
                  </p>
                </td>
                <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm text-left">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {course?.courseTitle}
                  </p>
                </td>
                <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm text-left">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {course?.courseDepartment}
                  </p>
                </td>
                <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm text-left">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {course?.noOfModules}
                  </p>
                </td>
                <td className="px-5 py-3 w-3/12 border-b border-gray-200 bg-white text-sm text-left">
                  <div className="text-gray-900 whitespace-no-wrap">
                    <div className="text-gray-900 whitespace-no-wrap">
                      <ShowMoreShowLess
                        descriptionDetail={course?.courseDescription}
                        charNo={50}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm text-center">
                  <div className="flex justify-center gap-2">
                    <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700">
                      <span className="text-xl">
                        <FaPlayCircle />
                      </span>
                      Watch
                    </button>
                    <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700">
                      <span className="text-xl">
                        <MdEdit />
                      </span>
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        removeCourse(course._id);
                      }}
                      disabled={deleteCourseLoading}
                      className="flex items-center gap-2 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700"
                    >
                      {deleteCourseLoading ? (
                        <SpinnerMini />
                      ) : (
                        <>
                          <span className="text-xl">
                            <RiDeleteBin6Line />
                          </span>
                          Remove
                        </>
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// import { RiDeleteBin6Line } from "react-icons/ri";
// import { MdEdit } from "react-icons/md";
// import Spinner from "../../Common/Ui/Spinner";
// import { FaPlayCircle } from "react-icons/fa";
// import AddButton from "../ui/AddButton";
// import { useNavigate } from "react-router-dom";
// import { useAllCourse } from "../components/courses/useAllCourse";
// import { useState } from "react";

// export default function AdminCourses() {
//   const navigate = useNavigate();
//   const { isLoading, allCourse } = useAllCourse();
//   const [expandedCourses, setExpandedCourses] = useState({});

//   if (isLoading) return <Spinner />;

//   const toggleReadMore = (courseId) => {
//     setExpandedCourses((prevExpandedCourses) => ({
//       ...prevExpandedCourses,
//       [courseId]: !prevExpandedCourses[courseId],
//     }));
//   };

//   return (
//     <div className="min-h-screen w-full bg-white p-4 ">
//       <div className="flex items-center justify-between w-full text-3xl font-bold mb-3">
//         <h1 className="text-3xl font-bold mb-3">Course</h1>

//         <AddButton
//           title="Course"
//           onClick={() => {
//             navigate("/admin/addCourse");
//           }}
//         />
//       </div>
//       <div className="bg-white shadow-md rounded-lg overflow-hidden pb-20">
//         <table className="min-w-full leading-normal">
//           <thead>
//             <tr>
//               <th className="px-2 py-3 w-1/12 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Thumbnail
//               </th>
//               <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Course Title
//               </th>
//               <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Department
//               </th>
//               <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Module
//               </th>
//               <th className="px-5 py-3 w-3/12 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Description
//               </th>
//               <th className="px-5 py-3 w-1/6 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {allCourse.map((course) => {
//               const isExpanded = expandedCourses[course._id];
//               const description = isExpanded
//                 ? course?.courseDescription
//                 : `${course?.courseDescription.substring(0, 42)}`;

//               return (
//                 <tr key={course?._id}>
//                   <td className="px-1 py-1 w-1/12 border-b border-gray-200 bg-white text-sm">
//                     <img src={course?.thumbnail} alt="Thumbnail" />
//                   </td>
//                   <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm">
//                     {course?.courseTitle}
//                   </td>
//                   <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm">
//                     {course?.courseDepartment}
//                   </td>
//                   <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm">
//                     {course?.noOfModules}
//                   </td>
//                   <td className="px-5 py-3 w-3/12 border-b border-gray-200 bg-white text-sm">
//                     <p className="text-gray-900 whitespace-no-wrap">
//                       {description}
//                       <span
//                         className="read-more cursor-pointer font-semibold ml-2"
//                         onClick={() => toggleReadMore(course?._id)}
//                       >
//                         {description.length<40?" ":isExpanded ? " ...Show Less" : " ...Read More"}

//                       </span>
//                     </p>
//                   </td>
//                   <td className="px-5 py-3 w-1/6 border-b border-gray-200 bg-white text-sm text-center">
//                     <div className="flex justify-center gap-2">
//                       <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700">
//                         <FaPlayCircle className="text-xl" />
//                         Watch
//                       </button>
//                       <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700">
//                         <MdEdit className="text-xl" />
//                         Edit
//                       </button>
//                       <button className="flex items-center gap-2 bg-red-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-red-700">
//                         <RiDeleteBin6Line className="text-xl" />
//                         Remove
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
