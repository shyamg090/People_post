import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import ShimItem from './shimmer/ShimItem';
import { whatsOnYourMind } from '../../utils/constant';

// data.cards.imageGridCards.info[array]


const ItemRecommend = () => {

    const [itemList, setItemList] = useState([ ]);


    useEffect(() => {
        getdata1();
    }, [ ])

    const getdata1 = async () => {

            const data1 = await fetch(whatsOnYourMind);

            const json = await data1.json();
            // console.log(json); 

            // console.log(json);
            setItemList(json); 
    }
    // console.log(itemList);

    if(itemList?.length === 0){
        return <ShimItem/>
    }

    return (
        <div className='w-full'>
            <div className='flex items-start overflow-x-scroll'>

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