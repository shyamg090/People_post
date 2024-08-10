import React from 'react'
import { SEARCH_BG_IMG } from '../../utils/constant';


const ItemCard = ({image}) => {

  return (
    <div className='snap-center flex flex-col items-center justify-center lg:min-w-[14rem] min-w-[10rem] gap-3 p-2 m-2 rounded-xl hover:scale-[1rem]' >
      <img className='hover:scale-90 mix-blend-lighten ' src={image} alt='foodpartner' ></img>
    </div>
  )
}

export default ItemCard