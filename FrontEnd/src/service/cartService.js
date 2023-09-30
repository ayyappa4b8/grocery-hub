import axios from "axios";
import { API_URL } from "../constants";

class CartService{
    

    addItemToCartEach(productId,quantity,custId){
        return axios.post(`${API_URL}/cart/${custId}`,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    getCartItemsByCustomerId(custId){
        return axios.get(`${API_URL}/cart/cart-item/${custId}`);
    }

    cartUpdate(productId,quantity,custId){
        return axios.put(`${API_URL}/cart/${custId}`,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    checkProductInCart(custId,pid){
        return axios.get(`${API_URL}/cart/${custId}/${pid}`);
    }


    getCartItemsCount(custId){
        return axios.get(`${API_URL}/cart/count-items/${custId}`);
    }
    
    getCart(custId)
    {
        return axios.get(`${API_URL}/cart/${custId}`);
    }


    deleteItemFromCart(productId,custId)
    {
        return axios.delete(`${API_URL}/cart/customers/${custId}/products/${productId}`);
    }
   
}
export default new CartService(); 