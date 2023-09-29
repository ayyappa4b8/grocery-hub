import axios from "axios";

class OrderService{



    getAllOrders(){
        return axios.get("http://localhost:9191/api/v1/orders");
    }

    getOrderById(id){
        return axios.get("http://localhost:9191/api/v1/orders/"+id);
    }

    getOrderByCustomerId(uid){
        return axios.get("http://localhost:9191/api/v1/orders/customers"+uid);
    }

    placeOrder(custId,customerAddress,customerContact){
        return axios.post("http://localhost:9191/api/v1/orders/"+custId,{
            customerAddress:customerAddress,
            customerContact:customerContact
        });
    }



}
export default new OrderService();