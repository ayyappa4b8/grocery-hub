import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import cartService from '../service/cartService';
import { Button, Col,ListGroup, Row } from 'react-bootstrap';
import cartEmpty from "../images/empty-cart.png";
import { BsFillTrash3Fill } from "react-icons/bs";
import "./stylep.css";


const Ct = (props) => {

    const [items,setItems] = useState([]);
   const custId = localStorage.getItem('token');
   const {uid} = useParams(); 

  useEffect(()=>{
    init();
  },[]);

  const sidebox={
    boxShadow:'0 0 5px #ccc',
    padding:'20px 20px'
  }
  const init= async ()=>{
    await cartService.getCart(uid)
    .then((res)=>{
      console.log(res.data);
      console.log(items.length);
      console.log("---------");
      setItems(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const deleteProductFromCart=async(productId)=>{
    await cartService.deleteItemFromCart(productId,uid)
    .then((res)=>{
      console.log(res.data);
      setItems(res.data);
      
    }).catch((err)=>{
      console.log(err);
    })
  }
    return (

      <div>
        {(items.cartItemsQuantity ===0)?
        (<div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5%'}}><img src={cartEmpty}></img>
        </div>)
        :
        <div className='container'>
          <h3 style={{marginTop:'15px'}}>Your Cart Items</h3>
        <div className="d-flex">
        <div className='p-2' style={{width:'60%'}}>
          <ListGroup>
            {items.cartItems?.map((c)=>(
              <ListGroup.Item key={c.productId}>
                <Row className='g-4' style={{textAlign:'center'}}>
                <Col md={2}><img src={`data:image/png/jpeg/jpg;base64,${c.productImage}`} height={70} width={70}></img></Col>
                  <Col md={2}><span>{c.productName}</span></Col>
                  <Col md={2}>Qyt - <span>{c.productQuantity}</span></Col>
                  <Col md={2}>Rs. <span>{c.productSubTotalPrice}</span></Col>
                  <Col md={2}><span style={{cursor:'pointer'}}onClick={(e)=>deleteProductFromCart(c.productId)}><BsFillTrash3Fill style={{width:'30px', height:'23px'}}color="crimson" /></span></Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className='p-2 flex-full ms-2 w-25'>
          <div style={sidebox}> 
          <div><h4 >Number of Items   <span className='float-end'>{items.cartItemsQuantity}</span></h4></div>
          <div><h3>Total<span className='float-end'>₹{items.totalBill}</span></h3></div>
          <br/>
          <Link to={`/order/${uid}`} state={{prevPath:window.location.pathname}}><button className="cart w-100">Proceed to CheckOut</button></Link>
          </div>
      
        </div>
      </div>
      </div>
      }
      </div>

  )
}

export default Ct
