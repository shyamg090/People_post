import React from 'react'
import Bodycom1 from './Banner'
import ScrollTag from './ScrollTag'
import AboutContent from './AboutContent'
import Waps from './Waps'
import ShimCard from './shimmer/ShimCard'
import Profile from './Profile'

const Body = () => {
  return (
    <div className=''>
        <Bodycom1/>
        <ScrollTag/>
        <AboutContent/>
        <Waps/>
        <Profile/>
        {/* <ShimCard/> */}
    </div>
  )
}

export default Body