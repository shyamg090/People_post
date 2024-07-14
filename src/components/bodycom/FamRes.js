import React, { useEffect, useState } from 'react'
import FamResCard from './FamResCard'
import ShimCard from './shimmer/ShimCard'

const FamRes = () => {
  const [famousChain, setFamousChain] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {

    const data1 = await fetch(
      "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    )

    const json1 = await data1.json();
    const data = await json1.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    if (data) {
      setFamousChain(data);
    }
  }

  if (famousChain.length === 0) {
    return <ShimCard />
  }

  return (
    <div className='h-[420px] w-full my-5'>
      <div className='flex overflow-x-scroll gap-10 p-5'>
        {
          famousChain.map((item) => {
            return (
              <FamResCard key={item?.info?.id} resChain={item?.info} />
            )
          })
        }
      </div>
    </div>
  )
}

export default FamRes;