import React, { useState } from 'react';
import productService from '../service/productService';
import swal from 'sweetalert';

const AddProductCategory = ({ show, onClose, onAddCategory }) => {
  const [productCategory, setProductCategory] = useState('');
  const [description, setDescription] = useState('');

  async function ProductCategoryRegister(e) {
    e.preventDefault();
    productService
      .saveProductCategory(productCategory, description)
      .then((res) => {
        swal({ title: 'Product Category saved Successfully', icon: 'success' });
        setProductCategory('');
        setDescription('');
        onAddCategory(); // Notify the parent component that a category has been added
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div
      className={`modal ${show ? 'show' : ''}`}
      tabIndex="-1"
      style={{
        display: show ? 'block' : 'none',
        background: show ? 'rgba(0, 0, 0, 0.6)' : 'transparent', // Add background blur effect
      }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Product Category</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={ProductCategoryRegister}>
              <div className="mb-3">
                <label>Product Category</label>
                <input
                  type="text"
                  id="productCategory"
                  name="productCategory"
                  className="form-control"
                  onChange={(event) => {
                    setProductCategory(event.target.value);
                  }}
                  value={productCategory}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  className="form-control"
                  name="description"
                  id="description"
                  rows="2"
                  type="text"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  value={description}
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Close
                </button>
                <button className="btn btn-primary" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductCategory;