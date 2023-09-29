import axios from "axios";

class ProductService{

    saveProduct(productImage,productName,productCategory,description,productPrice){
        return axios.post("http://localhost:9191/api/v1/products",
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
        return axios.get("http://localhost:9191/api/v1/products");
    }

    getAllProductsByPagination(offset,pageSize){
        return axios.get("http://localhost:9191/api/v1/products/sort/"+offset+"/"+pageSize);
    }

    saveProductCategory(productCategory,description){
        return axios.post("http://localhost:9191/api/v1/products/categories",
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
        return axios.get("http://localhost:9191/api/v1/products/categories");
    }

    deleteProductCategoryById(id){
        return axios.delete("http://localhost:9191/api/v1/products/categories/"+id);
    }

    updateProductCategory(categoryId, editedProductCategory, editedDescription){
        return axios.put("http://localhost:9191/api/v1/products/categories/"+categoryId,{
            editedProductCategory:editedProductCategory,
            editedDescription:editedDescription
           });
    }

    findProductCategoryById(id){
        return axios.get("http://localhost:9191/api/v1/products/categories/"+id);
    }

    getProductById(id){
        return axios.get("http://localhost:9191/api/v1/products/"+id);
    }

    deleteProductById(id){
        return axios.delete("http://localhost:9191/api/v1/products/"+id);
    }

    getProductsByCategory(cat){
        return axios.get("http://localhost:9191/api/v1/products/"+cat);
    }

    editProduct(productImage,productName,productCategory,description,productPrice,productId){
        return axios.put("http://localhost:9191/api/v1/products/"+productId,{
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