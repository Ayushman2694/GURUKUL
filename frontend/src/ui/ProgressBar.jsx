/* eslint-disable react/prop-types */
export default function ProgressBar({ progress }) {
  return (
    <div className="px-2 pt-2">
      <div className="w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-blue-600 h-1 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-sm pt-1">{progress}% completed</p>
    </div>
  );
}
