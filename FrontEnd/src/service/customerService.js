import axios from "axios";
import { API_URL } from "../constants";

class CustomerService{

    
    getAllCustomers(){
        return axios.get(`${API_URL}/customers`);
    }

    subsCust(custEmail,custName){
        return axios.post( `${API_URL}/customers/subscribe`,{
            custEmail:custEmail,
            custName:custName
        });
    }

    deleteCustomerById(id){
        return axios.delete(`${API_URL}/customers/${id}`);
    }

   
}
export default new CustomerService();