import React from 'react'
import Header from './header/Header';
import Bodycom from './bodycom/Bodycom';

const App = () => {
  return (
  <div className='flex flex-col'>
    <Header/>
    <Bodycom/>
  </div>  
  )
}

export default App;