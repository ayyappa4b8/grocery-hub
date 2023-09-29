import React from 'react'
import { Button } from 'react-bootstrap';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Link, useParams } from 'react-router-dom';
const OrderConfirm = () => {

  const {oid} = useParams();
  const bg ={
    position: "absolute",
    width:'50%',
    padding:'30px 0px',
    borderRadius:'2%',
    top:"21%",
    left:"25%",
    textAlign:'center',
    backgroundColor:"white",
    boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)"
    //   #f1f5f0
  }
  return (
    <div style={{backgroundColor:"#f1f5f0" ,height:'90vh'}}>
    <div className='container'>
        <div style={bg}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <BsFillCheckCircleFill style={{color:'green',width:'200px',height:'200px',margin:'auto'}}/>
      </div>
      <h3>Order Placed Successfully!</h3>
      <h4>Thank you for your Order</h4>
      <h4>#Order ID - {oid}</h4>
      <br/>
      <Link to="/"><Button className="btn btn-success" style={{fontSize:'25px',width:'40%'}}>Back To Shopping</Button></Link>
      </div>
    </div>
    </div>
  )
}

export default OrderConfirm
