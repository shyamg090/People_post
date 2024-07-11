import React from 'react'
import { SEARCH_BG_IMG } from '../../utils/constant';


const ItemCard = ({resname, rating, time, cusine}) => {

  return (
    <div className='flex flex-col items-center justify-center min-w-[10rem] font-serif gap-3 p-2 m-2 rounded-xl hover:scale-[10px]' >
      <img className='rounded-[200%] ' src={SEARCH_BG_IMG} alt='foodpartner' ></img>
      <h1 className='w-full text-[1rem] flex items-center justify-center '>Burger</h1>
    </div>
  )
}

export default ItemCard