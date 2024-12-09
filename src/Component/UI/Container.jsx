import React from 'react'
import { Link } from 'react-router-dom'

function Container({ children }) {
  return (
    <div className=''>
      <div className='w-full border px-6 py-8 rounded-lg'>
        {children}
      </div>
    </div>
  )
}

export default Container