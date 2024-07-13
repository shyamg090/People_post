import React from 'react'
import { SEARCH_BG_IMG } from '../../utils/constant';


const ItemCard = ({image}) => {

  return (
    <div className='flex flex-col items-center justify-center min-w-[10rem] font-serif gap-3 p-2 m-2 rounded-xl hover:scale-[1rem]' >
      <img className='rounded-[200%] hover:scale-90 ' src={SEARCH_BG_IMG+image} alt='foodpartner' ></img>
    </div>
  )
}

export default ItemCard