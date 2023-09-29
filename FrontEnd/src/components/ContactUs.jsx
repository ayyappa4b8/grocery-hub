import React from 'react'
import contactUs from "../images/fruit-b.jpg";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import customerService from '../service/customerService';
import { useState } from 'react';
import swal from 'sweetalert';


const ContactUs = () => {

    const[scustEmail,setCustEmail]= useState("");
    const[scustName,setCustName]= useState("");

    const subscribeCust=(e)=>{
        e.preventDefault();
        customerService.subsCust(scustEmail,scustName)
        .then((res)=>{
          console.log(res.data);
          setCustEmail("");
          setCustName("");
          // alert("yessss");
          swal({title:"You have Succesfully Subscribed",
                text:"We will send you weekly updates on latest Products",
                icon:"success"});
          
        }).catch((err)=>{
          console.log(err);
        })
      }

    const info ={
        backgroundColor:'blue',
          backgroundImage:`url(${contactUs})`,
          backgroundPosition: 'center',
          height:'60vh',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
      }
      const infodiv ={
        position:'relative',
        top:'13%',
        display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
      }
    
      const formheader ={
        position:'relative',
        textAlign:'center',
        color:'#061c52',
        top:'7%'
      }
    
  return (
    <div style={info} id="contactScroll" name="contactScroll">
    <h1 style={formheader}>Subscribe for Latest Updates</h1>
      <div style={infodiv}>
        
        <Form onSubmit={subscribeCust} style={{width:'50%',backgroundColor:"#e3dbda",boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)",padding:'20px 50px'}} >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={scustEmail} onChange={(event) =>{ setCustEmail(event.target.value);}}/>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter Name" type="text" value={scustName} onChange={(event) =>{ setCustName(event.target.value);}}/>
          </Form.Group>
         <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}><Button type="submit" style={{width:'40%',borderRadius:'5px'}}className="btn btn-success">Submit</Button></div> 
        </Form>
      </div>
    </div>
  )
}

export default ContactUs