import { useGSAP } from "@gsap/react";
import gsap from 'gsap'


import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {

    useGSAP(()=>{
        gsap.from('#heading', {
            duration : 1, 
            delay:1, 
            transform : "translateY(20%)",
            opacity : 0,
        })

        gsap.from(".banner #image",{
            duration : 2,
            delay: 1,
            opacity: 0,
            transform : "translateX(30%)",
            // transform : "translatey(10%)",
            scrollTrigger : {
                trigger: '.banner #image',
                scroller : "body",
                markers : true,
                start : "top 80%"
            }
        })
    },[])


    return (
        <div className='w-[100%] overflow-x-hidden  lg:h-[100%] flex flex-col slider banner p-4 mb-4'>
            <div className='lg:mx-24 flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-center xl:flex xl:flex-row xl:items-center xl:justify-center lg:gap-10 mt-10' >
                    <div className='w-full col-span-2 flex items-start justify-start lg:text-[6rem] text-[2rem] font-bold  '>
                        <h1 id="heading" className="lg:text-[8vw] text-[8vh] p-4 tracking-tighter leading-none font-semibold ">Discover a world of narratives waiting to be explored.</h1>
                    </div>
                    <img src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d452de6c35e014ada74a73_Runner.svg" id="image" className="lg:w-[40vw]" alt="bg"></img>
                </div>
            </div>
        </div>
    )
}

export default Banner;

// <div className='w-[100%] overflow-x-hidden h-full lg:h-[100vh] flex flex-col slider banner'>
// <div className='lg:mx-24'>
//     <div className='flex flex-col items-center justify-center lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10 mt-10' >
//         <div className='w-full col-span-2 flex items-start justify-start lg:text-[6rem] text-[2rem] font-bold  '>
//             <h1 id="heading" className="lg:text-[8vw] text-[8vh] p-4 tracking-tighter leading-none">Discover a world of narratives waiting to be explored.</h1>
//         </div>
//         <img src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d452de6c35e014ada74a73_Runner.svg" id="image" className="lg:w-[40vw]" alt="bg"></img>
//     </div>
// </div>
// </div>