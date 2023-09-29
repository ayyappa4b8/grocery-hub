import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import pic from '../images/login-pic.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const LoginTest = () => {


  const [customerEmail,setCustomerEmail] = useState("");
  const [customerPassword,setCustomerPassword] = useState("");
  const [isSubmit,setIsSubmit]= useState(false);
  const [formErrors,setFormErrors] = useState({});

  const navigate = useNavigate();

  async function login(event){
    
    event.preventDefault();
    console.log("----------------");
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const passregex =/[0-9a-zA-Z]{6,}/;
    var flag=true;

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
      try{
        if(customerEmail==="admin@gmail.com" && customerPassword==="admin123")
        {
          localStorage.setItem('admin','admin');
          localStorage.setItem('token','admin');
          navigate('/admin');
        }
        else{
        await axios.post("http://localhost:8084/customer/login",{
          customerEmail:customerEmail,
          customerPassword:customerPassword
        }).then((res) =>
        {
          console.log(res.data);
  
          if(res.data.message === "Email Dosent exist")
          {
            alert("email dosent exist");
          }
          else if(res.data.message === "Login Success")
          {
            console.log(res.data);
            localStorage.setItem('customerName',res.data.customerName);
            localStorage.setItem('token',res.data.customerId);
            navigate("/");
          }
          else{
            alert("Invalid credentials");
          }
        },fail =>{
          console.error(fail);
        });
      }
      }
      catch(err){
        alert(err);
      }

    }
    else{
      setFormErrors(errors)
  }
  }



  return (

    <div>

      <div className="w-50" style={{margin:"auto",marginTop:'30px',boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)"}}>
      
      <Card>
        <Row className='g-0'>
          <Col md='6'>
            <Card.Img src={pic} alt="login form" className='rounded-start w-100' height={450}/>
          </Col>
          <Col md='6'>
            <Card.Body className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <span className="h1 fw-bold mb-0">SHOPMART</span>
              </div>
          <Form >

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" name="customerEmail" 
              placeholder='Enter Email'
              value={customerEmail}
              onChange={(event)=>{
                setCustomerEmail(event.target.value);
              }}
              />
              <p style={{color:"red"}}>{formErrors.customerEmail}</p>
              </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter Password"  name="customerPassoword"
              value={customerPassword}
              onChange={(event)=>{
                setCustomerPassword(event.target.value);
              }}
              />
               <p style={{color:"red"}}>{formErrors.customerPassword}</p>
            </Form.Group>
   
              <Button className="mb-4 px-5" color='dark' size='lg' type="submit" onClick={login}>Login</Button>
        </Form>
        <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="/register" style={{color: '#393f81'}}>Register here</a></p>

            </Card.Body>
          </Col>
         
        </Row>
      </Card>
      
    </div>
    
    </div>
  )
}

export default LoginTest


             {/* <input wrapperClass='mb-4' label='Email address'placeholder='Email Address' id='formControlLg' type='email' size="lg"
                 value={customerEmail}
                 onChange={(event)=>{
                   setCustomerEmail(event.target.value);
                 }} required/>
                <br/>
                <input wrapperClass='mb-4' label='Password' placeholder='Password' id='formControlLg' type='password' size="lg"
                value={customerPassword}
                onChange={(event)=>{
                  setCustomerPassword(event.target.value);
                }} required/>
                <br/> */}