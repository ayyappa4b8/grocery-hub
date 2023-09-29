import axios from "axios";

class CartService{
    

    addItemToCartEach(productId,quantity,custId){
        return axios.post("http://localhost:9191/api/v1/cart/"+custId,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    getCartItemsByCustomerId(custId){
        return axios.get("http://localhost:9191/api/v1/cart/cart-item/"+custId);
    }

    cartUpdate(productId,quantity,custId){
        return axios.put("http://localhost:9191/api/v1/cart/"+custId,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    checkProductInCart(custId,pid){
        return axios.get("http://localhost:9191/api/v1/cart/"+custId+"/"+pid);
    }


    getCartItemsCount(custId){
        return axios.get("http://localhost:9191/api/v1/cart/count-items/"+custId);
    }
    
    getCart(custId)
    {
        return axios.get("http://localhost:9191/api/v1/cart/"+custId);
    }


    deleteItemFromCart(productId,custId)
    {
        return axios.delete("http://localhost:9191/api/v1/cart/customers/"+custId+"/products/"+productId);
    }
   
}
export default new CartService(); 