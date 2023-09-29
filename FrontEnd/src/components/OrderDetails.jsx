import React, { useEffect, useState } from 'react'
import orderService from '../service/orderService';
import { useParams } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const OrderDetails = () => {

  const [orderDetails,setOrderDetails] = useState([]);
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    init();
  },[]);

  const{id} = useParams();

  const init=()=>{
    orderService.getOrderById(id)
    .then((res)=>{
      console.log(res.data)
      setOrderDetails(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className='container mt-5'>
          <h3>Order ID #{orderDetails.orderId} Details</h3>
           <div className='d-flex mt-3 p-3' key={orderDetails.orderId} style={{boxShadow:'0 0 5px #ccc',}}>
                    <div  className="w-50 ps-3 pe-3 pt-3">
                        <div className="d-flex"><h5>Order ID</h5><span className='ps-2'>{orderDetails.orderId}</span></div> 
                        <div className="d-flex"><h5>Customer Name</h5><span className='ps-2'>{orderDetails.customerName}</span></div> 
                        <div className="d-flex"><h5>Customer Email</h5><span className='ps-2'>{orderDetails.customerEmail}</span></div> 
                        <div className="d-flex"><h5>Customer Address</h5><span className='ps-2'>{orderDetails.customerAddress}</span></div> 
                        <div className="d-flex"><h5>Customer Contact</h5><span className='ps-2'>{orderDetails.customerContact}</span></div> 
                        <div className="d-flex"><h5>Order Date</h5><span className='ps-2'> {orderDetails.orderDate}</span></div> 
                        <div className="d-flex"><h5>Total Amount </h5><span className='ps-2'>₹{orderDetails.totalAmount}</span></div>
                   </div>
                   <div className="w-50 ps-3 pe-3 ms-3">
                    <h6>Products Details</h6>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product Quantity</th>
                                <th>Product Price</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {orderDetails.orderItems?.map((o)=>(
                                <tr key={o.productId}>
                                  <th scope="row">{o.productId}</th>
                                  <td>{o.productName}</td>
                                  <td>{o.productQuantity}</td>
                                  <td>{o.productSubTotalPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                        </Table>
                  
                </div>
              </div>

          {/* <div>
                <p key={orderDetails.orderId}>{orderDetails.orderId}</p>
                  <p>{orderDetails.customerName}</p>
                  <p>{orderDetails.customerEmail}</p>
                  <p>{orderDetails.customerAddress}</p>
                  <p>{orderDetails.customerContact}</p>
                  <p>{orderDetails.orderDate}</p>
                  <p>{orderDetails.totalAmount}</p>
                  {/* <p>{orderDetails.orderItems}</p> 
              
              <table class="table">
              <thead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
          
              <tbody className="table-group-divider"></tbody>
                {
                orderDetails.orderItems?.map((o)=>(
                <tr>
                  <th scope="row">{o.productId}</th>
                  <td>{o.productName}</td>
                  <td>{o.productQuantity}</td>
                  <td>{o.productSubTotalPrice}</td>
                </tr>
              ))}
              </table>

    </div> */}

    </div>
  )
}

export default OrderDetails
