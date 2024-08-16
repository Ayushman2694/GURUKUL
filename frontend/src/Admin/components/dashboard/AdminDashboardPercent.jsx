import React from 'react'

export default function AdminDashboardPercent({description, percent}) {
  return (
    <div className="bg-blue-100 text-blue-700 rounded-lg ">
           <div className='bg-blue-100 text-blue-700 p-4 rounded-lg flex justify-between'>
                <span>% of users {description}</span>
                <span className="font-bold">{percent}%</span>
           </div>
    </div>
  )
}
