import React, { useEffect, useState } from 'react'
import './style.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Data } from './data'

const Main = () => {
  const get=localStorage.getItem("zain")
  const xyz=JSON.parse(get)
  // console.log(xyz);
  const [cartData,setCartData]= useState(xyz===null?[]:xyz)
  // console.log(cartData);
  useEffect(()=>{

  localStorage.setItem("zain",JSON.stringify(cartData))

  
  },[cartData])

  const addCart=(onclickData,index)=>{
    setCartData([...cartData,onclickData])

  }

const removeCartdata=(elem,index)=>{
    cartData.splice(index,1)
    setCartData([...cartData])
    
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home Data={Data} addCart={addCart} cartData={cartData} removeCartdata={removeCartdata}/>}/>
    
      <Route path='/cart' element={<Cart cartData={cartData} removeCartdata={removeCartdata} />}/>

      
    </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default Main
