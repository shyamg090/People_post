import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimItem from './shimmer/ShimItem';
import { recipies } from '../../utils/constant';

// data.cards.imageGridCards.info[array]


const ItemRecommend = () => {

    const [itemList, setItemList] = useState([ ]);


    useEffect(() => {
        getdata1();
    }, [ ])

    const getdata1 = async () => {

            const data1 = await fetch(recipies);

            const json = await data1.json();
            // console.log(json); 

            console.log(json);
            setItemList(json.recipies); 
    }
    // console.log(itemList);

    if(itemList?.length === 0){
        return <ShimItem/>
    }

    return (
        <div className='w-full '>
            <div className='flex items-start overflow-x-scroll containerCustom'>
                {
                    itemList && itemList.map((item) => {
                        return (
                            <ItemCard key={item?.id} image={item?.image} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ItemRecommend;