import React from 'react'
import Bodycom from './Bodycom'
import Bodycom1 from './Bodycom1'
import ScrollTag from './ScrollTag'
import AboutContent from './AboutContent'

const Body = () => {
  return (
    <div className=''>
        <Bodycom1/>
        <ScrollTag/>
        <AboutContent/>
        <Bodycom/>
    </div>
  )
}

export default Body