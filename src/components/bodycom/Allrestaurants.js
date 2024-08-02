import React, { useState, useEffect } from 'react'
import FamResCard from './FamResCard';

import { MdDeliveryDining } from "react-icons/md";
import { FaCross, FaLeaf, FaSlack } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

import { foodRecipie } from '../../utils/constant';
import { Link } from 'react-router-dom';

const Allrestaurants = () => {

    const [famousChain, setFamouschain] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);

    const [searchtext, setSearchtext] = useState("");

    const [load, setLoad] = useState(9)

    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        const apidata = await fetch(foodRecipie);

        const data = await apidata.json();

        setFamouschain(data);

        setFilteredRes(data);
    }



    const Fourstar = () => {


        const filter4rating = filteredRes.filter((item) => {
            return item.rating >= 4.8
        })

        return setFilteredRes(filter4rating);
    }

    const lesstime = () => {
        const fast = filteredRes.filter((res) => {
            return res.prepTimeMinutes < 20;
        })

        return setFilteredRes(fast);
    }

    const loadmore = ()=>{
        setLoad( load + 9)
    }

    return (
        <div>
            {/* <div className='w-full flex flex-col items-center justify-center '> */}

                <div className='flex flex-wrap justify-center items-center gap-3 m-4 p-2 cursor-pointer top-32 sticky z-30 bg-white'>

                    <div className='flex items-center justify-center'>
                        {/* <h2 className='flex items-center justify-center p-4 rounded-md bg-[#ffb502]'> <FaSearch className='w-4 h-4 mx-1 text-[#ffb502]' />value</h2> */}
                        <input type='text' value={searchtext} placeholder='Search recipie' className='w-[200px] lg:w-[200px] mx-1 p-3 border-0 bg-[#ffb502] focus:outline-none rounded-lg placeholder:text-[#382610]'
                            onChange={(e) => setSearchtext(e.target.value)}
                        />
                        <button className='flex items-center justify-center mx-2 bg-[#ffb502] p-3 rounded-xl'> <FaSearch className='w-6 h-6 mx-1 text-black'
                            onClick={() => {
                                const filteredRecipies = famousChain.filter((res) => {
                                    return res.name.toLowerCase().includes(searchtext.toLowerCase());
                                })
                                setFilteredRes(filteredRecipies);
                            }}
                        /></button>
                    </div>

                    <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2' onClick={() => lesstime()} ><MdDeliveryDining /> Fast prep  </h3>

                    <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2'><FaLeaf /> Pure Veg</h4>
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2 tracking-tight'>Rs. 300 - Rs. 600</h3>

                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2 ' onClick={() => Fourstar()}><FaStar />4.0+</h3>

                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2 '>Offers</h3>
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#ffb502] text-brown p-2 '><FaStar />Less than Rs. 300</h3>
                </div>
            {/* </div> */}


            <div className='grid lg:flex lg:flex-wrap grid-cols-1 grid-rows-none items-center justify-center'>
                {
                    filteredRes && filteredRes.slice(0,load).map((item) => {
                        return <Link to={`/recipie/${item?.id}`}><FamResCard key={item?.id} resChain={item} /></Link> 
                    })
                }
            </div>
            <button onClick={()=>loadmore()} className='w-[10rem] h-[10rem] bg-yellow p-3'>Load More</button>
        </div>
    )
}

export default Allrestaurants

