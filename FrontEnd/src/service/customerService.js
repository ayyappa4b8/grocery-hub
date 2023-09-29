import axios from "axios";

class CustomerService{

    
    getAllCustomers(){
        return axios.get("http://localhost:9191/api/v1/api/v1/customers");
    }

    subsCust(custEmail,custName){
        return axios.post("http://localhost:9191/api/v1/api/v1/customers/subscribe",{
            custEmail:custEmail,
            custName:custName
        });
    }

    deleteCustomerById(id){
        return axios.delete("http://localhost:9191/api/v1/api/v1/customers/"+id);
    }

   
}
export default new CustomerService();