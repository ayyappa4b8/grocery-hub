import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import swal from 'sweetalert';

const AddProductCategory = () => {

  const [productCategory,setProductCategory] = useState("");
  const [productCategoriesList, setProductCategoriesList] = useState([]);
  const [search,setSearch]= useState("");
  const [description,setDescription] = useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate();

  // const handleChange=(e)=>{
  //   const value = e.target.value;
  //   setProduct({...product,[e.target.name]:value})
  // };

  useEffect(()=>{
    init();
  },[]);

  const init=()=>{
    
    productService.getAllProductCategories()
    .then((res)=>{
      console.log(res.data)
      setProductCategoriesList(res.data);

    }).catch((err)=>{
      console.log(err);
    })
  }

  async function ProductCategoryRegister(e){
    e.preventDefault();
    console.log(productCategory,description);
    productService.saveProductCategory(productCategory,description)
    .then((res)=>{
      console.log(res);
      console.log("Product added succesfully");
      swal({title:'Product Category saved Successfully',icon:'success'});
      // setMsg("Product Added Successfully");
      setProductCategory("");
      setDescription("");
      navigate("/admin");
    })
    .catch((err)=>{
      console.log(err);
      alert(err);
    });
  };

  const handleDelete = (categoryId) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this product category!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // User confirmed the deletion
        productService
          .deleteProductCategoryById(categoryId)
          .then((res) => {
            console.log(res);
            swal('Product Category has been deleted!', {
              icon: 'success',
            });
            // Update the state by removing the deleted category
            setProductCategoriesList((prevCategories) =>
              prevCategories.filter((category) => category.categoryId !== categoryId)
            );
          })
          .catch((err) => {
            console.error(err);
            swal('Error deleting product category!', {
              icon: 'error',
            });
          });
      }
    });
  };


  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card'>
            <div className='card-header fs-3 text-center'>Add Product Category</div>
            {
              msg &&
              <p className='fs-4 text-center text-success'>{msg}</p>
            }
            <div className='card-body'>
              <form onSubmit={(e)=> ProductCategoryRegister(e)} encType="multipart/form-data">
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
                <button className='btn btn-primary col-md-12' type="submit"> Add Product Category</button>
              </form>
               <br></br>
             <Link to="/admin"><button className='btn btn-success col-md-12' type="submit"> Back to Products</button></Link> 
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">Products List
                
              </div>
              <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SL No</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody className="table-group-divider">
                {
                  productCategoriesList.filter(prod=>(prod.productCategoryName.toLowerCase().includes(search))).map((p,num)=>(
                  <tr key={p.categoryId}>
                    <th scope="row">{p.categoryId}</th>
                    <td>{p.productCategoryName}</td>
                    <td>{p.description}</td>
                    <td>
                      <Link to={`/admin/editProductCategory/${p.categoryId}`}><button className='btn btn-sm btn-primary'>Edit</button></Link>&nbsp;
                      <button className='btn btn-sm btn-danger' onClick={() => handleDelete(p.categoryId)} >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
    </div>
  )
}

export default AddProductCategory