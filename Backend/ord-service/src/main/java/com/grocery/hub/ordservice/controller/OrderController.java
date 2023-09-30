package com.grocery.hub.ordservice.controller;

import java.util.List;

import com.grocery.hub.ordservice.common.OrderRequest;
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

@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;

	@PostMapping("/{cust-id}")
	@ResponseStatus(HttpStatus.CREATED)
	public OrderResponse placeOrder(@PathVariable("cust-id") long custId, @RequestBody OrderRequest request) {
		
		return orderService.placeOrderr(request,custId);

	}
	
	@GetMapping
	public List<CustomerOrder> getAllOrders(){
		
		return orderService.getAllOrderDetails();
	}
	
	@GetMapping("/customers/{cust-id}")
	public List<CustomerOrder> getCustOrderById(@PathVariable("cust-id") long custId)
	{
		return orderService.getCustOrderById(custId);
	}
	
	@GetMapping("/{id}")
	public CustomerOrder getOrderById(@PathVariable("id") long orderId)
	{
		return orderService.getOrderById(orderId);
	}
	

	
	
}
