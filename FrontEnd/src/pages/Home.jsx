import React from 'react'
import {Link } from 'react-router-dom';
import background from "../images/store-background.jpg";
import Footer from '../components/Footer';
import { Button } from 'react-bootstrap';
import ContactUs from '../components/ContactUs';
import TopCategories from '../components/TopCategories';
import { Element } from 'react-scroll';

const Home = () => {

 

  const top = {
      backgroundImage:`url(${background})`,
      backgroundPosition: 'center',
      height:'90vh',
      width:'95%',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      overflow:'auto'
  }

 
  // backgroundColor:'#e4f2e6'
  return (
    <div>
    <div style={top}>
        <div className="rounded-4 shadow-4 float-end" style={{marginTop:'20%'}}>
          <h1>Fresh and Organic</h1>
          <h3>Your Daily need Products</h3>
          <Link to="/login"><Button style={{backgroundColor:"#40aa54"}}>Get Started</Button></Link>
        </div>
    </div>

    <TopCategories/>
    <Element id="contactScroll" name="contactScroll"><ContactUs/></Element>
    <Footer/>

    </div>
  )
}

export default Home