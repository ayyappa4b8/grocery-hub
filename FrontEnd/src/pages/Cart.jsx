import React, { useEffect, useState } from 'react'
import cartService from '../service/cartService';
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {

  // const total = cartItems.reduce((price,item)=>price+item.productQuantity*item.productPrice,0);
  const [cartItems,setCartItems]= useState([]);
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
  
  return (
    <div className='d-flex'>
      {cartItems.length ===0 &&(
        <div>Cart is Empty</div>
       ) 
        }

     <div className='p-2' style={{width:'70%'}}>
      <ListGroup>
        {cartItems?.map((item)=>(
          <ListGroup.Item>
          <Row xs={1} className="g-4" style={{textAlign:'center'}} >
              <Col md={2}><img src={`data:image/png/jpeg/jpg;base64,${item.productImage}`} height={100} width={100}></img></Col>
              <Col md={2}  style={{backgroundColor:'pink'}}><span><div >{item.productName}</div></span></Col>
              <Col style={{backgroundColor:'red',width:'200px'}}><span>{item.productQuantity}</span></Col>
              <Col md={2}  style={{backgroundColor:'yellow'}}><span>{item.subTotal}</span></Col>
              <Col md={2}  style={{backgroundColor:'pink'}}><span><BsFillTrash3Fill/></span></Col>
            </Row>
            </ListGroup.Item>
        ))}
        </ListGroup>
        </div>
      <div className='p-2 flex-full'>
          <div className='title'>Total</div>
          <Link to="/placeOrder"><Button className="btn-success">Proceed to CheckOut</Button></Link>
      </div>
       
      {/* <div>Total:{total} </div> */}
    </div>
  )
}

export default Cart
