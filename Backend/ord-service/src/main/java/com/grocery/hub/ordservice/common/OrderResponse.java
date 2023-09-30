package com.grocery.hub.ordservice.common;

import com.grocery.hub.ordservice.entity.CustomerOrder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
	
	private CustomerOrder order;
	private String message;
	
}
