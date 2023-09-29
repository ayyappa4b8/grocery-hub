import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const RegisterTest = () => {

  const [customerName,setCustomerName] = useState("");
  const [customerEmail,setCustomerEmail] = useState("");
  const [customerPassword,setCustomerPassword] = useState("");
  const [isSubmit,setIsSubmit]= useState(false);
  const [formErrors,setFormErrors] = useState({});
  const navigate = useNavigate();



  async function saveDetails(event){

    event.preventDefault();
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passregex =/[0-9a-zA-Z]{6,}/;
    var flag=true;

    if(customerName.length===0){
     
      errors.customerName = "Name is required!"
      flag=false;
    }
    if(customerEmail.length===0){
     
      errors.customerEmail = "Email is required!"
      flag=false;
    } else if(!regex.test(customerEmail)){
      errors.customerEmail="Email not in a valid format (eg:abc@gmail.com)"
      flag=false;
    }
    if(customerPassword.length===0){
      errors.customerPassword="Password is Required!";
      flag=false;
    
    }else if(!passregex.test(customerPassword)){
      errors.customerPassword="Password must have min 6 characters ";
      flag=false;
    }
    if(flag===true)
    {
      console.log("@@@@@@@222");
      setFormErrors({});
      try{
        await axios.post("http://localhost:8084/customer/saveCustomer",{
          customerName: customerName,
          customerEmail: customerEmail,
          customerPassword: customerPassword,
        });
        alert("Registered Successfully!");
        navigate("/login");
      }catch(err){
        alert(err);
      }

    }
    else{
      setFormErrors(errors)
    }
  }


  return (

    <div>
    <div className='d-flex align-items-center justify-content-center' style={{marginTop:'30px'}}>
    <div style={{width:'40%',padding:'15px',boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)"}}>
    <Form>
      <h2 className='text-center mb-5'><b>CREATE AN ACCOUNT</b></h2>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Control type="text"
      placeholder='Enter Name'
      value={customerName}
      onChange={(event)=>{
        setCustomerName(event.target.value);
      }}
      required/>
      <p style={{color:"red"}}>{formErrors.customerName}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email"  
        value={customerEmail}
        onChange={(event)=>{
          setCustomerEmail(event.target.value);
        }}
       required />
        <p style={{color:"red"}}>{formErrors.customerEmail}</p>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password"
        value={customerPassword}
        onChange={(event)=>{
          setCustomerPassword(event.target.value);
        }}
        required/>
        <p style={{color:"red"}}>{formErrors.customerPassword}</p>
      </Form.Group>

      <Button className='mb-4 w-100 gradient-custom-4' style={{backgroundColor:"#40aa54"}}size='lg' type="submit" onClick={saveDetails}>Register</Button>
    </Form>
    </div>
    </div>
</div>
  )
}

export default RegisterTest