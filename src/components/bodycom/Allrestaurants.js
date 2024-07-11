import React from 'react'
import FamResCard from './FamResCard';
import { MdDeliveryDining } from "react-icons/md";
import { FaLeaf } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Allrestaurants = () => {
    return (
        <div>
            <div>
                <ul>
                    <li> <MdDeliveryDining/> Fast Delivery</li>
                    <li><FaLeaf/> Pure Veg</li>
                    <li><FaStar/>4.0+</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='flex flex-wrap items-center justify-center'>
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
                <FamResCard />
            </div>
        </div>
    )
}

export default Allrestaurants