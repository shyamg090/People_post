import React, { useState, useEffect, useContext } from 'react'
import FamResCard from './FamResCard';

import { MdDeliveryDining } from "react-icons/md";
import { FaCross, FaLeaf, FaSlack } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

// import { recipes } from '../../utils/constant';
import { Link } from 'react-router-dom';
import ContextData from '../../contextAPI/Context';

const Allrestaurants = () => {

    const { recipes , setRecipes, filteredrecipes, setFilteredRecipes} = useContext(ContextData);

    const [searchtext, setSearchtext] = useState("");

    const [load, setLoad] = useState(9)

    const Fourstar = () => {


        const filter4rating = filteredrecipes.filter((item) => {
            return item.rating >= 4.8
        })

        return setFilteredRecipes(filter4rating);
    }

    const lesstime = () => {
        const fast = filteredrecipes.filter((res) => {
            return res.prepTimeMinutes < 20;
        })

        return setFilteredRecipes(fast);
    }

    const loadmore = ()=>{
        setLoad( load + 9)
    }

    return (
        <div>
            {/* <div className='w-full flex flex-col items-center justify-center '> */}

                <div className='flex flex-wrap justify-center items-center gap-3 m-4 p-2 cursor-pointer top-32 sticky z-30'>

                    <div className='flex items-center justify-center'>
                        {/* <h2 className='flex items-center justify-center p-4 rounded-md '> <FaSearch className='w-4 h-4 mx-1 text-[#ffb502]' />value</h2> */}
                        <input type='text' value={searchtext} placeholder='Search recipie' className='w-[200px] lg:w-[200px] mx-1 p-3 border-0 focus:outline-none rounded-lg placeholder:text-[#382610]'
                            onChange={(e) => setSearchtext(e.target.value)}
                        />
                        <button className='flex items-center justify-center mx-2  p-3 rounded-xl'> <FaSearch className='w-6 h-6 mx-1 text-black'
                            onClick={() => {
                                const filteredrecipes = recipes.filter((res) => {
                                    return res.name.toLowerCase().includes(searchtext.toLowerCase());
                                })
                                setFilteredRecipes(filteredrecipes);
                            }}
                        /></button>
                    </div>

                    <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2' onClick={() => lesstime()} ><MdDeliveryDining /> Fast prep  </h3>

                    <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2'><FaLeaf /> Pure Veg</h4>
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2 tracking-tight'>Rs. 300 - Rs. 600</h3>

                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2 ' onClick={() => Fourstar()}><FaStar />4.0+</h3>

                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2 '>Offers</h3>
                    <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2 '><FaStar />Less than Rs. 300</h3>
                </div>
            {/* </div> */}


            <div className='grid lg:flex lg:flex-wrap grid-cols-1 grid-rows-none items-center justify-center'>
                
                hello ? {
                    filteredrecipes && filteredrecipes.map((item) => {
                        return (<Link to={`/recipie/${item?.id}`}>
                            <FamResCard key={item?.id} resChain={item} />
                            </Link> )
                    })
                }
            </div>
            <button onClick={()=>loadmore()} className='w-[10rem] h-[10rem] p-3'>Load More</button>
        </div>
    )
}

export default Allrestaurants

