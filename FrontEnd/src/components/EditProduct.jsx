import React, { useState } from 'react';
import productService from '../service/productService';
import swal from 'sweetalert';

const EditProduct = ({ product, onClose, isModalOpen }) => {
  const [editedProduct, setEditedProduct] = useState({
    // Initialize the form fields with the product details
    productName: product.productName,
    productCategory: product.category.productCategoryName,
    description: product.description,
    productPrice: product.productPrice,
    productImage: product.productImage,
    // Add other fields as needed
  });

  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      // Call the API to update the product details using productService.saveProduct or a similar method
      await productService.saveProduct(
        product.productImage,
        editedProduct.productName,
        editedProduct.productCategory,
        editedProduct.description,
        editedProduct.productPrice
        // Add other fields as needed
      );
      swal({ title: 'Product Updated Successfully', icon: 'success' });
      onClose(); // Close the popup after successful update
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  return (
    <div>
    {isModalOpen && ( // Render the modal conditionally based on isModalOpen state
        <div
          className="modal fade show" // Add the "show" class to display the modal
          id="addProductModal"
          tabIndex="-1"
          aria-labelledby="addProductModalLabel"
          aria-hidden="true"
           style={{
            display: 'block' ,
            background: 'rgba(0, 0, 0, 0.6)'
          }}
        >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Product</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleEditProduct}>
              {/* Create form fields to edit product details */}
              {/* Example: */}
              <div className="mb-3">
                <label htmlFor="productName">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={editedProduct.productName}
                  onChange={(e) => setEditedProduct({ ...editedProduct, productName: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productCategory">Product Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="productCategory"
                  value={editedProduct.productCategory}
                  onChange={(e) => setEditedProduct({ ...editedProduct, productCategory: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={editedProduct.description}
                  onChange={(e) => setEditedProduct({ ...editedProduct, description: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productPrice">Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="productPrice"
                  value={editedProduct.productPrice}
                  onChange={(e) => setEditedProduct({ ...editedProduct, productPrice: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productImage">Product Image</label>
                <input className="form-control" type="file" name="productImage" id="productImage"
                  onChange={(e) => setEditedProduct({ ...editedProduct, productImage: e.target.value })}
                />
                </div>
              {/* Add other form fields for product details */}
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    )}
    </div>
  );
};

export default EditProduct;
