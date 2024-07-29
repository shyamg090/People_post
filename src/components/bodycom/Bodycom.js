import React from 'react'
import Search from './Search';
import Allrestaurants from './Allrestaurants';
import ItemRecommend from './ItemRecommend';
import FamRes from './FamRes';




import { IoFastFoodSharp } from 'react-icons/io5'
// import {bannerImg1} from '../assets/header-images/img1.png'

const Bodycom = () => {

  const value = "Bengaluru"

  return (

    <div className='lg:mx-32 my-10'>
      {/* <marquee className='h-2rem text-2xl text-yellow-950 bg-yellow-200 '> This is our tyle lorem10 nfrnoioofnoifrofogubgjdhSAKJUugduegeuifgfi fedugfiufgifgwe eugwuegdiewugfiwegfiuwegf ebcosudgoufvgbv jhVcIdgcds </marquee> */}

      <div className='flex flex-col items-start justify-center my-[1rem] z-20 bg-white'>
      <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold font-serif  '>
          <h1>Whats on your mind</h1>
        </div>
        <ItemRecommend />
      </div>

      <div className='flex flex-col items-start justify-center z-20 bg-white'>
      <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold font-serif  '>
          <h1>Famous Food Recipies</h1>
        </div>
        <FamRes />
      </div>

      <div className='flex flex-col items-start justify-center z-20 bg-white'>
        <div className='w-full flex items-center justify-center lg:text-[3rem] text-[2rem] font-bold font-serif  '>
          <h1>Discover the best food recipies</h1>
        </div>
        <Allrestaurants />
      </div>
      {/*  */}
    </div>
  )
}

export default Bodycom;