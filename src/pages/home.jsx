import React from 'react'
import Navbar from '../components/navbar'
import Annouecment from '../components/annoucment'
import Slidebar from '../components/slidebar'
import Categories from '../components/categories'
import Products from '../components/products'
import Newsleter from '../components/newsleter'
import Footer from '../components/footer'

function Home() {
  return (
   <>
   <Annouecment/>
   {/* <Navbar/> */}
   <Slidebar/>
   <Categories/>
   <Products/>
   <Newsleter/>
   <Footer/>
   </>
  )
}

export default Home
