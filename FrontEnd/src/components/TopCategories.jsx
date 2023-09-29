import React from 'react'
import {Link } from 'react-router-dom';
import dairy from "../images/dairy.jpg";
import fruits from "../images/fruits.png";
import snacks from "../images/snacks.jpg";
import vegetable from "../images/vegetable.jpg";
import drinks from "../images/drinks.jpg";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const TopCategories = () => {
  return (
    <div style={{textAlign:'center',padding:'15px 0px'}}>
    <h3>Top Categories</h3>
  <Row xs={1} md={5} className="g-5" style={{width:'100%',padding:'0 50px'}}>
    <Link to="/cat/vegetable" style={{textDecoration:'none'}}>
      <Col>
        <Card style={{ width: '10rem' ,height:'11rem'}}>
        <Card.Img variant="top" src={vegetable} height={100} />
          <Card.Body>
            <Card.Title>Vegetables</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Link>
      <Link to="/cat/fruits"  style={{textDecoration:'none'}}>
      <Col>
        <Card style={{ width: '10rem',height:'11rem' }}>
        <Card.Img variant="top" src={fruits} height={100}/>
          <Card.Body>
            <Card.Title>Fruits</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Link>
      <Link to="/cat/drinks"  style={{textDecoration:'none'}}>
      <Col>
        <Card style={{ width: '10rem' ,height:'11rem'}}>
        <Card.Img variant="top" src={drinks} height={100}/>
          <Card.Body>
            <Card.Title>Water and Drinks</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Link>
      <Link to="/cat/dairy"  style={{textDecoration:'none'}}>
      <Col>
        <Card style={{ width: '10rem',height:'11rem' }}>
        <Card.Img variant="top" src={dairy} height={100}/>
          <Card.Body>
            <Card.Title>Dairy</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Link>
      <Link to="/cat/snacks"  style={{textDecoration:'none'}}>
      <Col>
        <Card style={{ width: '10rem' ,height:'11rem'}}>
        <Card.Img variant="top" src={snacks} height={100}/>
          <Card.Body>
            <Card.Title>Snacks</Card.Title>
          </Card.Body>
        </Card>
      </Col>
      </Link>
  </Row>
  </div>
  )
}

export default TopCategories