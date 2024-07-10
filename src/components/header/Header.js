import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='w-28 h-28 ml-4 cursor-pointer'>
            <img src={require('../assets/header-images/wefood.png')} alt="food logo" srcset="" />
        </div>
        <div className='flex'>
            <ul className='flex justify-between p-2 cursor-pointer'>
                <li className='mx-4 px-4 flex items-center justify-center'>Home</li>
                <li className='mx-4 px-4 flex items-center justify-center'>About Us</li>
                <li className='mx-4 px-4 flex items-center justify-center'>Contact Us</li>
                <li className='mx-4 px-4 flex items-center justify-center'><FaUser className='w-4 h-4 mx-2'/>Signin</li>
                <li className='mx-4 px-4 flex items-center justify-center'><FaShoppingCart className='w-4 h-4 mx-2'/>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header