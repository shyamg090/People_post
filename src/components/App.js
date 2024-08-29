import React from 'react'
import Header from './header/Header';
import Bodycom from './bodycom/Bodycom';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import Context, { ContextData } from '../contextAPI/Context';
import { CgLastpass } from 'react-icons/cg';

const App = () => {
  return (
      <div className=''>
      <Header />
      <Outlet />
      <Footer />
      </div>
  

  )
}

export default App;