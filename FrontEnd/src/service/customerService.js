import axios from "axios";

class CustomerService{

    
    getAllCustomers(){
        return axios.get("http://localhost:9191/customer/allCustomers");
    }

    subsCust(custEmail,custName){
        return axios.post("http://localhost:9191/customer/subsCustomer",{
            custEmail:custEmail,
            custName:custName
        });
    }

    deleteCustomerById(id){
        return axios.delete("http://localhost:9191/customer/delete/"+id);
    }

   
}
export default new CustomerService();