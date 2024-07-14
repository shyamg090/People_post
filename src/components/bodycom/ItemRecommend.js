import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimItem from './shimmer/ShimItem';

// data.cards.imageGridCards.info[array]


const ItemRecommend = () => {

    const [itemList, setItemList] = useState([]);


    useEffect(() => {
        getdata1();
    }, [])

    const getdata1 = async () => {

        try {
            const data1 = await fetch(
                "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            )

            const json = await data1.json();
            console.log(json); 
            const data = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
            console.log(data); 
            setItemList(data || []); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    if(itemList.length === 0){
        return <ShimItem/>
    }

    return (
        <div className='w-full'>
            <div className='flex items-start overflow-x-scroll'>

                {
                    itemList.map((item) => {
                        return (
                            <ItemCard key={item?.id} image={item?.imageId} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ItemRecommend