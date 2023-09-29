package com.grocery.hub.ordservice.common;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddToCartResponse {
	
	private long customerId;
	private List<CartItems> cartItems;
	private long totalBill;
	private long cartItemsQuantity;
	
}
