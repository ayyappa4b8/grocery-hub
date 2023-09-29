import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import cartService from '../service/cartService';
import { BsArrowLeftCircle} from "react-icons/bs";
import "./stylep.css";

const SingleProduct = () => {
    const[quantity,setQuantity]= useState(1);
    const navigate = useNavigate();
    const loc = useLocation();
    const prod = loc.state.product;
    const custId = loc.state.custId;
    const prevPath = loc.state.prevPath;
    console.log("--------------");
    console.log(custId);
    console.log(prod); 
    console.log(loc.state.prevPath);


    async function addToCart(productId){
      
      if(custId===null)
      {
        navigate('/login');
      }
      console.log(productId);

      const ab= await cartService.checkProductInCart(custId,productId);
      console.log(ab.data);
      if(ab.data==="")
      { 
        cartService.addItemToCartEach(productId,quantity,custId)
        .then((res)=>{
            console.log(res.data);
            swal({
                title: "Item Added to Cart",
                icon: "success"
            })
            
        }).catch((err)=>{
            console.log(err);
        })

        
      }
      else{
        swal({
            title: "Item Already in Cart",
            text: "Update Quantity?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willUpdate) => {
            if (willUpdate) {
                cartService.cartUpdate(productId,quantity,custId)
                .then((res)=>{
                    console.log(res.data);
                    swal({title:"Item Updated in Cart", 
                        icon: "success"},
                    );
                    
                }).catch((err)=>{
                    console.log(err);
                })
            } 
        });
       
      }
    //   cartService.cartUpdate(productId,quantity,custId)
    //   .then((res)=>{
    //     console.log(res.data);
    //     alert(res.data);
    //     If(res.data==="Updated")
    //     {}
    //     swal({
    //         title: "Are you sure?",
    //         text: "Once deleted, you will not be able to recover this imaginary file!",
    //         icon: "warning",
    //         buttons: true,
    //         dangerMode: true,
    //       })
    //       .then((willDelete) => {
    //         if (willDelete) {
    //           swal("Poof! Your imaginary file has been deleted!", {
    //             icon: "success",
    //           });
    //         } 
    //       });

    //     // swal({title: "Item Added to Cart",
    //     // icon: "success"}); 
        
    //   }).catch((err)=>{
    //     console.log(err);
    //   })
    }
  return (
    <div className='container'>

      <div className='mt-5'><Link to={prevPath}><BsArrowLeftCircle style={{color:'#59ba3c',width:'50px',height:'50px'}}/></Link></div>
       <div className="app">
            <div className="details" key={prod.productId}>
              <div className="big-img">
              <img src={`data:image/png/jpeg/jpg;base64,${prod.productImage}`}></img>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{prod.productName}</h2>
                  <h3>₹{prod.productPrice}</h3>
                </div>

                <p>{prod.description}</p>
                <div>Quantity &nbsp;<input type="number" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/></div>

                <button className="cart" type='submit' onClick={(e)=>{addToCart(prod.productId)}}>Add to Cart</button>

              </div>
            </div>
      </div>
    </div>
  )
}

export default SingleProduct