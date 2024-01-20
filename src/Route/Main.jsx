import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Room from '../Components/Room/Room'
import Index from '../Navigations/Index'

function Main() {
  return (
    <>
   <BrowserRouter>
   <Index/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Live-vedio-call/:id' element={<Room/>}/>

   </Routes>
   
   
   </BrowserRouter>
    </>
  )
}

export default Main
