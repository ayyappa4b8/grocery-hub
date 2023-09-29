import axios from "axios";

class OrderService{



    getAllOrders(){
        return axios.get("http://localhost:9191/order/getAllOrders");
    }

    getOrderById(id){
        return axios.get("http://localhost:9191/order/getOrderById/"+id);
    }

    getOrderByCustomerId(uid){
        return axios.get("http://localhost:9191/order/getAllCustomerOrdersById/"+uid);
    }

    placeOrder(custId,customerAddress,customerContact){
        return axios.post("http://localhost:9191/order/placeOrder/"+custId,{
            customerAddress:customerAddress,
            customerContact:customerContact
        });
    }



}
export default new OrderService();