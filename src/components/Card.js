import React from 'react'
import Img from '../images/tshirt.jpg'
const Card = ({elem,index,func ,tittle}) => {
  return (
    <>
      <div className="cardDiv">
        <div><img className='productImg' src={Img} alt="product" /></div>
        <div><h3>{elem.name}</h3></div>
        <div><p>{elem.price}</p></div>
        <div><button onClick={()=>func(elem,index)} >{tittle}</button></div>
      </div>
    </>
  )
}

export default Card
