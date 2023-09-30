import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import Pagination from 'react-bootstrap/Pagination';
import swal from 'sweetalert';
import AddProduct from './AddProduct';

const Product = () => {

  const [productName,setProductName] = useState("");
  const [productCategory,setProductCategory] = useState("");
  const [description,setDescription] = useState("");
  const [productPrice,setProductPrice] = useState("");
  const [productImage,setProductImage] = useState("");
  const [msg,setMsg]=useState("");
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState('');
  const [pageSize,setPageSize]= useState(7);
  const [page,setPage]= useState(0);
  const [pageCount,setPageCount]= useState(0);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(()=>{
    init();
  },[page]);

  const init=()=>{
    
    productService.getAllProductsByPagination(page,pageSize)
    .then((res)=>{
      console.log(res.data.content)
      setProductList(res.data.content);
      setPageCount(res.data.totalPages);
      // setPageSize(res.data.size);

    }).catch((err)=>{
      console.log(err);
    })
  }

  const handleAddProduct = () => {
    init();
    handleAddModalClose();
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handlePrev =()=>{
    if(page===0) return page;
    setPage(page-1);
  }

  const handleNext =()=>{
    if(page===pageCount) return page;
    setPage(page+1);
  }

  const deleteProduct=(id)=>{
    productService.deleteProductById(id)
    .then((res)=>{
        swal({title:"Product Deleted Succesfully",icon:'success'});
        init();
    }).catch((err)=>{
      console.log(err);
    })
  }

  async function ProductRegister(e){
    e.preventDefault();
    console.log(productName);
    console.log(productCategory,description,productPrice,productImage);
    productService.saveProduct(productImage,productName,productCategory,description,productPrice)
    .then((res)=>{
      console.log(res);
      console.log("Product added succesfully");
      swal({title:'Product Updated Successfully',icon:'success'});
      // setMsg("Product Added Successfully");
      setProductName("");
      setProductCategory("");
      setDescription("");
      setProductImage("");
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
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">Products List</div>
              <div className="card-body">
              <AddProduct onAddProduct={handleAddProduct} />
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Search Product"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">SL No</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
            
                <tbody className="table-group-divider">
                {
                  productList.filter(prod=>(prod.productName.toLowerCase().includes(search)||prod.category.productCategoryName.toLowerCase().includes(search))).map((p,num)=>(
                  <tr key={p.productId}>
                    <th scope="row">{p.productId}</th>
                    <td><img src={`data:image/png/jpeg/jpg;base64,${p.productImage}`} alt="Event" height={50} width={50}/></td>
                    <td>{p.productName}</td>
                    <td>{p.category.productCategoryName}</td>
                    <td>{p.productPrice}</td>
                    <td>
                      <Link to={'editProduct/'+p.productId}><button className='btn btn-sm btn-warning'>Edit</button></Link>&nbsp;
                      <button onClick={()=> deleteProduct(p.productId)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
              <div className='d-flex justify-content-center'>
              <Pagination className="fs-2" style={{boxShadow:'0 0 5px #d2cfcf'}}>
                <Pagination.First onClick={handlePrev} disabled={page===0}/>
                <Pagination.Item>{page+1}</Pagination.Item>
                <Pagination.Last onClick={handleNext} disabled={page===pageCount-1}/>
             </Pagination>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product