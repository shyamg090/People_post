import React from 'react'
import Header from './header/Header';
import Bodycom from './bodycom/Bodycom';
import Footer from './footer/Footer';

const App = () => {
  return (
  <div className='flex flex-col'>
    <Header/>
    <Bodycom/>
    <Footer/>
    
  </div>  
  )
}

export default App;