package com.grocery.hub.ordservice.controller;

import java.util.List;

import com.grocery.hub.ordservice.common.OrdRequest;
import com.grocery.hub.ordservice.common.OrderResponse;
import com.grocery.hub.ordservice.entity.CustomerOrder;
import com.grocery.hub.ordservice.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins="*")
@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	

	
	@PostMapping("/placeOrder/{custId}")
	@ResponseStatus(HttpStatus.CREATED)
	public OrderResponse placeOrder(@PathVariable("custId") long custId, @RequestBody OrdRequest request) {
		
		return orderService.placeOrderr(request,custId);

	}
	
	@GetMapping("/getAllOrders")
	public List<CustomerOrder> getAllOrders(){
		
		return orderService.getAllOrderDetails();
	}
	
	@GetMapping("/getAllCustomerOrdersById/{custId}")
	public List<CustomerOrder> getCustOrderById(@PathVariable("custId") long custId)
	{
		return orderService.getCustOrderById(custId);
	}
	
	@GetMapping("/getOrderById/{id}")
	public CustomerOrder getOrderById(@PathVariable("id") long orderId)
	{
		return orderService.getOrderById(orderId);
	}
	

	
	
}
