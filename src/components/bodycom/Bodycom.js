import React from 'react'
import ResContainer from './ResContainer'
import { FaLocationDot } from "react-icons/fa6";



const Bodycom = () => {

  const value = "Bengaluru"

  return (
    <div className='m-2 '>
      <div className='h-[400px] flex flex-col items-center justify-center bg-cover bg-repeat-none bg-center rounded-2xl gap-4' style={{ backgroundImage: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89")`, }}>
        <div className='w-full h-full flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-gray-950 to-transparent rounded-2xl'>
          <div className='w-full flex items-center justify-center text-[2.5rem] text-white font-bold font-mono'>
            <h1>Discover the best food and drinks in {value}</h1>
          </div>
          <div className='flex items-center justify-center'> 
            <h2 className='flex items-center justify-center bg-white p-4 rounded-md '> <FaLocationDot className='w-4 h-4 mx-1' />{value}</h2>
            <input type='text' className='w-[400px] mx-4 p-4 border-0 focus:outline-none rounded-lg' />
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center p-4'>
        <h1 className='text-[1.5rem] font-bold font-mono'>
          Famous restaurants Chain in {value}
        </h1>
        <ResContainer />
      </div>
    </div>
  )
}

export default Bodycom;