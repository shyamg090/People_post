import React from 'react'
import Header from './header/Header';
import Bodycom from './bodycom/Bodycom';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
  <div className='flex flex-col'>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>  
  )
}

export default App;