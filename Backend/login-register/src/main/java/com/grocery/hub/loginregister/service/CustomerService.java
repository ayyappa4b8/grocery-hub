package com.grocery.hub.loginregister.service;

import java.util.List;
import java.util.Optional;

import com.grocery.hub.loginregister.entity.Role;
import com.grocery.hub.loginregister.Dto.LoginDto;
import com.grocery.hub.loginregister.Dto.LoginResponse;
import com.grocery.hub.loginregister.entity.Customer;
import com.grocery.hub.loginregister.entity.SubscribeCustomers;
import com.grocery.hub.loginregister.exceptions.CustomerNotFoundException;
import com.grocery.hub.loginregister.repository.CustomerRepository;
import com.grocery.hub.loginregister.repository.SubscribeCustomersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class CustomerService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private SubscribeCustomersRepository subsCustRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	public String saveCustomer(Customer customer) {
		Role role = new Role();
		role.setRoleId(1); //By default, set role is external customer
		Customer cust = new Customer(
				customer.getCustomerId(),
				customer.getCustomerName(),
				customer.getCustomerEmail(),
				this.passwordEncoder.encode(customer.getCustomerPassword()),
				role,
				true // by default, customer is active
		);
		Customer c = customerRepository.findByCustomerEmail(customer.getCustomerEmail());
		if(c==null)
		{
			customerRepository.save(cust);
			log.info("Customer with "+cust.getCustomerId()+" inserted.");
			return "Customer with "+cust.getCustomerId()+" inserted.";
		}
		else {
			return "Email already exists";
		}
		
	}
	
	public String saveSubscribeCustomers(SubscribeCustomers sc) {
		subsCustRepo.save(sc);
		return "Customer succesfully subscribed";
	}
	public List<Customer> getAllCustomers(){
		List<Customer> cust = customerRepository.findAll();
		return cust;
	}
	
public LoginResponse loginCustomer(LoginDto loginDto) {
		
		String msg="";
		Customer cust1 = customerRepository.findByCustomerEmail(loginDto.getCustomerEmail());
		if(cust1!=null) {
			String pass= loginDto.getCustomerPassword();
			String encodePass = cust1.getCustomerPassword();
			Boolean status =passwordEncoder.matches(pass, encodePass);
			if(status) {
				Optional<Customer> customer = 
							customerRepository.findOneByCustomerEmailAndCustomerPassword(loginDto.getCustomerEmail(),encodePass);
				System.out.println(customer);
				long cid = cust1.getCustomerId();
				String cname = cust1.getCustomerName();
				if(customer.isPresent()) {
					log.info("Customer Succesfully logged in");
					return new LoginResponse(cid,cname,"Login Success",true, cust1.getRole().getRoleId());
				}else {
					log.info("Failure occured in customer login");
					return new LoginResponse(0,null,"Login Failed",false,0);
				}
			}else {
				log.info("Given passwords dont match");
				return new LoginResponse(0,null,"Passwords dont match",false,0);
			}
		}else {
			log.info("Customer Email dosent exist in the database");
			return new LoginResponse(0,null,"Email Dosent exist",false,0);
		}
		
	}
	
	public Customer getCustomerById(long customerId) throws CustomerNotFoundException {
		Customer c = customerRepository.findByCustomerId(customerId);
		if(c==null)
		{
			throw new CustomerNotFoundException("Customer with ID "+customerId+" not found!");
		}
		else {
			return c;
		}
	}
	
	public String disabledCustomerbyId(long custId) throws CustomerNotFoundException
	{
		
		Customer c = customerRepository.findByCustomerId(custId);
		if(c!=null) {
			c.setActive(false);
			customerRepository.save(c);
			log.info("Customer with Id "+custId+" is disabled");
			return "Customer with Id "+custId+" is disabled";
		}
		else {
			throw new CustomerNotFoundException("Customer with "+custId+" not found!");
		}
		
		
	}
}
