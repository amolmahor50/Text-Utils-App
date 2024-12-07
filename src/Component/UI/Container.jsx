import React from 'react'
import { Link } from 'react-router-dom'

function Container({ children }) {
  return (
    <div className=''>
      <div className='w-full border px-6 py-8 rounded-lg'>
        {children}
      </div>
      <Link to='/feedback'
       className='flex justify-end items-end mt-2 text-xs text-gray-600'>Send Feedback</Link>
    </div>
  )
}

export default Container