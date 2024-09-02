import React, { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoEyeSharp, IoHeartDislikeSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import ShimCard from './shimmer/ShimCard';
gsap.registerPlugin(ScrollTrigger);

const WapsCard = ({ posts }) => {

  // useGSAP(()=>{
  //   gsap.from('#card', {
  //     opacity : 0,
  //     // transform : "translateY(10)",
  //     duration : 1, 
  //     delay : 1, 

  //   })
  // })

  const bgimage = ["https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d4551ff455770dae9d6e68_Polka%20Pup.svg", "https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d4583f665c7e4ace1c8042_Looking%20Ahead.svg", "https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d454faaed374e1f7d11a95_Experiments.svg", "https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d452bf910264437df308cc_Pilot.svg", "https://www.google.com/logos/doodles/2024/alfonso-casos-128th-birthday-6753651837109183.4-2x.png", "https://img.freepik.com/free-vector/abstract-horizontal-grid-lines-graph-style-graphic-design_1017-39918.jpg"]
  

if(posts?.length === 0 ){
  return (
    <ShimCard />
  )
}

  return (
    <Link to='/posts' >
      {/* style={{ background: `url(${bgimage[3]})` } } */}
      <div className='h-[40vh] border-2 border-black text-center flex flex-col items-start justify-evenly gap-4 rounded-tr-xl lg:rounded-tr-[2vw] lg:rounded-bl-[2vw] bg-cover bg-left bg-blend-lighten lg:hover:scale-4  '    id='card'  >
        <h1 className='w-full text-[5vw] lg:text-[2vw] '>{posts?.title}..</h1>
        <h4 className='w-full flex gap-2 items-center justify-center'>
          {posts?.tags.map((item) => {
            return <div className='bg-black text-white rounded-lg p-2'> {item}</div>
          })}
        </h4>

        <div className='w-full flex gap-4 text-[3vw] lg:text-[1.5vw] items-center justify-center'>
          <h1 className='flex gap-2 items-center'><IoEyeSharp className='text-green-500' /> {posts?.views}</h1>

          <h3 className='flex gap-2 items-center' > <FaHeart  className='text-red-500' /> {posts?.reactions?.likes}</h3>
          <h4 className='flex gap-2 items-center'> <IoHeartDislikeSharp  className='text-red-500' /> {posts?.reactions?.dislikes} </h4>
        </div>
      </div>
    </Link>
  )
}

export default WapsCard;