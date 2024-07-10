import React from 'react'
import { IoIosStar } from "react-icons/io";


const ResCard = ({resname, rating, time, cusine}) => {
  return (
    <div className='flex flex-col items-center w-[18rem] bg-yellow-100 shadow-xl font-mono gap-3 p-2 m-2 rounded-xl'>
      <img className='rounded-lg w-full h-[15rem]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2b4f62d606d1b2bfba9ba9e5386fabb7' alt='foodpartner' ></img>
      <h1 className='w-full text-[1.5rem] '>{resname}</h1>
      <div className='w-full flex justify-start items-start gap-10'>
        <h3 className='flex tems-center justify-center gap-2' ><IoIosStar className='w-5 h-5'/> {rating}  </h3>
        <h4>{time}</h4>
      </div>
      <h4 className='text-[1rem] w-full'>{cusine} </h4>
    </div>
  )
}

export default ResCard