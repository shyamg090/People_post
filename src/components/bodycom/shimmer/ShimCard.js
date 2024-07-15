import React from 'react'

const ShimCard = () => {

    const array = [11, 12, 13, 14];

    return (
        <div className='flex items-center justify-center w-full m-5 '>
            {
                array.map((item) => {
                    return (
                        <div className='flex flex-col items-center justify-evenly min-w-[18rem] h-[20rem] font-mono gap-3 p-2 rounded-xl hover:scale-95 shadow-xl' key={item}  >
                            <div className='rounded-lg w-full h-[12rem] bg-[#f6f6f6] bg-cover bg-center' >
                            </div>
                            <h1 className='w-[70%] h-[50px] bg-[#f6f6f6] rounded-full'></h1>
                            <h4 className='w-[40%] h-[50px] bg-[#f6f6f6] rounded-full'> </h4>
                            <div className='w-full flex justify-evenly items-center '>
                                <h3 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f6f6f6] text-brown p-2' >  </h3>
                                <h4 className='flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f6f6f6] text-brown p-2'></h4>
                                <h3 className=' flex items-center justify-center text-[14px] gap-1 rounded-[10px] bg-[#f6f6f6] text-brown p-2 font-extrabold'></h3>
                            </div>
                        </div>)
                })
            }

        </div>
    )
}

export default ShimCard