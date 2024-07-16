import React, { useEffect, useState } from 'react'
import FamResCard from './FamResCard'
import ShimCard from './shimmer/ShimCard'

const FamRes = () => {
// https://dummyjson.com/products/category/groceries
// https://dummyjson.com/c/ad29-fbf4-489e-98ed

  const [famousChain, setFamousChain] = useState([ ]);
  const [count, setCount] = useState(true);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    // console.log("1");
    const data1 = await fetch(
      "https://dummyjson.com/recipes"
    )

    const json1 = await data1.json();

    setFamousChain(json1?.recipes);
  }

  if (famousChain.length === 0) {
    return <ShimCard />
  }

  return (
    <div className='h-[420px] w-full my-5'>
      <div className='flex overflow-x-scroll gap-10 p-5'>
        {
          famousChain && famousChain.slice(9,18).map((item) => {
            return (
              <FamResCard key={item?.id} resChain={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FamRes;