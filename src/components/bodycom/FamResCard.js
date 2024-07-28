import React from 'react'
import { IoIosStar } from "react-icons/io";

import { SEARCH_BG_IMG } from '../../utils/constant';

const FamResCard = ({ resChain }) => {

  // const sound = (data)=>{
  //   const utterance = new SpeechSynthesisUtterance(data);

  //   const voices = speechSynthesis.getVoices();
  //   utterance.voice = voices[1];
  //   utterance.rate = 0.5;

  //   speechSynthesis.speak(utterance);
  // }

  // console.log(resChain);

  // const image = SEARCH_BG_IMG + resChain?.cloudinaryImageId;
// min-w-[18rem] h-[21rem]
  return (
    <div className='flex flex-col items-center justify-evenly min-w-[20rem] h-[23rem] font-mono gap-3 p-2 rounded-xl hover:scale-95 shadow-xl'  >
      <div className='rounded-lg w-full h-[12rem]  bg-cover bg-center' style={{ backgroundImage: `url("${resChain.image}")` }} >
        <div className='w-full h-full flex items-end bg-gradient-to-t from-black to-transparent rounded-lg'>
          <h1 className='m-3 w-full text-[1rem] font-mono text-white'>{resChain?.cuisine}</h1>
        </div>
      </div>
      <h1 className='w-full text-[18px] text-tight font-serif font-extrabold leading-3'>{resChain?.name}</h1>
      <h4 className='text-[.8rem] w-full'>{resChain?.tags.join(", ")}</h4>
      <div className='w-full flex justify-evenly items-center '>
        <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2' > {resChain?.rating}  <IoIosStar className='w-3 h-4' /> </h3>
        <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2'>{resChain?.prepTimeMinutes} min</h4>
        <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2 font-extrabold'>serving {resChain?.servings}</h3>
      </div>
      {/* <h3>{resChain.instructions.join(" ")} </h3>
      <button className='w-20 h-10 bg-red-500 text-black rounded-md' onClick={()=>sound(resChain.instructions.join(" "))}> convert sound  </button> */}
    </div>
  )
}

export default FamResCard;