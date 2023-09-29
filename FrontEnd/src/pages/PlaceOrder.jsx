import cartService from '../service/cartService';
import React, { useEffect, useState } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap';
import orderService from '../service/orderService';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { BsArrowLeftCircle} from "react-icons/bs";
import "./stylep.css";

const PlaceOrder = () => {

    const loc = useLocation()
    const [orderItems,setOrderItems] = useState([]);
    const [customerAddress,setAddress] = useState("");
    const [customerContact,setContact] = useState("");
    const custId = localStorage.getItem('token');
    const prevPath = loc.state.prevPath;

    const {uid} = useParams();

    const navigate = useNavigate();



    const sidebox={
      marginLeft:'60px',
      boxShadow:'0 0 5px #ccc',
      width:'40%'
    }
    useEffect(()=>{
        init();
      },[]);
    
      
      const init=async()=>{
       await cartService.getCart(uid)
        .then((res)=>{
          console.log(res.data)
          setOrderItems(res.data);
        }).catch((err)=>{
          console.log(err);
        })
      }
    

      async function PlaceOrder(e){
        
        e.preventDefault();
        orderService.placeOrder(uid,customerAddress,customerContact)
        .then((res)=>{
            console.log(res.data)
            // alert("order succesfully placed");
            const oid = res.data.order.orderId;
            navigate(`/orderConfirm/${oid}`);
          }).catch((err)=>{
            console.log(err);
          })

    }
  return (
    <div className='container'>

  <div className="d-flex mt-5">
        <div className='p-2' style={{width:'50%'}}>
          <ListGroup>
            <h2><Link to={prevPath}><BsArrowLeftCircle style={{color:'#59ba3c',width:'50px',height:'50px'}}/></Link>&nbsp;Your Cart Items</h2>
            <br/>
            {orderItems.cartItems?.map((c)=>(
              <ListGroup.Item>
                <Row className='g-4' style={{textAlign:'center'}}>
                  <Col md={3}><img src={`data:image/png/jpeg/jpg;base64,${c.productImage}`} height={50} width={50}></img></Col>
                  <Col md={3}><span>{c.productName}</span></Col>
                  <Col md={3}><span>Qyt-{c.productQuantity}</span></Col>
                  <Col md={3}><span>₹{c.productSubTotalPrice}</span></Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>

        <div className='p-4 flex-full' style={sidebox}>
          <h2 style={{textAlign:'center'}}>Order Summary</h2>
          <br/>
        <h5 className='title'>Number of Items<span className='float-end'>{orderItems.cartItemsQuantity}</span></h5>
          <h5 className='title'>Total<span className='float-end'><h4>₹{orderItems.totalBill}</h4></span></h5>
          <div>
            <hr/>
        <h3 style={{textAlign:'center'}}>Enter Shipping Details</h3>
        <br/>
      <form onSubmit={PlaceOrder}>
        <h6>Address</h6>
          <input type="text" name="customerAddress" className='form-control'
                    onChange={(event) =>{ setAddress(event.target.value);}}
                    value={customerAddress} required/>
        <h6>Contact</h6>
        <input type="number" name="customerContact" className='form-control'
                    onChange={(event) =>{ setContact(event.target.value);}}
                    value={customerContact} required/>
        <button className="cart  w-100" type="submit" >Place Order</button>
      </form>
    </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder
