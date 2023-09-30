import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import swal from 'sweetalert';

const EditProductCategory = ({ show, onClose, categoryId, onEditCategory }) => {
  const [editedProductCategory, setEditedProductCategory] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (show) {
      // Fetch the existing product category details based on categoryId
      productService.findProductCategoryById(categoryId)
        .then((res) => {
          const { productCategoryName, description } = res.data;
          setEditedProductCategory(productCategoryName);
          setEditedDescription(description);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [categoryId, show]);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send a request to update the product category details
    productService.updateProductCategory(categoryId, editedProductCategory, editedDescription)
      .then(() => {
        swal('Product Category has been updated!', {
          icon: 'success',
        });
        navigate("/admin");
        onClose(); // Close the modal after successful update
        onEditCategory(categoryId); // Notify the parent component of the edit
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
            <h5 className="modal-title">Edit Product Category</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleUpdate}>
              <div className="mb-3">
                <label>Product Category</label>
                <input
                  type="text"
                  className="form-control"
                  value={editedProductCategory}
                  onChange={(e) => setEditedProductCategory(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
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
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductCategory;
