import React from 'react'
import ResContainer from './ResContainer'
import { FaLocationDot } from "react-icons/fa6";



const Bodycom = () => {

  const value = "others"

  return (
    <div>
      <div className='h-[400px] flex items-center justify-center bg-cover bg-repeat-none bg-center ' style={{ backgroundImage: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89")`, }}>
        <div className='w-full h-full flex items-center justify-center bg-gradient-to-t from-gray-950 to-transparent '>
          <h2 className='flex items-center justify-center bg-white p-4 rounded-md '> <FaLocationDot className='w-4 h-4 mx-1' /> {value}</h2>
          <input type='text' value={value} className='w-[400px] mx-4 p-4 border-0 focus:outline-none rounded-lg' />
        </div>
      </div>
      <div>
        <h1>
          Famous restaurants
        </h1>
        <ResContainer />
      </div>
    </div>
  )
}

export default Bodycom;