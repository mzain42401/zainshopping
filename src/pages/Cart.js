import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import cartImg from '../images/your cart.png'
const Cart = ({cartData ,removeCartdata, sup}) => {
  return (
    <>
      <Header cartData={cartData}/>
      <div className='pageImg'><img src={cartImg} alt="" /></div>
      <div className="container">
      {
        cartData.map((elem,index)=>{
          return(

            <Card key={index} elem={elem} index={index} tittle={"Remove from Cart"} func={removeCartdata}/>
          )
        })
      }
      </div>
    </>
  )
}

export default Cart
