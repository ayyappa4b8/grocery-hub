import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import productService from '../service/productService';
import Pagination from 'react-bootstrap/Pagination';
import swal from 'sweetalert';


const Admin = () => {

  const [productList,setProductList] = useState([]);
  const [search,setSearch]= useState("");
  // const [msg,setMsg]=useState("");
  const [pageSize,setPageSize]= useState(7);
  const [page,setPage]= useState(0);
  const [pageCount,setPageCount]= useState(0);
 
  useEffect(()=>{
    init();
  },[page]);

  // console.log(productList.filter(prod=>prod.productName.toLowerCase().includes("ap")));

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
        // setMsg(res.data)
        swal({title:"Product Deleted Succesfully",icon:'success'});
        init();
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div className="container mt-3">
      
      <h3 style={{textAlign:'center'}}>Admin DashBoard</h3>
      <div className='d-flex align-items-center justify-content-center mt-4'>
        <div className='pe-3'><Link to="addProductCategory"><button className='btn btn-sm btn-primary p-3 fs-4'>Add Products Category</button></Link></div>&nbsp;
        <div className='pe-3'><Link to="addProduct"><button className='btn btn-sm btn-primary p-3 fs-4'>Add Products</button></Link></div>&nbsp;
        <div className='pe-3'><Link to="orders"><button className='btn btn-sm btn-warning p-3 fs-4'>View Orders</button></Link></div>&nbsp;
        <div  className='pe-3'><Link to="customers"><button className='btn btn-sm btn-info p-3 fs-4'>View Customers</button></Link></div>
        
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">Products List
                <div  className='pe-3'><input className='fs-4' type="text" placeholder='Search Product' value={search} onChange={(e)=>setSearch(e.target.value)}/></div>
                {/* {msg && <p className='fs-4 text-center text-success'>{msg}</p>}  */}
              </div>
              <div className="card-body">
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
                  productList.filter(prod=>(prod.productName.toLowerCase().includes(search)||prod.productCategory.toLowerCase().includes(search))).map((p,num)=>(
                  <tr key={p.productId}>
                    <th scope="row">{p.productId}</th>
                    <td><img src={`data:image/png/jpeg/jpg;base64,${p.productImage}`} alt="Event" height={50} width={50}/></td>
                    <td>{p.productName}</td>
                    <td>{p.category}</td>
                    <td>{p.productPrice}</td>
                    <td>
                      <Link to={'editProduct/'+p.productId}><button className='btn btn-sm btn-primary'>Edit</button></Link>&nbsp;
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

export default Admin