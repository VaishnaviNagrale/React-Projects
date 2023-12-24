import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/VaishnaviNagrale')
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data)
    //     setData(data)
    //   }
    //   )
    // }, [data])
    
  return (
    <>
    <div className='flex flex-col items-center justify-center m-4 bg-gray-600 text-white p-6 rounded-lg shadow-lg'>
    <img src={data.avatar_url} alt='Github Image' className='rounded-full mb-4' height={100} width={100} />

    <h2 className='text-xl font-bold mb-2'>{data.name}</h2>

    <p className='text-sm text-gray-300 mb-4'>{data.bio}</p>

    <div className='grid grid-cols-2 gap-2'>
        <div className='text-center'>
            <p className='text-lg font-bold text-yellow-300'>Followers</p>
            <p className='text-xl'>{data.followers}</p>
        </div>

        <div className='text-center'>
            <p className='text-lg font-bold text-yellow-300'>Public Repos</p>
            <p className='text-xl'>{data.public_repos}</p>
        </div>
    </div>
</div>

    </>
  )
}

export default Github

export const githubInfoLoader = ()=>{
    const response = fetch('https://api.github.com/users/VaishnaviNagrale')
    return response
}