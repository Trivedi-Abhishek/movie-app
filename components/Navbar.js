import React from 'react'
import requests from '../utils/requests'
import {useRouter} from "next/router"
export default function Navbar() {
  const router=useRouter()
  return (
    <div className='bg-gray-600 text-gray-200 select-none text-xl lg:text-2xl flex justify-center'>
      {Object.entries(requests).map(([key,{title,url}])=>(
        <h2 onClick={()=>(router.push(`?genre=${key}`))} className=" m-6 cursor-pointer active:text-red-500 hover:text-white" key={key}>{title}</h2>
      ))}
    </div>
  )
}
