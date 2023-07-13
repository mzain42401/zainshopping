import React from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import productImg from '../images/product.png'
const Home = ({Data,addCart,sup}) => {
  return (
    <>
      <Header sup={sup}/>
      <div className='pageImg'><img src={productImg} alt="" /></div>
      <div className="container">

      {
        Data.map((elem)=>{
        
          return(

            <Card key={elem.id} elem={elem} tittle={"Add to Cart"} func={addCart}/>
          )
        })
      }
</div>
    </>
  )
}

export default Home
