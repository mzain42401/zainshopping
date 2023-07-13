import React from 'react'
import {FiLogOut} from 'react-icons/fi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Img2 from '../images/logo.png'
const Header = ({sup}) => {
  const aa=()=>{
    alert("Your cart in empty")
  }
  const logfunc=()=>{
    alert("abhi authentication lagani he")
  }
  return (
    <>
      <div className="navBar">
        <div className='myCompany'> <Link to='/'><img className='mylogo' src={Img2} alt="" /></Link> </div>
        <div className='iconDiv'>
            <div><Link to='/cart'><AiOutlineShoppingCart onClick={()=>sup===0?aa():null} className='cartActive' title='Cart'/></Link>  <sup>{sup}</sup></div>
            <div><FiLogOut title='Logout' onClick={()=>logfunc()} /></div>
        </div>
      </div>
    </>
  )
}

export default Header
