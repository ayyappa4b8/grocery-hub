import axios from "axios";
import { API_URL } from "../constants";

class ProductService{

    saveProduct(productImage,productName,productCategory,description,productPrice){
        return axios.post(`${API_URL}/products`,
        {
            productImage:productImage,
            productName:productName,
            productCategory:productCategory,
            description:description,
            productPrice:productPrice
           },
            {
              headers:
               {
                "Content-Type":'multipart/form-data'
               }
             });
    }

    getAllProducts(){
        return axios.get(`${API_URL}/products`);
    }

    getAllProductsByPagination(offset,pageSize){
        return axios.get(`${API_URL}/products/sort/${offset}/${pageSize}`);
    }

    saveProductCategory(productCategory,description){
        return axios.post(`${API_URL}/products/categories`,
        {
            productCategory:productCategory,
            description:description
           },
            {
              headers:
               {
                "Content-Type":'multipart/form-data'
               }
             });
    }

    getAllProductCategories(){
        return axios.get(`${API_URL}/products/categories`);
    }

    deleteProductCategoryById(id){
        return axios.delete(`${API_URL}/products/categories/${id}`);
    }

    updateProductCategory(categoryId, editedProductCategory, editedDescription){
        return axios.put(`${API_URL}/products/categories/${categoryId}`,{
            editedProductCategory:editedProductCategory,
            editedDescription:editedDescription
           });
    }

    findProductCategoryById(id){
        return axios.get(`${API_URL}/products/categories/${id}`);
    }

    getProductById(id){
        return axios.get(`${API_URL}/products/${id}`);
    }

    deleteProductById(id){
        return axios.delete(`${API_URL}/products/${id}`);
    }

    getProductsByCategory(cat){
        return axios.get(`${API_URL}/products/${cat}`);
    }

    editProduct(productImage,productName,productCategory,description,productPrice,productId){
        return axios.put(`${API_URL}/products/${productId}`,{
            productImage:productImage,
            productName:productName,
            productCategory:productCategory,
            description:description,
            productPrice:productPrice
           },
            {
              headers:
               {
                "Content-Type":'multipart/form-data',
               }
             });
    }
}
export default new ProductService();