import React from 'react'

const ShimCard = () => {

    const array = [11, 12, 13,14,15,16];

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 grid-rows-none w-full h-full m-5 gap-4'>
            {
                array.map((item) => {
                    return (
                        <div className='h-[40vh] w-full border-2 border-[#d0dd0d0]] bg-[#d0d0d0] text-center flex flex-col items-start justify-evenly gap-4 p-8 rounded-tr-xl lg:rounded-tr-[2vw] lg:rounded-bl-[2vw] bg-cover bg-left bg-blend-lighten lg:hover:scale-4  '    id='card'  >
                        <h1 className='w-full h-[10vh] text-[5vw] lg:text-[2vw] bg-[#f6f6f6] animate-pulse '></h1>
                        <h4 className='w-full flex gap-2 items-center justify-center'>
                          {array?.map((item) => {
                            return <div className='bg-[#f6f6f6] animate-pulse w-full h-full rounded-lg p-2'></div>
                          })}
                        </h4>
                
                        <div className='w-full h-[10vh] flex gap-4 text-[3vw] lg:text-[1.5vw] items-center justify-center bg-[#f6f6f6] animate-pulse'>
                          <h1 className='flex gap-2 items-center bg-[#f6f6f6] animate-pulse'></h1>
                
                          <h3 className='flex gap-2 items-center bg-[#f6f6f6] animate-pulse' > </h3>
                          <h4 className='flex gap-2 items-center bg-[#f6f6f6] animate-pulse'>  </h4>
                        </div>
                      </div>
                        )
                })
            }

        </div>
    )
}

export default ShimCard