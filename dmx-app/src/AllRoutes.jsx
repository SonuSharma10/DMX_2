import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Teampage from './pages/Teampage/Teampage'
const AllRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/Teampage' element={<Teampage/>}></Route>
   </Routes>
  )
}

export default AllRoutes
