/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Certificate = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    className="bg-white p-10 shadow-lg w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-8 relative"
  >
    <div className="border-4 border-blue-500 p-8 relative">
      <div
        className="absolute top-4 left-4 w-24 h-24 bg-center bg-contain bg-no-repeat"
        // style={{ backgroundImage: "url('logo.png')" }}
      ></div>
      <h1 className="text-4xl font-bold text-gray-700 mb-2 uppercase">
        Certificate of Completion
      </h1>
      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto my-4"></div>
      <h2 className="text-2xl text-gray-600 mb-8">Mediversal Gurukul</h2>
      <p className="text-lg text-gray-700 mb-8">
        This is to certify that
        <span className="block text-2xl font-semibold text-blue-500 my-2">
          {props.name}
        </span>
        from the Department of
        <span className="block text-2xl font-semibold text-blue-500 my-2">
          {props.department}
        </span>
        has successfully completed the course
        <span className="block text-2xl font-semibold text-blue-500 my-2">
          {props.course}
        </span>
      </p>
      <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-green-500 mx-auto my-4"></div>
      <div className="text-right mt-8 text-gray-600 italic">
        <p>Director</p>
        <p>Mediversal Gurukul</p>
      </div>
    </div>
  </div>
));

Certificate.displayName = "Certificate";

export default function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Certificate
        ref={componentRef}
        name="John Doe"
        department="Computer Science"
        course="Full Stack Development"
      />
      <button
        onClick={handlePrint}
        className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
      >
        Download as PDF
      </button>
    </div>
  );
}
