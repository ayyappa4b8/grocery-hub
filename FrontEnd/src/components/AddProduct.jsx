import React, { useState } from 'react';
import productService from '../service/productService';
import swal from 'sweetalert';

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [description, setDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [isModalOpen, setModalOpen] = useState(false); // State to control modal

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    productService
      .saveProduct(productImage, productName, productCategory, description, productPrice)
      .then((res) => {
        swal({ title: 'Product Updated Successfully', icon: 'success' });
        setProductName('');
        setProductCategory('');
        setDescription('');
        setProductImage('');
        setProductPrice('');
        closeModal(); // Close the modal on success
        onAddProduct();
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={openModal}>
        Add
      </button>

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
                <h5 className="modal-title" id="addProductModalLabel">
                  Add Product
                </h5>
                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => handleAddProduct(e)} encType="multipart/form-data">
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
                    <div className="modal-footer">
                        <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                        onClick={closeModal}
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
      )}
    </div>
  );
};

export default AddProduct;
