import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import productService from '../service/productService';

const EditProduct = () => {

  // const [product,setProduct]= useState({
  //   productId:"",
  //   productName:"",
  //   productCategory:"",
  //   productPrice:"",
  //   productImage:""
  // })

  const [prouductId,setProductId]=useState("");
  const [productName,setProductName] = useState("");
  const [productCategory,setProductCategory] = useState("");
  const [description,setDescription] = useState("");
  const [productPrice,setProductPrice] = useState("");
  const [productImage,setProductImage] = useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate();

  // const handleChange=(e)=>{
  //   const value = e.target.value;
  //   setProduct({...product,[e.target.name]:value})
  // };

  const{id} = useParams();

  console.log(id);

  useEffect(() => {
    productService.getProductById(id)
    .then((res)=>{
      setProductName(res.data.productName);
      setProductCategory(res.data.productCategory);
      setDescription(res.data.description);
      setProductPrice(res.data.productPrice);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[]);

  async function ProductUpdate(e){
    e.preventDefault();
    console.log(productName);
    console.log(productCategory,description,productPrice,productImage);

    productService.editProduct(productImage,productName,productCategory,description,productPrice,id)
    .then((res)=>{
      console.log(res);
      swal({title:'Product Updated Successfully',icon:'success'});
      console.log("Product Updated succesfully");
      // setMsg("Product Updated Successfully");
      setProductName(""); 
      setProductCategory("");
      setDescription("");
      setProductPrice("");
      navigate("/admin");


    })
    .catch((err)=>{
      console.log(err);
      alert(err);
    });
  };


  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header fs-3 text-center'>Edit Product</div>
            {
              msg &&
              <p className='fs-4 text-center text-success'>{msg}</p>
            }
            <div className='card-body'>
              <form onSubmit={(e)=> ProductUpdate(e)} encType="multipart/form-data">
                <div className='mb-3'>
                  <label>Product Name</label>
                  <input type="text" id="productName" name="productName" className='form-control'
                  onChange={(event) =>{ setProductName(event.target.value);}}
                  value={productName} required/>
                </div>
                <div className='mb-3'>
                  <label>Product Category</label>
                  <input type="text" id="productCategory" name="productCategory" className='form-control'
                  onChange={(event) =>{ setProductCategory(event.target.value);}}
                  value={productCategory} required/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input className="form-control" name="description" id="description" rows="2" type="text"
                  onChange={(event) =>{ setDescription(event.target.value);}}
                  value={description} required/>
                </div>
                <div className='mb-3'>
                  <label>Product Price</label>
                  <input type="number" id="productPrice" name="productPrice" className='form-control'
                  onChange={(event) =>{ setProductPrice(event.target.value);}}
                  value={productPrice} required/>
                </div>
                <div className="mb-3">
                  <label className="form-label">Product Image</label>
                  <input className="form-control" type="file" name="productImage" id="productImage"
                  onChange={(event) =>{ setProductImage(event.target.files[0]);}}
                  files={productImage} required/>
                </div>
                
                <button className='btn btn-primary col-md-12' type="submit">Update Product</button>
              </form>
               <br></br>
             <Link to="/admin"><button className='btn btn-success col-md-12' type="submit"> Back to Products</button></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProduct