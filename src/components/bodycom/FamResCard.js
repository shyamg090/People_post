import React from 'react'
import { IoIosStar } from "react-icons/io";

import { SEARCH_BG_IMG } from '../../utils/constant';

const FamResCard = ({ resChain }) => {

  // console.log(resChain);

  const image = SEARCH_BG_IMG + resChain?.cloudinaryImageId;

  return (
    <div className='flex flex-col items-center justify-evenly min-w-[18rem] h-[21rem] font-mono gap-3 p-2 rounded-xl hover:scale-95 shadow-xl'  >
      <div className='rounded-lg w-full h-[12rem]  bg-cover bg-center' style={{ backgroundImage: `url("${image}")` }} >
        <div className='w-full h-full flex items-end bg-gradient-to-t from-black to-transparent rounded-lg'>
          <h1 className='m-3 w-full text-[1rem] font-mono text-white'>{ resChain?.aggregatedDiscountInfoV3 ?  resChain?.aggregatedDiscountInfoV3?.header + " " + resChain?.aggregatedDiscountInfoV3?.subHeader : " " }</h1>
        </div>
      </div>
      <h1 className='w-full text-[18px] text-tight font-serif font-extrabold leading-3'>{resChain?.name.slice(0, 30)}</h1>
      <h4 className='text-[.8rem] w-full'>{resChain?.cuisines.slice(0, 3).join(", ")} </h4>
      <div className='w-full flex justify-evenly items-center '>
        <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2' > {resChain?.avgRating.toString()} <IoIosStar className='w-3 h-4' /> </h3>
        <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2'>{resChain?.sla?.deliveryTime} min</h4>
        <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 font-extrabold'>{resChain?.costForTwo}</h3>
      </div>
    </div>
  )
}

export default FamResCard;