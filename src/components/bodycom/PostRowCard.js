import React from 'react'
import { IoIosStar } from "react-icons/io";

import { SEARCH_BG_IMG } from '../../utils/constant';

import backgroundImagePost from '../../utils/constant'

const PostRowCard = ({ postItem }) => {
console.log(postItem);
  // const sound = (data)=>{
  //   const utterance = new SpeechSynthesisUtterance(data);

  //   const voices = speechSynthesis.getVoices();
  //   utterance.voice = voices[1];
  //   utterance.rate = 0.5;

  //   speechSynthesis.speak(utterance);
  // }

  // console.log(postItem);

  // const image = SEARCH_BG_IMG + postItem?.cloudinaryImageId;
  // min-w-[18rem] h-[21rem]
  return (
    <div className='flex flex-col items-center justify-evenly w-[20rem] h-[23rem] gap-3 p-2 rounded-xl shadow-xl bg-cover bg-center transition-transform duration-1000 hover:scale-110' style={{ backgroundImage: `url("https://img.freepik.com/free-vector/rectangle-gold-frame-with-foliage-pattern-background_53876-99796.jpg?t=st=1724918622~exp=1724922222~hmac=9ab93f34059e71e8718ecd20d5b3e2903faaca2dbad4296becea071b58fceecc&w=826")` }} >
      
      <div className='rounded-lg w-full h-[12rem] overflow-hidden'>
        {/* <div className='w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-110' style={{ backgroundImage: `url("https://img.freepik.com/free-vector/rectangle-gold-frame-with-foliage-pattern-background_53876-99796.jpg?t=st=1724918622~exp=1724922222~hmac=9ab93f34059e71e8718ecd20d5b3e2903faaca2dbad4296becea071b58fceecc&w=826")` }}  > */}
          {/* <div className='w-full h-full flex items-end bg-gradient-to-t from-black to-transparent rounded-lg'> */}
            <h1 className='m-5 w-full text-[1rem] text-white'>Views : {postItem?.views}</h1>
          {/* </div> */}
        {/* </div>  */}
      </div>

      <h1 className='w-full text-[18px] text-tight font-extrabold leading-3'>{postItem?.title}</h1>
      <h4 className='text-[.8rem] w-full'>{postItem?.tags.join(", ")}</h4>
      <div className='w-full flex justify-evenly items-center '>
        <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2' > {postItem?.reactions?.likes}  <IoIosStar className='w-3 h-4' /> </h3>
        <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2'>{postItem?.reactions?.dislikes} min</h4>
      </div> 
      
     



      {/* <h3>{postItem.instructions.join(" ")} </h3>
      <button className='w-20 h-10 bg-red-500 text-black rounded-md' onClick={()=>sound(postItem.instructions.join(" "))}> convert sound  </button> */}
    </div>
  )
}

export default PostRowCard;