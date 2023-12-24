import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-orange-400 text-white border-gray-200 px-4 lg:px-6 py-2.5 text-center'>User: {userid}</div>
  )
}

export default User