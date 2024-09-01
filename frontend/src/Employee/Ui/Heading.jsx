/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Heading({ text }) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    setIsRendered(true);
  }, []);

  const flashUpStyle = {
    opacity: isRendered ? 1 : 0,
    transform: isRendered
      ? "translateX(0) scale(1)"
      : "translateX(-500px) scale(1)",
    transition: " transform 0.5s ",
  };

  return (
    <div className="w-full flex pt-4" style={flashUpStyle}>
      <h1 className="md:text-3xl font-bold bg-blue-600 text-white pr-8 pl-2 shadow shadow-black py-1 rounded-r-full">
        {text}
      </h1>
    </div>
  );
}
