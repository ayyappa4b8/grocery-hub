import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import "./stylep.css";

const ProdTest = () => {

    const[quantity,setQuantity]= useState(1);

    const loc = useLocation();
    const prod = loc.state.product;
    console.log(prod);
  return (
    <div >
       <div className="app">
            <div className="details" key={prod.productId}>
              <div className="big-img">
              <img src={`data:image/png/jpeg/jpg;base64,${prod.productImage}`}></img>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{prod.productName}</h2>
                  <span>${prod.productPrice}</span>
                </div>

                <p>{prod.description}</p>
                <div>Quantity <input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></div>

                <button className="cart">Add to cart</button>

              </div>
            </div>
      </div>
    </div>
  )
}

export default ProdTest
