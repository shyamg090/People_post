import React, { useEffect, useState } from 'react'
import PostRowCard from './PostRowCard'
import ShimCard from './shimmer/ShimCard'
import { Link } from 'react-router-dom';

const PostRow = () => {
// https://dummyjson.com/products/category/groceries
// https://dummyjson.com/c/ad29-fbf4-489e-98ed

  const [famousPost, setFamousPost] = useState([ ]);
  const [count, setCount] = useState(true);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    // console.log("1");
    const data1 = await fetch(
      "https://dummyjson.com/posts"
    )

    const json1 = await data1.json();

    setFamousPost(json1?.posts);
  }

  if (famousPost.length === 0) {
    return <ShimCard />
  }

  return (
    <div className='h-[420px] w-full my-5'>
      <div className='flex overflow-x-scroll gap-10 p-5'>
        {
          famousPost && famousPost.slice(9,18).map((item) => {
            return (
             <Link to={`/post/${item?.id}`} > <PostRowCard key={item?.id} postItem={item} /></Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default PostRow;