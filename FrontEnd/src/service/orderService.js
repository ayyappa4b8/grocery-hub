import axios from "axios";
import { API_URL } from "../constants";

class OrderService{



    getAllOrders(){
        return axios.get(`${API_URL}/orders`);
    }

    getOrderById(id){
        return axios.get(`${API_URL}/orders/${id}`);
    }

    getOrderByCustomerId(uid){
        return axios.get(`${API_URL}/orders/customers/${uid}`);
    }

    placeOrder(custId,customerAddress,customerContact){
        return axios.post(`${API_URL}/orders/${custId}`,{
            customerAddress:customerAddress,
            customerContact:customerContact
        });
    }



}
export default new OrderService();