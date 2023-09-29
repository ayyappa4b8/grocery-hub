package com.grocery.hub.ordservice.common;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	
	private long customerId;
	private String customerName;
	private String customerEmail;
	private String customerPassword;
	
}
