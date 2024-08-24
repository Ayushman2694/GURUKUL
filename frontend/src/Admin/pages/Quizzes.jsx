import ShowQuizCard from "../components/quiz/ShowQuizCard";
import { useNavigate } from "react-router-dom";

import AddButton from "../ui/AddButton";



export default function Quizzes() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">All Quizzes</h1>
        <div className="space-x-4 text-sm flex mt-0 pt-0 ">

          <button 
            onClick={()=>{navigate('/admin/createQuiz')}}
            className='bg-blue-600 text-white font-semibold rounded-full px-3 py-2 flex items-center'>
              <IoMdAdd className="mr-1 font-semibold" /> Create New Quiz
          </button>         
        </div>
      </div>
      <div className="m-2 rounded-full">
        <input type="search"
          
          placeholder="Search Quiz"
          className="w-full h-10  bg-gray-100  rounded-full px-3" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <ShowQuizCard
          title="Course 1 Quiz"
          description="This is the description of course 1 Quiz this description is too long for checking the method is working or not "
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}

        />
        <ShowQuizCard
          title="Course 2 Quiz"
          description="This is the description of course 2 Quiz"
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}
        />
        <ShowQuizCard
          title="Course 3 Quiz"
          description="This is the description of course 3 Quiz"
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}
        />
        <ShowQuizCard
          title="Course 4 Quiz"
          description="This is the description of course 4 Quiz"
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}
        />
        <ShowQuizCard
          title="Course 5 Quiz"
          description="This is the description of course 5 Quiz"
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}
        />
        <ShowQuizCard
          title="Course 6 Quiz"
          description="This is the description of course 6 Quiz"
          viewQuizHandler={()=>{navigate('/admin/viewQuiz')}}
          EditQuizHandler={()=>{navigate('/admin/editQuiz')}}
        />
                
      </div>
    </div>
  );
}
