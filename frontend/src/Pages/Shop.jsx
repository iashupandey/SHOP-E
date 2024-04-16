import React from 'react'

import { Popular } from '../Components/Popular/Popular'

import { Navbar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export const Shop = () => {
  return (
    <div className='shop'>
      <Navbar/>
      {/* <Hero/>  */}

      <Popular/>
   
      <Footer/>
    </div>
  )
}
