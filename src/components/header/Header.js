import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import { useGSAP } from '@gsap/react';
import { BsTranslate } from 'react-icons/bs';

import gsap from 'gsap'

const Header = () => {

  useGSAP(()=>{
      gsap.from('li', {
        opacity : 0,
        delay : 1,
        duration : 1, 
        transform : "translateY(20%)"
      })
  },[])

  const onlineStatus = useOnlineStatus();

  const navbar = ['Home', 'Categories', 'Posts', 'About Us', 'Bookmarks' ,'Signin']
  const navbarRoutes = ['', 'categories', 'posts', 'aboutus', 'bookmarks' ,'signin']

  if(!onlineStatus){
    return (
    <h1 className='h-[300px] flex items-center justify-center'>OOps, looks like your offline</h1>
    )
  }
  else {
  return (

      <div className='w-full flex justify-center items-center lg:h-[15vh] '>
        <div className='hidden lg:flex' >
          <ul className='flex justify-between p-2 cursor-pointer'>

            {navbar.map((item, id)=>{
                  return <li className='text-[1.5vw] mx-4 px-4 flex items-center justify-center' key={id} ><Link to={`/${navbarRoutes[id]}`} > {item} </Link></li>
            })}

          </ul>
        </div>
      </div>


  )
}
}

export default Header