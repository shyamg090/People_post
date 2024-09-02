import { useGSAP } from "@gsap/react";
import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
    const words = "At StoryStream, every story is a journey. From heartwarming personal experiences to thrilling historical accounts, our ever-growing collection of narratives offers something for everyone. Whether you're here to be inspired, to learn, or simply to enjoy a good story, you'll find that every visit brings something new to discover."
    const words2 = "Our platform is constantly evolving, with fresh content being added regularly. As you explore, you'll uncover stories that resonate, provoke thought, and spark curiosity. Let the stories unfold and see where they take you."
    const letters = words.split("")

    useGSAP(() => {
        gsap.from("#text", {
            transform : "translateX(-20%)" ,
            duration: 1,
            scrollTrigger: {
                trigger: ".box",
                scroller: "body",
                start: "top 20%",
                stop : "top 120%",
                markers: true,
                // scrub: 1,
            }
        })

    })


    return (
        <div className="h-[100vh] box">
            <h1 className="text-[12vw] lg:text-[7vw]  text-center">Whats StoryStream</h1>
            <div className="grid grid-col-1 lg:grid-cols-3 grid-rows-none place-items-center ">
                <h1 id="text" className='h-full text-[8vw] col-span-2 lg:text-[2vw] text-justify p-10 border-r-[.5rem] border-r-black rounded-r-xl'>
                    {words + words2}
                </h1>

                <img src="https://cdn.prod.website-files.com/64c73d04a946980a4476537e/64d45542c7f9c0552d0ea237_Growth.svg" id="image" className="lg:w-[30vw] " alt="bg"></img>
            </div>
        </div>

    )
}

export default AboutContent