import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import productImg from '../images/product.png'
const Home = ({Data,addCart,cartData,removeCartdata}) => {
  return (
    <>
      <Header cartData={cartData}/>
      <div className='pageImg'><img src={productImg} alt="" /></div>
      <div className="container">

      {
        Data.map((elem)=>{
        
          return(
            cartData.includes(elem)?<Card key={elem.id} elem={elem}  tittle={"Remove from Cart"} func={removeCartdata}/>:

            <Card key={elem.id} elem={elem} tittle={"Add to Cart"} func={addCart}/>
          )
        })
      }
</div>
    </>
  )
}

export default Home
