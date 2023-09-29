import axios from "axios";

class CartService{
    

    addItemToCartEach(productId,quantity,custId){
        return axios.post("http://localhost:9191/cart/addToCartt/"+custId,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    getCartItemsByCustomerId(custId){
        return axios.get("http://localhost:9191/cart/cartItem/"+custId);
    }

    cartUpdate(productId,quantity,custId){
        return axios.post("http://localhost:9191/cart/updateAndAddProduct/"+custId,{
            productId:productId,
            productQuantity:quantity
        });
          
    }

    checkProductInCart(custId,pid){
        return axios.get("http://localhost:9191/cart/checkProductInCart/"+custId+"/"+pid);
    }


    getCartItemsCount(custId){
        return axios.get("http://localhost:9191/cart/countItems/"+custId);
    }
    
    getCart(custId)
    {
        return axios.get("http://localhost:9191/cart/"+custId);
    }


    deleteItemFromCart(productId,custId)
    {
        return axios.delete("http://localhost:9191/cart/delProduct/"+custId+"/"+productId);
    }
   
}
export default new CartService(); 