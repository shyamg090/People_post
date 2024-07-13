import React, { useState, useEffect } from 'react'
import FamResCard from './FamResCard';
import { MdDeliveryDining } from "react-icons/md";
import { FaCross, FaLeaf, FaSlack } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

const Allrestaurants = () => {
    const [famousChain, setFamouschain] = useState([])
    const [prevdata , setPrevdata] = useState([]);

    const [filterapplied1, setfilterapplied1] = useState(false);
    const [filterapplied2, setfilterapplied2] = useState(false);


    useEffect(() => {
        getdata();
    }, [])

    const getdata = async () => {
        const data1 = await fetch(
            "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        )

        const json1 = await data1.json();
        const data = json1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setFamouschain(data);
        // setPrevdata(data);
    }

    const Fourstar = () => {

        setPrevdata(famousChain);

        const filter4rating = famousChain.filter((item) => {
            // console.log(item.info.avgRating);
            return item.info.avgRating >= 4.7
        })

        setfilterapplied1(!filterapplied1);

        return setFamouschain(filter4rating);

    }

    const Pureveg = () => {
        setPrevdata(famousChain);

        const filterVeg = famousChain.filter((item) => {
            // console.log(item.info.avgRating);
            return item.info.badges?.imageBadges[0]?.description == "pureveg"
        })
        setfilterapplied2(!filterapplied2);

        return setFamouschain(filterVeg);
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
            <div className='w-full flex justify-center items-center gap-3 m-5 cursor-pointer'>
                <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2' ><MdDeliveryDining /> Fast Delivery  </h3>
                <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2'><FaLeaf /> Pure Veg</h4>
                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f8c78c] text-brown p-2 tracking-tight'>Rs. 300 - Rs. 600</h3>

                {filterapplied1 ? <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-yellow-950 text-[#f8c78c] p-2 ' onClick={() => removeFilter1()}><FaStar /> 4.0+  <IoIosClose className='w-3 h-3' /></h3>
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
            <div className='flex flex-wrap items-center justify-center'>
                {
                    famousChain.slice(0,).map((item) => {
                        return (
                            <FamResCard key={item?.info?.id} resChain={item?.info} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Allrestaurants

