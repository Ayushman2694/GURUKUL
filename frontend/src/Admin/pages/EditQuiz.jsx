import { useParams } from "react-router-dom";
import { useQuizId } from "../components/quiz/useQuizById";
import Spinner from "../../Common/Ui/Spinner";
import BackButton from "../../Common/Ui/BackButton";

export default function EditQuiz() {
  const { quizId } = useParams();
  const { isloading, quiz } = useQuizId(quizId);

  if (isloading) return <Spinner />;
  console.log(quiz);
  return (
    <>
      <BackButton />
      <div className="min-h-screen w-full bg-white p-4">
        <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
          <h1 className="text-3xl font-bold mb-3">Edit Quiz</h1>
        </div>
      </div>
    </>
  );
}
