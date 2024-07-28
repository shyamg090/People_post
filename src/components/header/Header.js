import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='lg:w-28 lg:h-28 lg:ml-4 w-16 h-16 m-4 cursor-pointer'>
            <img src={require('../assets/header-images/wefood.png')} alt="food logo" srcset="" />
        </div>
        <div className='hidden lg:flex' >
            <ul className='flex justify-between p-2 cursor-pointer'>
                <li className='mx-4 px-4 flex items-center justify-center'><Link to='/' > Home</Link></li>
                <li className='mx-4 px-4 flex items-center justify-center'> <Link to='/about'>About Us</Link> </li>
                <li className='mx-4 px-4 flex items-center justify-center'> <Link to='/contact'>Contact Us</Link> </li>
                <li className='mx-4 px-4 flex items-center justify-center'><FaUser className='w-4 h-4 mx-2'/>Signin</li>
                <li className='mx-4 px-4 flex items-center justify-center'><FaShoppingCart className='w-4 h-4 mx-2'/>Cart</li>
            </ul>
        </div>
    </div>
  )
}

export default Header