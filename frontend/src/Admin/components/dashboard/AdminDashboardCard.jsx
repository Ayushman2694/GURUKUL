import React from 'react'

export default function AdminDashboardCard({title, number}) {
  return (
    <div className="bg-gray-50 shadow-md rounded-lg p-4">
          <h2 className="text-gray-600"> {title}</h2>
          <p className="text-2xl font-bold">{number}</p>
    </div>
  )
}
