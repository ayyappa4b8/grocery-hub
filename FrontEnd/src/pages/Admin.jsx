import React, { useState } from 'react'; 
import ProductCategory from '../components/ProductCategory';
import Product from '../components/Product';
import CustomersList from '../components/CustomersList';
import OrdersList from '../components/OrdersList';

const Admin = () => {
  const [pageSize, setPageSize] = useState(7);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [activeTab, setActiveTab] = useState('productCategory'); // Default tab

  return (
    <div className="container mt-3">
      <h3 className="text-center">Admin Dashboard</h3>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'productCategory' ? 'active' : ''}`}
            onClick={() => setActiveTab('productCategory')}
          >
            Product Category
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'product' ? 'active' : ''}`}
            onClick={() => setActiveTab('product')}
          >
            Product
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            Customers
          </button>
        </li>
      </ul>

      {activeTab === 'productCategory' && (
        <div className="container mt-3">
          <ProductCategory/>
        </div>
      )}

      {activeTab === 'product' && (
        <div className="container mt-3">
          <Product/>
        </div>
      )}

      {activeTab === 'orders' && (
        <div className="container mt-3">
          <OrdersList/>
        </div>
      )}

      {activeTab === 'customers' && (
        <div className="container mt-3">
          <CustomersList/>
        </div>
      )}
    </div>
  );
};

export default Admin;
