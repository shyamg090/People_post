import React from 'react'
import Search from './Search';
import Allposts from './Allposts';
import PostRow from './PostRow';

const Bodycom = () => {

  
  return (

    <div className='relative'>

      <div className='lg:mx-32 flex flex-col items-start justify-center '>
        <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold '>
          <h1>Some Posts to get inspired</h1>
        </div>
        <PostRow />
      </div>

      <div className='flex flex-col items-start justify-center '>
        <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold '>
          <h1>Discover Some Good Posts</h1>
        </div>
        <Allposts />
      </div>
      {/*  */}
    </div>
  )
}

export default Bodycom;