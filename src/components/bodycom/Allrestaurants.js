import React, { useState, useEffect } from 'react'
import FamResCard from './FamResCard';
import { MdDeliveryDining } from "react-icons/md";
import { FaCross, FaLeaf, FaSlack } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";


import { foodRecipie } from '../../utils/constant';

const Allrestaurants = () => {
    
    const [famousChain, setFamouschain] = useState([])


    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        const apidata = await fetch(foodRecipie);

        const data = await apidata.json();

        setFamouschain(data);
    }

    // console.log(famousChain)


    const Fourstar = () => {

        setPrevdata(famousChain);

        const filter4rating = famousChain.filter((item) => {
            // console.log(item.info.avgRating);
            return item.rating >= 4.0
        })


        return setFamouschain(filter4rating);

    }

    const Difficulty = () => {

        const diff = famousChain.filter((item) => {
            // console.log(item.info.avgRating);
            return item.difficulty == "easy"
        })

        return setFamouschain(diff);
    }

    const removeFilter1 = () => {
        setfilterapplied1(!filterapplied1);
        setFamouschain(prevdata);
    }

    const removeFilter2 = () => {
        setfilterapplied2(!filterapplied2);
        setFamouschain(prevdata);
    }

    return (
        <div>
            <div className='w-full flex justify-center items-center gap-3 cursor-pointer'>
                <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2' ><MdDeliveryDining /> Fast Delivery  </h3>
                <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2'><FaLeaf /> Pure Veg</h4>
                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 tracking-tight'>Rs. 300 - Rs. 600</h3>

                {false ? <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-yellow-950 text-[#f8c78c] p-2 ' onClick={() => removeFilter1()}><FaStar /> 4.0+  <IoIosClose className='w-3 h-3' /></h3>
                    :
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 ' onClick={() => Fourstar()}><FaStar />4.0+</h3>
                }

{/* 
                {filterapplied2 ? <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-yellow-950 text-[#f8c78c] p-2 ' onClick={() => removeFilter2()}><FaStar /> pureveg <IoIosClose className='w-3 h-3' /></h3>
                    :
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 ' onClick={() => Pureveg()}><FaStar />pureveg</h3>
                } */}

                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 '>Offers</h3>
                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 '><FaStar />Less than Rs. 300</h3>
            </div>
            <div className='grid lg:grid-cols-4 grid-cols-1 grid-rows-none items-center justify-center'>
                {
                    famousChain && famousChain.map((item) => {
                        return <FamResCard key={item?.id} resChain={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Allrestaurants

