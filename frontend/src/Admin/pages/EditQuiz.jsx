
import React from "react";
import Spinner from "../../Common/Ui/Spinner";
import EditTextQuestion from "../components/quiz/EditTextQuestion";
import EditSingleCorrectQuestion from "../components/quiz/EditSingleCorrectQuestion";
import EditMultipeCorrectQuestion from "../components/quiz/EditMultipeCorrectQuestion";
import { IoCreateOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

export default function EditQuiz() {
  const Quizs = [
    {
      quizTitle: "Animal Quiz",
    },
    {
      correctAnswer: "Elephant",
      question: "What is the largest land animal?",
      questionType: "text",
    },
    {
      correctAnswer: "option2",
      option1: "Lion",
      option2: "Tiger",
      option3: "Cheetah",
      option4: "Leopard",
      question: "Which animal is known as the 'King of the Jungle'?",
      questionType: "singleCorrect",
    },
    {
      correctAnswer: ["option1", "option3"],
      option1: "Penguin",
      option2: "Eagle",
      option3: "Albatross",
      option4: "Parrot",
      question: "Which of these animals can fly?",
      questionType: "multipleCorrect",
    },
    {
      correctAnswer: "Giraffe",
      question: "Which animal has the longest neck?",
      questionType: "text",
    },
    {
      correctAnswer: "Blue Whale",
      question: "What is the largest animal in the world?",
      questionType: "text",
    },
    {
      correctAnswer: ["option2", "option4"],
      option1: "Cat",
      option2: "Dog",
      option3: "Hamster",
      option4: "Rabbit",
      question: "Which of these animals are commonly kept as pets?",
      questionType: "multipleCorrect",
    },
    {
      correctAnswer: "Hawk",
      option1: "Eagle",
      option2: "Hawk",
      option3: "Vulture",
      option4: "Owl",
      question:
        "Which bird is known for its excellent vision and hunting skills?",
      questionType: "singleCorrect",
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function checkSubmit(data) {
    console.log(data);
    // uploadQuiz({ title: data.name, questions: questions });
    // console.log({ title: data.name, questions: questions });
    // setIsSubmitted(true);
  }

  return (
    <div className="min-h-screen w-full bg-white p-4">
      <div className="flex items-center justify-between w-full text-3xl font-bold mb-3 pr-20">
        <h1 className="text-3xl font-bold mb-3">Edit Quiz</h1>
      </div>
      <form onSubmit={handleSubmit(checkSubmit)}>
        <div className="px-6 py-4  w-full bg-gray-100 h-fit">
          <div className="mb-2">
            <div className="flex justify-between mb-0">
              <label
                className="block text-gray-700 text-lg font-bold mb-"
                htmlFor="quizTitle"
              >
                Quiz Title
              </label>
              <button
                type="submit"
                className={`flex w-18 gap-1 text-white font-bold rounded-full px-3 py-1 mb-1 mr-1 bg-green-600 `}
              >
                <span className="mt-1">
                  <IoCreateOutline />
                </span>
                Update Quiz
              </button>
            </div>
            <input
              type="text"
              id="quizTitle"
              className="shadow appearance-none border rounded w-full py-2  mb-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={Quizs[0]?.quizTitle}
              {...register("title", {
                required: "This field is required",
              })}
            />
          </div>

          {Quizs.slice(1).map((quiz, index) => {
            if (quiz.questionType === "text") {
              return (
                <EditTextQuestion
                  key={index} // Add key prop here
                  index={index + 1}
                  quiz={quiz}
                  register={register}
                />
              );
            } else if (quiz.questionType === "singleCorrect") {
              return (
                <EditSingleCorrectQuestion
                  key={index} // Add key prop here
                  index={index + 1}
                  quiz={quiz}
                  register={register}
                />
              );
            } else {
              return (
                <EditMultipeCorrectQuestion
                  key={index} // Add key prop here
                  index={index + 1}
                  quiz={quiz}
                  register={register}
                />
              );
            }
          })}
        </div>
      </form>
    </div>

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
