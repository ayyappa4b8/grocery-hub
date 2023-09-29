import axios from "axios";

class ProductService{

    saveProduct(productImage,productName,productCategory,description,productPrice){
        return axios.post("http://localhost:9191/product/saveProduct",
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
        return axios.get("http://localhost:9191/product/allProducts");
    }

    getAllProductsByPagination(offset,pageSize){
        return axios.get("http://localhost:9191/product/sort/"+offset+"/"+pageSize);
    }

    saveProductCategory(productCategory,description){
        return axios.post("http://localhost:9191/product/saveProductCategory",
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
        return axios.get("http://localhost:9191/product/allProductCategories");
    }

    deleteProductCategoryById(id){
        return axios.delete("http://localhost:9191/product/delete/category/"+id);
    }

    updateProductCategory(categoryId, editedProductCategory, editedDescription){
        return axios.put("http://localhost:9191/product/update/category/"+categoryId,{
            editedProductCategory:editedProductCategory,
            editedDescription:editedDescription
           });
    }

    findProductCategoryById(id){
        return axios.get("http://localhost:9191/product/category/"+id);
    }

    // getSortProductsAsc(sortVal){
    //     return axios.get("http://localhost:8081/product/sort/"+sortVal+"/productPrice");
    // }


    // getSortProductsDes(sortVal){
    //     return axios.get("http://localhost:8081/product/sort/"+sortVal+"/productPrice");
    // }

    getProductById(id){
        return axios.get("http://localhost:9191/product/"+id);
    }

    deleteProductById(id){
        return axios.delete("http://localhost:9191/product/delete/"+id);
    }

    getProductsByCategory(cat){
        return axios.get("http://localhost:9191/product/cat/"+cat);
    }

    editProduct(productImage,productName,productCategory,description,productPrice,productId){
        return axios.put("http://localhost:9191/product/update/"+productId,{
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