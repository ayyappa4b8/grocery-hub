import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import swal from 'sweetalert';

const EditProductCategory = () => {
  const { categoryId } = useParams();

  const [editedProductCategory, setEditedProductCategory] = useState('');
  const [editedDescription, setEditedDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
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
  }, [categoryId]);

  const handleSave = (e) => {
    e.preventDefault();
    // Send a request to update the product category details
    productService.updateProductCategory(categoryId, editedProductCategory, editedDescription)
      .then(() => {
       swal('Product Category has been update!', {
        icon: 'success',
      });
       navigate("/admin");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header fs-3 text-center">Edit Product Category</div>
            <div className="card-body">
              <form onSubmit={handleSave}>
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
                <button className="btn btn-primary col-md-12" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductCategory;
