import React, { useEffect, useState } from 'react'
import customerService from '../service/customerService';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CustomersList = () => {

    const [customerDetails,setCustomerDetails] = useState([]);

  useEffect(()=>{
    init();
  },[]);


  const init=()=>{
    customerService.getAllCustomers()
    .then((res)=>{
      console.log(res.data)
      setCustomerDetails(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const deleteCustomer=(id)=>{
    customerService.deleteCustomerById(id)
    .then((res)=>{
        init();
        swal({title:"Customer deleted",
          icon:"success"})
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
       <div className="container mt-4">
       <Link to="/admin"><button className='btn btn-success' type="submit"> Back to Admin Dashboard</button></Link> 
       <br/>
       <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header fs-3 text-center">Customers List
             </div>
              <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Customer Id</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Email</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
            
                <tbody className="table-group-divider">
                {
                  customerDetails.map((c,num)=>(
                  <tr key={c.customerId}>
                    <th scope="row">{c.customerId}</th>
                    <td>{c.customerName}</td>
                    <td>{c.customerEmail}</td>
                    <td>
                    <button onClick={()=> deleteCustomer(c.customerId)} className='btn btn-sm btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default CustomersList
