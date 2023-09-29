package com.grocery.hub.ordservice.service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import com.grocery.hub.ordservice.common.OrderResponse;
import com.grocery.hub.ordservice.entity.CustomerOrder;
import com.grocery.hub.ordservice.entity.OrderItems;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.grocery.hub.ordservice.common.Cart;
import com.grocery.hub.ordservice.common.OrdRequest;
import com.grocery.hub.ordservice.common.Customer;
import com.grocery.hub.ordservice.repository.OrderRepository;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class OrderService {
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public OrderResponse placeOrderr(OrdRequest orderRequest, long custId)
	{
		
		List<OrderItems> orderItems = new ArrayList<OrderItems>();
		
//		AddToCartResponse ar = restTemplate.getForObject("http://CART-SERVICE/cart/cartItems/"+custId,AddToCartResponse.class);
		
//		List<CartItems> cartItems = ar.getCartItems();
//		long totalBill = ar.getTotalBill();
//		long quantity = ar.getCartItemsQuantity();
		
		ResponseEntity<Cart[]> ci = restTemplate.getForEntity("http://CART-SERVICE/cart/cartItem/"+custId,Cart[].class);
		Cart[] cc = ci.getBody();
		List<Cart> cartItems = new ArrayList<Cart>();
		for(int i=0;i<cc.length;i++)
		{
			System.out.println(cc[i]);
			cartItems.add(cc[i]);
		}
		
		long totalBill=0;
		

	    for(Cart c: cartItems)
		{
	    	OrderItems oi = new OrderItems();
	    	oi.setProductId(c.getProductId());
	    	oi.setProductName(c.getProductName());
	    	long subtotal = c.getSubTotal()*c.getProductQuantity();
	    	oi.setProductSubTotalPrice(c.getSubTotal());
	    	oi.setProductQuantity(c.getProductQuantity());
	    	totalBill=totalBill+subtotal;
	    	orderItems.add(oi);
		}
	
	    Customer c = getCustomerDetailsById(custId);
		CustomerOrder ord = new CustomerOrder();
		ord.setCustomerId(custId);
		ord.setCustomerName(c.getCustomerName());
		ord.setCustomerEmail(c.getCustomerEmail());
		ord.setCustomerAddress(orderRequest.getCustomerAddress());
		ord.setCustomerContact(orderRequest.getCustomerContact());
		ord.setOrderDate(Instant.now());
		ord.setOrderStatus("Success");
		ord.setTotalAmount(totalBill);
		ord.setOrderItems(orderItems);
		orderRepository.save(ord);
		
		log.info("Order Succesfully placed by customer Id"+custId);		
		
		OrderResponse or = new OrderResponse();
		or.setOrder(ord);
		or.setMessage("Order Placed Succesfully");
		delCartAfterOrderPlaced(custId);
		
		return or;
	}
	
	public CustomerOrder getOrderById(long orderId)
	{
		return orderRepository.findByOrderId(orderId);
	}
	
	public void delCartAfterOrderPlaced(long custId) {
	
		restTemplate.delete("http://CART-SERVICE/cart/del/"+custId);
		
	}
	
	public Customer getCustomerDetailsById(long custId) {
		Customer cust = restTemplate.getForObject("http://CUSTOMER-SERVICE/customer/"+custId,Customer.class);
		return cust;
	}
	
	public List<CustomerOrder> getAllOrderDetails(){
		
		List<CustomerOrder> custOrders = orderRepository.findAll();
		Collections.sort(custOrders, new Comparator<CustomerOrder>() {
	        public int compare(CustomerOrder emp1, CustomerOrder emp2) {
	            return emp2.getOrderDate().compareTo(emp1.getOrderDate());
	        }
	    });
		return custOrders;
	}
	
	
	public List<CustomerOrder> getCustOrderById(long custId)
	{
		List<CustomerOrder> custOrders = orderRepository.findByCustomerId(custId);
		Collections.sort(custOrders, new Comparator<CustomerOrder>() {
		        public int compare(CustomerOrder emp1, CustomerOrder emp2) {
		            return emp2.getOrderDate().compareTo(emp1.getOrderDate());
		        }
		    });
		return custOrders;
	}
	

}