import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

// data.cards.imageGridCards.info[array]


const ItemRecommend = () => {

    const [itemList, setItemList] = useState([]);


    useEffect(() => {
        getdata1();
    }, [])

    const getdata1 = async () => {

        const data1 = await fetch(
            "https://food-delivery-cors.vercel.app/api/proxy/swiggy/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        )

        const json = await data1.json();
        
        const data = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

        setItemList(data);

        // console.log(json?.data);
        // 1-> grid elements
        // 8->brandsContent 8-> cities
        // 5-> best cusine near me
        // 2-> restaurants(imp) .card.gridElements.infoWithStyle.restaurants[0].info ///has 9restaurants
    }

    // 6->Chinese, Kebabs, Biriyani, Momos, Noodles,North%20Indian, Dosa, 
    // 8-> Pure%20Veg, Salad-1, burger,cake, Rolls, Salad,Parotta

    // json?.data?.cards[0]?.card?.card?.imageGridCards?.info

    return (
        <div className='w-full'>
            <div className='flex items-start overflow-x-scroll'>

            {
                itemList.map((item)=>{
                    return(
                        <ItemCard key={item?.id} image={item?.imageId} />
                    )
                })
            }

{/* 

                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard /> */}
            </div>
        </div>
    )
}

export default ItemRecommend