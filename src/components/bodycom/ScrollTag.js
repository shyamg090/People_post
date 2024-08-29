import React from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ScrollTag = () => {

    useGSAP(()=>{

        gsap.to('#scroll-parent h1', {
            transform : "translateX(-70%)",
            scrollTrigger : {
                trigger : "#scroll-parent",
                scroller : "body",
                markers : true, 
                start : "top 0%",
                stop : "top -150%",
                scrub : 2, 
                pin : true,
            }
        })
    },[])

  return (
    <div className='lg:w-[100vw] lg:h-[100vh] h-[100vh] flex overflow-x-hidden bg-red-400' id='scroll-parent'>
        <h1 className='h-full flex flex-col items-center justify-center bg-green-400 text-center lg:text-[40vw] text-[45vw] leading-none tracking-tight uppercase p-4 lg:p-[5rem]'>Stories.Unfold</h1>
    </div>
  )
}

export default ScrollTag;