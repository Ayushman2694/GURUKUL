/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import BackButton from "./BackButton";

const Certificate = React.forwardRef((props, ref) => (
  <div ref={ref} className="flex items-center justify-center p-4 bg-gray-100">
    <div className="relative w-full max-w-4xl p-10 bg-white border-2 border-blue-500 shadow-lg rounded-lg text-center">
      <div
        className="absolute top-2 left-2 w-24 h-24 bg-no-repeat bg-center bg-contain"
        style={{
          backgroundImage:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHcUlEQVR4nO2de4hXRRTHP6u2ZWlqaZakRpaVldVDKzXL1B5qD3ualj0pKnpJ9DCiKKQXQT+IXlBREFlEf0SU9jAq0h6WZfawrMxeVlrmQ81Wd2PjwFm4XO7vd2fOzPzu ... )",
        }}
      ></div>
      <div className="border border-blue-500 absolute inset-2 pointer-events-none"></div>
      <h1 className="text-4xl font-bold text-gray-800 mb-5 uppercase tracking-wider">
        Certificate of Completion
      </h1>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 mb-5"></div>
      <h2 className="text-2xl text-gray-700 mb-8 font-light">
        Mediversal Gurukul
      </h2>
      <p className="text-lg text-gray-800 mb-8">
        This is to certify that
        <div className="text-2xl font-bold text-blue-500 inline-block my-2 px-2">
          {props.name}
        </div>
        from the Department of
        <div className="text-2xl font-bold text-blue-500 inline-block my-2 px-2">
          {props.department}
        </div>
        has successfully completed the course
        <div className="text-2xl font-bold text-blue-500 inline-block my-2 px-2">
          {props.course}
        </div>
      </p>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-green-500 mb-8"></div>
      <div className="italic text-gray-700">
        <p>Director</p>
        <p>Mediversal Gurukul</p>
      </div>
    </div>
  </div>
));

Certificate.displayName = "Certificate";

export default function App() {
  const { name, courseName, depertment } = useParams();
  console.log(name, courseName, depertment);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <BackButton />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <Certificate
          ref={componentRef}
          name={name}
          course={courseName}
          department={depertment}
        />
        <button
          onClick={handlePrint}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
        >
          Download as PDF
        </button>
      </div>
    </>
  );
}
