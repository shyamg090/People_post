import React from 'react'

const ShimItem = () => {

    const array1 = [1, 2, 3, 4, 5, 6, 7];

    return (

        <div className='w-full m-10 flex items-center justify-center gap-5 '>

            {array1.map((item) => {
                return <div className='w-[200px]  h-[150px] text-transparent rounded-xl bg-gradient-to-tr from-[#F6F6F6]  to-gray-50' key={item}>

                </div>
            })}

        </div>
    )
}

export default ShimItem;