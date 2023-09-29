import orderService from '../service/orderService';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col,Table, Button } from 'react-bootstrap';
import { BsCart3 } from "react-icons/bs";

const MyOrders = () => {

    // const [orderList,setOrderList] = useState([]);
    const [orderList,setOrderList] = useState([]);
    const {uid} = useParams();
    

    useEffect(()=>{
        init();
    },[]);



  const init= async ()=>{
    await orderService. getOrderByCustomerId(uid)
    .then((res)=>{
      setOrderList(res.data);
      console.log(res.data);
      console.log("=---------");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='container'>
        
        {(orderList.length===0)?
        (<div style={{margin:'auto',marginTop:'10%',width:'50%'}}>
            <div>
            <div><BsCart3 style={{width:'200px', height:'200px',color:'#cfd1cf',marginLeft:'30%'}}/></div>
            <br/>
            <div><h3 style={{textAlign:'center'}}>You do not have any Orders Placed</h3></div>
            <br/>
            <div><Link to="/allProducts"><Button className='btn-primary fs-3' style={{marginLeft:'35%'}}>Order Now</Button></Link></div>
            </div>
        </div>)
        :
        <div className='p-5'>
            <h3>My Orders</h3>
        {
            orderList.map((o)=>(
                <div className='d-flex mt-3 p-3' key={o.orderId} style={{boxShadow:'0 0 5px #ccc',}}>
                    <div  className="w-50 ps-3 pe-3 pt-3">
                        <div className="d-flex"><h5>Order ID</h5><span className='ps-2'> {o.orderId}</span></div> 
                        <div className="d-flex"><h5>Order Date</h5><span className='ps-2'> {o.orderDate.toString().substring(0,10)}</span></div> 
                        <div className="d-flex"><h5>Total Amount </h5><span className='ps-2'>₹{o.totalAmount}</span></div>
                   </div>
                   <div className="w-50 ps-3 pe-3 ms-3">
                    <h6>Product Details</h6>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {o.orderItems?.map((item)=>(
                                <tr key={o.productId}>
                                    <td>{item.productName}</td>
                                    <td>{item.productQuantity}</td>
                                    <td>{item.productSubTotalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                </div>
                </div>
                
            ))
        }
        </div>
        }

        {/* <hr/>
        {orderList.map((o)=>(
             <Row xs={1} md={2} className="g-4">
             <Col>
             <div  style={{backgroundColor:'yellow'}}>
                         <div className="d-flex"><h5>Order ID</h5>&nbsp;<span className='pl-3'> {o.orderId}</span></div> 
                         <div className="d-flex"><h5>Order Date</h5>&nbsp;<span> {o.orderDate.toString().substring(0,10)}</span></div> 
                         <div className="d-flex"><h5>Total Amount </h5>&nbsp;<span> ₹{o.totalAmount}</span></div>
                    </div>
             </Col>
             <Col>
             <h6>Product Details</h6>
                     <Table striped bordered hover style={{width:'40%'}}>
                         <thead>
                             <tr>
                                 <th>Product Name</th>
                                 <th>Product Quantity</th>
                                 <th>Product Price</th>
                             </tr>
                         </thead>
                         <tbody className="table-group-divider">
                             {o.orderItems?.map((item)=>(
                                 <tr key={o.productId}>
                                     <td>{item.productName}</td>
                                     <td>{item.productQuantity}</td>
                                     <td>{item.productSubTotalPrice}</td>
                                 </tr>
                             ))}
                         </tbody>
                         </Table>
             </Col>
         </Row>
        ))} */}
    </div>
  )
}

export default MyOrders