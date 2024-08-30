import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ScrollTag = () => {

    console.log(window.innerWidth);

    useGSAP(()=>{

        gsap.to('#scroll-parent h1', {
            transform : "translateX(-65%)",
            scrollTrigger : {
                trigger : "#scroll-parent",
                scroller : "body",
                markers : true, 
                start : "top 10%",
                stop : "top -10%",
                scrub : 2, 
                pin : true,
            }
        })
    },[])

  return (
    <div className='lg:h-[100vh] flex  items-center justify-start overflow-x-hidden overflow-y-hidden ' id='scroll-parent'>
        <h1 className=' flex flex-col items-center justify-center text-center lg:text-[40vw] text-[50vw] leading-none tracking-tight uppercase p-2'>Stories..</h1>
    </div>
  )
}

export default ScrollTag;

{/* <div className='lg:w-[100vw] lg:h-full h-[100vh] flex overflow-x-hidden bg-red-400' id='scroll-parent'>
<h1 className='h-full lg:h-[100vh] flex flex-col items-center justify-center bg-green-400 text-center lg:text-[35vw] text-[45vw] leading-none tracking-tight uppercase p-4 lg:p-[5rem]'>Stories.Unfold</h1>
</div> */}