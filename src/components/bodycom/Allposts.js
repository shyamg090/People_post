import React, { useState, useEffect, useContext } from 'react'
import PostRowCard from './WapsCard';

import { MdDeliveryDining } from "react-icons/md";
import { FaCross, FaLeaf, FaSlack } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

// import { posts } from '../../utils/constant';
import { Link } from 'react-router-dom';
import { ContextData } from '../../contextAPI/Context';

const Allposts = () => {
    // console.log(ContextData);

    const { posts, setPosts, filteredposts, setFilteredPosts } = useContext(ContextData);

    const [searchtext, setSearchtext] = useState("");

    const [load, setLoad] = useState(9)

    const Fourstar = () => {

        console.log(filteredposts);
        const filter4rating = filteredposts.filter((item) => {
            return item.rating >= 4.8
        })

        return setFilteredPosts(filter4rating);
    }



    const loadmore = () => {
        setLoad(load + 9)

    }

    return (
        <div className='w-full'>
            {/* <div className='w-full flex flex-col items-center justify-center '> */}

            <div className='w-full flex flex-wrap justify-center items-center gap-3 m-4 p-2 cursor-pointer'>
                {/* 
                    <div className='flex items-center justify-center'>
                        <input type='text' value={searchtext} placeholder='Search recipie' className='w-[200px] lg:w-[200px] mx-1 p-3 border-0 focus:outline-none rounded-lg placeholder:text-[#382610]'
                            onChange={(e) => setSearchtext(e.target.value)}
                        />
                        <button className='flex items-center justify-center mx-2  p-3 rounded-xl'> <FaSearch className='w-6 h-6 mx-1 text-black'
                            onClick={() => {
                                const filteredposts = posts.filter((res) => {
                                    return res.name.toLowerCase().includes(searchtext.toLowerCase());
                                })
                                setFilteredPosts(filteredposts);
                            }}
                        /></button>
                    </div> */}



                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px]  text-brown p-2 ' onClick={() => Fourstar()}><FaStar />4.0+</h3>


            </div>
            {/* </div> */}


            <div className='grid lg:grid lg:grid-cols-3 grid-cols-1 grid-rows-none content-center gap-4 items-center justify-center'>

                {
                    filteredposts && filteredposts.map((item) => {
                        return (<Link to={`/post/${item?.id}`}>
                            <PostRowCard key={item?.id} postItem={item} />
                        </Link>)
                    })
                }
            </div>
            <button onClick={() => loadmore()} className='w-[10rem] h-[10rem] p-3'>Load More</button>
        </div>
    )
}

export default Allposts;
