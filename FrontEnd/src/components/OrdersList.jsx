
import orderService from '../service/orderService';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const OrdersList = () => {


  const [orderList,setOrderList] = useState([]);
  const [msg,setMsg]=useState("");

  useEffect(()=>{
    init();
  },[]);



  const init=()=>{
    orderService.getAllOrders()
    .then((res)=>{
      console.log(res.data)
      setOrderList(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="container mt-4">
      <Link to="/admin"><button className='btn btn-success' type="submit"> Back to Admin Dashboard</button></Link> 
      <br/>
      <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">Orders List
              {
              msg &&
              <p className='fs-4 text-center text-success'>{msg}</p>
              }</div>
              <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Total price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
            
                <tbody className="table-group-divider">
                {
                  orderList.map((o,num)=>(
                  <tr key={o.orderId}>
                    <th scope="row">{o.orderId}</th>
                    <td>{o.customerName}</td>
                    <td>{o.orderDate.toString().substring(0,10)}</td>
                    <td>{o.totalAmount}</td>
                    <td>
                      <Link  to={'orderDetails/'+o.orderId}><button className='btn btn-sm btn-primary'>Order Details</button></Link>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrdersList
