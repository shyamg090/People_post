import React, { useContext, useEffect, useState } from 'react'
import PostRowCard from './PostRowCard'
import ShimCard from './shimmer/ShimCard'
import { Link } from 'react-router-dom';
import { ContextData } from '../../contextAPI/Context';

const PostRow = () => {

 const {posts , setPosts, filteredposts, setFilteredPosts} = useContext(ContextData)
console.log(posts);
  if (posts.length === 0) {
    return <ShimCard />
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-none'>
      {
        posts.slice(0,4).map((items)=>{
          return (
          <div>

            </div>
            )

        })
      }
    </div>
  )
}

export default PostRow;