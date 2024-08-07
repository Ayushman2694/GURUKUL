// src/ui/DashboardCard.jsx
import React from 'react';

export default function DashboardCard({ title, courses }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className="mb-2">{course}</li>
        ))}
      </ul>
    </div>
  );
}
