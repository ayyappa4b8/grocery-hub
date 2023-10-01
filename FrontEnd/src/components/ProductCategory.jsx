import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productService from '../service/productService';
import swal from 'sweetalert';
import AddProductCategory from './AddProductCategory';
import EditProductCategory from './EditProductCategory';

const ProductCategory = () => {
  const [productCategory, setProductCategory] = useState('');
  const [productCategoriesList, setProductCategoriesList] = useState([]);
  const [search, setSearch] = useState('');
  const [description, setDescription] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // State for showing/hiding the add modal
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productService
      .getAllProductCategories()
      .then((res) => {
        setProductCategoriesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddModalOpen = () => {
    setShowAddModal(true);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleEditModalClose = () => {
    setSelectedCategory(null);
  };

  const handleAddCategory = () => {
    // You can add any logic here that needs to be executed when a category is added
    init(); // Refresh the category list
    handleAddModalClose(); // Close the modal
  };

  const handleEditCategory = (category) => {
    setSelectedCategory(category);
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
        productService
          .deleteProductCategoryById(categoryId)
          .then((res) => {
            console.log(res);
            swal('Product Category has been deleted!', {
              icon: 'success',
            });
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
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">Product Categories</div>
            {msg && <p className="fs-4 text-center text-success">{msg}</p>}
            <div className="card-body">
              <button
                className="btn btn-primary mb-3"
                onClick={() => setShowAddModal(true)}
              >
                Add
              </button>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Search Product Category"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
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
                  {productCategoriesList
                    .filter((prod) =>
                      prod.productCategoryName.toLowerCase().includes(search)
                    )
                    .map((p, num) => (
                      <tr key={p.categoryId}>
                        <th scope="row">{p.categoryId}</th>
                        <td>{p.productCategoryName}</td>
                        <td>{p.description}</td>
                        <td>
                           <button className="btn btn-sm btn-warning"
                              onClick={() => handleEditCategory(p.categoryId)}>
                              Edit
                            </button>
                          &nbsp;
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(p.categoryId)}
                          >
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
    
    {/* Add Product Category Modal */}
    <div className="container mt-3">
      <AddProductCategory
        show={showAddModal}
        onClose={handleAddModalClose}
        onAddCategory={handleAddCategory}
      />
    </div>
    {selectedCategory && (
    <EditProductCategory
        show={Boolean(selectedCategory)}
        onClose={handleEditModalClose}
        categoryId={selectedCategory}
        onAddCategory={handleEditCategory}
      />
    )
    }
    </div>
  );
};

export default ProductCategory;
