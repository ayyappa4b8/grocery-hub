import React, { useState, useEffect } from 'react';

const EditProductCategoryModal = ({ show, onClose, category, onSave }) => {
  const [editedProductCategory, setEditedProductCategory] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  useEffect(() => {
    if (category) {
      setEditedProductCategory(category.productCategoryName);
      setEditedDescription(category.description);
    }
  }, [category]);

  const handleSave = () => {
    // Call your API to save the edited category here
    onSave(category.categoryId, editedProductCategory, editedDescription);
    onClose();
  };

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1">
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
            <form>
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
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductCategoryModal;
