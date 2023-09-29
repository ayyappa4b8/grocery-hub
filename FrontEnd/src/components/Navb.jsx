import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge, Button} from 'react-bootstrap';
import { FaShoppingCart} from 'react-icons/fa'
import { BsPersonCircle,BsFillBagCheckFill} from "react-icons/bs";
import {useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ScrollLink,Link } from 'react-scroll';

const Navb = (props) => {

  const [logUser,setLogUser] = useState(false);
  const user = localStorage.getItem('customerName');
  const uid = localStorage.getItem("token");
  // const link = 
  const navigate= useNavigate();
  // const [count,setCount] = useState(0);
  // const [logUser,setLogUser] = useState(false);
 

  // useEffect(()=>{
  //   cartService.getCartItemsCount(uid)
  //   .then((res)=>{
  //     console.log(res.data);
  //     setCount(res.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[]);

  const handleClick=(category)=>{
    // e.preventDefault();
    console.log(logUser);
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    else{
      setLogUser(true);
      const s = "/"+category;
      navigate(`/cat/${category}`);
      window.location.reload();
      console.log(logUser);
    }
  }

  const handleCl =(allProducts)=>{
    if(!localStorage.getItem('token')){
      navigate("/login");
    }
    else{
      setLogUser(true);
      navigate(`/${allProducts}`);
      // window.location.reload();
      console.log(logUser);
    }
  }
  const logout=()=>{
    localStorage.clear();
    setLogUser(false);
    console.log(logUser);
    navigate("/");
  }
  return (
    <>
    {(localStorage.getItem("token")==="admin")?
  
    <Navbar  expand="lg" variant="light" style={{backgroundColor:"#e4f2e6",boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)",padding:'10px 0px'}}>
    <Container >
      <Navbar.Brand href="/"><b><BsFillBagCheckFill className='mb-1 me-2'/>SHOPMART</b></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Navbar.Brand>Admin DashBoard</Navbar.Brand>
          </Nav>
          <Nav>
          <>
          <Button className="btn btn-warning" style={{fontSize:'15px',height:'35px',marginTop:'5px'}} onClick={(e)=>{logout()}}>Logout</Button>
          </>
          </Nav>
        
      </Navbar.Collapse>
    </Container>
  </Navbar>

  :
  <Navbar  expand="lg" variant="light" style={{backgroundColor:"#e4f2e6",boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)",padding:'10px 0px'}}>
      <Container >
        <Navbar.Brand href="/"><b><BsFillBagCheckFill className='mb-1 me-2'/>SHOPMART</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link  onClick={()=> handleCl('allProducts')}>Products</Nav.Link>

          <Nav.Link ><Link
            to="contactScroll" 
            spy={true} 
            smooth={true} 
            duration={500}
            className='some-class' 
            activeClass='some-active-class'
            style={{textDecoration:"none",color:"#737272"}}
            >
            Contact Us
            </Link></Nav.Link>  
       
           
    
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={()=>handleClick('fruits')}>Fruits</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleClick('vegetable')}>Vegetabeles</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleClick('dairy')}>Dairy</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleClick('snacks')}>Snacks</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>handleClick('drinks')}>Drinks</NavDropdown.Item>
            </NavDropdown>

            </Nav>


            {!localStorage.getItem('token')
            ?
            <Nav>
              <>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </>
            </Nav>
          :
            <Nav>
            <>
            <div style={{display:'flex'}}><BsPersonCircle style={{width:'30px', height:'30px',marginTop:'7px'}}/>&nbsp;<div><p style={{paddingTop:'6px',fontSize:'20px'}}>{user}</p></div></div>
            <Nav.Link href={`/cart/${uid}`} ><FaShoppingCart color='black' style={{width:'35px', height:'25px'}}/><b>Cart</b></Nav.Link>
            <Nav.Link href={`/myOrders/${uid}`}>My Orders</Nav.Link>
            <Button className="btn btn-warning" style={{fontSize:'15px',height:'35px',marginTop:'5px'}} onClick={(e)=>{logout()}}>Logout</Button>
            </>
            </Nav>
            }
 
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

    }


     {/* <Navbar  expand="lg" variant="light" style={{backgroundColor:"#e4f2e6",boxShadow:"0 0 29px 0 rgba(139, 139, 139, 0.61)",padding:'10px 0px'}}>
      <Container >
        <Navbar.Brand href="/"><b><BsFillBagCheckFill className='mb-1 me-2'/>SHOPMART</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
           <Nav
    //         className="me-auto my-2 my-lg-0"
    //         style={{ maxHeight: '100px' }}
    //         navbarScroll
    //       >
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link  onClick={()=> handleCl('allProducts')}>Products</Nav.Link>
    //         <Nav.Link href="#">Contact Us</Nav.Link>
    //         <NavDropdown title="Categories" id="navbarScrollingDropdown">
    //           <NavDropdown.Item onClick={()=>handleClick('fruits')}>Fruits</NavDropdown.Item>
    //           <NavDropdown.Item onClick={()=>handleClick('vegetable')}>Vegetabeles</NavDropdown.Item>
    //           <NavDropdown.Item onClick={()=>handleClick('dairy')}>Dairy</NavDropdown.Item>
    //           <NavDropdown.Item onClick={()=>handleClick('snacks')}>Snacks</NavDropdown.Item>
    //           <NavDropdown.Item onClick={()=>handleClick('drinks')}>Drinks</NavDropdown.Item>
    //         </NavDropdown>

    //         </Nav>


    //         {!localStorage.getItem('token')
    //         ?
    //         <Nav>
    //           <>
    //           <Nav.Link href="/register">Register</Nav.Link>
    //           <Nav.Link href="/login">Login</Nav.Link>
    //         </>
    //         </Nav>
    //       :
    //         <Nav>
    //         <>
    //         <div style={{display:'flex'}}><BsPersonCircle style={{width:'30px', height:'30px',marginTop:'7px'}}/>&nbsp;<div><p style={{paddingTop:'6px',fontSize:'20px'}}>{user}</p></div></div>
    //         <Nav.Link href={`/cart/${uid}`} ><FaShoppingCart color='black' style={{width:'35px', height:'25px'}}/><b>Cart</b></Nav.Link>
    //         <Nav.Link href={`/myOrders/${uid}`}>My Orders</Nav.Link>
    //         <Button className="btn btn-warning" style={{fontSize:'15px',height:'35px',marginTop:'5px'}} onClick={(e)=>{logout()}}>Logout</Button>
    //         </>
    //         </Nav>
    //         }
 
          
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar> */}
    </>
  )
}

export default Navb