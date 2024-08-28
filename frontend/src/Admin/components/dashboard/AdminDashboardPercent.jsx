/* eslint-disable react/prop-types */
export default function AdminDashboardPercent({ description, percent = 0 }) {
  return (
    <div className="bg-blue-100 text-blue-700 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <span>% of users {description}</span>
        <span className="font-bold">{percent}%</span>
      </div>
      <div className="w-full bg-blue-300 rounded-full h-2.5">
        <div
          className="bg-blue-700 rounded-full h-2.5"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
