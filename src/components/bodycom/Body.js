import React from 'react'
import Bodycom1 from './Bodycom1'
import ScrollTag from './ScrollTag'
import AboutContent from './AboutContent'
import Waps from './Waps'
import ShimCard from './shimmer/ShimCard'

const Body = () => {
  return (
    <div className=''>
        <Bodycom1/>
        <ScrollTag/>
        <AboutContent/>
        <Waps/>
        {/* <ShimCard/> */}
    </div>
  )
}

export default Body