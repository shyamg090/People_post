import React from 'react'
import Search from './Search';
import Allrestaurants from './Allrestaurants';
import FamRes from './FamRes';




import { IoFastFoodSharp } from 'react-icons/io5'
// import {bannerImg1} from '../assets/header-images/img1.png'

const Bodycom = () => {

  
  return (

    <div className='z-20 '>

      <div className='lg:mx-32 flex flex-col items-start justify-center z-20'>
        <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold '>
          <h1>Famous Food Recipies</h1>
        </div>
        <FamRes />
      </div>

      <div className='flex flex-col items-start justify-center z-20'>
        <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold '>
          <h1>Discover the best food recipies</h1>
        </div>
        <Allrestaurants />
      </div>
      {/*  */}
    </div>
  )
}

export default Bodycom;