import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

const Search = () => {

  return (
    <div className='flex flex-col items-center justify-center my-10'>
      {/* <div className='h-[200px] flex flex-col items-center justify-center bg-cover bg-repeat-none bg-center rounded-2xl gap-4' style={{ backgroundImage: `url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1171b83d63d7c203e5f1c3e16980cd89")`, background: "none", }}> */}
        <div className='w-full h-full flex flex-col items-center justify-center gap-4 rounded-2xl'>
          <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold font-serif'>
            <h1>Discover the best food recipies</h1>
          </div>
          <div className='flex items-center justify-center'>
            <h2 className='flex items-center justify-center p-4 rounded-md bg-[#f8c78c]'> <FaLocationDot className='w-4 h-4 mx-1 text-[#ffb502]' />value</h2>
            <input type='text' placeholder='Search recipie' className='w-[200px] lg:w-[400px] mx-4 p-4 border-0 bg-[#f8c78c] focus:outline-none rounded-lg placeholder:text-[#382610]' />
          </div>
        </div>
    </div>
  )
}

export default Search;