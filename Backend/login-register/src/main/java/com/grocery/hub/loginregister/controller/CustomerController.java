package com.grocery.hub.loginregister.controller;

import java.util.List;

import com.grocery.hub.loginregister.dto.CustomerDto;
import com.grocery.hub.loginregister.dto.LoginDto;
import com.grocery.hub.loginregister.dto.LoginResponse;
import com.grocery.hub.loginregister.entity.Customer;
import com.grocery.hub.loginregister.entity.SubscribeCustomers;
import com.grocery.hub.loginregister.exceptions.CustomerNotFoundException;
import com.grocery.hub.loginregister.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public String saveCustomer(@RequestBody @Valid Customer customer) {
		System.out.println(customer.getCustomerEmail());
		return customerService.saveCustomer(customer);
	}
	
	@PostMapping("/subscribe")
	@ResponseStatus(HttpStatus.CREATED)
	public String subsCustomer(@RequestBody SubscribeCustomers subsCust) {
		return customerService.saveSubscribeCustomers(subsCust);
	}
	
	@ResponseStatus(HttpStatus.OK)
	@GetMapping
	public List<Customer> all() {
		return customerService.getAllCustomers();
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginCustomer(@RequestBody LoginDto loginDto){
		
		LoginResponse loginMessage = customerService.loginCustomer(loginDto);
		return ResponseEntity.ok(loginMessage);
	}
	
	@GetMapping("/{id}")
	public CustomerDto customerById (@PathVariable("id") long customerId) throws CustomerNotFoundException {
		return customerService.getCustomerById(customerId);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCustById(@PathVariable("id") long custId) throws CustomerNotFoundException
	{
		return customerService.disabledCustomerbyId(custId);
	}
}
