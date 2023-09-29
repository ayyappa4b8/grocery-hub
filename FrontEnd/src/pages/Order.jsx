import React, { useEffect, useState } from 'react'
import cartService from '../service/cartService';
import { Button } from 'react-bootstrap';

import orderService from '../service/orderService';

const Order = () => {

    const [cartItems,setCartItems]= useState([]);
    const [customerAddress,setAddress] = useState("");
    const [customerContact,setContact] = useState("");
    const custId = localStorage.getItem('token');
    useEffect(()=>{
      init();
    },[]);
  
  
    const init=()=>{
      cartService.getCartItemsByCustomerId(custId)
      .then((res)=>{
        console.log(res.data)
        setCartItems(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    }

    async function PlaceOrder(){
        orderService.placeOrder(custId,customerAddress,customerContact)
        .then((res)=>{
            console.log(res.data)
            alert("order succesfully placed");
          }).catch((err)=>{
            console.log(err);
          })

    }
  return (
    <div>
        <div><div>
        {cartItems.map((item)=>(
          <div>
            <div>{item.productId}</div>
            <div>{item.productName}</div>
            <div>{item.productQuantity}</div>
            <div>{item.subTotal}</div>
            </div>
        ))}
      </div></div>

        <p>address</p>
        <input type="text" id="customerAddress" name="customerAddress" className='form-control'
                  onChange={(event) =>{ setAddress(event.target.value);}}
                  value={customerAddress} required/>
      <p>Contact</p>
      <input type="number" id="customerContact" name="customerContact" className='form-control'
                  onChange={(event) =>{ setContact(event.target.value);}}
                  value={customerContact} required/>
      <Button className="btn-success" onClick={(e)=>PlaceOrder()}type="submit">Place Order</Button>
    </div>
  )
}

export default Order
