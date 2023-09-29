import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import productService from '../service/productService';
import { Link, useParams } from 'react-router-dom';
import cartService from '../service/cartService';


const FilterCategory = () => {
    

    const [products,setProducts] = useState([]);
    const custId = localStorage.getItem('token');
    const{category} = useParams();

    useEffect(()=>{
      console.log("-----------");
        init();
      },[]);
    
    
     

    const init=()=>{
      productService.getProductsByCategory(category)
      .then((res)=>{
        console.log(res.data);
        setProducts(res.data);

      }).catch((err)=>{
        console.log(err);
      })
    }

    // async function addToCart(product){
    //   cartService.addItemToCart(product,custId)
    //   .then((res)=>{
    //     console.log(res.data)
    //     alert("product Added to cart!");
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    // }

  return (
    <div className='container mt-4'>
      
        <div><h3>Results for {category}</h3></div>
        <br/>

    <Row xs={1} md={3} className="g-4" >
    {products.map((product) => (
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

export default FilterCategory
