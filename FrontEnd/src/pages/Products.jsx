import React, {  useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import productService from '../service/productService';
import cartService from '../service/cartService';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Products = () => {

    const [products,setProducts] = useState([]);
    const [search,setSearch]= useState("");
    const custId = localStorage.getItem('token');

  
    useEffect(()=>{
      init();
    },[])
  
    // const sortProducts=(sortVal)=>{
    
    //   productService.getSortProductsAsc(sortVal)
    //   .then((res)=>{
    //     console.log(res.data)
    //     setProducts(res.data);
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
      
    // }
  
    const init =()=>{
      productService.getAllProducts()
      .then((res)=>{
        console.log(res.data);
        setProducts(res.data);

      }).catch((err)=>{
        console.log(err);
      })
    }


  return (
    <div className='container' style={{paddingTop:'25px'}}>
      <div className='d-flex mb-4'>
        <div><h3>All Products</h3></div>
        <div className='fs-4' style={{marginLeft:'20%'}}><span><label>Search</label>&nbsp;<input type="text" placeholder='Search Products' value={search} onChange={(e)=>setSearch(e.target.value)}/></span></div>
        </div>
    
        <Row xs={1} md={3} className="g-4" >
    {products.filter(prod=>(prod.productName.toLowerCase().includes(search)||prod.productCategory.toLowerCase().includes(search))).map((product) => (
      <div key={product.productId}>
      <Col key={product.productId}>
        <Card style={{ width: '15rem' }}>
        <Link to={`/product/${product.productId}`} state={{product:product,custId:custId,prevPath:window.location.pathname}}>
          <Card.Img variant="top" src={`data:image/png/jpeg/jpg;base64,${product.productImage}`} height={200}/></Link>
          <Card.Body>
          <Link to={`/product/${product.productId}`} state={{product:product, custId:custId, prevPath:window.location.pathname}} style={{textDecoration:'none',color:"#0b0a0a"}}><Card.Title>{product.productName}</Card.Title></Link>
            <Card.Text>{product.description}<span className="float-end">₹{product.productPrice}</span></Card.Text>

            {/* <Button className='btn-success' type='submit' onClick={(e)=>{addToCart(product)}}>Add to Cart</Button> */}
          </Card.Body>
        </Card>
      </Col>
      </div>
    ))}
  </Row>
  </div>
  )
}

export default Products
