import React from 'react'
import { IoIosStar } from "react-icons/io";

import { SEARCH_BG_IMG } from '../utils/constant';

const ResCard = ({resname, rating, time, cusine}) => {
  return (
    <div className='flex flex-col items-center min-w-[18rem] font-mono gap-3 p-2 m-2 rounded-xl hover:scale-[10px]' >
      <img className='rounded-lg w-full h-[15rem]' src={SEARCH_BG_IMG} alt='foodpartner' ></img>
      <h1 className='w-full text-[1.5rem] '>{resname}</h1>
      <div className='w-full flex justify-start items-start gap-10'>
        <h3 className='flex tems-center justify-center gap-2' ><IoIosStar className='w-5 h-5'/> {rating}  </h3>
        <h4>{time}</h4>
      </div>
      <h3 className='text-[1rem] w-full'>00 for 2</h3>
      <h4 className='text-[1rem] w-full'>{cusine} </h4>
    </div>
  )
}

export default ResCard